---
tipo: Plano
titulo: "Revisão do artigo com o coautor André Vereta-Nahoum: densidade dos casos, literatura (Ergen), trechos em português e infraestrutura de citação (.bib/Zotero)"
status: PARCIAL # rebaixado de ATIVO em 2026-07-22 21:11 no encerramento de sessão — Foster-Thelen/revisão de língua/citações Ambev concluídos e commitados, mas Ergen & Kohl (literatura + diagnóstico da Seção 8) seguem pendentes; não é CONCLUÍDO
criado: "2026-07-14 13:38"
concluido: null
agentes:
  orquestrador: "Claude Sonnet 5 (Claude Code, VS Code)"
  executor: null
  auditor: null
autor_humano: "Tales Mançano"
tarefas:
  - { desc: "Inserir no .qmd os trechos do artigo em português para reescrita (Tales fornece o material)", status: concluida, data: "2026-07-14" }
  - { desc: "Revisar e resolver os marcadores [...]{.mark} de material de caso pendente (citações do processo CADE, falas de Cardoso/executivos, explicação do conceito de eficiência)", status: concluida, data: "2026-07-22" }
  - { desc: "Tales/André cria(m) coleção no Zotero e configura(m) Better BibTeX auto-export apontando para o .bib real (Nahoum-Mancano-2026-Antitrust.bib, na raiz do repo — caminho corrigido em relação à previsão original)", status: concluida, data: "2026-07-15" }
  - { desc: "Adicionar campo bibliography ao YAML do .qmd apontando para o .bib, e registrar o arquivo como arquivo_gerenciado_externamente no CLAUDE.md", status: concluida, data: "2026-07-15" }
  - { desc: "Converter as citações em texto plano para citation keys reais do Quarto (@citekey)", status: concluida, data: "2026-07-22" }
  - { desc: "Ampliar a revisão de literatura da Seção 2 (e possivelmente Discussion) citando Ergen & Kohl (2019, RIPE) e Ergen & Kohl (2022, SER) — textos já extraídos para 9-vers/references/, ainda não lidos integralmente nem incorporados ao .qmd", status: pendente, data: null }
  - { desc: "Incorporar Foster & Thelen (2024, Regulation & Governance) e Foster & Thelen (2025, Comparative Political Studies) — aplicado no .qmd em 2026-07-22 (ver Seção 5): uma frase citando Foster-Thelen2024 na Seção 2, um parágrafo novo citando Foster-Thelen2025 na Discussion; render de validação em HTML confirmou que ambas as citações resolvem e aparecem na lista de referências. Commitado em 18e7856", status: concluida, data: "2026-07-22" }
  - { desc: "Revisão ortográfica/gramatical/de língua do .qmd completo — parte mecânica aplicada em 2026-07-22; os 5 itens substantivos da Seção 6 (frase em português não traduzida, modificador solto, referente perdido, sujeito incoerente, paralelismo confuso) também aplicados em 2026-07-22 a pedido explícito do autor na conversa. Item 6 (marcador [Citação do Processo?]) e item 7 (consistência terminológica opcional) permanecem intocados. Commitado em 18e7856", status: concluida, data: "2026-07-22" }
  - { desc: "Diagnóstico de incorporação de Ergen & Kohl (2019) — discutido e avaliado em 2026-07-22 (ver Seção 8), NÃO aplicado ao .qmd ainda. Sequenciamento recomendado: Contribuições I/II/IV + tensão do @Boucas2018 numa próxima rodada; contraste alemão (III) e método de dicionário ficam para depois. Nota do plano commitada em 4b18fd7, execução no .qmd ainda pendente", status: diagnosticado_nao_executado, data: "2026-07-22" }
relacionados:
  - "9-vers/llm-reviews/2026-07-15_2028_revisao-ripe-literatura-citacoes_conversa-claude.md"
news: []
---

# Plano — Revisão do artigo com o coautor André Vereta-Nahoum

