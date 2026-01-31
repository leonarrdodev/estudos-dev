# Exercício 04: A Caixa Preta (System Events & FS)

## Objetivo
Criar um sistema de log persistente que sobreviva ao encerramento da aplicação, capturando sinais do sistema (`SIGINT`) e erros não tratados (`uncaughtException`).

## Requisitos Técnicos
1.  **Preparação do Arquivo de Log**:
    -   Utilize `fs.createWriteStream` para abrir um arquivo chamado `system-logs.txt`.
    -   Configure a flag `'a'` (append) para não sobrescrever logs antigos.

2.  **Monitoramento de Ciclo de Vida**:
    -   Ao iniciar, escreva no arquivo: `[INFO] Sistema iniciado em: <Data Atual>\n`.
    -   Escute o evento `SIGINT` (Ctrl+C). Ao ocorrer:
        -   Escreva no arquivo: `[INFO] Encerrado manualmente.\n`.
        -   Encerre o processo com sucesso (`exit(0)`).

3.  **Tratamento de Falhas (Anti-Crash)**:
    -   Escute o evento `uncaughtException`. Ao ocorrer:
        -   Escreva no arquivo: `[CRASH] Erro não tratado: <Mensagem do Erro>\n`.
        -   Encerre o processo com código de erro (`exit(1)`).

4.  **Simulação de Caos**:
    -   Use um `setTimeout` para lançar um erro (`throw new Error(...)`) proposital após 3 segundos.
    -   *Teste 1:* Rode o app e espere o erro acontecer. Verifique o arquivo de log.
    -   *Teste 2:* Comente o erro, rode o app e aperte Ctrl+C. Verifique o log.