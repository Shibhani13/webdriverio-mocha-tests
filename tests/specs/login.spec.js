const websiteConstants = require('../helper/constants/websites');
const loginPage = require('../pages/login.page');

describe('Sample Login Test @login', () => {
  it('should login with valid credentials', async () => {
    await browser.url(websiteConstants.SAUCE_DEMO_URL);
    await loginPage.login(websiteConstants.LOGIN_CREDENTIALS.USERNAME, websiteConstants.LOGIN_CREDENTIALS.PASSWORD);
    expect(loginPage.pageLogo).toHaveText('Swag Labs');
  });
});
