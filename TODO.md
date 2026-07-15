# TODO — Registro de Pendências (Governança Append-Only)

> **Regra de Governança:** este arquivo **nunca** tem itens apagados. Itens concluídos são **movidos** (não editados retroativamente) para o topo de "Concluído" — log cronológico, mais recente primeiro, igual ao `NEWS.md`. Todo item registra data+hora de criação (`YYYY-MM-DD HH:MM`, horário local) e quem criou (agente e humano); ao concluir, soma-se data+hora e quem concluiu. Itens complexos (múltiplas etapas, decisão arquitetural) linkam o plano correspondente em `9-vers/plan/YYYY-MM-DD_Plano_*.md` — o TODO é o índice curto, o plano é o detalhe. Agentes de IA devem consultar este arquivo ao iniciar rodadas complexas de planejamento, para alinhamento com a agenda pendente **e** prospectiva.
>
> **Três seções**: "Pendente" = pronto para ser trabalhado agora. "Prospectivo" = identificado mas não pronto ainda (falta decisão, depende de outra tarefa, ou é backlog de menor prioridade) — quando ficar pronto, é **movido** para o topo de "Pendente" preservando a data de criação original. "Concluído" = feito.

## Pendente

- [ ] Reorganizar e renomear a pasta `file/` (fontes primárias brutas, 971MB, sem estrutura hoje) em subpastas por tipo com nomes descritivos, e criar `file/README.md` versionado documentando o índice. Decisões de design já fechadas com o autor via sessão `/grill-me` (idioma dos nomes, onde documentar, o que fazer com 2 arquivos-lixo e 2 rascunhos duplicados do artigo, como tratar 2 itens de identidade ambígua, e apagar o `.zip` duplicado de 876MB na raiz do repositório).
  - Criado: 2026-07-15 15:19 por Claude Sonnet 5 (a pedido de Tales Mançano)
  - Plano: `9-vers/plan/2026-07-15_Plano_Organizar_Pasta_File.md`

- [ ] Preparar e enviar a Flash Talk "Antitrust as industrial policy" para a Escola de Ciências Avançadas da FAPESP (ESCA, FGV-EAESP) — sessão **FT1B** ("Crisis & Accountability"), **quarta-feira 05/08/2026**, discussant designado Camilo González. Constrangimentos oficiais:
  - Slot fixo de **20 minutos, não se estende**: 12 min de apresentação + 8 min de comentários do discussant/perguntas da plateia. Se a apresentação passar de 12 min, o tempo de discussão é que encolhe, não o slot todo.
  - Formato do arquivo: **PPT/PPTX ou PDF**, em **inglês**.
  - Nome do arquivo no padrão `nome-sobrenome-sessão` (ex. oficial: `maria-oliveira-FT1A`) — pelo nome usado na lista de inscritos ("Tales Fernandes"), seria `tales-fernandes-FT1B`, **mas confirmar com a organização**: o resto deste projeto usa "Tales Mançano" (git, e-mail), não "Tales Fernandes" — pode ser nome do meio no cadastro ou erro de inscrição, vale checar antes de nomear o arquivo errado.
  - Enviar por e-mail para **espca_eaesp@fgv.br pelo menos 24h antes do início da sessão** (não aceitam mais pendrive) — como a sessão é quarta 05/08, o prazo é terça 04/08; o horário exato de início de FT1B não veio no trecho que você colou, conferir na programação completa (Appendix) para calcular a hora exata do prazo.
  - Chegar um pouco antes do horário da sessão.
  - Ponto de partida possível para os slides: já existem `file/Antitrust as Industrial Policy.pptx` e `file/SBS-2025 Antitruste como Política Industrial.pptx` no repositório (apresentações anteriores sobre o mesmo tema) — vale checar se dá para adaptar em vez de montar do zero.
  - Criado: 2026-07-15 14:24 por Claude Sonnet 5 (a pedido de Tales Mançano)

