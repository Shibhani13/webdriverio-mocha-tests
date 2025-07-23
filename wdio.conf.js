export const config = {
  runner: 'local',
  specs: ['./tests/specs/**/*.js'],
  maxInstances: 1,
  capabilities: [{
    maxInstances: 1,
    browserName: 'chrome'
  }],
  logLevel: 'info',
  framework: 'mocha',
  reporters: ['spec'],
  mochaOpts: {
    ui: 'bdd',
    timeout: 600000
  },
  // services: ['visual'],
  before: function () {
    browser.maximizeWindow();
  }
}