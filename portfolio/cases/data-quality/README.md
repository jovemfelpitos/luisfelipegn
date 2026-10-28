# Higienização e integração de dados

> Engenharia de dados aplicada · Estudo de caso técnico

**Python · FastAPI · Polars · PyArrow · DuckDB · Parquet · SQLite · React**

**Estado:** em desenvolvimento · estudo de caso público.

![Higienizador — desktop](images/desktop.jpg)

Interface real de upload em execução local, sem carregar arquivos de clientes. O backend de processamento não foi exercitado; as consultas de apoio receberam respostas locais simuladas.

<details>
<summary>Ver no celular</summary>

Registro do layout atual no celular: a barra lateral ocupa espaço excessivo e a adaptação responsiva ainda está pendente. A interface demonstrada prioriza desktop.

<img src="images/mobile.jpg" alt="Higienizador — celular" width="320">

</details>

## O problema

Bases recebidas em planilhas precisam de validação, padronização e segmentação antes de serem utilizadas por uma operação comercial.

## A solução

Um fluxo dividido em três motores: receber e padronizar dados; aplicar filtros e extrair lotes; formatar e integrar os lotes com uma plataforma de discagem.

## Funcionalidades representadas

- Leitura, validação e padronização de arquivos.
- Processamento tabular com Polars e armazenamento Parquet.
- Filtros e orquestração de extrações.
- Modelos e formatadores para diferentes saídas.
- Cliente de integração externa e serviço de auditoria.

## Arquitetura

```mermaid
flowchart LR
  E[Arquivos de entrada] --> V[Validar e padronizar]
  V --> P[(Parquet)]
  P --> F[Filtros e extração]
  F --> L[Lotes formatados]
  L --> X[Download / integração externa]
  F --> A[Auditoria]
  A --> S[(SQLite)]
```

## Decisões técnicas

| Estrutura representada | Finalidade |
| :--- | :--- |
| Motores separados | Distinguir ingestão, seleção e entrega de dados. |
| Parquet | Adotar armazenamento colunar para o processamento tabular. |
| SQLite operacional | Separar configurações e auditoria das bases de processamento. |

As finalidades são uma interpretação técnica da estrutura local, não uma transcrição de decisões formais.

## Estado e limites

Estudo documental baseado no README, dependências e módulos locais de leitura, validação, padronização, filtros, formatadores e auditoria. A interface de upload foi demonstrada localmente; o pipeline completo e a implantação não foram verificados. Tempos de processamento, volumes suportados e ganhos percentuais não foram medidos nesta publicação.

## Publicação

Não inclui código original, dados de clientes, bancos, credenciais ou regras específicas. O diagrama é um resumo de apresentação. São publicadas capturas locais; não há demo pública executável.

[Voltar ao portfólio](../../README.md)
