// Zotero Run JavaScript script — monta automaticamente a coleção com todas as
// referências citadas no artigo, a partir dos arquivos-fonte no disco.
//
// COMO USAR:
//   1. Abra o Zotero.
//   2. Tools → Developer → Run JavaScript (se o menu Developer não aparecer,
//      ative em Edit/Zotero → Settings → Advanced → "Show Debug Output" ou
//      similar; em versões recentes o item já vem habilitado por padrão).
//   3. Cole o conteúdo deste arquivo inteiro na caixa de código e rode
//      (Ctrl-R / botão Run).
//   4. O resultado (relatório de faltantes/ambíguas) aparece na área de saída
//      do próprio Run JavaScript e também no log de debug do Zotero.
//
// O QUE O SCRIPT FAZ:
//   - Lê os dois arquivos-fonte do artigo diretamente do disco.
//   - Extrai três tipos de citação: citekeys `@Autor2020` do .qmd, citações
//     parentéticas "(Autor, Ano)" no corpo dos dois arquivos, e as entradas
//     formatadas da seção "### Referências" do rascunho em português.
//   - Para cada citação única, busca no Zotero por sobrenome+ano (e título,
//     quando disponível) usando o mesmo mecanismo da busca rápida da UI.
//   - Cria (ou reaproveita, se já existir) a coleção Nahoum-Mancano-2026-Antitrust,
//     limpa seu conteúdo atual e a repopula do zero com os itens encontrados
//     nesta execução (rodar de novo é seguro e não empilha itens antigos).
//   - Relata: citações sem nenhum item encontrado (adicionar ao Zotero antes)
//     e citações com mais de um candidato (todos foram adicionados — revisar
//     e remover manualmente os errados).
//
// LIMITAÇÕES CONHECIDAS (ver 9-vers/plan/ para o plano completo desta tarefa):
//   - Não foi possível testar este script contra uma biblioteca Zotero real
//     antes da entrega — rode e reporte qualquer erro para ajustarmos juntos.
//   - A extração de citações parentéticas por regex pode gerar alguns "falsos
//     positivos" de ruído (ex. citações de processo/voto tipo "(CADE AC
//     08012.005846 1999-12 Vol 2, p. 49)" podem aparecer na lista de
//     faltantes mesmo não sendo referências bibliográficas de verdade — pode
//     ignorar essas linhas no relatório).
//   - Discrepâncias de ano já conhecidas entre os dois arquivos (Onto
//     2016/2017, White 2008/2010, Mahoney & Thelen 2009/2010, Khan 2016/2017,
//     Bork 1974/1978, Berk 1994/2009, Carvalho 2012/2013) são tratadas
//     buscando por ambos os anos candidatos.

const FILES = [
  "C:\\Users\\Mancano\\Documents\\MancanoSync\\Nahoum-Mancano-2026-Antitrust\\3-texts\\Nahoum-Mancano-2026-Antitrust-Article.qmd",
  "C:\\Users\\Mancano\\Documents\\MancanoSync\\Nahoum-Mancano-2026-Antitrust\\2026 Antitrust as industrial policy - Nahoum & Mançano.md",
];
const COLLECTION_NAME = "Nahoum-Mancano-2026-Antitrust";

// Divergências de ano já detectadas entre os arquivos. Chave = combinação COMPLETA
// e ordenada dos sobrenomes normalizados da citação (não só o primeiro autor),
// para não vazar o ano alternativo de "Mahoney & Thelen" para citações que
// mencionam só "Thelen" sozinho (ex. Thelen 2025, um livro diferente).
const KNOWN_ALT_YEARS = {
  onto: [2017, 2016],
  white: [2008, 2010],
  "mahoney+thelen": [2010, 2009],
  khan: [2017, 2016],
  bork: [1978, 1974],
  berk: [1994, 2009],
  carvalho: [2012, 2013],
};

function norm(s) {
  return s
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .toLowerCase()
    .trim();
}

// Tokens que são só iniciais (ex. "C. A", "M.") não ajudam a buscar e só
// geram ruído/falsos positivos — filtrados antes de qualquer busca.
function isInitialsLike(token) {
  return /^([A-ZÀ-Ý]\.?\s*)+$/.test(token.trim());
}

// ---- 1. Ler os arquivos-fonte ----
const texts = [];
for (const path of FILES) {
  try {
    texts.push(await Zotero.File.getContentsAsync(path));
  } catch (e) {
    texts.push("");
    Zotero.debug(`[cite-collector] Falha ao ler ${path}: ${e}`);
  }
}
const [enText, ptText] = texts;

// ---- 2. Extrair citações ----
const entries = new Map(); // "sobrenome|ano" -> { label, surnames, years:Set, title? }

function addEntry(label, surnamesRaw, year, title) {
  const surnames = surnamesRaw.filter((s) => !isInitialsLike(s));
  if (!surnames.length || !year) return;
  const key = norm(surnames[0]) + "|" + year;
  let entry = entries.get(key);
  if (!entry) {
    entry = { label, surnames, years: new Set([year]), title };
    entries.set(key, entry);
  } else {
    entry.years.add(year);
    if (title && !entry.title) entry.title = title;
  }
  const comboKey = surnames.map(norm).sort().join("+");
  const alt = KNOWN_ALT_YEARS[comboKey];
  if (alt) alt.forEach((y) => entry.years.add(y));
}

// 2a. Citekeys `@Autor2020` (Quarto/pandoc) no .qmd
{
  const keyRe = /@([A-Z][A-Za-z-]+?)(\d{4})[a-z]?\b/g;
  let m;
  while ((m = keyRe.exec(enText))) {
    const [, namePart, year] = m;
    const surnames = namePart
      .replace(/EtAl$/i, "")
      .split(/-|(?=[A-Z])/)
      .filter(Boolean);
    addEntry(`@${namePart}${year}`, surnames, parseInt(year, 10));
  }
}

