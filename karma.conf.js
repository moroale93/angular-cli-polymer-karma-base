// Karma configuration file, see link for more information
// https://karma-runner.github.io/0.13/config/configuration-file.html

module.exports = function (config) {
  config.set({
    basePath: '',
    frameworks: ['jasmine', 'angular-cli'],
    plugins: [
      require('karma-jasmine'),
      require('karma-chrome-launcher'),// karma-phantomjs-launcher OR karma-chrome-launcher
      require('karma-remap-istanbul'),
      require('angular-cli/plugins/karma')
    ],
    files: [
      './dist/assets/bower_components/webcomponentsjs/webcomponents-lite.min.js',
      { pattern: './dist/assets/bower_components/polymer/polymer.html', included: true, watched:false},
      { pattern: './dist/assets/bower_components/vaadin-grid/vaadin-grid.html', included: true, watched:false},
      { pattern: './dist/assets/bower_components/gold-email-input/gold-email-input.html', included: true, watched:false},
      { pattern: './dist/assets/bower_components/paper-input/paper-input.html', included: true, watched:false},
      { pattern: './dist/assets/bower_components/paper-button/paper-button.html', included: true, watched:false},
      { pattern: './dist/assets/bower_components/paper-dialog/paper-dialog.html', included: true, watched:false},
      { pattern: './dist/assets/bower_components/vaadin-icons/vaadin-icons.html', included: true, watched:false},
      { pattern: './dist/assets/bower_components/paper-dropdown-menu/paper-dropdown-menu.html', included: true, watched:false},
      { pattern: './dist/assets/bower_components/paper-item/paper-item.html', included: true, watched:false},
      { pattern: './dist/assets/bower_components/paper-listbox/paper-listbox.html', included: true, watched:false},
      { pattern: './dist/assets/bower_components/paper-spinner/paper-spinner-lite.html', included: true, watched:false},
      { pattern: './src/test.ts', watched: false }
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
    browsers: ['Chrome'],// PhantomJS OR Chrome
    singleRun: false,
    browserNoActivityTimeout:15000
  });
};
