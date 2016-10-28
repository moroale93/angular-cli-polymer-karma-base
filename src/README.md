# /src

## note aggiuntive sui vari files:

### index.html

E' il template html dove gira l'applicazione. Da qui vengono inclusi i vari polymer elements.

### main-polymer.ts

questo è il main modificato per avviare l'applicazione. Si attende il caricamento dei vari elementi di polymer prima di avviarla altrimenti andrebbe in errore in quanto non troverebbe questi.

### styles.css

è il file base di stile. Esso viene incluso dinamicamente da CLI alla creazione finale del template html.

### test.ts

è il file di avviamento dei vari test. Anche qui è presente un listner che attende il caricamento dei vari polymer elements.
