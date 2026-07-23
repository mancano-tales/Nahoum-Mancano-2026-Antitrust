# llm-reviews/ — Histórico e Auditoria de Sessões de IA (Conversas)

Este diretório contém o registro histórico e a trilha de auditoria das conversas com agentes de IA (Claude Code, Antigravity, etc.) que resultaram em mudanças significativas no projeto.

---

## Convenção de Nomenclatura

Os arquivos de conversa exportados devem seguir o padrão:
```
YYYY-MM-DD[_HHMM]_slug-descritivo_conversa-<fonte>.md
```
Onde `<fonte>` representa a IA ou plataforma utilizada (ex: `claude`, `antigravity`, `perplexity`, `gemini`).

---

## Como Exportar Conversas

Utilize a skill `export-conversation` (ou `close-task`, que já a executa como parte da cerimônia de encerramento), ou rode diretamente o script utilitário em R:
```bash
Rscript tools/export_conversa.R <session_uuid> [slug]
```
> **Fonte de verdade do caminho**: a chave `script_exportar_conversa` em `CLAUDE.md` § "Configuração de Skills". Se este README divergir dela, o `CLAUDE.md` prevalece — corrija aqui, não lá.

O primeiro argumento aceita o UUID da sessão (ou um prefixo dele) ou o caminho completo do `.jsonl`. O script lê o arquivo de log JSONL original da sessão — Claude Code ou Antigravity — e converte-o para Markdown estruturado (com timestamps e raciocínios internos em seções recolhíveis `<details>`), gravando direto nesta pasta já com o nome no padrão acima. Após a exportação, registre a nova entrada na tabela de inventário abaixo.

---

## Inventário de Conversas

| Arquivo | Tipo | Fonte | Assunto |
|---|---|---|---|
| `2026-07-15_2028_revisao-ripe-literatura-citacoes_conversa-claude.md` | Sessão de Trabalho | Claude Code | Avaliação crítica de prontidão do artigo para submissão à RIPE; incorporação de Foster & Thelen (2024/2025) na Seção 2 e na Discussion via framework de coordination rights; revisão ortográfica/gramatical completa do `.qmd` (typos mecânicos + 5 problemas substantivos de estrutura de frase); resolução do marcador `[Citação do Processo?]` do caso Ambev buscando diretamente nos autos originais (CADE AC 08012.005846/1999-12) e geração das entradas BibTeX correspondentes; diagnóstico de incorporação de Ergen & Kohl (2019, RIPE) — economização effect-based/form-based, mecanismo de personnel replacement, contraste com o caso alemão Daimler-MBB — registrado como plano, não executado; `/git-cleanup` e `/close-task` ao final, incluindo o achado de um bug de deduplicação no sincronizador do índice de planos sob concorrência real com outra sessão |
| `2026-07-15_1455_organizar-pasta-file_conversa-claude.md` | Sessão de Trabalho | Claude Code | Sessão `/grill-me` para fechar decisões de design sobre a reorganização de `file/` (971MB de fontes primárias brutas, sem estrutura), seguida da execução do plano registrado (`9-vers/plan/2026-07-15_Plano_Organizar_Pasta_File.md`): renomeação/reorganização em 6 subpastas por tipo, `README.md` versionado, deleção do `.zip` duplicado de 876MB, e remoção de 2 arquivos-lixo |
| `2026-07-14_1319_fechar-tarefa-pt-bib_conversa-claude.md` | Sessão de Trabalho | Claude Code | Continuação da sessão de incorporação do rascunho PT: conferência do `.qmd` contra o `.bib` real gerado por Tales (renomeação de 3 chaves, lista de ~22 faltantes, ambiguidade Khan), e cerimônia de encerramento (`/close-task`) |
| `2026-07-14_1319_incorporar-rascunho-pt_conversa-claude.md` | Sessão de Trabalho | Claude Code | Correção da conversão .docx→.qmd, preenchimento do CLAUDE.md, e incorporação do rascunho em português na versão em inglês do artigo (com correção de rumo sobre precedência do texto do Nahoum) |
| `2026-07-13_2225_sincronizacao-governanca_conversa-antigravity.md` | Sessão de Trabalho | Antigravity | Sincronização de governança com tese principal |
| `2026-07-14_1628_zotero-colecao-citacoes_conversa-claude.md` | Sessão de Trabalho | Claude Code | Interrogação via `/grill-me` sobre como automatizar a montagem da coleção do Zotero com as referências citadas no artigo (EN) e no rascunho em português; levantamento das ~50 referências e das discrepâncias de ano entre os dois arquivos; script `tools/zotero-build-citation-collection.js` (Run JavaScript do Zotero) criado, testado localmente (extração), e corrigido após uma primeira execução real revelar busca solta demais e contaminação cruzada de anos alternativos entre citações homônimas |
