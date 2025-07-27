const websiteConstants = require('../../helper/constants/websites');

describe('Cookies @cookie', () => {
  let cookies;
  before(async () => {
    await browser.url(websiteConstants.AUTOMATION_EXERCISE_URL);
    const headerSection = await $('.header-middle');
    await headerSection.waitForExist({ timeout: 10000 });
  });

  it('To get cookies', async () => {
    cookies = await browser.getCookies();
    console.log("Cookies:", cookies);
  });

  it('To set cookies', async () => {
    await browser.setCookies([{ name: 'test3', value: '789' }]);
    cookies = await browser.getCookies();
    console.log("Cookies:", cookies);
  });

  it('To delete specific cookies', async () => {
    await browser.deleteCookies(['test3']);
    cookies = await browser.getCookies();
    console.log("Cookies:", cookies);
  });

  it('should delete all cookies', async () => {
    await browser.deleteCookies();
    const cookies = await browser.getCookies();
    console.log("Cookies:", cookies);
  })

});