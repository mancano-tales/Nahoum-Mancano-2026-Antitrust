# CLAUDE.md — NahoumMancano2026-Antitrust-as-Industrial-Policy

> 🚨 **CRITICAL AGENT RULES (COVENANT) — READ FIRST:**
> - **RULE 1:** You are operating under the **Agent Covenant** framework. Every commit is audited. Run `Rscript tools/validate-governance.R` to test your edits before committing.
> - **RULE 2:** Any modification in the main source directories REQUIRES an update in the root `NEWS.md` file.
> - **RULE 3:** When completing a task or plan, you MUST run the conversation exporter to save your session log.
> - **For humans:** this file is for AI operating context. See [GUIDANCE.md](GUIDANCE.md) for the sitemap.

---

## Current State of the Project (version dated 2026-07-15)

> **Esta seção é a única fonte de verdade sobre a concepção ATUAL do projeto.** Alterações de design, arquitetura e decisões de negócio devem ser registradas aqui com a data correspondente. Versões arquivadas ou planos antigos em conflito com esta seção devem ser desconsiderados pelos agentes.

- **Descrição Geral**: Este repositório abriga o desenvolvimento do artigo acadêmico "*Antitrust as industrial policy: Government-Sponsored Mergers as Passive Industrial Policy in Brazil, 1995-2002*", de André Vereta-Nahoum e Tales Mançano. O artigo argumenta que a aplicação da lei antitruste brasileira sob Fernando Henrique Cardoso funcionou como uma forma **passiva e velada** de política industrial: apesar da negação discursiva explícita de política industrial por parte de policymakers (ex. Ministro Pedro Malan), o governo apoiou ativamente grandes fusões corporativas (Gerdau-Pains no aço; Antarctica-Brahma → Ambev em bebidas), justificadas pela necessidade de competitividade internacional. O mecanismo analítico central é a **"conversão institucional"** (Mahoney & Thelen 2010): as regras antitruste não foram formalmente alteradas, mas dois conceitos jurídicos-chave — "eficiência" e "mercado relevante" — foram reinterpretados na prática (definição de mercados como globais, não nacionais) para permitir concentração doméstica sob a linguagem formal de defesa da concorrência. Os dois casos empíricos (Gerdau/Pains e Ambev) são analisados via process tracing sobre decisões do CADE, pareceres técnicos, e cobertura da imprensa, com apoio computacional de LLMs (NotebookLM) apenas para organização do material — toda interpretação analítica é dos autores. O repositório usa o framework de governança Humano-IA do `agentic-research-template` (pasta irmã) para permitir que agentes de IA colaborem no texto e nas revisões de forma auditável.
- **Arquitetura / Componentes principais**:
  - `3-texts/Nahoum-Mancano-2026-Antitrust-Article.qmd`: o artigo em si, em formato Quarto (YAML com título/autores/keywords/formatos pdf+html+docx) — é o **texto de autoria primária**, convertido do `.docx` original em 2026-07-14. Contém marcadores de trabalho pendente dos próprios autores no estilo `[...]{.mark}` (ex. `[ADD EXACT SOURCE]`, `[citar processo]`, `[INSERT QUOTE FROM CARDOSO OR MINISTER]`) — agentes de IA **nunca devem inventar ou preencher essas citações/fontes**; apenas os autores humanos resolvem esses marcadores. Citações de literatura acadêmica usam chaves Better BibTeX (`[@Autor-Ano]`); citações de fontes primárias/arquivísticas (votos e autos do CADE) ficam em texto simples. Termina com `## Declaration of Generative AI Use` e `## References` (citeproc, populada a partir do `.bib` abaixo).
  - `_quarto.yml`: configuração de projeto Quarto (formatos html/pdf/docx de saída, `bibliography:` apontando para o `.bib` abaixo desde 2026-07-15, margens do PDF em `geometry: [a4paper, margin=2.54cm]` para bater com `Mancano2026-MA-Thesis`).
  - `Nahoum-Mancano-2026-Antitrust.bib`: biblioteca de citações real, exportada por Tales do seu Zotero (não é mais placeholder). É o **arquivo gerenciado externamente** deste projeto — nunca editar suas entradas manualmente; reexportar do Zotero. Das ~34 chaves `@citekey` usadas no `.qmd`, todas resolvem tecnicamente, mas 3 ainda são entradas-placeholder ("Referência Não Localizada", importadas honestamente como tal) sem conteúdo bibliográfico real: `LoPrete1999` e `Nassif1995` já têm referência completa aguardando reimportação no Zotero (ver `TODO.md`), `Rodrik2021` segue em busca por Tales.
  - `tools/zotero-build-citation-collection.js`: script para colar em Zotero → Tools → Developer → Run JavaScript; monta automaticamente no Zotero a coleção `Nahoum-Mancano-2026-Antitrust` com todas as referências citadas no `.qmd` (o rascunho em português que também alimentava esse script foi removido em 2026-07-15, ver `9-vers/previous-versions/` abaixo).
  - `9-vers/previous-versions/`: versões/insumos anteriores do texto atual que não são meras cópias do `.qmd` em outro formato (ex. `3_Relatório_Final_IC_FAPESP.rev2.docx`, o relatório final de Iniciação Científica da FAPESP que originou o esboço deste artigo — fonte de referências bibliográficas ainda faltantes no `.bib`). Cópias redundantes do `.qmd` em formato diferente (o `.docx` original pré-conversão, a extração bruta `draft_text.md`, o rascunho em português já incorporado seção por seção) foram deletadas em 2026-07-15 por decisão do autor, não movidas para cá.
  - `file/` e o `.zip` de mesmo conteúdo na raiz (ex. `[3] Atos de Concentração (CADE)-....zip`): material bruto de fontes primárias (autos do CADE dos casos Ambev/Gerdau-Pains/Brahma-Miller, atas do Congresso, entrevistas, pareceres) — **~1.8 GB combinado, gitignorado** (achado sem proteção em auditoria de 2026-07-15; corrigido). Nunca versionar; ver "Proibições Estritas" abaixo.
  - `docs/index.html`: página estática ("Agent Covenant" — manual de governança Humano-IA), herdada do `agentic-research-template`, não é conteúdo do artigo.
  - Tooling de governança (`tools/`, `hooks/`, `9-vers/`, skills em `.claude/skills/`): conforme documentado nas seções abaixo, herdado do `agentic-research-template`. Backups de self-heal do hard link `CLAUDE.md`/`AGENTS.md` (gerados por `tools/validate-governance.R` quando os dois arquivos divergem) vão para `9-vers/backups/` (gitignorado) desde 2026-07-15 — antes disso eram escritos direto na raiz do repositório.
