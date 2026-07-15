# NEWS — Decisões de Design e Evolução Metodológica

> Entrada mais recente no topo.
> **Convenção de timestamp**: Todas as datas em cabeçalhos (## YYYY-MM-DD HH:MM) e no campo Data/Hora dos metadados DEVEM incluir hora e minuto no fuso local. Nunca use datas isoladas.

## 2026-07-15 11:16 — Auditoria do estado real do repositório; CLAUDE.md/README.md atualizados; backups de self-heal e material bruto organizados

Tales pediu explicação do repositório, atualização de `CLAUDE.md`/`README.md` para o estado real, e um jeito de parar de ver `AGENTS.md.bak.*` acumulando na raiz. Achados: "Technical Stack" do `CLAUDE.md` ainda tinha placeholders genéricos do template (`FastAPI, Next.js, React`) sem relação com o projeto real (Quarto + R); `arquivo_gerenciado_externamente` nunca foi preenchido mesmo com o `.bib` real já existindo; arquitetura não documentava o `.bib`, o rascunho em português, `tools/zotero-build-citation-collection.js` nem a pasta `file/`. Achado mais sério: `file/` (~971 MB de autos do CADE) e um `.zip` equivalente (~918 MB) estavam **sem entrada no `.gitignore`** — só o T2 de `validate-governance.R` (bloqueio >10MB staged) protegia contra um `git add` acidental. Notado à parte, já rastreado em `TODO.md`: `_quarto.yml` ainda não tem `bibliography:` apontando pro `.bib` (T4 fica pulada).

Aplicado: `CLAUDE.md` (data/arquitetura/`arquivo_gerenciado_externamente`/proibição de versionar `file/`+`.zip`/stack real reescrito), `README.md` (descrição e organograma reais), `.gitignore` (`/file/`, `*.zip`), `tools/validate-governance.R` (backups do self-heal do hard link passam a ir para `9-vers/backups/` em vez da raiz — os 5 arquivos antigos foram movidos, nenhum deletado).

**Metadados de Execução**:
- **Data/Hora**: 2026-07-15 11:16 (Horário Local)
- **Agente**: Claude Sonnet 5 / Claude Code / VS Code
- **Mensagem do Commit**: "docs(governance): reconcile CLAUDE.md/README.md with real repo state, relocate self-heal backups, gitignore raw source material"
- **Arquivos afetados**: `CLAUDE.md`, `README.md`, `.gitignore`, `tools/validate-governance.R`, `9-vers/backups/AGENTS.md.bak.*` (movidos), `TODO.md`, `NEWS.md`

## 2026-07-14 17:26 — Citações do .qmd conferidas contra o .bib real gerado por Tales

Tales avisou que já tinha exportado `Nahoum-Mancano-2026-Antitrust.bib` (na raiz do repositório) a partir da sua biblioteca Zotero completa. Extraídas as ~34 chaves `@citekey` realmente usadas no `.qmd` e comparadas uma a uma contra o `.bib`: 11 já resolviam certo sem qualquer ajuste; 3 tinham correspondência real só com nome diferente no Zotero e foram renomeadas no `.qmd` (`Berk1994`→`Berk2009`, confirmando a favor do ano que o PT já indicava; `Folha2004`→`FolhadeS.Paulo2004`; `Teixeira2001`→`Teixeira-etal2001`); as demais ~22 não têm nenhuma entrada no `.bib` ainda. A antiga seção `## References` (texto simples, com notas dispersas `[MISSING]`) foi substituída por uma seção `## Missing Citations`, enxuta, listando só as chaves realmente ausentes — destaque para `Onto2017`, citado extensivamente nas Seções 3 e 4 — e sinalizando que `Khan2017` é ambíguo: o `.bib` tem `Khan2016` ("Amazon's Antitrust Paradox") e `Khan-Vaheesan2017` ("Market Power and Inequality"), nenhum dos dois batendo exatamente com a chave usada no texto. Também notada, sem ser bloqueante, uma duplicata no próprio `.bib`: `Mahoney-Thelen2009` e `Mahoney-Thelen2010` são a mesma obra (*Explaining Institutional Change*) sob dois anos diferentes. Validado renderizando uma cópia do `.qmd` com `bibliography: test-article.bib` apontando para o `.bib` real (fora do repositório, em pasta de trabalho temporária) — o citeproc confirmou exatamente as 22 chaves faltantes e nenhum aviso a mais, batendo com a análise manual.

**Metadados de Execução**:
- **Data/Hora**: 2026-07-14 17:26 (Horário Local)
- **Agente**: Claude Sonnet 5 / Claude Code / VS Code
- **Mensagem do Commit**: "fix(article): reconcile citekeys against the real Zotero .bib export"
- **Arquivos afetados**: `3-texts/Nahoum-Mancano-2026-Antitrust-Article.qmd`, `TODO.md`, `NEWS.md`

## 2026-07-14 17:23 — Script Zotero para montar automaticamente a coleção de referências citadas

Tales pediu um jeito de automatizar a montagem da coleção do Zotero usada para gerar o `.bib` gerenciado (fluxo já previsto no plano `2026-07-14_Plano_Revisao_Artigo_Coautor.md`), em vez de selecionar item por item manualmente. Planejado via modo de planejamento do Claude Code (plano salvo fora do repositório, em `~/.claude/plans/`, não em `9-vers/plan/` — decisão explícita do autor nesta sessão de pular o passo 1 da cerimônia de encerramento por esse motivo) com apoio da skill `/grill-me`. A interrogação revelou que o escopo real era maior do que parecia: o rascunho em português (`2026 Antitrust as industrial policy - Nahoum & Mançano.md`) tem sua própria seção `### Referências` com ~50 entradas, com discrepâncias reais de ano entre corpo de texto, lista formatada, e o `.qmd` em inglês (Onto 2016/2017, White 2008/2010, Mahoney & Thelen 2009/2010, Khan 2016/2017, Bork 1974/1978, Berk 1994/2009, Carvalho 2012/2013) — decisões de escopo e de tratamento dessas divergências confirmadas com o autor antes de codificar.

Criado `tools/zotero-build-citation-collection.js`, para colar em Zotero → Tools → Developer → Run JavaScript (roda com acesso direto ao modelo de objetos interno do Zotero — sem API key, sem depender de sync online, sem plugin de terceiros; alternativas pesquisadas e descartadas: API Web exige API key+sync, API local do Zotero 7 é somente leitura, JSON-RPC do Better BibTeX não tem método de escrita em coleção). O script lê os dois arquivos-fonte do disco em tempo de execução e extrai citações por regex (em vez de uma lista estática transcrita à mão, que arriscaria erro de transcrição e ficaria desatualizada), busca cada uma no Zotero e popula a coleção `Nahoum-Mancano-2026-Antitrust`. A primeira execução real (133 itens, 32 faltantes, 32 "ambíguas" com contagens implausíveis como 26 candidatos para uma única citação) expôs dois bugs genuínos, corrigidos nesta sessão: (1) a busca original combinava sobrenome+ano numa única string de `quicksearch-titleCreatorYear`, que aparenta casar palavras de forma solta (OR) em vez de exigir as duas no mesmo item — trocado por duas condições `creator`+`date` explícitas no mesmo `Zotero.Search` (combinadas com AND por padrão); (2) a tabela de anos alternativos para as discrepâncias conhecidas estava indexada só pelo primeiro sobrenome, contaminando citações não relacionadas que compartilhavam sobrenome (ex. o livro solo de Kathleen Thelen de 2025 herdando os anos 2009/2010 da citação "Mahoney & Thelen") — reindexada pela combinação completa de sobrenomes. O script agora também limpa o conteúdo da coleção a cada execução antes de repopular, tornando reexecuções seguras. Aguardando o autor rodar a versão corrigida no Zotero real para confirmar.

**Metadados de Execução**:
- **Data/Hora**: 2026-07-14 17:23 (Horário Local)
- **Agente**: Claude Sonnet 5 / Claude Code / VS Code
- **Mensagem do Commit**: "feat(tools): add Zotero citation collection builder script"
- **Arquivos afetados**: `tools/zotero-build-citation-collection.js`, `9-vers/llm-reviews/README.md`, `NEWS.md`

## 2026-07-14 16:53 — Rascunho em português incorporado à versão em inglês do artigo, seção por seção

Tales forneceu o rascunho em português mais desenvolvido do artigo (`2026 Antitrust as industrial policy - Nahoum & Mançano.md`, na raiz do repositório), muito mais rico que o esqueleto em inglês então existente: tinha resumo, revisão de literatura mais ampla, os dois casos empíricos com citações e depoimentos reais de fontes primárias (CADE, imprensa, entrevistas), conclusão, e ~50 referências completas. Elaborado e aprovado (via modo de planejamento) o plano `9-vers/plan/2026-07-14_Plano_Incorporar_Rascunho_PT.md`, mantendo a estrutura de 7 seções já existente no `.qmd` em vez de adotar a organização do PT.

Durante a execução, a primeira passada nas Seções 1-2 foi longe demais — reescreveu frases do Nahoum com base no PT mesmo onde a frase original já cobria bem o mesmo ponto. O autor interrompeu e corrigiu o rumo: o texto em inglês do Nahoum tem precedência; o PT serve apenas para preencher lacunas concretas (marcadores `[...]{.mark}`, placeholders `[ADD SOURCE]`/`[INSERT QUOTE...]`) e para adicionar material genuinamente novo, nunca para substituir frases que já estavam boas. As Seções 1-2 foram revertidas ao texto original do Nahoum; esse princípio foi aplicado a todas as seções seguintes. Todas as citações de literatura acadêmica foram convertidas para chaves estilo Better BibTeX (fórmula `authEtal2(...) + year`, ex. `[@Onto2017]`), antecipando a integração do `.bib` do plano anterior; citações de fontes primárias/arquivísticas (votos e autos do CADE) permanecem em texto simples. Quase todos os ~14 marcadores de lacuna catalogados no plano anterior foram resolvidos com fonte real do PT (fonte da frase de Malan, a nota "(Onto)", a fala de FHC "não me causem problemas", a citação de Jobim, as falas de executivos da Ambev, a frase de FHC sobre oligopólio). Adicionada seção `## References` temporária (texto simples) com as ~50 referências do PT, incluindo notas `[MISSING]` para citações sem referência completa em nenhum dos dois rascunhos, e sinalizadas — sem resolver unilateralmente — várias discrepâncias reais de citação (Bork 1978 vs. 1974; Khan 2017 vs. 2016; Mahoney & Thelen 2010 vs. 2009; Onto 2017 vs. 2016 na própria lista do PT; Carvalho et al. 2012 vs. a referência de 2013; ambiguidade entre duas peças da Folha de 2004) para os autores confirmarem ao popular o Zotero. Validado com `quarto render` após cada seção mesclada.

**Metadados de Execução**:
- **Data/Hora**: 2026-07-14 16:53 (Horário Local)
- **Agente**: Claude Sonnet 5 / Claude Code / VS Code
- **Mensagem do Commit**: "feat(article): merge Portuguese draft into English version, section by section"
- **Arquivos afetados**: `3-texts/Nahoum-Mancano-2026-Antitrust-Article.qmd`, `9-vers/plan/2026-07-14_Plano_Incorporar_Rascunho_PT.md`, `9-vers/plan/README.md`, `TODO.md`, `NEWS.md`

## 2026-07-14 13:38 — Plano de revisão do artigo com o coautor André Vereta-Nahoum registrado

André (coautor) repassou a Tales, por mensagem, o que falta antes de reenviar o artigo: mesclar trechos em português ainda não fornecidos, adensar o material dos dois casos empíricos (vários trechos `[...]{.mark}` no `.qmd` sinalizam lacunas específicas — citações de processos do CADE, falas de Cardoso/executivos, explicação do conceito jurídico de eficiência), e ampliar a revisão de literatura citando Timur Ergen. Buscadas as referências completas de Ergen & Kohl (2019, *Review of International Political Economy*, sobre "varieties of economization" no antitruste EUA/Alemanha) e Ergen & Kohl (2022, *Socio-Economic Review*, sobre visões rivais de competição econômica) a partir dos links enviados pelo André. Registrado plano `9-vers/plan/2026-07-14_Plano_Revisao_Artigo_Coautor.md` (status ATIVO) cobrindo as 4 frentes, incluindo a criação de um `.bib` gerenciado externamente via Zotero/Better BibTeX (`3-texts/Nahoum-Mancano-2026-Antitrust-Article.bib`, auto-export configurado por Tales) — decisão confirmada com o autor antes de propor o caminho. Nenhuma mudança de conteúdo foi feita no `.qmd` nesta sessão; é só planejamento, aguardando material (trechos em PT, fontes reais dos casos) que ainda vai chegar.

**Metadados de Execução**:
- **Data/Hora**: 2026-07-14 13:38 (Horário Local)
- **Agente**: Claude Sonnet 5 / Claude Code / VS Code
- **Mensagem do Commit**: "docs(plan): register article revision plan with coauthor tasks and .bib setup"
- **Arquivos afetados**: `9-vers/plan/2026-07-14_Plano_Revisao_Artigo_Coautor.md`, `9-vers/plan/README.md`, `TODO.md`, `NEWS.md`

## 2026-07-14 13:26 — Correção da conversão .docx → .qmd e preenchimento do "Current State" do CLAUDE.md

O `TODO.md` registrava como concluída em 2026-07-13 a conversão do artigo de `.docx` para `.qmd` e o preenchimento do `CLAUDE.md` com conteúdo intelectual, mas auditoria nesta sessão encontrou que `3-texts/Nahoum-Mancano-2026-Antitrust-Article.qmd` estava salvo em UTF-16LE (corrompido — cada caractere separado por espaços, acentos quebrados) e que a seção "Current State" do `CLAUDE.md` ainda continha os placeholders originais do template, nunca de fato preenchidos. Reconvertido `Antitrust as industrial policy in Brazil (1).docx` via `pandoc` (conteúdo verificado byte-idêntico ao `draft_text.md` já existente), reescrito o `.qmd` em UTF-8 com front-matter YAML válido (título, autores André Vereta-Nahoum e Tales Mançano, formatos pdf/html/docx) e validado com `quarto render --to html`. Preenchida a seção "Current State" do `CLAUDE.md` com a descrição real do artigo — argumento central (antitruste como política industrial passiva/velada no Brasil de FHC, via "conversão institucional" dos conceitos de eficiência e mercado relevante, casos Gerdau-Pains e Ambev), arquitetura de arquivos e proibições concretas (proteção de `3-texts/`, alerta para não preencher os marcadores `[...]{.mark}` de citação pendente deixados pelos autores). `Rscript tools/validate-governance.R` também re-heal-ou o hard link `CLAUDE.md`↔`AGENTS.md`↔`.github/copilot-instructions.md`, quebrado por salvamento atômico do editor. Adicionado `/.quarto/` e `**/*.quarto_ipynb` ao `.gitignore` (gerado automaticamente pelo próprio Quarto durante o render de teste). `draft_text.md` e o `.docx` original ficam mantidos como referência histórica, não removidos nesta sessão (decisão de remoção cabe ao autor humano).

**Metadados de Execução**:
- **Data/Hora**: 2026-07-14 13:26 (Horário Local)
- **Agente**: Claude Sonnet 5 / Claude Code / VS Code
- **Mensagem do Commit**: "fix(article): repair docx-to-qmd conversion, populate CLAUDE.md Current State"
- **Arquivos afetados**: `3-texts/Nahoum-Mancano-2026-Antitrust-Article.qmd`, `CLAUDE.md`, `AGENTS.md`, `.github/copilot-instructions.md`, `.gitignore`, `NEWS.md`, `TODO.md`

## 2026-07-14 12:47 — Correção puxada da mãe: catálogo de skills globais (superpowers) movido de sync-skills para CLAUDE.md

Auditoria no repositório mãe encontrou que uma tabela de skills globais do plugin `superpowers` estava, por engano, dentro de `sync-skills/SKILL.md` (escopo errado, informação não-portável documentada como portável). Puxada a correção: conteúdo movido para nova seção `## Skills Globais Disponíveis Neste Ambiente` no `CLAUDE.md`. Detalhe completo: `../agentic-research-template/9-vers/plan/2026-07-14_Prompt_Auditoria_Sync-Skills-Superpowers.md`.

**Metadados de Execução**:
- **Data/Hora**: 2026-07-14 12:47 (Horário Local)
- **Agente**: Claude Sonnet 5 / Claude Code / VS Code
- **Mensagem do Commit**: "docs(governance): pull fixed sync-skills scope, add Skills Globais section to CLAUDE.md"
- **Arquivos afetados**: `.claude/skills/sync-skills/SKILL.md`, `CLAUDE.md`, `NEWS.md`

## 2026-07-14 12:33 — 5 skills de mattpocock/skills instaladas via sync-skills, após triagem com o autor

Puxadas do repositório mãe: `grill-me`, `grilling`, `grill-with-docs`, `edit-article`, `code-review` — de [mattpocock/skills](https://github.com/mattpocock/skills), MIT. Instaladas fielmente ao original, fora do padrão config-driven das skills de governança. `sync-skills` também atualizada (mãe ganhou seção referenciando o plugin `superpowers`, instalado por outro agente em paralelo). Detalhe completo em `../agentic-research-template/9-vers/plan/2026-07-14_Plano_Skills_Compartilhadas_TODO.md` § "Terceira rodada".

**Metadados de Execução**:
- **Data/Hora**: 2026-07-14 12:33 (Horário Local)
- **Agente**: Claude Sonnet 5 / Claude Code / VS Code
- **Mensagem do Commit**: "feat(governance): install 5 mattpocock/skills via sync-skills after triage"
- **Arquivos afetados**: `.claude/skills/grill-me/`, `.claude/skills/grilling/`, `.claude/skills/grill-with-docs/`, `.claude/skills/edit-article/`, `.claude/skills/code-review/`, `.claude/skills/sync-skills/`, `CLAUDE.md`, `NEWS.md`

## 2026-07-14 11:50 — Reversão: disable-model-invocation removido de close-task/git-cleanup/sync-skills, a pedido do autor

O autor decidiu manter essas 3 skills como model-invoked (padrão) — flag removida, puxada do repositório mãe já revertido. Nenhuma outra mudança de conteúdo. (Registro retroativo: o commit `0120769` já tinha feito a mudança nos arquivos, mas sem entrada de `NEWS.md` correspondente na hora — corrigido aqui.)

**Metadados de Execução**:
- **Data/Hora**: 2026-07-14 11:50 (Horário Local)
- **Agente**: Claude Sonnet 5 / Claude Code / VS Code
- **Mensagem do Commit**: "docs(governance): register missing NEWS entry for disable-model-invocation revert"
- **Arquivos afetados**: `NEWS.md`

## 2026-07-14 11:30 — Skills compartilhadas renomeadas para inglês e agora byte-idênticas à mãe; pdf-text-extractor adicionada; seção "Configuração de Skills" criada

Skills renomeadas (`finalizar-tarefa`→`close-task`, `exportar-conversa`→`export-conversation`, `limpar-pendencias-git`→`git-cleanup`, `sincronizar-skills`→`sync-skills`) e reinstaladas via `sync-skills -Apply all` a partir do repositório mãe já reescrito — agora byte-idênticas (relatório mostra "em dia" para as 6). `pdf-text-extractor` (com `scripts/extract_pdf.R`) chega a este projeto pela primeira vez. Nova seção `## Configuração de Skills` no `CLAUDE.md`, com os valores reais deste projeto (`diretorio_autoria_primaria` = `3-texts/`; `script_exportar_conversa` = `tools/export_conversa.R`; `arquivo_gerenciado_externamente` deixado como placeholder — nenhum `.bib`/biblioteca de citação identificado ainda). `tools/sync-skills.ps1`/`.sh` atualizados para a versão que compara/copia a pasta inteira de cada skill. Motivo da mudança e detalhe completo: `../agentic-research-template/9-vers/plan/2026-07-14_Plano_Skills_Compartilhadas_TODO.md` § "Segunda rodada".

**Metadados de Execução**:
- **Data/Hora**: 2026-07-14 11:30 (Horário Local)
- **Agente**: Claude Sonnet 5 / Claude Code / VS Code
- **Mensagem do Commit**: "refactor(governance): rename shared skills to English, make them config-driven, add pdf-text-extractor"
- **Arquivos afetados**: `.claude/skills/close-task/`, `.claude/skills/export-conversation/`, `.claude/skills/git-cleanup/`, `.claude/skills/sync-skills/`, `.claude/skills/pdf-text-extractor/`, `CLAUDE.md`, `tools/sync-skills.ps1`, `tools/sync-skills.sh`, `NEWS.md`

## 2026-07-14 10:15 — Adoção do mecanismo de skills compartilhadas entre projetos e convenção definitiva de TODO.md

`TODO.md` reformatado para a convenção definitiva (3 seções — Pendente/Prospectivo/Concluído, cada item com data+hora e agente/humano de criação e conclusão, link para plano em `9-vers/plan/`), preservando os 3 itens reais já existentes (`Inicializar repositório...`, `Revisar as citações...`, `Definir estratégia...`). Copiados `tools/sync-skills.ps1`/`.sh` e a skill `sincronizar-skills` do repositório mãe (`agentic-research-template`). Testado de ponta a ponta: relatório dry-run mostrou `exportar-conversa`/`finalizar-tarefa`/`limpar-pendencias-git`/`sincronizar-skills` "em dia" e `request-audit` "NOVA"; `--apply request-audit` copiou o arquivo (confirmado byte-idêntico ao da mãe) sem commitar nada automaticamente. Achado incidental: `CLAUDE.md`/`AGENTS.md` nunca tinham sido de fato hard-linkados neste repositório (contagem de links = 1, conteúdos já divergentes desde a criação) — corrigido pelo self-heal do validador. Documentado em `CLAUDE.md`/`AGENTS.md`: nova linha de `TODO.md` na tabela de guidance documents (não existia) e nova seção "Skills Compartilhadas Entre Projetos". Detalhe completo do mecanismo no repositório mãe: `../agentic-research-template/9-vers/plan/2026-07-14_Plano_Skills_Compartilhadas_TODO.md`.

**Metadados de Execução**:
- **Data/Hora**: 2026-07-14 10:15 (Horário Local)
- **Agente**: Claude Sonnet 5 / Claude Code / VS Code
- **Mensagem do Commit**: "feat(governance): adopt shared-skills sync mechanism and definitive TODO.md convention"
- **Arquivos afetados**: TODO.md, CLAUDE.md, AGENTS.md, .github/copilot-instructions.md, .claude/skills/request-audit/SKILL.md, .claude/skills/sincronizar-skills/SKILL.md, tools/sync-skills.ps1, tools/sync-skills.sh, NEWS.md

## 2026-07-13 22:37 — Sincronização de Governança com a Tese

Atualização massiva do template para incorporar as últimas travas de segurança desenvolvidas no repositório da tese. As mudanças incluem o self-heal de links (com UNC guard e system2), parser YAML mais tolerante, checks T5/T6 e genericização das ferramentas para uso em novos projetos.

**Metadados de Execução**:
- **Data/Hora**: 2026-07-13 22:37 (Horário Local)
- **Agente**: Antigravity / Gemini 1.5 Pro / Antigravity IDE
- **Mensagem do Commit**: "chore: finalização da tarefa sincronizacao-governanca"
- **Arquivos afetados**: tools/validate-governance.R, CLAUDE.md, NEWS.md, setup.ps1, setup.sh, hooks/, .claude/skills/, 9-vers/plan/

## YYYY-MM-DD HH:MM — [Título Curto da Entrega/Decisão]

[Descreva aqui em prosa contínua as principais decisões de design, mudanças de arquitetura e evolução do projeto implementadas nesta sessão.]

**Metadados de Execução**:
- **Data/Hora**: YYYY-MM-DD HH:MM (Horário Local)
- **Agente**: [Nome do Agente] / [Modelo] / [Plataforma] (ex: Antigravity / Gemini 1.5 Pro / Antigravity CLI)
- **Mensagem do Commit**: "sua mensagem de commit aqui"
- **Arquivos afetados**: caminho/do/arquivo1, caminho/do/arquivo2
