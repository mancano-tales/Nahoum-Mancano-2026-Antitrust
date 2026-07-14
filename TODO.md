# TODO — Registro de Pendências (Governança Append-Only)

> **Regra de Governança:** este arquivo **nunca** tem itens apagados. Itens concluídos são **movidos** (não editados retroativamente) para o topo de "Concluído" — log cronológico, mais recente primeiro, igual ao `NEWS.md`. Todo item registra data+hora de criação (`YYYY-MM-DD HH:MM`, horário local) e quem criou (agente e humano); ao concluir, soma-se data+hora e quem concluiu. Itens complexos (múltiplas etapas, decisão arquitetural) linkam o plano correspondente em `9-vers/plan/YYYY-MM-DD_Plano_*.md` — o TODO é o índice curto, o plano é o detalhe. Agentes de IA devem consultar este arquivo ao iniciar rodadas complexas de planejamento, para alinhamento com a agenda pendente **e** prospectiva.
>
> **Três seções**: "Pendente" = pronto para ser trabalhado agora. "Prospectivo" = identificado mas não pronto ainda (falta decisão, depende de outra tarefa, ou é backlog de menor prioridade) — quando ficar pronto, é **movido** para o topo de "Pendente" preservando a data de criação original. "Concluído" = feito.

## Pendente

- [ ] Revisar as citações e referências no `.qmd`
  - Criado: 2026-07 (timestamp exato não registrado na criação original — retroativo, mantido só-data)

- [ ] Definir estratégia de publicação/journal para submissão do artigo
  - Criado: 2026-07 (timestamp exato não registrado na criação original — retroativo, mantido só-data)

## Prospectivo

## Concluído

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