- **Proibições Estritas (Standing Prohibitions)**:
  - Nunca execute `git add .` ou `git add -A`. Apenas adicione os arquivos específicos modificados (`git add <file>`).
  - **Proteção de autoria**: nunca faça commit de mudanças em `3-texts/` (o artigo `.qmd`) sem aprovação humana explícita nesta conversa — é o texto de autoria primária dos pesquisadores. Ver `diretorio_autoria_primaria` em "Configuração de Skills" abaixo.
  - **Proteção de externos**: `Nahoum-Mancano-2026-Antitrust.bib` é o arquivo gerenciado externamente deste projeto (export do Zotero/Better BibTeX) — nunca editar suas entradas manualmente nem sobrescrever com uma reexportação sem confirmar com o autor. Ver `arquivo_gerenciado_externamente` em "Configuração de Skills" abaixo.
  - **Nunca versionar material bruto**: `file/` e qualquer `.zip` de fontes primárias na raiz são gitignorados (~1.8 GB) — não remova essas entradas do `.gitignore` nem force `git add` neles.
  - Nunca preencha ou invente os marcadores `[...]{.mark}` de citação/fonte pendente deixados pelos autores no `.qmd` — sinalize-os ao autor humano em vez de resolvê-los silenciosamente.
- **Planos ativos**: consulte o índice de status em `9-vers/plan/README.md`.

---

## Guidance Documents: Map and Precedence Rules

**Regras de Precedência:**
1. Em caso de conflito, a seção "Current State" acima + o plano ativo em `9-vers/plan/` correspondente prevalecem sobre qualquer outro documento.
2. Arquivos marcados com banner de desatualização/arquivamento são mantidos apenas para histórico e não devem orientar o trabalho corrente.
3. Cada documento de diretriz possui uma função única (tabela abaixo).

**Mapa de Diretrizes de Apoio**:

| Documento | Público-alvo | Função | Gatilho de Atualização |
|---|---|---|---|
| `CLAUDE.md` (este) | Agentes de IA | Estado atual do projeto, regras críticas e convenções de build | Decisão de design ou mudança no estado |
| `TODO.md` | Ambos | Log append-only de tarefas — 3 seções (Pendente/Prospectivo/Concluído), item novo no topo, cada item com data+hora e agente/humano de criação e conclusão, e link para o plano em `9-vers/plan/` quando complexo | Toda sessão que cria, promove ou conclui uma tarefa |
| `README.md` | Humanos | O que é o projeto, guia de instalação e execução rápida | Mudança estrutural do repositório |
| `GUIDANCE.md` | Ambos | Sitemap rápido apontando para o sitemap completo de diretrizes | Layout de pastas alterado |
| `9-vers/plan/README.md` | Ambos | Índice e status de todos os planos de execução de tarefas | Criação ou mudança de status de plano |