- [ ] Tales revisar todas as correções recentes no `.qmd` (chaves bibtex vs. `.bib` real) e a revisão de literatura orientada por André (Ergen & Kohl 2019/2022 + outras indicadas), cotejando com as versões antigas do paper (`draft_text.md`, o `.docx` original, o rascunho em português) para checar se falta incorporar algo. **Limite confirmado da RIPE: 12.000 palavras no total, incluindo tabelas, referências, legendas de figura e notas de rodapé/fim** (não é só o corpo do texto) — corpo atual (Seção 1 até o fim do texto, sem contar a seção `## Missing Citations`, que não vai para a submissão) tem ~6.886 palavras, então há margem de ~5.000 palavras antes do limite, mas a lista de referências formatada (gerada pelo citeproc a partir do `.bib` só quando `bibliography:` for ligado) ainda vai comer parte dessa margem — não confirmar a folga exata até isso ser medido pós-render. Também: a RIPE exige uma "Declaration of Generative AI use" na submissão — como o próprio artigo já narra o uso do NotebookLM para organizar material (ver abstract/Introdução), vale usar essa mesma descrição como base ao redigir essa declaração formal na hora da submissão.
  - Criado: 2026-07-15 13:51 por Claude Sonnet 5 (a pedido de Tales Mançano) — limite e demais constrangimentos confirmados em 2026-07-15 14:20 com as instruções oficiais para autores fornecidas por Tales

- [ ] Ampliar a revisão de literatura do artigo citando Ergen & Kohl (2019/2022) e outras referências indicadas por André
  - Criado: 2026-07-14 13:38 por Claude Sonnet 5 (a pedido de Tales Mançano, repassando tarefas de André Vereta-Nahoum) — escopo reduzido em 2026-07-14 16:53 após a inserção do rascunho em português (ver Concluído); a parte de infraestrutura de citação (`bibliography:` no YAML) foi concluída em 2026-07-15 14:42 (ver Concluído) — resta só a ampliação de literatura em si
  - Plano: `9-vers/plan/2026-07-14_Plano_Revisao_Artigo_Coautor.md`

## Prospectivo

## Concluído

- [x] Padronizar no Zotero as duas chaves bibtex da Folha de S.Paulo que fugiam do formato data+slug (`Folha1998`→`1998-03-19_news_fsp_gerdau-fica-com-a-pains-cade-aprova`, `FolhadeS.Paulo2004`→`2004-07-03_news_fsp_autores-apontam-caminhos-para-a-politica-industrial`), e repontar as duas citações correspondentes no `.qmd`. Chaves geradas por Claude seguindo o padrão já usado pelas 2 entradas de 1995 no `.bib`; renomeação em si feita por Tales no Zotero (aba Better BibTeX, chave travada com pin) e reexportada — respeitando a regra de nunca editar o `.bib` manualmente. Validado com `Rscript tools/validate-governance.R`: 97 chaves carregadas, nenhum erro de integridade de citação
  - Criado: 2026-07-15 15:28 por Claude Sonnet 5 (a pedido de Tales Mançano)
  - Concluído: 2026-07-15 15:28 por Claude Sonnet 5 (a pedido de Tales Mançano)

- [x] Criar `tools/render-article.ps1` para renderizar o artigo em html/docx/pdf para `render/<formato>/` (pasta nova, gitignored — não usa `docs/`, que é a página estática de governança Agent Covenant, sem relação com o artigo), arquivando cópia com timestamp de cada render bem-sucedido em `render/<formato>/archive/`, seguindo o padrão de `Mancano2026-MA-Thesis/tools/preview-pdf-book.ps1`. Decisões confirmadas com o autor antes de implementar: nome da pasta (`render/`), aninhamento nativo do Quarto mantido (`render/html/3-texts/Article.html`, não achatado), `render/` gitignored (build local, nunca commitado), e script abre só o PDF ao final para revisão visual. Testado rodando os 3 formatos de ponta a ponta
  - Criado: 2026-07-15 14:49 por Claude Sonnet 5 (a pedido de Tales Mançano)
  - Concluído: 2026-07-15 14:49 por Claude Sonnet 5 (a pedido de Tales Mançano)