// 2b. Citações parentéticas "(Autor, Ano)" no corpo dos dois arquivos — inclui
// parênteses com múltiplas citações separadas por ";" (ex. "(Corrêa, 2013; Cunha, 2018)")
{
  const parenBlockRe = /\(([^()]{3,300})\)/g;
  const oneCiteRe = /^\s*([A-ZÀ-Ý][^,]{1,80}?),?\s((?:19|20)\d{2})[a-z]?/;
  for (const text of [enText, ptText]) {
    let m;
    while ((m = parenBlockRe.exec(text))) {
      for (const piece of m[1].split(";")) {
        const mm = oneCiteRe.exec(piece);
        if (!mm) continue;
        const [, rawNames, year] = mm;
        const cleanNames = rawNames.replace(/\bet al\.?\b/gi, "").trim();
        const surnames = cleanNames
          .split(/,|&|\se\s|\sand\s/)
          .map((s) => s.trim())
          .filter((s) => s.length > 1 && /[A-Za-zÀ-ÿ]/.test(s));
        addEntry(`(${cleanNames}, ${year})`, surnames, parseInt(year, 10));
      }
    }
  }
}

// 2c. Entradas formatadas da seção "### Referências" do rascunho em português
{
  const refListRe = /^([A-ZÀ-Ý][^\n(]{1,80}?)\.\s*\((\d{4})[a-z]?[^)]*\)\.\s*([^.\n]{3,140})/gm;
  let m;
  while ((m = refListRe.exec(ptText))) {
    const [, rawAuthor, year, title] = m;
    const surnames = rawAuthor
      .split(/,|&|\se\s/)
      .map((s) => s.trim())
      .filter((s) => s.length > 1 && /[A-Za-zÀ-ÿ]/.test(s));
    addEntry(`${rawAuthor.trim()} (${year})`, surnames, parseInt(year, 10), title.trim());
  }
}

Zotero.debug(`[cite-collector] ${entries.size} citações únicas extraídas de ${FILES.length} arquivo(s)`);

// ---- 3. Buscar cada citação no Zotero ----
const libraryID = Zotero.Libraries.userLibraryID;
const matchedItemIDs = new Set();
const missing = [];
const ambiguous = [];

// Condições múltiplas no mesmo Zotero.Search são combinadas com AND por padrão,
// então "creator contém X" + "date contém Y" exige as duas coisas no mesmo item
// — muito mais preciso que uma única string de busca livre "X Y" (que trata as
// palavras de forma solta e explode em falsos positivos numa biblioteca cheia
// de itens brasileiros dos mesmos anos 1990).
async function structuredSearch({ surname, year, title }) {
  const s = new Zotero.Search();
  s.libraryID = libraryID;
  if (surname) s.addCondition("creator", "contains", surname);
  if (year) s.addCondition("date", "contains", String(year));
  if (title) s.addCondition("title", "contains", title);
  try {
    return await s.search();
  } catch (e) {
    Zotero.debug(`[cite-collector] busca falhou para ${JSON.stringify({ surname, year, title })}: ${e}`);
    return [];
  }
}

for (const entry of entries.values()) {
  const foundIDs = new Set();
  for (const surname of entry.surnames) {
    for (const year of entry.years) {
      (await structuredSearch({ surname, year })).forEach((id) => foundIDs.add(id));
    }
  }
  if (entry.title) {
    (await structuredSearch({ title: entry.title.slice(0, 60) })).forEach((id) => foundIDs.add(id));
  }

  if (foundIDs.size === 0) {
    missing.push(entry.label);
  } else {
    if (foundIDs.size > 1) ambiguous.push(`${entry.label} (${foundIDs.size} candidatos)`);
    foundIDs.forEach((id) => matchedItemIDs.add(id));
  }
}

// ---- 4. Coleção (reaproveita se já existir) ----
let collection = Zotero.Collections.getByLibrary(libraryID).find((c) => c.name === COLLECTION_NAME);
if (!collection) {
  collection = new Zotero.Collection();
  collection.libraryID = libraryID;
  collection.name = COLLECTION_NAME;
  await collection.saveTx();
}

// ---- 5. Limpar a coleção antes de repopular ----
// Torna o script idempotente: cada execução reflete o resultado da lógica de
// matching ATUAL, sem empilhar itens de execuções anteriores (importante ao
// iterar/corrigir a busca). Isso só remove os itens DA PASTA — não apaga nada
// da biblioteca do Zotero.
{
  const existingIDs = collection.getChildItems(true) || [];
  if (existingIDs.length) {
    await Zotero.DB.executeTransaction(async function () {
      for (const id of existingIDs) collection.removeItem(id);
      await collection.save();
    });
  }
}

// ---- 6. Adicionar itens encontrados ----
if (matchedItemIDs.size) {
  await Zotero.DB.executeTransaction(async function () {
    for (const id of matchedItemIDs) {
      collection.addItem(id);
    }
    await collection.save();
  });
}

// ---- 7. Relatório ----
let report = `Coleção "${COLLECTION_NAME}": ${matchedItemIDs.size} itens adicionados/confirmados.\n\n`;
report += `FALTANTES (${missing.length}) — não encontrados no Zotero, adicione à biblioteca antes:\n`;
report += missing.length ? missing.map((l) => `  - ${l}`).join("\n") : "  (nenhuma)";
report += `\n\nAMBÍGUAS (${ambiguous.length}) — múltiplos candidatos, todos adicionados à pasta, revise e remova os errados:\n`;
report += ambiguous.length ? ambiguous.map((l) => `  - ${l}`).join("\n") : "  (nenhuma)";

Zotero.debug(report);
return report;
