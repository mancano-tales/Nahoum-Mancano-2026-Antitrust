---
tipo: Plano
titulo: "Revisão do artigo com o coautor André Vereta-Nahoum: densidade dos casos, literatura (Ergen), trechos em português e infraestrutura de citação (.bib/Zotero)"
status: ATIVO
criado: "2026-07-14 13:38"
concluido: null
agentes:
  orquestrador: "Claude Sonnet 5 (Claude Code, VS Code)"
  executor: null
  auditor: null
autor_humano: "Tales Mançano"
tarefas:
  - { desc: "Inserir no .qmd os trechos do artigo em português para reescrita (Tales fornece o material)", status: pendente, data: null }
  - { desc: "Revisar e resolver os marcadores [...]{.mark} de material de caso pendente (citações do processo CADE, falas de Cardoso/executivos, explicação do conceito de eficiência)", status: pendente, data: null }
  - { desc: "Ampliar a revisão de literatura da Seção 2 (e possivelmente Discussion) citando Ergen & Kohl (2019, RIPE) e Ergen & Kohl (2022, SER), além de outra literatura relevante sobre antitrust e industrial policy", status: pendente, data: null }
  - { desc: "Tales cria coleção no Zotero para este paper e configura Better BibTeX auto-export apontando para 3-texts/Nahoum-Mancano-2026-Antitrust-Article.bib", status: pendente, data: null }
  - { desc: "Adicionar campo bibliography ao YAML do .qmd apontando para o .bib, e registrar o arquivo como arquivo_gerenciado_externamente no CLAUDE.md", status: pendente, data: null }
  - { desc: "Converter as citações em texto plano (ex. '(Berk 1994)') para citation keys reais do Quarto (@berk1994) assim que o .bib existir e os keys forem conhecidos", status: pendente, data: null }
relacionados: []
news: []
---

# Plano — Revisão do artigo com o coautor André Vereta-Nahoum

> **Status**: ATIVO
> **O que é este documento**: roteiro para a próxima rodada de trabalho no artigo em `3-texts/Nahoum-Mancano-2026-Antitrust-Article.qmd`, motivada por mensagens do coautor André Vereta-Nahoum repassadas por Tales Mançano em 2026-07-14. Cobre quatro frentes: (1) fusão de trechos em português ainda não fornecidos, (2) resolução dos gaps de material de caso já sinalizados pelos próprios autores no texto (`[...]{.mark}`), (3) aprofundamento da revisão de literatura citando Timur Ergen, e (4) criação da infraestrutura de bibliografia (`.bib` gerenciado externamente via Zotero/Better BibTeX).
> **Elaborado por**: Claude Sonnet 5 (Claude Code, VS Code), a pedido do autor.
> **Por quê**: André avisou que não conseguiu, antes de enviar o material, mesclar os trechos em português nem adensar as seções de caso, e só volta a mexer no artigo em agosto (envio esperado início de setembro). Este plano organiza o que pode ser adiantado agora (infraestrutura de citação, mapeamento dos gaps) e o que depende de material que ainda vai chegar (trechos em PT, fontes reais do processo CADE).
> **Como usar**: as tarefas 1-2 dependem de material que Tales/André ainda vão fornecer — não iniciar a reescrita sem esse insumo. As tarefas 4-5 (infraestrutura do `.bib`) podem ser adiantadas de forma independente. A tarefa 3 (literatura) pode começar já com as duas referências do Ergen abaixo, mas idealmente aguarda uma lista mais completa se André tiver outras sugestões.

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

## 2. Inventário dos marcadores `[...]{.mark}` no `.qmd` (estado em 2026-07-14)

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

- [ ] Tales fornece os trechos em português (formato e localização a combinar)
- [ ] Definir e aplicar convenção de como os trechos em PT convivem com o texto em inglês no `.qmd` durante a fase de reescrita
- [ ] Resolver, um a um, os marcadores da tabela da Seção 2 conforme material chegar (André/Tales/pesquisa em processos do CADE)
- [ ] Redigir novo(s) parágrafo(s) na Seção 2 (e avaliar a Discussion) incorporando Ergen & Kohl (2019, 2022) e outra literatura indicada por André
- [ ] Tales cria coleção Zotero + configura Better BibTeX auto-export para `3-texts/Nahoum-Mancano-2026-Antitrust-Article.bib`
- [ ] Adicionar `bibliography:` ao YAML do `.qmd` e preencher `arquivo_gerenciado_externamente` no `CLAUDE.md`
- [ ] Converter citações em texto plano para `@citekey` do Quarto assim que o `.bib` estiver populado
- [ ] Rodar `quarto render` com bibliografia ativa para validar que as citações resolvem corretamente

---

## 4. Plano de Validação e Verificação

### Verificação Manual
- Conferir que nenhum marcador `[...]{.mark}` restante no `.qmd` foi resolvido com conteúdo inventado — cada resolução deve ter fonte real (processo CADE, declaração pública, artigo de lei).
- Após adicionar `bibliography:`, rodar `quarto render 3-texts/Nahoum-Mancano-2026-Antitrust-Article.qmd --to html` e conferir visualmente que as citações aparecem formatadas e a lista de referências é gerada sem erros de key não encontrada.
- Rodar `Rscript tools/validate-governance.R` antes de qualquer commit que toque `3-texts/` ou o `.bib`, conforme Regra 1 do `CLAUDE.md`.
