---
tipo: Plano
titulo: "Revisão das citações de imprensa e de fontes primárias do caso Gerdau-Pains (Seção 4)"
status: PARCIAL # Núcleo corretivo entregue e commitado; Fase 2 recusada pelo autor; T9-T10 pendentes
criado: "2026-07-22 19:56"
concluido: null
agentes:
  orquestrador: "Claude Opus 4.8 (Claude Code, VS Code)"
  executor: "Claude Opus 4.8 (Claude Code, VS Code)"
  auditor: null
autor_humano: "Tales Mançano"
tarefas:
  - { desc: "T1 Verificar se a matéria de 07/11/1995 contém a citação de Jobim (bloqueante)", status: concluida, data: "2026-07-22 20:05" }
  - { desc: "T2 Reatribuir a citação direta de Jobim para @Ribeiro1995a", status: concluida, data: "2026-07-22 20:12" }
  - { desc: "T3 Ancorar a afirmação legal no art. 50 da Lei 8.884/94", status: concluida, data: "2026-07-22 20:12" }
  - { desc: "T4 Datar o despacho de Jobim (DOU de 14/11/1995)", status: revertida-pelo-autor, data: "2026-07-22 20:40" }
  - { desc: "T5 Incorporar a doutrina de Jobim (CADE só sobre condutas, não sobre atos de concentração)", status: concluida, data: "2026-07-22 20:12" }
  - { desc: "T6 Incorporar a contestação parlamentar (representação de Miguel Rossetto na PGR)", status: revertida-pelo-autor, data: "2026-07-22 20:40" }
  - { desc: "T7 Incorporar o contexto de escala (R$ 18 bi na pauta do CADE em 1995)", status: revertida-pelo-autor, data: "2026-07-22 20:40" }
  - { desc: "T8 Reconciliar os percentuais de mercado (39,6 / 46,2 / 46,5 / 'roughly 40')", status: concluida, data: "2026-07-22 20:14" }
  - { desc: "T8b Reverter substituição indevida de @1995-10-14_news_fsp_contra-a-mare por @Ribeiro1995a", status: concluida, data: "2026-07-22 20:12" }
  - { desc: "T9 Padronizar a grafia do autor Alex/Alexandre Ribeiro no Zotero", status: pendente, data: null }
  - { desc: "T10 Resolver os [VERIFICAR] das entradas do CADE (data da sessão, volume, folhas)", status: pendente, data: null }
  - { desc: "T11 Governança: validate-governance.R, NEWS.md, índice de planos, export da conversa", status: concluida, data: "2026-07-23 00:11" }
relacionados:
  - "9-vers/plan/2026-07-14_Plano_Revisao_Artigo_Coautor.md"
  - "9-vers/plan/2026-07-15_Plano_Organizar_Pasta_File.md"
news: []
---

# Revisão das citações de imprensa e de fontes primárias do caso Gerdau-Pains

> ⚠️ **AGUARDANDO APROVAÇÃO.** Este plano não foi aceito pelo autor humano e não deve
> ser executado. O `3-texts/` é diretório de autoria primária protegida: nenhuma edição
> ou commit sem autorização explícita nesta conversa.

## 1. Origem

