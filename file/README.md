# file/ — Fontes Primárias e Material de Apoio (gitignorado, exceto este README)

Esta pasta guarda o material bruto do projeto: processos do CADE, histórico
legislativo, entrevistas, literatura de referência, apresentações e rascunhos
antigos do artigo. Só este README é versionado no git — todo o resto (~970MB)
fica fora do controle de versão (ver `.gitignore`: `/file/*` + `!/file/README.md`).

Reorganizada em 2026-07-15 a partir de uma pasta plana sem estrutura; ver
`9-vers/plan/2026-07-15_Plano_Organizar_Pasta_File.md` para o histórico completo
da reorganização (mapeamento arquivo-por-arquivo, decisões de design).

## Estrutura

- `cade-proceedings/` — autos e votos dos 3 casos analisados/citados no artigo:
  - `ambev-antarctica-brahma-1999_AC-08012.005846-1999-12/` — caso central do artigo (Seção 5, Ambev). Volumes 1–31 (numerados `vol-NN.pdf`; **vol-07 está ausente do arquivo original**, não é erro de renomeação), mais os 2 volumes "via CADE" e um anexo com número de processo diferente (`annex_...VERIFY`, ver Pendências). Tem uma subpasta `text-extracts/` (2026-07-22) com OCR em texto plano dos 30 volumes principais, para permitir busca via `grep` em vez de abrir cada PDF — ver o README dela para limitações (encoding, paginação) e para as citações já localizadas.
  - `gerdau-pains-laisa-1995_AC-0016-1994/` — caso central do artigo (Seção 4, Gerdau-Pains). Volumes 1–4, mais os votos (`votes_AC-0016-1994.pdf`, citado no `.qmd` como "Votos AC 16-1994, p. 947–949") e o parecer da economista Elizabeth Farina (`expert-opinion_elizabeth-farina.pdf`).
  - `brahma-miller-1995_AC-0058-1995_VERIFY/` — caso de contexto (Seção 5) — **[VERIFY]**: confirmar com o autor que "AC 58-1995" corresponde mesmo a este caso antes de considerar o nome definitivo.
- `legislative-history/` — histórico legislativo da Lei 8.884/94 (Lei CADE): exposições de motivos, Diário/Anais do Congresso Nacional (1993–1994).
- `interviews/` — entrevistas com Pedro Malan (Ministro da Fazenda) citadas/relevantes ao artigo.
- `reference-literature/` — literatura secundária de apoio: Guia Prático do CADE (CIEE), Revista do Ibrac v.7 n.6 (2000), e um artigo sobre regulação bancária cuja relevância para este projeto ainda não foi confirmada (**[VERIFY]**).
- `presentations/` — apresentações produzidas pelos autores sobre o tema deste artigo. Material reaproveitável para a Flash Talk FAPESP/ESCA de 05/08/2026 (ver `TODO.md`).
- `article-drafts-superseded/` — cópias antigas do texto do artigo, já incorporadas ao `.qmd` de autoria primária em `3-texts/`; mantidas apenas como histórico, não editar nem usar como fonte para novas edições.
- `IC Empresas Internacionalizadas/` — pasta inteira (318 arquivos, ~431MB) de outro projeto de pesquisa de Tales (IC/BEPE FAPESP sobre atitudes empresariais frente à internacionalização), baixada do Google Drive em 2026-07-15 e incorporada aqui sem renomear/reorganizar internamente — mantém a estrutura e os nomes originais do Drive (`1. Formulação do Projeto...`, `2. Documentos de IC FAPESP 2022`, `3. Execução da Pesquisa e Relatório`, `4. Pós-projeto [Krisis + Artigo]`). Contém documentos administrativos/pessoais e projetos de outros orientandos sem relação direta com este artigo, mas é o projeto do qual este artigo se originou (ver o relatório final em `9-vers/previous-versions/`). Um arquivo teve o nome truncado na extração por exceder o limite de 255 caracteres por componente do NTFS.

## Pendências (itens `[VERIFY]` no nome do arquivo)

1. **Volume 7 ausente** do dossiê Ambev (a sequência salta de `vol-06.pdf` para `vol-08.pdf`) — pode ser lacuna real do material obtido do CADE, ou o volume existir com outro nome/local.
2. **`annex_PA-08012.004363-2000-89_...`** (dentro do dossiê Ambev) — número de processo diferente do resto do dossiê (`08012.005846/1999-12`). Pode ser processo relacionado (acompanhamento/execução) ou ter sido arquivado ali por engano.
3. **`brahma-miller-1995_AC-0058-1995_VERIFY/`** e o arquivo `vote_AC-0058-1995_VERIFY.pdf` — correspondência entre "AC 58-1995" e o caso Brahma-Miller é o palpite mais plausível, mas não confirmada em nenhuma fonte já lida.
4. **Datas ausentes** em `diario-congresso-nacional_exposicao-motivos-lei-cade-1994_VERIFY-data.pdf`, `pedro-malan_psdb_nunca-fui-liberal-ou-neoliberal_VERIFY-data.pdf`, e nos dois `.pptx` de `presentations/` — não recuperáveis do nome de arquivo original, não inventadas.
5. **Relevância de `perfil-reguladores-internacionalizacao-bancaria_1995-2014_VERIFY-relevancia.pdf`** — trata de regulação bancária, não de concentração industrial/antitruste; confirmar com o autor se pertence mesmo a este projeto.

Ver `9-vers/plan/2026-07-15_Plano_Organizar_Pasta_File.md` para o mapeamento completo (nome antigo → novo) de cada um dos 54 arquivos de conteúdo movidos.
