# NEWS — Decisões de Design e Evolução Metodológica

> Entrada mais recente no topo.
> **Convenção de timestamp**: Todas as datas em cabeçalhos (## YYYY-MM-DD HH:MM) e no campo Data/Hora dos metadados DEVEM incluir hora e minuto no fuso local. Nunca use datas isoladas.

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
