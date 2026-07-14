---
tipo: Plano
titulo: "Incorporar o rascunho em português (André) na versão em inglês do artigo"
status: CONCLUÍDO
criado: "2026-07-14 14:18"
concluido: "2026-07-14 17:40"
agentes:
  orquestrador: "Claude Sonnet 5 (Claude Code, VS Code)"
  executor: "Claude Sonnet 5 (Claude Code, VS Code)"
  auditor: null
autor_humano: "Tales Mançano"
tarefas:
  - { desc: "Mesclar Seção 1 (Introduction + abstract)", status: concluido, data: "2026-07-14 16:53" }
  - { desc: "Mesclar Seção 2 (Reframing the Relationship)", status: concluido, data: "2026-07-14 16:53" }
  - { desc: "Mesclar Seção 3 (Context: histórico do CADE)", status: concluido, data: "2026-07-14 16:53" }
  - { desc: "Mesclar Seção 4 (The Gerdau–Pains Case)", status: concluido, data: "2026-07-14 16:53" }
  - { desc: "Mesclar Seção 5 (The Ambev Case)", status: concluido, data: "2026-07-14 16:53" }
  - { desc: "Mesclar Seção 6 (Discussion) — sem gaps, deixada intacta", status: concluido, data: "2026-07-14 16:53" }
  - { desc: "Mesclar Seção 7 (Conclusion)", status: concluido, data: "2026-07-14 16:53" }
  - { desc: "Adicionar seção References temporária com as ~50 referências do PT", status: concluido, data: "2026-07-14 16:53" }
  - { desc: "Sinalizar discrepâncias de citação (Bork, Khan, Mahoney & Thelen, Klüger, e outras encontradas na execução) para os autores resolverem", status: concluido, data: "2026-07-14 16:53" }
  - { desc: "Conferir o .qmd contra o .bib real (gerado por Tales) e ajustar as chaves de citação", status: concluido, data: "2026-07-14 17:26" }
relacionados:
  - "9-vers/plan/2026-07-14_Plano_Revisao_Artigo_Coautor.md (tarefa 'inserir trechos em português' agora coberta por este plano)"
  - "2026-07-14_1319_incorporar-rascunho-pt_conversa-claude.md"
  - "2026-07-14_1319_fechar-tarefa-pt-bib_conversa-claude.md"
news: []
---

# Plano — Incorporar o rascunho em português na versão em inglês do artigo

> **Status**: EM EXECUÇÃO
> **O que é este documento**: roteiro para traduzir e mesclar o rascunho em português (`2026 Antitrust as industrial policy - Nahoum & Mançano.md`, fornecido por Tales/André) na versão em inglês do artigo (`3-texts/Nahoum-Mancano-2026-Antitrust-Article.qmd`), preservando a estrutura de 7 seções já existente.
> **Elaborado por**: Claude Sonnet 5 (Claude Code, VS Code), em modo de planejamento, com aprovação do autor.
> **Por quê**: o rascunho em português é muito mais desenvolvido que o esqueleto em inglês atual — tem resumo, revisão de literatura mais rica, os dois casos com citações e depoimentos reais de fontes primárias, conclusão e ~50 referências completas. Ele resolve, com fonte real, quase todos os ~14 marcadores `[...]{.mark}` que o plano anterior (`2026-07-14_Plano_Revisao_Artigo_Coautor.md`) havia catalogado como pendências.
> **Como usar**: seguir a Seção 1 (mapeamento) para saber onde cada trecho do PT vai; executar a Seção 2 (mudanças propostas) seção por seção, uma edição incremental por vez no `.qmd`, validando com `quarto render` a cada passo.

---

## 0. Decisões confirmadas com o autor (2026-07-14)

1. Manter as 7 seções atuais do `.qmd` em inglês (Intro / Reframing / Context / Gerdau / Ambev / Discussion / Conclusion); encaixar o conteúdo do PT dentro delas, mesmo quando isso exigir dividir as seções do PT (que têm organização diferente).
2. Falas diretas em português (Jobim, FHC, executivos, conselheiros do CADE) devem ser **traduzidas para inglês apenas** no corpo do texto — sem manter o original em nota de rodapé.
3. Nenhum arquivo `.bib` ou seed de referências será criado nesta rodada — o autor vai selecionar as referências no próprio Zotero para mandar ao `.bib` gerenciado (fluxo já definido no plano `2026-07-14_Plano_Revisao_Artigo_Coautor.md`).

