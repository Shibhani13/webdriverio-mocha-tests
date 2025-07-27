exports.config = {
  runner: 'local',

  // Each inner array represents a group of specs that run in the same worker (shared browser).
  // File paths inside specs should be relative to the root where the config file lives or be absolute paths.
  // Order of execution between groups is not guaranteed, unless you limit maxInstances.
  specs: ['./tests/specs/**/*.js'],

  exclude: ['tests/specs/selectors/*.js'],
  maxInstances: 1,
  capabilities: [
    {
      maxInstances: 5,
      browserName: 'chrome',
      'goog:chromeOptions': {
        args: ['--window-size=1280,800', '--disable-ads', '--disable-popup-blocking'] // '--headless'
      }
    },
    // {
    // 'wdio:maxInstances': 2,
    // browserName: 'firefox',
    // 'wdio:specs': ['./tests/specs/group1/*.js'],
    // 'moz:firefoxOptions': {
    //   args: ['--headless', '--width=1280', '--height=800']
    //   }
    // }
  ],

  // Level of logging verbosity: trace | debug | info | warn | error | silent
  logLevel: 'error',

  framework: 'mocha',
  reporters: ['spec'],
  mochaOpts: {
    ui: 'bdd',
    timeout: 900000
  },
  before: function () {
    browser.maximizeWindow();
  },

  // take screenshot on failure
  // Default will take only current view port & png
  // browser.saveScreenshot(filepath, { fullPage: true}) - To take full page
  // {format: 'jpeg'}
  // Quality of the screenshot in case of JPEG format in range 0-100 percent - { quality: 100} ; 
  // clipping a rectangle of the screenshot { clip: { x: 0, y: 0, width: 100, height: 100 } }
  // Ref - https://webdriver.io/docs/api/browser/saveScreenshot
  afterTest: async function (test, context, { error }) {
    if (error) {
      const timestamp = new Date().toLocaleString().replace(/[\/:, ]/g, '-');
      const filepath = `./errorScreenshots/${test.title}-${timestamp}.png`; // change this extension for jpeg
      await browser.saveScreenshot(filepath);
    }
  }
}
