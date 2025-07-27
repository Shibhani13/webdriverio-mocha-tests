class BrowserPage {
  // Define selectors using getter methods
  get newWindow() { return $('//button[text()="New Window"]'); }
  get eventCode() { return $('div[data-testid="event-code-card-container"]')}

  async clickNewWindow() {
    await browser.pause(5000);
    const isClickable = await this.newWindow.isClickable();
    console.log("is clickable?", isClickable);
    if (!isClickable) {
      await this.newWindow.scrollIntoView();
    }
    await this.newWindow.click();
    console.log('Page Title of new window:', await browser.getTitle());
  }

  async getEventCode(){
    return await this.eventCode.getText();
  }
}

module.exports = new BrowserPage();
