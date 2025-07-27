const waits = require('../helper/constants/waits')

class LoginPage {
  get userName() { return $('#user-name') };
  get password() { return $('#password') };
  get loginButton() { return  $('#login-button')};
  get pageLogo() { return $('.app_logo') };

  async login(username, password){
    await this.userName.setValue(username);
    await this.password.setValue(password);
    await browser.pause(waits.SHORT_WAIT);
    await this.loginButton.click();
    await this.pageLogo.waitForDisplayed();
  }
}
module.exports = new LoginPage();
