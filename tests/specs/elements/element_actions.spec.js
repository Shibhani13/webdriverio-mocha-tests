const websiteConstants = require('../../helper/constants/websites');

describe('Element actions @element_actions', () => {
  before(async () => {
    await browser.url(websiteConstants.AUTOMATION_EXERCISE_URL);
    const headerSection = await $('.header-middle');
    await headerSection.waitForExist({ timeout: 10000 });
  });

  it('Find single element', async () => {
    const elem = await $('.navbar-nav > li:first-of-type');
    console.log("Home icon text:", await elem.getText());
  });

  it('Find multiple elements', async () => {
    const elements = await $$('.navbar-nav > li');
    console.log("Nav bar icons count", elements.length);
  });
  
  it('Element css property', async () => {
    const elem = await $('.navbar-nav > li:first-of-type');
    const color = await elem.getCSSProperty('color');
    console.log("color of home icon", color);
  });

});
