// Karma configuration file, see link for more information
// https://karma-runner.github.io/0.13/config/configuration-file.html

/* thanks to:
    https://github.com/vaadin/angular2-polymer/issues/23
    https://github.com/harshabonthu/angular2-polymer-integration/blob/master/config/karma.conf.js
*/
module.exports = function(config) {
  config.set({
    basePath: '',
    frameworks: ['jasmine', 'angular-cli'],
    plugins: [
      require('karma-jasmine'),
      require('karma-chrome-launcher'), // karma-phantomjs-launcher OR karma-chrome-launcher
      require('karma-remap-istanbul'),
      require('angular-cli/plugins/karma')
    ],
    files: [
        /*
            per permettere la corretta inizializzazione dei test è necessario includere tutti
            i file necessari! a tal proposito sono stati aggiunti successivamente(in ordine):
            1) la configurazione di avviamento dei test;
            2) i polyfill per i vari browser su cui verranno eseguiti i testi (possiamo rimuoverlo
                ma non è escluso che utilizzeremo PhantomJS come in vts...bisogna vedere come si
                cmporta Jenkins)
            3) è stato incluso il file html con tutti gli include dei polymer elements...questo permette
                la registrazione di questi. Il file è lo stesso che viene incluso nell'index.html
                e quindi è sufficiente modificare quello per riversare la cosa nell'app, nella build e nei test
            4) aggiunti (non inclusi) i vari file della build...per testarla appunto
        */
      {
        pattern: './src/test.ts',
        included: true,
        watched: false
      },
      // Load polymer polyfill. You can safe remove it if you only test in Chrome.
      'dist/assets/bower_components/webcomponentsjs/webcomponents-lite.js',
      // Load polymer imports
      'dist/polymer-elements.html',
      // Distribution folder.
      {
        pattern: 'dist/**/*',
        included: false,
        watched: true
      },
    ],
    preprocessors: {
      './src/test.ts': ['angular-cli']
    },
    remapIstanbulReporter: {
      reports: {
        html: 'coverage',
        lcovonly: './coverage/coverage.lcov'
      }
    },
    angularCli: {
      config: './angular-cli.json',
      environment: 'dev'
    },
    reporters: ['progress', 'karma-remap-istanbul'],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: ['Chrome'], // PhantomJS OR Chrome
    singleRun: true,
    browserNoActivityTimeout: 20000
  });
};