> **Status**: ATIVO
> **O que é este documento**: roteiro para a próxima rodada de trabalho no artigo em `3-texts/Nahoum-Mancano-2026-Antitrust-Article.qmd`, motivada por mensagens do coautor André Vereta-Nahoum repassadas por Tales Mançano em 2026-07-14. Cobre quatro frentes: (1) fusão de trechos em português ainda não fornecidos, (2) resolução dos gaps de material de caso já sinalizados pelos próprios autores no texto (`[...]{.mark}`), (3) aprofundamento da revisão de literatura citando Timur Ergen, e (4) criação da infraestrutura de bibliografia (`.bib` gerenciado externamente via Zotero/Better BibTeX).
> **Elaborado por**: Claude Sonnet 5 (Claude Code, VS Code), a pedido do autor.
> **Por quê**: André avisou que não conseguiu, antes de enviar o material, mesclar os trechos em português nem adensar as seções de caso, e só volta a mexer no artigo em agosto (envio esperado início de setembro). Este plano organiza o que pode ser adiantado agora (infraestrutura de citação, mapeamento dos gaps) e o que depende de material que ainda vai chegar (trechos em PT, fontes reais do processo CADE).
> **Como usar**: as tarefas 1-2 dependem de material que Tales/André ainda vão fornecer — não iniciar a reescrita sem esse insumo. As tarefas 4-5 (infraestrutura do `.bib`) podem ser adiantadas de forma independente. A tarefa 3 (literatura) pode começar já com as duas referências do Ergen abaixo, mas idealmente aguarda uma lista mais completa se André tiver outras sugestões.
> **Atualizado em 2026-07-22 19:01** (Claude Sonnet 5, a pedido de Tales Mançano): a maior parte do plano original (fusão do rascunho em PT, infraestrutura de citação, resolução de marcadores) já está concluída — ver `tarefas` no YAML acima. Esta atualização adiciona duas frentes novas dentro do mesmo escopo de "revisão de literatura com o coautor": incorporação de Foster & Thelen (2024/2025) — Seção 5 — e uma revisão de língua completa do `.qmd` — Seção 6. A Seção 2 (inventário de marcadores) fica marcada como histórica; a Seção 3 (checklist) foi atualizada para refletir o que já foi feito.

---

## 0. Contexto (mensagens do André, 2026-07-08)

> "Achei que ia conseguir encaixar os trechos da versão em português na versão que tenho antes de te enviar e pedir para dar mais densidade ao material dos casos. Precisamos também de mais literatura sobre industrial policy e antitrust. Vale citar o Timur Ergen. [...] Agora só consigo voltar a mexer em agosto. Esperançosamente, mandaríamos no início de setembro."
>
> "Uma coisa que você pode ir fazendo é jogar os trechos do artigo em português neste arquivo, mesmo que seja em português para reescrita."
>
> "Outra coisa é ver os trechos em amarelo, que precisam de atenção (alguma informação ou material dos casos)"

Artigos do Timur Ergen indicados:
- Ergen, Timur & Kohl, Sebastian (2019). "Varieties of Economization in Competition Policy: Institutional Change in German and American Antitrust, 1960–2000." *Review of International Political Economy*, 26(2), 256–286. DOI: 10.1080/09692290.2018.1563557
- Ergen, Timur & Kohl, Sebastian (2022). "Rival views of economic competition." *Socio-Economic Review*, 20(3), 937–965. DOI: 10.1093/ser/mwaa041

---

## 1. Mudanças Propostas

### Conteúdo do artigo (`3-texts/`)

*   **[MODIFY]** `3-texts/Nahoum-Mancano-2026-Antitrust-Article.qmd`
    *   Inserir trechos em português fornecidos por Tales (formato a definir: bloco de comentário Quarto `<!-- PT: ... -->` ao lado do trecho em inglês correspondente, ou seção separada no fim do arquivo — decidir com Tales quando o material chegar).
    *   Resolver os marcadores `[...]{.mark}` listados na Seção 2 abaixo, um a um, conforme material real for chegando (do André ou de pesquisa em processos do CADE).
    *   Expandir a Seção 2 (e possivelmente a Discussion) com a literatura do Ergen & Kohl e outras referências indicadas.
    *   Adicionar `bibliography: Nahoum-Mancano-2026-Antitrust-Article.bib` ao YAML do front matter, e (depois que o .bib existir) converter citações em texto plano para `@citekey`.

### Infraestrutura de citação

*   **[NEW]** `3-texts/Nahoum-Mancano-2026-Antitrust-Article.bib` — **gerenciado externamente pelo Zotero via Better BibTeX auto-export**; agentes de IA nunca editam este arquivo manualmente (só leem para resolver citation keys). Tales configura a coleção no Zotero e aponta o auto-export para este caminho.
*   **[MODIFY]** `CLAUDE.md` § "Configuração de Skills" — preencher `arquivo_gerenciado_externamente` = `3-texts/Nahoum-Mancano-2026-Antitrust-Article.bib` (hoje placeholder).