Na sessão de 2026-07-22 o autor forneceu o texto integral de uma matéria da *Folha de
S.Paulo* de **15/11/1995** — "Jobim se opõe ao Cade e acata ação da Gerdau", de Alex
Ribeiro — que contém **literalmente** a citação de Nelson Jobim já usada na Seção 4 do
artigo, hoje atribuída a `@Ribeiro1995` (matéria de **07/11/1995**, "Nelson Jobim compra
briga com o Cade"). Daí a questão que motiva o plano: as matérias hoje citadas no corpo
do texto podem não ser as que efetivamente contêm as passagens citadas.

A entrada `@Ribeiro1995a` já foi criada pelo autor no Zotero e consta do `.bib`
reexportado, junto com `@CADE1995-AC16-1994` e `@CADE1995-AC16-1994-decisao`.

## 2. Estado verificado (2026-07-22)

| Item | Situação |
|---|---|
| `@Ribeiro1995` | `Nahoum-Mancano-2026-Antitrust.bib:1117` — Folha, 07/11/1995, autor "Ribeiro, Alexandre" |
| `@Ribeiro1995a` | `Nahoum-Mancano-2026-Antitrust.bib:1126` — Folha, 15/11/1995, autor "Ribeiro, Alex" |
| `@CADE1995-AC16-1994` | `:245` — com dois `[VERIFICAR]` em `howpublished` (volume, folhas) e `date = {1995}` sem mês/dia |
| `@CADE1995-AC16-1994-decisao` | `:254` — completa (35ª Sessão Ordinária, 29.03.1995, DOU 31.03.1995, p. 4595) |
| Uso de `@Ribeiro1995` no `.qmd` | **duas ocorrências, ambas na linha 93** — nenhuma outra no arquivo |
| Uso de `@CADE1995-AC16-1994` no `.qmd` | linhas 87 e 89 (já inserido pelo autor) |

**Não verificado:** o conteúdo da matéria de 07/11/1995. O acervo da Folha
(`www1.folha.uol.com.br`) recusa acesso automatizado; a verificação depende do autor
humano abrir a URL já registrada no `.bib`.

## 3. Achados que motivam as revisões

1. **Possível má atribuição de citação direta.** A frase "O mercado brasileiro de
   siderurgia está aberto aos produtos internacionais e o ato de concentração não elimina
   a concorrência de parte substancial do mercado" aparece na matéria de 15/11, atribuída
   ao despacho de Jobim. Está hoje creditada à matéria de 07/11.
2. **Afirmação legal frouxa.** A linha 93 diz que a Lei 8.884/94 não previa interferência
   do Executivo ("under which no Executive interference was foreseen"). A matéria de 15/11
   dá o dispositivo exato: **art. 50**, segundo o qual as decisões do CADE "não comportam
   revisão no âmbito do Poder Executivo". Citar o artigo transforma uma paráfrase vaga em
   afirmação verificável — e reforça o argumento de conversão institucional, já que
   mostra que a intervenção foi *contra legem* e não uma lacuna.
3. **Data do despacho recuperável.** A matéria de 15/11 diz que o despacho foi publicado
   "ontem" no *Diário Oficial* → **14/11/1995**. O artigo hoje não data o episódio.
4. **Material analítico não aproveitado** na matéria de 15/11 (ver §4, Fase 2).
5. **Divergência numérica.** O corpo do texto (linha 93) fala em "roughly 40-percent
   market concentration"; a nota de rodapé `[^gerdau-marketshare]` traz 39,6 → **46,2%**
   (matéria de 23/03/1995); a matéria de 15/11 traz **46,5%** de aços longos comuns. Três
   números para o mesmo fato no mesmo parágrafo.
6. **Inconsistência de autoria no `.bib`.** "Ribeiro, Alexandre" vs. "Ribeiro, Alex" — a
   assinatura da Folha em ambas as matérias é *Alex Ribeiro*. Sem padronização, o citeproc
   trata como duas pessoas e não desambigua corretamente na lista de referências.

## 4. Plano de execução

### Fase 0 — Verificação bloqueante (autor humano)

- **T1.** Abrir `https://www1.folha.uol.com.br/fsp/1995/11/07/dinheiro/18.html` e registrar:
  (a) a matéria de 07/11 contém a citação de Jobim? (b) contém a afirmação sobre a Lei
  8.884/94 / art. 50? O resultado decide T2:
  - **Se não contém** → *trocar*: as duas ocorrências passam a `@Ribeiro1995a`.
  - **Se contém** → *citar junto*: `[@Ribeiro1995; @Ribeiro1995a]` na citação direta,
    mantendo `@Ribeiro1995` sozinho onde for suficiente.
  - **Se inacessível** → tratar como "não contém" e registrar a incerteza em `annotation`
    no Zotero, nunca no corpo do texto.

### Fase 1 — Correção factual das citações (`3-texts/`, linha 93)

- **T2.** Reatribuir a citação direta de Jobim conforme T1.
- **T3.** Substituir a paráfrase legal por referência explícita ao art. 50 da Lei 8.884/94,
  citando `[@Brasil1994]` para o dispositivo e `[@Ribeiro1995a]` para a cobertura.
- **T4.** Datar o despacho ("published in the *Diário Oficial* of 14 November 1995").

> Fases 0 e 1 são o núcleo corretivo: sozinhas já eliminam a má atribuição. As demais
> são enriquecimento e podem ser recusadas sem prejuízo.

### Fase 2 — Aproveitamento analítico da nova matéria (opcional)

- **T5.** **Doutrina de Jobim** — o ministro sustentou que o CADE tem a última palavra
  apenas sobre infrações à ordem econômica (condutas), não sobre atos de concentração.
  É a peça mais valiosa da matéria para o argumento do artigo: uma reinterpretação
  explícita da competência do órgão, sem mudança legislativa — conversão institucional
  em estado puro, articulada pelo próprio Executivo.
- **T6.** **Contestação** — representação do deputado Miguel Rossetto (PT/RS) na
  Procuradoria Geral da República contra Jobim por abuso de autoridade ("o ministro
  atropelou a lei antitruste"). Mostra que a conversão foi contestada, não consensual.
- **T7.** **Escala do momento** — R$ 18 bilhões em aquisições na pauta do CADE em 1995,
  incluindo Kolynos/Colgate (R$ 1,04 bi) e o arrendamento da Mendes Júnior pela Belgo
  Mineira. Situa o caso Gerdau como precedente com efeito sistêmico.
- **T8.** Preço da aquisição da Pains: R$ 50 milhões (dado factual simples, se útil).

### Fase 3 — Consistência numérica

- **T9.** Fixar um único número no parágrafo, explicitando o mercado de referência
  (aços longos comuns vs. mercado siderúrgico nacional) e a data de cada medição.
  Provável leitura: 46,2% e 46,5% são a mesma estimativa em momentos/arredondamentos
  distintos, e o "roughly 40-percent" do corpo está simplesmente defasado. **Confirmar
  com o autor — não corrigir número por conta própria.**

### Fase 4 — Higiene do `.bib` (execução do autor no Zotero)

- **T10.** Padronizar o autor das duas matérias como "Ribeiro, Alex" e reexportar.
- **T11.** Resolver os `[VERIFICAR]` de `@CADE1995-AC16-1994` (data da sessão de
  julgamento da reapreciação, volume dos autos, folhas). Requer extração de texto dos
  PDFs em `file/cade-proceedings/gerdau-pains-laisa-1995_AC-0016-1994/` — pode ser
  delegado ao agente via `pdf-text-extractor`, com o autor lançando o resultado no Zotero.

### Fase 5 — Governança

- **T12.** `Rscript tools/validate-governance.R` antes do commit.
- **T13.** Commit sincronizado: `NEWS.md` + status deste plano no índice
  `9-vers/plan/README.md` na mesma transação. Edições em `3-texts/` só entram no commit
  com autorização explícita do autor nesta conversa.
- **T14.** Exportar a conversa (`Rscript tools/export_conversa.R <session_uuid> <slug>`)
  e registrar em `9-vers/llm-reviews/README.md`.

## 5. Arquivos no escopo

| Arquivo | Natureza da mudança | Quem executa |
|---|---|---|
| `3-texts/Nahoum-Mancano-2026-Antitrust-Article.qmd` | linha 93 (T2–T4), opcionalmente §4 (T5–T8) e nota `[^gerdau-marketshare]` (T9) | agente, com aprovação por bloco |
| `Nahoum-Mancano-2026-Antitrust.bib` | T10–T11, **somente via Zotero + reexportação** | autor humano |
| `NEWS.md`, `9-vers/plan/README.md`, `TODO.md` | registro de governança | agente |

## 6. Fora do escopo

- A frase em português ainda não traduzida na linha 85 ("Efficiency, in this context,
  significa que a empresa poderia ter 'sinergias'...") e a falta de espaço em
  "firms.CADE's" na linha 89 — trabalho de autoria pendente dos autores; apenas sinalizado.
- Os marcadores `[...]{.mark}` e `[@]` vazios remanescentes no `.qmd` — regra permanente:
  o agente nunca os preenche.
- Reescrita estilística da Seção 4 fora dos parágrafos listados acima.

## 7. Resultado (2026-07-23 00:11)

O autor aprovou o escopo integral, o agente executou, e em seguida **rejeitou a forma da
entrega**: o material novo foi acrescentado como cinco frases ao fim da linha 93, um
parágrafo que já era longo demais. A crítica não foi de conteúdo nem de citação — foi de
inchaço do parágrafo. Material factual novo deve entrar como parágrafo próprio ou nota de
rodapé, nunca empilhado no fim de um bloco existente. O autor optou por editar ele mesmo
o parágrafo em vez de reverter.

**O que sobreviveu à edição do autor e está no texto commitado** (verificado por `grep` no
`.qmd` em 2026-07-23 00:11; commit `18e7856`, feito por outra sessão sem atribuição a este
plano):

- T2 — citação direta de Jobim reatribuída a `@Ribeiro1995a` (3 ocorrências no arquivo).
- T3 — art. 50 da Lei 8.884/94 citado textualmente ("are not subject to review within the
  Executive Branch"), com `@Brasil1994`.
- T5 — doutrina de Jobim (CADE decide sobre condutas, não sobre atos de concentração),
  mais a frase interpretativa sobre a jurisdição redesenhada sem mudança legislativa.
- T8 — percentuais reconciliados: "roughly 46-percent" no corpo, 46,5% e o limiar legal de
  20% na nota `[^gerdau-marketshare]`.
- T8b — `@1995-10-14_news_fsp_contra-a-mare` restaurada. Uma substituição em massa de
  `@Ribeiro1995` → `@Ribeiro1995a` feita pelo autor havia atingido também a citação
  "does not follow the government's political strategy...", que pertence à matéria de
  14/10/1995 e não à de 15/11.

**O que o autor removeu** (registrado aqui porque o `NEWS.md` de 2026-07-22 21:09 apontou
a divergência entre o YAML deste plano e o `.qmd` — divergência agora resolvida, os campos
foram corrigidos para `revertida-pelo-autor`):

- T4 — data do despacho no *Diário Oficial* (14/11/1995).
- T6 — representação de Miguel Rossetto (PT-RS) na PGR por abuso de autoridade.
- T7 — R$ 18 bi na pauta do CADE em 1995 (Kolynos/Colgate, Mendes Júnior/Belgo Mineira).
- Preço da Pains (R$ 50 milhões).

Esses quatro fatos permanecem disponíveis na matéria `@Ribeiro1995a` caso os autores
queiram reaproveitá-los em parágrafo ou nota própria.

**Pendente:** T9 (padronizar "Ribeiro, Alexandre" → "Ribeiro, Alex" no Zotero — hoje o
citeproc trata as duas matérias como autores distintos) e T10 (resolver os `[VERIFICAR]`
de `@CADE1995-AC16-1994`: data da sessão de julgamento da reapreciação, volume e folhas,
via extração dos PDFs do dossiê).

## 8. Riscos

- **Duplo risco de citação:** trocar sem verificar T1 pode remover uma fonte legítima;
  não trocar mantém uma citação direta possivelmente atribuída à matéria errada. T1 é
  bloqueante por isso.
- **Reexportação do Zotero:** qualquer edição manual no `.bib` feita pelo agente seria
  perdida na próxima exportação — daí a Fase 4 ser inteiramente do autor.
- **Escopo criando escopo:** a Fase 2 é convite a reescrever a Seção 4. Manter cada item
  como acréscimo pontual, sujeito a aprovação individual.
