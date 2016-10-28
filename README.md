
# angular-cli-polymer-karma-base
This project was generated with [angular-cli](https://github.com/angular/angular-cli) version 1.0.0-beta.18.

## Install dependencies
Run `npm install` & `bower install` to install dependencies.

## Development server
Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## note aggiuntive sui vari files:

### .bowerecc

Questo file indica il path in cui mettere le dipendenze scaricate con bower (i polymer elements).
questi vengono messi nella cartella assets ovvero la cartella che verrà inclusa poi nella build.

### angular-cli.json

qui risiedono le varie configurazioni del progetto. Come la selezione dei file da includere nella build sotto la cartella assets, la selezione della cartella dove si trova l'app, dove mettere la build, il main da eseguire all'avvio ("main-polymer.ts" per attendere il caricamento dei polymer elements),etc...

### proxy.conf.json

Questo file contiene i vari path con relativi target da proxare per evitare problemi di CORS.

### tslint.json

Contiene le 'norme' per lo stile del codice. Se il codice non segue queste linee guida all'esecuzione dei test verrà mostrato un warning.