---

## Git and LLM Documentation Conventions for AI Agents

- **Commits Permitidos**: Os agentes de IA estão autorizados a fazer commits diretamente no repositório.
- **Política de Staging Cirúrgico**: Agentes **NUNCA** devem utilizar `git add .`. Devem adicionar cirurgicamente apenas os arquivos nos quais trabalharam (ex: `git add src/main.js`). Isso preserva o trabalho em andamento do autor humano.
- **Synchronized Commit Policy (Co-committing)**: Cada commit contendo mudanças de funcionalidade ou documentação deve obrigatoriamente incluir a atualização do [NEWS.md](NEWS.md) (e o status do plano em `9-vers/plan/README.md` se aplicável) na *mesma transação de commit*. Todo log de agente no `NEWS.md` deve terminar com o bloco **Metadados de Execução**:
  - **Timestamp rigor**: a data isolada não é suficiente. Todo timestamp nos artefatos de governança deste repositório — o cabeçalho de entrada no `NEWS.md` (`## YYYY-MM-DD HH:MM — Título`), o campo `**Data/Hora**` no bloco de Metadados de Execução abaixo, e os campos YAML `criado`/`concluido` em `9-vers/plan/*.md` — **devem incluir hora e minuto**, no formato `YYYY-MM-DD HH:MM`, [seu fuso horário local]. Se a hora exata não puder ser recuperada confiavelmente do log da sessão, deixe apenas a data e explique o motivo em um comentário — nunca invente um horário.
  ```markdown
  **Metadados de Execução**:
  - **Data/Hora**: YYYY-MM-DD HH:MM (Horário Local)
  - **Agente**: [Nome do Agente] / [Modelo] / [Plataforma]
  - **Mensagem do Commit**: "sua mensagem aqui"
  - **Arquivos afetados**: caminho/do/arquivo1, caminho/do/arquivo2
  ```
- **Auditoria de Conversas**: Ao final de cada sessão, o agente deve exportar o histórico de conversa rodando o script:
  `Rscript tools/export_conversa.R <session_uuid> [slug]`
  E registrar a nova entrada na tabela de inventário em `9-vers/llm-reviews/README.md`.
- **Limites de Alteração e Segurança**:
  - **Sem exclusões não autorizadas**: Nunca delete arquivos de configuração, código-fonte, dependências ou bancos de dados sem autorização humana expressa.
  - **Escopo restrito**: Restrinja suas edições cirurgicamente aos arquivos mapeados no plano ativo. Refatorações globais ou alterações de dependências fora de plano são estritamente proibidas.
  - **Substituição incremental**: Prefira sempre editar blocos de código específicos (chunks) em vez de reescrever arquivos inteiros, economizando tokens e evitando a perda acidental de lógica de negócios.

---

## Skills Compartilhadas Entre Projetos

