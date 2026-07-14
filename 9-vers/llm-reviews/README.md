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

Utilize a skill ou execute diretamente o script utilitário em Python:
```bash
python tools/export_conversa.py <session_uuid> [slug]
```
O script lê o arquivo de log JSONL original da sessão e converte-o para Markdown estruturado (com timestamps e raciocínios internos em seções recolhíveis `<details>`). Após a exportação, registre a nova entrada na tabela de inventário abaixo.

---

## Inventário de Conversas

| Arquivo | Tipo | Fonte | Assunto |
|---|---|---|---|
| `2026-07-14_1319_fechar-tarefa-pt-bib_conversa-claude.md` | Sessão de Trabalho | Claude Code | Continuação da sessão de incorporação do rascunho PT: conferência do `.qmd` contra o `.bib` real gerado por Tales (renomeação de 3 chaves, lista de ~22 faltantes, ambiguidade Khan), e cerimônia de encerramento (`/close-task`) |
| `2026-07-14_1319_incorporar-rascunho-pt_conversa-claude.md` | Sessão de Trabalho | Claude Code | Correção da conversão .docx→.qmd, preenchimento do CLAUDE.md, e incorporação do rascunho em português na versão em inglês do artigo (com correção de rumo sobre precedência do texto do Nahoum) |
| `2026-07-13_2225_sincronizacao-governanca_conversa-antigravity.md` | Sessão de Trabalho | Antigravity | Sincronização de governança com tese principal |
| `2026-07-14_1628_zotero-colecao-citacoes_conversa-claude.md` | Sessão de Trabalho | Claude Code | Interrogação via `/grill-me` sobre como automatizar a montagem da coleção do Zotero com as referências citadas no artigo (EN) e no rascunho em português; levantamento das ~50 referências e das discrepâncias de ano entre os dois arquivos; script `tools/zotero-build-citation-collection.js` (Run JavaScript do Zotero) criado, testado localmente (extração), e corrigido após uma primeira execução real revelar busca solta demais e contaminação cruzada de anos alternativos entre citações homônimas |
