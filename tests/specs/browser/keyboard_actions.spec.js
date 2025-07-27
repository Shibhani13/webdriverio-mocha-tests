const browserPage = require('../../pages/browser.page');
describe('Keyboard commands @keys', () => {
  before(async () => {
    await browser.url("https://www.toptal.com/developers/keycode");
    await browser.keys('Enter');
  });

  it('To check keyboard actions- tab', async () => {
    await browser.keys('Tab');
    console.log(await browserPage.getEventCode());
    await browser.keys('Back space');
    console.log(await browserPage.getEventCode());
  });

  it('Combination of keys', async () => {
    await browser.debug();
    await browser.keys(['Command', 'a']);
    console.log(await browserPage.getEventCode());
    await browser.keys('NULL');   // Always reset keys after combos
  });

  it('Navigation keys', async () => {
    await browser.debug();
    await browser.keys('Left arrow');
    console.log(await browserPage.getEventCode());
    await browser.keys('Right arrow');
    console.log(await browserPage.getEventCode());
    await browser.keys('Up arrow');
    console.log(await browserPage.getEventCode()); // ArrowUp
    await browser.keys('Down arrow');
    console.log(await browserPage.getEventCode()); // ArrowDown
  });

  it('Other keys', async () => {
    await browser.debug();
    await browser.keys('Command');
    console.log(await browserPage.getEventCode());
    await browser.keys('Meta'); // same as command key
    console.log(await browserPage.getEventCode());
    await browser.keys('Alt');
    console.log(await browserPage.getEventCode());
    await browser.keys('Shift');
    console.log(await browserPage.getEventCode());
  });

});