---

## 2. Inventário dos marcadores `[...]{.mark}` no `.qmd` (estado em 2026-07-14 — **HISTÓRICO, não reflete o estado atual**)

> **Nota de 2026-07-22**: releitura integral do `.qmd` confirma que praticamente todos os marcadores desta tabela já foram resolvidos com fontes reais (citações do processo CADE via `@CADE1995-AC16-1994`, falas de Cardoso/Jobim/executivos incorporadas com citekeys reais, `Mahoney-Thelen2010` formatado). Resta apenas um marcador aberto equivalente, em local diferente: `[Citação do Processo?]` no caso Ambev (Ministério do Desenvolvimento) — ver Seção 6, item 6. Tabela abaixo preservada como registro histórico, não como lista de trabalho corrente.

| Seção | Trecho | O que falta |
|---|---|---|
| 1. Introdução | `"the best industrial policy is to have no industrial policy" [ADD EXACT SOURCE]` | Fonte exata da citação de Pedro Malan |
| 1. Introdução | Parágrafo "In the absence and even explicital denial..." | Revisão analítica do próprio autor (não é uma citação faltando — conferir se o texto final deve manter ou reescrever) |
| 1. Introdução | `(Khan 2017; Juhász, Lane, and Rodrik 2023)` | Conferir formatação/keys de citação |
| 4. Gerdau–Pains | "efficiency gains... increased market concentration" / "(explain efficiency and include article of the law)" | Explicação do conceito jurídico de eficiência + artigo da lei antitruste de 1994 |
| 4. Gerdau–Pains | "(citar parecer no processo)" | Citação do parecer no processo CADE (definição de mercado internacional pelas firmas) |
| 4. Gerdau–Pains | "(citar processo)" ×2 | Citações do processo CADE (concentração doméstica; argumento de mercado global) |
| 4. Gerdau–Pains | `[INSERT QUOTE FROM CARDOSO OR MINISTER]` | Citação direta de Cardoso ou do Ministro da Justiça sobre a intervenção |
| 4. Gerdau–Pains | "(Onto)" | Pouco claro — confirmar com André o que essa nota significa |
| 4. Gerdau–Pains | "fala de FHC — não causem problemas" | Nota informal de bastidor — parece lembrete do autor, não citação a resolver |
| 4. Gerdau–Pains | "(Mahoney & Thelen)" | Formatar como citação real (ano, página) |
| 5. Ambev | `[INSERT QUOTE FROM EXECUTIVES]` ("multinacional verde-e-amarela") | Citação direta de executivos da Ambev/Brahma/Antarctica |
| 5. Ambev | "In fact, the operation was announced with President Cardoso..." | Frase incompleta — completar |
| 5. Ambev | "(citação do processo)" | Citação do processo sobre alinhamento com interesse nacional (Ministério do Desenvolvimento) |
| 5. Ambev | `"the world operates in oligopolies" [ADD SOURCE]` | Fonte exata da citação de Cardoso |

---

## 3. Cronograma de Tarefas (Checklist)

- [x] Tales fornece os trechos em português (formato e localização a combinar)
- [x] Definir e aplicar convenção de como os trechos em PT convivem com o texto em inglês no `.qmd` durante a fase de reescrita
- [x] Resolver, um a um, os marcadores da tabela da Seção 2 conforme material chegou (André/Tales/pesquisa em processos do CADE) — resta só `[Citação do Processo?]` (Ambev), ver Seção 6.6
- [x] Tales/André cria(m) coleção Zotero + configura(m) Better BibTeX auto-export para o `.bib` real
- [x] Adicionar `bibliography:` ao YAML do `.qmd` e preencher `arquivo_gerenciado_externamente` no `CLAUDE.md`
- [x] Converter citações em texto plano para `@citekey` do Quarto
- [x] Redigir e inserir parágrafo/frase na Seção 2 e na Discussion incorporando Foster & Thelen (2024, 2025) — ver Seção 5
- [x] Rodar `quarto render --to html` com bibliografia ativa para validar que as novas citações resolvem — confirmado, `(Foster and Thelen 2024)` e `Foster and Thelen (2025)` aparecem formatadas no texto e na lista de referências; artefatos de build (`.html`, `_files/`) removidos após a checagem
- [x] Aplicar as 5 reescritas substantivas da Seção 6 (itens 1-5) a pedido explícito do autor em 2026-07-22
- [ ] **Tales/André revisam as mudanças no `.qmd` antes do commit** (nada foi commitado — working tree fica como está até aprovação explícita, por instrução do autor)
- [ ] Ler integralmente Ergen & Kohl (2019, 2022) e redigir a incorporação correspondente na Seção 2 (tarefa separada, textos só extraídos até agora, fora do escopo desta rodada)