## 1. Mapeamento de conteúdo (PT → seções do `.qmd` em inglês)

| Seção do `.qmd` (EN) | Conteúdo correspondente no PT | Observação |
|---|---|---|
| 1. Introduction | Resumo + Introdução | Resumo vira a base do `abstract:` no YAML (ausente hoje); Introdução do PT é mais rica (cita SEAE, fonte real do Malan) — usar como base, preservando o gancho retórico de abertura do EN atual se possível |
| 2. Antitrust and Industrial Policy: Reframing the Relationship | "As duas concepções de Antitruste e sua relação com a política industrial" | Tratamento bem mais longo de Brandeis/era progressista, Escola de Chicago/Williamson, virada institucionalista (Dobbin, Prasad) — literatura do Ergen (plano anterior, ainda pendente) entra depois, nesta seção ampliada |
| 3. Context: Liberalization, Institutional Reform... | Parágrafo de abertura sob "Criando as multinacionais verde-amarelas" — histórico do CADE (Vargas, Lei Malaia, criação em 1962, reforma de 1994) | Detalha a reforma de 1994 (autarquia, "notório saber jurídico ou econômico", "mercado relevante") com mais precisão |
| 4. The Gerdau–Pains Case | "Trajetória da Gerdau" + "Gerdau vs. Cade" | História completa da empresa + caso inteiro com citações reais (Jobim, Rodrigues-Chaves, FHC) e desfecho (expansão internacional) |
| 5. The Ambev Case | "Assédio estrangeiro à fusão das cervejarias nacionais" | Assédio de multinacionais, falas de De Marchi/Telles, oposição da Kaiser, fala de FHC sobre oligopólio, condições impostas, desfecho (fusão com Interbrew em 2004) |
| 6. Discussion | Primeira metade de "Conclusões" | Mecanismo de conversão institucional, antitruste como política industrial indireta |
| 7. Conclusion | Segunda metade de "Conclusões" | Definição de White, comparação EUA vs. Brasil sobre a "ameaça" a combater |

Notas de rodapé do PT (7 ao todo) mapeiam para as seções correspondentes e viram footnotes nativas do Quarto (`[^n]`).

**Discrepâncias de citação a sinalizar para os autores (não decidir sozinho)**:
- Bork: EN cita "Bork 1978", PT cita "Bork, 1974" no corpo, sem entrada na lista de referências do PT
- Khan: EN cita "Khan 2017", PT cita "Khan, 2016" no corpo, sem entrada na lista de referências do PT
- Mahoney & Thelen: EN cita "(2010)", PT cita "(2009)" (e a referência do PT também usa 2009)
- Footnote 7 do PT cita "Klüger (2015)" sem entrada correspondente na lista de referências

## 2. Cronograma de Tarefas (Checklist)

- [x] Mesclar Seção 1 (Introduction + abstract)
- [x] Mesclar Seção 2 (Reframing the Relationship)
- [x] Mesclar Seção 3 (Context: histórico do CADE)
- [x] Mesclar Seção 4 (The Gerdau–Pains Case)
- [x] Mesclar Seção 5 (The Ambev Case)
- [x] Mesclar Seção 6 (Discussion) — sem marcadores pendentes; o PT não trouxe fato ou citação nova além do que já estava dito, deixada intacta
- [x] Mesclar Seção 7 (Conclusion)
- [x] Adicionar seção `## References` temporária com as ~50 referências do PT (texto simples, a ser substituída por `@citekey` quando o `.bib` existir)
- [x] Sinalizar discrepâncias de citação (Bork, Khan, Mahoney & Thelen, Klüger, e outras encontradas na execução) para os autores resolverem
- [x] Validar com `quarto render` após cada seção mesclada
- [ ] Atualizar `NEWS.md`/`TODO.md` e pedir aprovação para commit (diretório de autoria protegida) — próximo passo

## 3. Plano de Validação e Verificação

### Verificação Manual
- Após cada seção mesclada, rodar `quarto render 3-texts/Nahoum-Mancano-2026-Antitrust-Article.qmd --to html` para confirmar front matter válido, footnotes resolvendo, sem markup quebrado.
- Ao final, revisão de leitura completa comparando cada citação/fato numérico (percentuais de mercado, datas, nomes) entre a versão em português e a tradução em inglês, para garantir fidelidade.
- Rodar `Rscript tools/validate-governance.R` antes de qualquer commit.