- [x] Ligar `bibliography:` no `_quarto.yml` (apontando para `Nahoum-Mancano-2026-Antitrust.bib`), trocar a seção de trabalho `## Missing Citations` do `.qmd` por uma seção `## References` real (`::: {#refs} :::`, populada pelo citeproc), e adicionar `keywords:` sugeridas ao YAML do `.qmd` (antitrust policy; industrial policy; institutional conversion; Brazil; mergers and acquisitions) — fecha o gap rastreado em `CLAUDE.md`/checklist da RIPE. Validado renderizando para HTML: citeproc gerou 38 entradas formatadas na lista de referências, nenhuma citação ficou como texto literal `[@key]`; T4 (integridade de citação) de `tools/validate-governance.R` deixou de ser pulada e passou a carregar as 97 chaves do `.bib`
  - Criado: 2026-07-15 14:42 por Claude Sonnet 5 (a pedido de Tales Mançano)
  - Concluído: 2026-07-15 14:42 por Claude Sonnet 5 (a pedido de Tales Mançano)

- [x] Confirmar no Zotero duas discrepâncias de ano remanescentes (`Carvalho-Ragazzo2012`, `Onto2017`): tratadas como resolvidas por decisão do autor — discrepância é do tipo "obra produzida entre um ano e outro", caso em que citar qualquer um dos dois anos é indiferente; nenhuma mudança necessária no `.bib` nem no `.qmd`
  - Criado: 2026-07-15 13:44 por Claude Sonnet 5 (a pedido de Tales Mançano), ao fechar a tarefa de chaves bibtex
  - Concluído: 2026-07-15 13:51 por Claude Sonnet 5 (a pedido de Tales Mançano)

- [x] Definir estratégia de publicação/journal para submissão do artigo: journal-alvo é a *Review of International Political Economy* (RIPE, Taylor & Francis), sugestão do coautor André Vereta-Nahoum em reunião (R1). Critérios de submissão **confirmados em 2026-07-15 com as "Instructions for Authors" oficiais fornecidas por Tales** (corrige a versão anterior desta entrada, que vinha de busca web não verificada por fonte primária):
  - Tipo de submissão: **Research Article** (o mais longo dos quatro tipos que a RIPE aceita) — **12.000 palavras**, incluindo tabelas, referências, legendas de figura e notas de rodapé/fim (não é só o corpo do texto); é obrigatório declarar a contagem de palavras na submissão.
  - Resumo (abstract): **200 palavras**, não-estruturado (a cifra de 250 da checagem anterior via busca estava incorreta).
  - Estrutura exigida (nessa ordem): título/afiliação; abstract; **keywords** (ainda não existem no `.qmd`); corpo; agradecimentos; declaração de conflito de interesse; referências; tabelas; figuras; legendas; apêndices online.
  - Submissão inicial é **format-free**: qualquer formatação/estilo de citação consistente serve para a revisão por pares; o estilo definitivo da RIPE só é aplicado pela produção da T&F depois de aceito. Se submetido em LaTeX, exige `.bib` anexo (o nosso já existe).
  - Peer review **duplo-cego** — manuscrito de revisão precisa remover identificação de autoria (nome/afiliação vão só na title page separada).
  - Checklist de submissão inclui itens que ainda não existem no projeto: papel de cada autor (CRediT), declaração de financiamento, declaração de conflito de interesse, **declaração de uso de IA generativa** (relevante aqui — o próprio artigo já narra o uso do NotebookLM na organização do material, then essa descrição serve de base para a declaração formal), nota biográfica de cada autor (≤60 palavras), e declaração de disponibilidade de dados (se aplicável).
  - Sem taxa de submissão/publicação (a menos que se opte por Open Access, que tem APC).
  - Só publica em inglês — já cumprido.
  - Recomendação editorial da própria RIPE (não é uma regra bloqueante, mas orienta a revisão de literatura): buscar pelo menos 30% de citações de autoras mulheres, e evitar termos como "advanced"/"backward" em favor de "rich"/"poor" ou "high/middle/low income".
  - Corpo atual do `.qmd` (Seção 1 até o fim, sem a seção de trabalho `## Missing Citations`) tem ~6.886 palavras — ~5.000 de margem antes das 12.000, mas a lista de referências formatada ainda não foi gerada (`bibliography:` ainda não ligado) e vai consumir parte dessa margem.
  - Criado: 2026-07 (timestamp exato não registrado na criação original — retroativo, mantido só-data)
  - Concluído: 2026-07-15 14:20 por Claude Sonnet 5 (a pedido de Tales Mançano)

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
