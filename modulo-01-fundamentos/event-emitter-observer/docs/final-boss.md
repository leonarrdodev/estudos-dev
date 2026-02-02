# FINAL BOSS: O "Log-Ingestor" Resiliente

## Contexto
Você foi contratado para construir o núcleo de um sistema de ingestão de logs. Esse sistema deve receber logs de diversas fontes, processá-los e salvá-los, mas precisa ser extremamente resistente a falhas e vazamentos de memória.

## Requisitos Funcionais
1.  **Classe Ingestor**:
    -   Crie uma classe `LogIngestor` que estenda (herança) ou componha internamente um `EventEmitter`.
    -   Ela deve ter um método `ingest(logMessage: string)` que emite internamente um evento `log:received`.

2.  **Pipeline de Processamento**:
    -   Ao receber um log, o sistema deve:
        1.  **Validar**: Se o log contiver a palavra "ERROR", emitir um evento `log:error`. (Use `prependListener` para garantir que erros sejam detectados antes de salvar).
        2.  **Salvar**: Ouvir o evento `log:received` e escrever o log em um arquivo `db-logs.txt` (append).

3.  **Segurança e Memória**:
    -   O sistema deve suportar até 15 listeners simultâneos sem dar warning.
    -   Implemente um método `close()` que remove **todos** os listeners para evitar memory leaks quando o ingestor for desligado.

4.  **Integração com Sistema**:
    -   Se o processo receber um `SIGINT`, o sistema deve chamar o método `close()` do Ingestor, avisar "Desligando ingestor..." e sair com código 0.

## Critérios de Aceite
-   Código 100% TypeScript.
-   Uso correto de `on`, `emit`, `removeListener` (ou `removeAllListeners`).
-   Tratamento de `process` events.
-   Demonstração de funcionamento no final do arquivo (instanciar, enviar logs normais, logs de erro e simular o Ctrl+C ou chamar close manual).