---

## 5. Incorporação de Foster & Thelen (2024, 2025)

> **Contexto**: durante uma avaliação crítica de prontidão do artigo para a RIPE (2026-07-16), veio à luz que o `.bib` já continha `Foster-Thelen2024` e `Foster-Thelen2025` (ambos de Kathleen Thelen, coautora de `Mahoney-Thelen2010`, o framework central do artigo) sem que nenhum dos dois fosse citado no `.qmd`. Os dois textos foram extraídos integralmente para `9-vers/references/Foster-Thelen-2024-Brandeis-in-Brussels.txt` e `9-vers/references/Foster-Thelen-2025-Coordination-Rights-Competition-Law.txt` e lidos por completo (não só abstract) — ver avaliação na conversa de 2026-07-22. Conclusão da leitura: nenhum dos dois ameaça a novidade do argumento (nenhum usa o vocabulário de "conversão institucional", nenhum discute o Sul Global), mas o framework de 2025 é uma ferramenta analítica genuinamente útil para precisar os casos Gerdau/Ambev.

### 5.1. O que cada texto oferece

- **Foster & Thelen (2024), "Brandeis in Brussels?"**: mecanismo central é a *discrição administrativa/burocrática* como motor de mudança institucional em direito da concorrência (a Comissão Europeia decide e executa direto, sem chancela judicial prévia; nos EUA, o FTC dependeu de tribunais e foi repetidamente bloqueado). Uso proposto: **citação de apoio, uma frase**, não um novo parágrafo — reforça o ponto já feito no artigo sobre a recomposição do CADE (substituição de conselheiros por economistas após o caso Gerdau) como mecanismo de conversão institucional sem mudança legislativa.
- **Foster & Thelen (2025), "Coordination Rights, Competition Law and Varieties of Capitalism"**: framework com duas dimensões — **direitos de coordenação horizontal** (entre firmas não-dominantes) e **direitos de coordenação hierárquica** (poder de firmas dominantes) — gerando 4 tipos ideais (cartelista, oligopolista, cooperativo, arm's-length). Uso proposto: **1-2 parágrafos novos na seção "Discussion"**, recastando a trajetória Gerdau/Ambev como uma concessão deliberada de direitos de coordenação hierárquica a firmas dominantes domésticas — chegando ao mesmo "quadrante oligopolista" que os EUA (Foster & Thelen descrevem isso para o caso americano pós-1980), mas por uma via institucional distinta: intervenção executiva direta e justificativa developmentalista/defensiva (competir com hierarquias corporativas estrangeiras já existentes), não captura ideológica de longo prazo pela Chicago School via tribunais. Isso é uma extensão do framework para um caso (economia emergente/catch-up sob liberalização) que os próprios autores não cobrem — o tipo de "conversa com a literatura" que reviewers de RIPE valorizam.

### 5.2. Pontos de inserção propostos no `.qmd`

1. **Seção "Antitrust and Industrial Policy: Reframing the Relationship"**, no parágrafo que cita `@Dobbin1994; @Prasad2012` (linha ~48, "Historical institutionalist accounts have pointed in this direction..."): adicionar `@Foster-Thelen2024` à lista de exemplos de como a discrição administrativa (não a mudança formal da lei) é o motor reconhecido de conversão institucional em direito da concorrência — uma frase, sem reescrever o parágrafo.
2. **Seção "Discussion: Institutional Conversion and the Reconfiguration of State Intervention"** (linhas 137-143): inserir 1-2 novos parágrafos logo após o parágrafo que já cita `@Mahoney-Thelen2010` implicitamente (linha 139), introduzindo o vocabulário de "coordination rights" de `@Foster-Thelen2025` e posicionando explicitamente os casos Gerdau/Ambev como concessão de direitos de coordenação hierárquica por via developmentalista — distinta, mas paralela em resultado, à via americana de captura ideológica que os próprios Foster & Thelen descrevem. Rascunho de abertura sugerido para o primeiro parágrafo novo (para revisão do André/Tales, não para inserir literalmente sem revisão):

   > *"This trajectory can be further specified using Foster and Thelen's (2025) distinction between horizontal coordination rights (among non-dominant firms) and hierarchical coordination rights (exercised by dominant firms). In these terms, the Brazilian antitrust regime moved from a nominally arm's-length model toward what Foster and Thelen call an oligopolistic competition model — one in which dominant firms are granted wide latitude to consolidate market power. Notably, Brazil arrived at the same structural outcome that Foster and Thelen document for the United States after the 1980s, but through a distinct institutional pathway: not the gradual, court-mediated ideological capture of antitrust doctrine by Chicago School economics, but direct executive intervention justified in developmentalist terms — the perceived need to arm domestic firms against the hierarchical coordination rights already exercised by larger foreign multinationals."*

3. Avaliar se cabe também uma frase na Introdução (linha ~34, onde o artigo já conecta o caso brasileiro aos debates contemporâneos de antitruste nos EUA/UE) citando `@Foster-Thelen2025` como o framework comparativo mais recente sobre essa mesma tensão hierárquica — decisão do André/Tales, pode ser redundante com o ponto 2.

### 5.3. Pendências antes de executar

- Confirmar com André se o vocabulário de "coordination rights" deve ser adotado como camada analítica adicional (ao lado de "conversão institucional") ou só citado como paralelo comparativo — a leitura integral mostrou que são frameworks complementares, não substitutos, e a escolha afeta quanto texto novo é necessário.
- Ergen & Kohl (2019/2022) seguem pendentes de leitura integral (só extraídos) — tarefa separada, mesma seção de literatura, mas fora do escopo desta rodada até serem lidos.

---

## 6. Revisão de Língua do `.qmd` (2026-07-22)

Releitura integral do artigo em 2026-07-22 encontrou o texto em estado bem mais avançado do que na versão de 2026-07-14 (marcadores `[...]{.mark}` majoritariamente resolvidos, citações reais do processo CADE incorporadas, seções sem numeração manual). Também encontrou trechos comentados (`<!-- ... -->`) que parecem cortes deliberados de conteúdo para controle de word count — não tratados como erro, apenas registrados aqui para conhecimento.

**Já corrigido nesta rodada** (mecânico, baixo risco, aplicado direto):
- "explicital denial" → "explicit denial" (Introdução)
- "administrative rulings by Administrative Council" → "by the Administrative Council" (artigo faltando)
- "the CADE was strengthened" → "CADE was strengthened" (consistência — resto do texto não usa artigo antes de CADE)
- "market definition---create" → "market definition — create" (travessão triplo isolado, inconsistente com o resto do texto que usa "—")
- "advanced by the firms.CADE's technical analysis" → "advanced by the firms. CADE's technical analysis" (espaço faltando entre frases)

**Pendente de decisão do autor/coautor** (mudam frase/estrutura, não são só typo — não aplicados sem confirmação):
1. **Frase em português não traduzida**, seção Gerdau-Pains: *"Efficiency, in this context, significa que a empresa poderia ter 'sinergias', ou seja, pelos ganhos de centralização logística e de produção ela poderia reduzir os custos de produção o produto no mercado mais barato e/ou aumentar suas margens."* — nota de trabalho do autor ainda em português (a frase em português também tem uma lacuna gramatical: "reduzir os custos de produção o produto" parece faltar uma palavra, ex. "e vender o produto"). Proposta de tradução para revisão: *"Efficiency, in this context, meant that the firm could achieve 'synergies' — that is, through gains from logistical and productive centralization, it could reduce production costs, sell more cheaply in the market, and/or increase its margins."*
2. **Modificador solto**, caso Gerdau: *"As chairman Jorge Gerdau Johannpeter put it, CADE was 'yet another chapter in the delay of Brazil's economic opening,' [@Seidl1996] arguing that antitrust law was anachronistic..."* — gramaticalmente, "arguing" fica pendurado em "CADE" (sujeito mais próximo), mas quem argumenta é o próprio Johannpeter. Sugestão: fechar a citação com ponto-e-vírgula e reiniciar com "he argued that...".
3. **Referente perdido**, mesmo parágrafo: "...the note added that the sector was open to international competition..." — "the note" aparece sem ter sido introduzida (a versão anterior do texto tinha "in an official note" antes desse trecho; foi cortada na edição, deixando a referência solta). Precisa reintroduzir "in an official statement" (ou similar) antes, ou remover "the note added".
4. **Sujeito incoerente**, caso Ambev: *"The operation was announced by its proponents as essential for the creation of a 'green-and-yellow multinational'... and warned that failure to achieve sufficient scale would result in..."* — sujeito gramatical de "warned" é "the operation" (por causa da voz passiva anterior), mas uma operação não pode "avisar". Sugestão: "...global industry leaders; its proponents warned that failure to achieve..."
5. **Parênteses/paralelismo confuso**, caso Gerdau: "...approved the acquisition with conditions, including divestments and commitments regarding supply and designed to mitigate anti-competitive effects." — "and designed to mitigate" flutua sem sujeito claro. Sugestão: "...with conditions — including divestments and supply-related commitments — designed to mitigate anti-competitive effects."
6. ~~**Marcador ainda aberto**: `[Citação do Processo?]` no caso Ambev, parágrafo do Ministério do Desenvolvimento~~ — **resolvido em 2026-07-22**, a pedido explícito de Tales, buscando diretamente nos autos originais (`file/cade-proceedings/ambev-antarctica-brahma-1999_AC-08012.005846-1999-12/vol-17.pdf`, gitignored mas disponível localmente; extraído para busca via `pdftotext -layout` em scratchpad, não commitado ao repo). Achado: parecer da Procuradoria do CADE (itens 619-624, pp. 160-161) registra que o CADE consultou o Ministério do Desenvolvimento sobre a relevância da fusão para a economia nacional, e que o Secretário de Política Industrial, Hélio Mattar, devolveu opinativo afirmando que sim — em sentido "diametralmente oposto" ao da própria Procuradoria, que mantinha que a operação não atendia a esse critério e notava que o parecer do ministério "não é, nem poderia ser, vinculativo". Frase reescrita no `.qmd` com esse detalhe (mais preciso e mais rico que a alegação genérica anterior — mostra tensão dentro do próprio Estado). **Atualização 2026-07-22 (mesmo dia, rodada seguinte)**: Tales pediu entradas BibTeX para essa citação e para a do Kaiser (Vol. 2, p. 49, que já existia em texto plano antes desta rodada) — geradas seguindo o template da entrada `CADE1995-AC16-1994` já existente, com data do parecer da Procuradoria confirmada pelo próprio texto ("recebido... dia 22 de março", logo `date = {2000-03-22}`) e data da Impugnação da Kaiser inferida como `1999-07` (não há data de assinatura visível no OCR da p. 49, só referências a notícias de 13-16/07/1999 — vale confirmar no PDF físico). Tales importou no Zotero; Better BibTeX gerou exatamente os citekeys sugeridos (`CADE1999-Kaiser-Impugnacao`, `CADE2000-Procuradoria-Parecer`). Ambas as citações parentéticas do `.qmd` foram trocadas para `[@citekey]` e o render em HTML confirmou que resolvem corretamente. Nota lateral: uma terceira entrada nova apareceu no `.bib` na mesma reexportação, `CADE1995-AC16-1994-decisao` (decisão do Plenário de 29/03/1995 sobre a Pains) — não criada por mim, não usada ainda no `.qmd`; possivelmente relevante para uma citação futura no caso Gerdau, mas fora do escopo desta tarefa.
7. **Consistência terminológica (menor, opcional)**: o artigo alterna "1994 competition law" e "1994 antitrust law" para se referir à mesma lei — considerar padronizar em um termo só, se os autores concordarem que não há distinção proposital.

---

## 8. Diagnóstico de incorporação de Ergen & Kohl (2019) — pendente de decisão, nada aplicado ao `.qmd`

> **Status**: discussão feita e avaliada em 2026-07-22, **não executada**. Fica registrada aqui para o próximo agente/sessão não precisar reconstruir o raciocínio. Diferente das Seções 5 e 6 (já aplicadas), esta é só diagnóstico + plano de ataque.

### 8.1. O que Ergen & Kohl (2019) argumentam
Publicado na própria RIPE. Explicam a "divergência atlântica" no antitruste (EUA afrouxa desde os anos 1970; Alemanha endurece e resiste) rejeitando as três explicações dominantes (poder empresarial, *varieties of capitalism*, sistemas jurídicos) em favor de disputas ideacionais dentro das burocracias regulatórias — **economização**: a reorientação do regime de finalidades societais amplas para objetivos puramente econômicos, mas em duas formas opostas: **effect-based** (EUA, Chicago — bem-estar do consumidor/eficiência podem justificar menos concorrência) vs. **form-based** (Alemanha, ordoliberal — "liberdade de concorrer" como fim em si, regra estrutural). O mecanismo de mudança é substituição de pessoal ("personnel replacement") dentro do órgão regulador por uma nova geração formada em outra corrente — sem grande reforma legislativa. Citam explicitamente Mahoney & Thelen (2010) e Hacker/Pierson/Thelen (2015): instituições ambíguas ("very low degree of institutional precision") são "terreno fértil para estratégias de conversão" — a mesma vocabulário-mãe que este artigo já usa. Caso lateral relevante: Alemanha, Daimler-MBB/Airbus (1989) — o Bundeskartellamt vetou a fusão por razões concorrenciais, mas o Ministério da Economia revogou o veto por razões de política industrial (Immenga renunciou à Monopolkommission em protesto).

### 8.2. Correção factual importante em relação à discussão original
Ao contrário do que constava no diagnóstico original (que dizia "nenhum destes está no `.bib`: Ergen & Kohl 2019, Ergen & Kohl 2022..."), **`Ergen-Kohl2019` e `Ergen-Kohl2022` já existem no `.bib`** com metadados completos (DOI, caminho Zotero) — alguém (Tales ou André) já importou os dois antes desta conversa. Só faltam ser **citados no `.qmd`**, não importados — não é preciso repetir o fluxo de geração de BibTeX/Zotero que foi necessário para Foster-Thelen. Genuinamente ausentes do `.bib` (confirmado, zero ocorrências cada): `Christophers2016`, `Galambos2004`, `Hacker-Pierson-Thelen2015`, `Streeck-Thelen2005`, `Culpepper2011`, `Eisner1991` — esses sim precisariam do fluxo de importação via Zotero se forem usados.

Também não foi possível confirmar a alegação de que `@Khan2016`, `@Khan-Vaheesan2017` e `@Juhasz-etal2024` (citados hoje em `qmd:46`) "não sustentam a frase" onde aparecem — conferidos os três registros no `.bib`, o encaixe temático parece bom (`Juhasz-etal2024` é literalmente um survey do ressurgimento da política industrial; `Khan-Vaheesan2017` é sobre a mesma "contrarrevolução antitruste" effect-based que Ergen & Kohl descrevem). Recomendação: **somar** Ergen & Kohl a essas três citações, não substituir, a menos que apareça evidência textual específica do contrário.

### 8.3. As quatro contribuições propostas no diagnóstico, e avaliação de cada uma
- **I. "Brasil como terceira variedade de economização"** — recastear o achado do artigo usando a tipologia effect-based/form-based de E&K: CADE pré-1996 (caso Gerdau, limiar de 20% da Lei 8.884/94, remédio de desconstituição) é form-based; CADE pós-1996 (recomposição por Cardoso, caso Ambev, defesa de eficiência, mercado relevante global, remédio comportamental) é effect-based — já narrado em `qmd:102` sem esse nome. A virada teórica forte: o mesmo ferramental effect-based que nos EUA serviu para *tirar o Estado do caminho* (Posner via desconcentração como "public control" indesejado) foi mobilizado no Brasil *pelo próprio Estado* para engenheirar campeões nacionais — inversão da economia política, mesmo instrumental. **Avaliação: a ideia mais valiosa do diagnóstico — resolve a lacuna de diferenciação de Christophers (2016) já apontada na avaliação de prontidão para a RIPE de 2026-07-16.**
- **II. Nomear o mecanismo de "personnel replacement"** na recomposição do CADE por Cardoso (troca de juristas por economistas de custos de transação, já conectável a `@Williamson1975` já citado em `qmd:44`) — com evidência documental (data, nomes, a frase "Não me causem problemas!") mais forte do que E&K têm para qualquer um dos dois casos deles. **Avaliação: baixo risco, alto valor, fazer.**
- **III. Contraste com a Alemanha (Daimler-MBB/Ministererlaubnis) + tese "clandestinidade é a condição da conversão"** — elegante, mas três ressalvas antes de escrever: (a) o termo "Ministererlaubnis" não foi confirmado no texto de E&K lido — se usado, precisa de citação própria (conhecimento de direito alemão, não de E&K); (b) é uma tese causal forte apoiada em N=1 caso-sombra de segunda mão — deveria aparecer como proposição interpretativa, não achado demonstrado; (c) falta explicar por que a negação era necessária no Brasil e não na Alemanha de 1989 — plausivelmente a política de credibilidade da liberalização brasileira (o próprio Malan já citado no artigo), não uma escolha institucional não-explicada. **Avaliação: valioso mas precisa de mais uma passada antes de redigir — deixar para depois de I/II/IV.**
- **IV. Canal ruidoso (captura executiva de alta saliência) como variante do mecanismo de E&K (deriva ideacional silenciosa de baixa saliência), não contradição** — mais a proposição de sequenciamento: Gerdau é o momento ruidoso que instala os economistas; Ambev já é a operação rotineira desses mesmos economistas (conecta com `qmd:128`, "no longer a source of acute conflict but had become part of the routine operation"). Também resolve a objeção de E&K sobre empresariado heterogêneo usando material já existente no artigo (as 3 campanhas da Kaiser contra a Ambev). **Avaliação: baixo risco, bem argumentado, fazer junto com II.**

### 8.4. "Três disciplinas" do diagnóstico
1. **Tensão do `@Boucas2018`** (comentado em `qmd:130`: CADE mudou suas regras nos anos 2000 de forma que uma fusão daquele market share não seria mais aprovada hoje) — ataca a durabilidade da "conversão" que o artigo reivindica. Está escondida num bloco `<!-- -->`, invisível ao leitor mas não a um parecerista que for aos autos. **Avaliação: urgente, independente do resto — precisa ser enfrentada (a conversão foi episódica? parcialmente revertida? janela 1995-2000 foi conjuntura específica?), não deixada comentada.**
2. **Replicar o método de dicionário de E&K** (codificar votos/relatórios do CADE 1994-2005: mercado relevante nacional vs. internacional, frequência de defesa de eficiência aceita, razão remédio estrutural/comportamental) — **categoria de esforço muito maior que tudo o resto aqui: é um mini-estudo empírico novo, não um parágrafo. Decisão separada, não faz parte desta rodada.**
3. **Tratar a Alemanha como caso-sombra assimétrico** (extraído de literatura secundária, não comparação pareada com o mesmo nível de evidência dos casos brasileiros) — mesmo ponto da ressalva (b) do item III acima.

### 8.5. Pontos de inserção propostos no `.qmd` (para quando for executar)
A. Seção 2, junto a `@Dobbin1994; @Prasad2012; @Foster-Thelen2024` (qmd:48) e no parágrafo de `qmd:46` — parágrafo novo introduzindo a tipologia economização (effect-based/form-based) e preparando "Brasil como terceira variedade" (Contribuição I).
B. Introdução, parágrafo da conversão institucional (qmd:26) — ancorar em `@Ergen-Kohl2019`/Hacker-Pierson-Thelen: antitruste como instituição de baixa precisão, terreno fértil para conversão.
C. `qmd:98-102` (recomposição do CADE) — nomear o mecanismo de personnel replacement (Contribuição II).
D. Seção Discussion (`qmd:139-143`) — canal ruidoso vs. silencioso e a proposição de sequenciamento Gerdau/Ambev (Contribuição IV); o contraste alemão (Contribuição III), só na segunda rodada.
E. Conclusion (`qmd:151`) — reformular a implicação como contribuição ao programa de "varieties of economization", não genericamente "ir além de dicotomias".

### 8.6. Sequenciamento recomendado
Duas rodadas: (1) Contribuições I, II e IV + enfrentar a tensão do `@Boucas2018` — baixo risco, material já disponível, resolve lacunas já identificadas na avaliação de prontidão para a RIPE; (2) Contraste alemão (III) e método de dicionário (disciplina 2) — depois de mais verificação e de decisão editorial com o André, não nesta rodada.

## 9. Plano de Validação e Verificação

### Verificação Manual
- Conferir que nenhum marcador `[...]{.mark}` restante no `.qmd` foi resolvido com conteúdo inventado — cada resolução deve ter fonte real (processo CADE, declaração pública, artigo de lei).
- Após adicionar `bibliography:`, rodar `quarto render 3-texts/Nahoum-Mancano-2026-Antitrust-Article.qmd --to html` e conferir visualmente que as citações aparecem formatadas e a lista de referências é gerada sem erros de key não encontrada.
- Rodar `Rscript tools/validate-governance.R` antes de qualquer commit que toque `3-texts/` ou o `.bib`, conforme Regra 1 do `CLAUDE.md`.
