# TODO — Registro de Pendências (Governança Append-Only)

> **Regra de Governança:** este arquivo **nunca** tem itens apagados. Itens concluídos são **movidos** (não editados retroativamente) para o topo de "Concluído" — log cronológico, mais recente primeiro, igual ao `NEWS.md`. Todo item registra data+hora de criação (`YYYY-MM-DD HH:MM`, horário local) e quem criou (agente e humano); ao concluir, soma-se data+hora e quem concluiu. Itens complexos (múltiplas etapas, decisão arquitetural) linkam o plano correspondente em `9-vers/plan/YYYY-MM-DD_Plano_*.md` — o TODO é o índice curto, o plano é o detalhe. Agentes de IA devem consultar este arquivo ao iniciar rodadas complexas de planejamento, para alinhamento com a agenda pendente **e** prospectiva.
>
> **Três seções**: "Pendente" = pronto para ser trabalhado agora. "Prospectivo" = identificado mas não pronto ainda (falta decisão, depende de outra tarefa, ou é backlog de menor prioridade) — quando ficar pronto, é **movido** para o topo de "Pendente" preservando a data de criação original. "Concluído" = feito.

## Pendente

- [ ] Ampliar a revisão de literatura do artigo citando Ergen & Kohl (2019/2022) e outras referências indicadas por André, e montar a infraestrutura de citação (.bib via Zotero/Better BibTeX, apontado por `bibliography:` no YAML do `.qmd`)
  - Criado: 2026-07-14 13:38 por Claude Sonnet 5 (a pedido de Tales Mançano, repassando tarefas de André Vereta-Nahoum) — escopo reduzido em 2026-07-14 16:53 após a inserção do rascunho em português (ver Concluído)
  - Plano: `9-vers/plan/2026-07-14_Plano_Revisao_Artigo_Coautor.md`

- [ ] Definir estratégia de publicação/journal para submissão do artigo
  - Criado: 2026-07 (timestamp exato não registrado na criação original — retroativo, mantido só-data)

## Prospectivo

- [ ] Confirmar no Zotero duas discrepâncias de ano remanescentes (não bloqueiam o build, citeproc resolve com o ano atual do `.bib`): `Carvalho-Ragazzo2012` (rascunho PT cita 2013, `.bib` tem 2012) e `Onto2017` (rascunho PT lista a tese como 2016 mas cita no corpo como 2017; `.bib` tem 2017, item citado extensivamente nas Seções 3-4)
  - Criado: 2026-07-15 13:44 por Claude Sonnet 5 (a pedido de Tales Mançano), ao fechar a tarefa de chaves bibtex abaixo

## Concluído

- [x] Corrigir no `.qmd` as chaves bibtex que não resolviam contra o `Nahoum-Mancano-2026-Antitrust.bib` real: `Folha1995a`/`Folha1995b` renomeadas para as chaves reais do Zotero (`1995-03-23_news_fsp_cade-adia-decisao-sobre-fusao` e `1995-10-14_news_fsp_contra-a-mare`); `Khan2017` (ambígua) resolvida, por confirmação de Tales, para citar `@Khan2016` e `@Khan-Vaheesan2017` juntas nas duas ocorrências. Na conferência também ficou constatado que as ~22 referências antes listadas como faltantes em `## Missing Citations` já haviam sido adicionadas ao `.bib` desde a última checagem (2026-07-14) — nenhuma chave usada no `.qmd` ficou sem resolver. Seção `## Missing Citations` do `.qmd` reescrita para refletir o estado atual
  - Criado: 2026-07-15 13:44 por Claude Sonnet 5 (a pedido de Tales Mançano)
  - Concluído: 2026-07-15 13:44 por Claude Sonnet 5 (a pedido de Tales Mançano)

- [x] Auditar o estado real do repositório e atualizar `CLAUDE.md`/`README.md` de acordo (placeholders nunca preenchidos, arquivos novos não documentados); mover os `AGENTS.md.bak.*` acumulados na raiz para `9-vers/backups/` e apontar `tools/validate-governance.R` para escrever lá dali em diante; adicionar `file/` e `*.zip` (~1.8 GB de material bruto do CADE) ao `.gitignore`, que estavam sem proteção
  - Criado: 2026-07-15 11:16 por Claude Sonnet 5 (a pedido de Tales Mançano)
  - Concluído: 2026-07-15 11:16 por Claude Sonnet 5 (a pedido de Tales Mançano)