- **Skills de governança, autoria própria** (`close-task`, `request-audit`, `export-conversation`, `git-cleanup`, `sync-skills`, `pdf-text-extractor`): fonte canônica no repositório mãe `agentic-research-template` (pasta irmã). **São byte-idênticas neste projeto e na mãe** — nenhuma hardcoda caminho específico; particularidades deste projeto vêm da seção **"Configuração de Skills"** abaixo. Nenhuma tem `disable-model-invocation` hoje.
- **Skills portadas de terceiros** ([mattpocock/skills](https://github.com/mattpocock/skills), MIT): `grill-me`, `grilling`, `grill-with-docs`, `edit-article`, `code-review` — instaladas fielmente ao original. `grill-me`/`grill-with-docs`/`edit-article` têm `disable-model-invocation: true`; `grilling`/`code-review` são model-invoked. Gaps conhecidos: `grill-with-docs` referencia `/domain-modeling` (não instalada); `code-review` referencia um workflow de issue-tracker que não existe aqui.

Para puxar uma atualização, rode `tools/sync-skills.ps1`/`.sh` (relatório dry-run por padrão; `-Apply <skill>` para aplicar) ou use a skill `sync-skills`, que envolve o script com a cerimônia de revisão de diff e staging explícito.

---

## Skills Globais Disponíveis Neste Ambiente

> ⚠️ **Isto documenta o que está instalado nesta máquina/usuário em 2026-07-14, não este projeto.** Plugins globais do Claude Code vivem em `~/.claude/plugins/` — locais por máquina/usuário, não vêm junto num clone. Se você está lendo isto noutra máquina, **não assuma que o pacote abaixo está instalado** — confira com `/plugin list`.

**Regra de convivência**: skills de projeto (`close-task`, `git-cleanup`, etc.) tratam de governança específica do repositório; as globais tratam de processo de desenvolvimento geral — complementam, não substituem. **Atenção especial a `using-superpowers`**: exige invocação obrigatória por design ("YOU ABSOLUTELY MUST invoke the skill... not negotiable"), não "use quando aplicável" — as instruções do usuário sempre prevalecem.

### `superpowers` (pacote instalado via plugin)

| Skill | Quando usar |
|---|---|
| `superpowers:using-superpowers` | Ponto de entrada — invocação obrigatória por design (ver aviso acima) |
| `superpowers:brainstorming` | Antes de qualquer trabalho criativo: criar features, componentes ou modificar comportamento |
| `superpowers:writing-plans` | Ao receber spec ou requisitos de tarefa multi-passo, antes de tocar qualquer arquivo |
| `superpowers:executing-plans` | Ao executar um plano já escrito — em sessão separada, com checkpoints de revisão |
| `superpowers:subagent-driven-development` | Ao executar planos com tarefas independentes na sessão atual |
| `superpowers:dispatching-parallel-agents` | Ao enfrentar 2+ tarefas independentes que podem rodar sem estado compartilhado |
| `superpowers:using-git-worktrees` | Antes de feature work que precisa de isolamento do workspace atual |
| `superpowers:test-driven-development` | Antes de escrever código de implementação de qualquer feature ou bugfix |
| `superpowers:systematic-debugging` | Ao encontrar qualquer bug, falha de teste ou comportamento inesperado |
| `superpowers:requesting-code-review` | Ao concluir implementações ou antes de merge |
| `superpowers:receiving-code-review` | Antes de implementar sugestões de review, especialmente se parecerem questionáveis |
| `superpowers:verification-before-completion` | Antes de declarar trabalho concluído, antes de `close-task` |
| `superpowers:finishing-a-development-branch` | Quando implementação está completa e é preciso decidir como integrar |
| `superpowers:writing-skills` | Ao criar ou editar skills |

---

## Configuração de Skills (Skill Configuration)

> As skills genéricas acima consultam esta seção para qualquer dado específico deste projeto — nunca hardcodeiam.

| Chave | Usada por | Valor neste repositório |
|---|---|---|
| `diretorio_autoria_primaria` | `close-task`, `git-cleanup` | `3-texts/` — o artigo `.qmd`; nunca comitar sem autorização explícita do autor nesta conversa |
| `arquivo_gerenciado_externamente` | `git-cleanup` | `Nahoum-Mancano-2026-Antitrust.bib` — export do Zotero/Better BibTeX feito por Tales; nunca editar manualmente, reexportar do Zotero |
| `script_exportar_conversa` | `close-task`, `export-conversation` | `tools/export_conversa.R` |
| `diretorios_trabalho_continuo` | `git-cleanup` | `tools/` (utilitários novos — sempre exigem entrada em `NEWS.md`) |

---

## Technical Stack & Commands

### Tecnologia
- **Documento**: [Quarto](https://quarto.org) (`.qmd` → pdf/html/docx, configurado em `_quarto.yml`), com citações via Pandoc/citeproc e um `.bib` Better BibTeX gerenciado externamente pelo Zotero.
- **Tooling de governança**: R 4.4+ (`tools/validate-governance.R`, `tools/export_conversa.R`) e um script avulso para Zotero em JavaScript (`tools/zotero-build-citation-collection.js`, colado direto no console de Developer do Zotero — sem Node.js, sem `package.json`).
- **Banco de Dados**: nenhum. Não há aplicação de software neste repositório — é um projeto de escrita acadêmica com infraestrutura de governança Humano-IA em torno dele.

### Comandos Frequentes (Cheat Sheet)
*   **Renderizar o artigo**: `quarto render 3-texts/Nahoum-Mancano-2026-Antitrust-Article.qmd` (ou `quarto render` na raiz do projeto Quarto)
*   **Auditar governança (antes de commitar)**: `Rscript tools/validate-governance.R`
*   **Sincronizar índice de planos a partir do YAML**: `Rscript tools/validate-governance.R --sync`
*   **Exportar log de conversa de uma sessão**: `Rscript tools/export_conversa.R <session_uuid> [slug]`
*   **Testes Automatizados**: não há suíte de testes automatizados neste projeto (não é software aplicativo); a validação é a auditoria de governança acima e o `quarto render` bem-sucedido.