## 4. Nota de execução: correção de rumo a meio da tarefa (precedência do texto do Nahoum)

Nas Seções 1 e 2, a primeira passada da mesclagem foi longe demais: reescreveu frases inteiras do Nahoum com base no PT, mesmo em pontos onde a frase original já cobria bem o mesmo conteúdo (ex.: trocou as citações originais Berk 1994/Hovenkamp 2005 por White/Sokol na Seção 2, sem necessidade). O autor interrompeu a sessão e corrigiu o rumo: **o texto em inglês do Nahoum é a versão mais recente e tem precedência sobre o PT** — o PT deve ser usado só para preencher lacunas concretas (marcadores `[...]{.mark}`, placeholders como `[ADD SOURCE]`/`[INSERT QUOTE...]`) e para adicionar material genuinamente novo (histórico da empresa, detalhes processuais, citações reais), nunca para substituir frases que já estavam boas. As Seções 1 e 2 foram revertidas ao texto original do Nahoum (só com os placeholders preenchidos e as citações reformatadas); a Seção 3 teve seus trechos substituídos devolvidos ao original, com o conteúdo novo do PT inserido ao redor em vez de por cima. Esse princípio foi aplicado desde então em todas as seções seguintes (4-7): cada frase original do Nahoum permanece intacta; todo o material novo do PT (citações reais, depoimentos, contexto histórico) entra como inserção adicional.

**Convenção de citação adotada nesta sessão**: todas as citações de literatura acadêmica (livros, artigos, teses, peças jornalísticas que constam na lista de Referências) foram convertidas para chaves estilo Better BibTeX, usando a fórmula `(authEtal2(creator="author", initials=false, sep="-") || authEtal2(creator="editor", initials=false, sep="-")) + year` — ou seja, `Sobrenome` + `Ano` para um autor, `Sobrenome1-Sobrenome2` + `Ano` para dois, `Sobrenome1EtAl` + `Ano` para três ou mais (sem diacríticos, para compatibilidade com BibTeX). Citações de fontes primárias/arquivísticas (votos e autos do CADE, ex. "Votos AC 16-1994, p. 947–949") permanecem como citação parentética em texto simples, seguindo a própria convenção do PT, já que não são entradas de referência bibliográfica. Quando o nome do autor já aparece na frase, usa-se a sintaxe de supressão do Pandoc (`[-@citekey]`) para não repetir o nome.

**Discrepâncias de citação encontradas e sinalizadas (não resolvidas unilateralmente — aguardando confirmação dos autores)**, listadas na seção `## References` do `.qmd` com a marca `[MISSING]` ou nota inline:
- Bork: "1978" (EN) vs. "1974" (PT), sem referência completa em nenhum dos dois rascunhos.
- Khan: "2017" (EN) vs. "2016" (PT), sem referência completa em nenhum dos dois rascunhos.
- Mahoney & Thelen: "2010" (EN) vs. "2009" (PT e a própria referência do PT); mantido 2010 por seguir o rascunho do Nahoum.
- Berk: "1994" (EN) vs. "2009" (PT) — podem ser trabalhos diferentes do mesmo autor; não resolvido.
- White: citado como "2008" nos dois rascunhos, mas a única referência completa encontrada lista 2010.
- Onto: toda citação no corpo do PT usa "2017", mas a entrada de referência do próprio PT lista "2016" — padronizado para 2017 (o uso predominante).
- Carvalho: citado como "et al., 2012" no corpo do PT, mas a referência completa é de dois autores (Carvalho & Ragazzo) e data 2013.
- Folha (2004): duas peças diferentes de 2004 na lista de referências do PT; a citação genérica "(Folha, 2004)" no corpo não diz qual.
- Sem referência completa em nenhum dos dois rascunhos: Hovenkamp 2005, Juhász/Lane/Rodrik 2023, Rodrik 2021, Dobbin 1994/1997, Prasad 2006/2015, Fernandes & Prates 2000, Lo Prete 1999, Nassif 1995, Teixeira 2001, Vieira 2007, Lannes 2014, Klüger 2015 (nota de rodapé 7 do PT).

Todas essas notas estão reproduzidas na seção `## References` do `.qmd`, para que os autores resolvam ao popular o Zotero.