- [x] Conferir o `.qmd` contra o `Nahoum-Mancano-2026-Antitrust.bib` que Tales já tinha gerado no Zotero: renomear as 3 chaves que tinham correspondência real só com nome diferente (`Berk1994`→`Berk2009`, `Folha2004`→`FolhadeS.Paulo2004`, `Teixeira2001`→`Teixeira-etal2001`), confirmar que as outras 8 chaves já corretas resolvem sem aviso do citeproc, e substituir a antiga lista `## References` por uma seção `## Missing Citations` enxuta, só com as ~22 chaves realmente sem entrada no `.bib` (destaque: `Onto2017`) e a ambiguidade `Khan2017`/`Khan2016`/`Khan-Vaheesan2017` — validado renderizando com o `.bib` real via `bibliography:` temporário
  - Criado: 2026-07-14 17:26 por Claude Sonnet 5 (a pedido de Tales Mançano)
  - Concluído: 2026-07-14 17:26 por Claude Sonnet 5 (a pedido de Tales Mançano)
  - Plano: `9-vers/plan/2026-07-14_Plano_Incorporar_Rascunho_PT.md`

- [x] Criar script (`tools/zotero-build-citation-collection.js`, Run JavaScript do Zotero) para montar automaticamente a coleção `Nahoum-Mancano-2026-Antitrust` no Zotero com todas as referências citadas no `.qmd` e no rascunho em português, em vez de selecionar item por item manualmente; corrigido após primeira execução real revelar busca solta demais e contaminação de anos alternativos entre citações homônimas — não resolve por si só as discrepâncias de ano listadas no item pendente abaixo, só automatiza a busca/seleção no Zotero
  - Criado: 2026-07-14 16:53 (a pedido de Tales Mançano) por Claude Sonnet 5
  - Concluído: 2026-07-14 17:24 por Claude Sonnet 5 (a pedido de Tales Mançano)

- [x] Inserir o rascunho em português (fornecido por Tales/André) na versão em inglês do `.qmd`, seção por seção, resolvendo quase todos os marcadores `[...]{.mark}` de material de caso pendente com fontes reais (CADE, imprensa, entrevistas), e adicionar seção de referências temporária
  - Criado: 2026-07-14 14:18 por Claude Sonnet 5 (a pedido de Tales Mançano)
  - Concluído: 2026-07-14 16:53 por Claude Sonnet 5 (a pedido de Tales Mançano)
  - Plano: `9-vers/plan/2026-07-14_Plano_Incorporar_Rascunho_PT.md`

- [x] Corrigir a conversão `.docx` → `.qmd` (arquivo estava salvo em UTF-16 corrompido) e preencher de fato a seção "Current State" do `CLAUDE.md`, que apesar do item anterior de 2026-07-13 abaixo constar como concluído, nunca tinha sido realmente preenchida
  - Criado: 2026-07-14 13:26 por Claude Sonnet 5 (a pedido de Tales Mançano)
  - Concluído: 2026-07-14 13:26 por Claude Sonnet 5 (a pedido de Tales Mançano)

- [x] Adotar o mecanismo de skills compartilhadas entre projetos (repositório mãe = `agentic-research-template`) e a convenção definitiva de `TODO.md`
  - Criado: 2026-07-14 10:10 por Claude Sonnet 5 (a pedido de Tales Mançano)
  - Concluído: 2026-07-14 10:15 por Claude Sonnet 5 (a pedido de Tales Mançano)
  - Plano: `../agentic-research-template/9-vers/plan/2026-07-14_Plano_Skills_Compartilhadas_TODO.md` (repositório mãe — plano cross-repo, sem versão local)

- [x] Inicializar repositório no GitHub, converter `.docx` para `.qmd`, estruturar `CLAUDE.md` com conteúdo intelectual e criar o TODO (append-only) nas regras de governança
  - Criado: 2026-07-13 (timestamp exato não registrado na criação original — retroativo, mantido só-data)
  - Concluído: 2026-07-13 (timestamp exato não registrado na criação original — retroativo, mantido só-data)
