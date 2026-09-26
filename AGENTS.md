# AGENTS.md — Nahoum-Mancano-2026-Antitrust

Contexto operacional para agentes de IA. É o **único** arquivo de instruções: o `CLAUDE.md` contém só `@AGENTS.md` e o `.github/copilot-instructions.md` só aponta para cá. Para humanos: `README.md` e `GUIDANCE.md`. A história de cada decisão está no `NEWS.md`.

## 1. O que é

Artigo "*Antitrust as industrial policy: Government-Sponsored Mergers as Passive Industrial Policy in Brazil, 1995-2002*", de André Vereta-Nahoum e Tales Mançano.

**Argumento central.** Sob FHC, a aplicação da lei antitruste funcionou como política industrial **passiva e velada**. O governo negava ter política industrial, mas apoiou grandes fusões (Gerdau-Pains no aço; Antarctica-Brahma → Ambev) em nome da competitividade internacional.

**Mecanismo: conversão institucional** (Mahoney & Thelen 2010). As regras não mudaram; "eficiência" e "mercado relevante" (mercados globais, não nacionais) foram reinterpretados na prática.

**Método.** Process tracing sobre decisões do CADE, pareceres e imprensa. LLMs (NotebookLM) servem só para organizar o material; a interpretação é dos autores.

## 2. Estrutura

| Caminho | O que é |
|---|---|
| `3-texts/Nahoum-Mancano-2026-Antitrust-Article.qmd` | O artigo (Quarto → pdf/html/docx). **Autoria primária.** |
| `_quarto.yml` | Formatos, `bibliography:` e margens (`a4paper, 2.54cm`, iguais às da tese) |
| `Nahoum-Mancano-2026-Antitrust.bib` | Export do Zotero/Better BibTeX feito por Tales. **Gerenciado externamente.** |
| `tools/zotero-build-citation-collection.js` | Colar em Zotero → Tools → Developer → Run JavaScript: monta a coleção com as referências citadas no `.qmd` |
| `file/` e `.zip` de fontes primárias na raiz | Autos do CADE, atas, entrevistas (~1,8 GB). **Gitignorados.** Cópia no Drive/SSD via `.data-source` (`file/README.md`) |
| `9-vers/` | Governança: `plan/` (índice em `plan/README.md`), `llm-reviews/`, `previous-versions/` (insumos anteriores, ex. relatório FAPESP), `backups/` (gitignorado) |
| `docs/index.html` | Página do "Agent Covenant", herdada do template; não é conteúdo do artigo |

## 3. Regras

- **Staging cirúrgico**: `git add <arquivo>`; nunca `git add .`/`-A`.
- **Co-commit**: toda mudança leva, no mesmo commit, a entrada no `NEWS.md` e, se for o caso, o status do plano em `9-vers/plan/README.md`. Cada entrada de agente termina com o bloco abaixo. **Convenção deste repo: cabeçalho `## YYYY-MM-DD HH:MM — Título` e `Data/Hora` no fuso local.** Se a hora não for recuperável, só a data, e nunca invente.
  ```markdown
  **Metadados de Execução**:
  - **Data/Hora**: YYYY-MM-DD HH:MM (Horário Local)
  - **Agente**: [Nome] / [Modelo] / [Plataforma]
  - **Mensagem do Commit**: "..."
  - **Arquivos afetados**: ...
  ```
- **`TODO.md`**: Pendente/Prospectivo/Concluído, item novo no topo, com data e agente/humano de criação e de conclusão, e link para o plano quando for complexo.
- **Autoria**: nunca commitar mudança em `3-texts/` sem aprovação explícita do autor na conversa.
- **Marcadores `[...]{.mark}`** no `.qmd` (ex. `[ADD EXACT SOURCE]`, `[citar processo]`) são pendências dos autores: **nunca invente nem preencha** citação ou fonte; aponte-as ao autor.
- **Citações**: literatura acadêmica usa chaves Better BibTeX (`[@Autor-Ano]`); fontes primárias (votos e autos do CADE) ficam em texto simples.
- **`.bib`**: nunca editar entradas à mão nem sobrescrever com reexportação sem confirmar com o autor.
- **Material bruto**: nunca tirar `file/` nem os `.zip` do `.gitignore` e nunca forçar `git add` neles.
- **Escopo e exclusões**: edite só o que o plano ativo cobre, prefira edições pontuais e nunca apague arquivo sem o autor.
- **Exportar conversa só quando o autor pedir**, uma vez por sessão (nunca ao fim de toda tarefa): `Rscript tools/export_conversa.R <session_uuid> [slug]`, registrando em `9-vers/llm-reviews/README.md`.

## 4. Comandos

- Renderizar: `quarto render 3-texts/Nahoum-Mancano-2026-Antitrust-Article.qmd` (ou `quarto render` na raiz)
- Auditar governança antes de commitar: `Rscript tools/validate-governance.R`; sincronizar o índice de planos: `--sync`
- Não há suíte de testes: a validação é o validador acima mais um `quarto render` sem erro.

## 5. Armadilhas atuais

- Três chaves do `.bib` ainda são placeholders ("Referência Não Localizada"): `LoPrete1999` e `Nassif1995` aguardam reimportação no Zotero; `Rodrik2021` ainda está sendo procurada por Tales (ver `TODO.md`).
- Skills em `.claude/skills/` vêm do `agentic-workflow-template` (governança) e de [mattpocock/skills](https://github.com/mattpocock/skills) (`grill-*`, `edit-article`, `code-review`). Atualize-as com `tools/sync-skills.ps1`/`.sh` (relatório; `-Apply <skill>`), nunca à mão.

## 6. Configuração de Skills

| Chave | Usada por | Valor neste repositório |
|---|---|---|
| `diretorio_governanca` | `close-task`, `export-conversation`, `git-cleanup`, `request-audit` | `9-vers/` |
| `diretorio_autoria_primaria` | `close-task`, `git-cleanup` | `3-texts/` |
| `arquivo_gerenciado_externamente` | `git-cleanup` | `Nahoum-Mancano-2026-Antitrust.bib` |
| `script_exportar_conversa` | `close-task`, `export-conversation` (só quando o autor pedir) | `tools/export_conversa.R` |
| `diretorios_trabalho_continuo` | `git-cleanup` | `tools/` (utilitário novo sempre com entrada no `NEWS.md`) |
