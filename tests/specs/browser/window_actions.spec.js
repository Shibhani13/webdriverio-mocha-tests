const browserPage = require('../../pages/browser.page');
const commonHelper = require('../../helper/commonHelper');

describe('Window commands @window', () => {
  before(async () => {
    await browser.url("https://demoqa.com/browser-windows");
    // Hide ads
    await commonHelper.hideAds();
  });


  it('Get browser window size', async () => {
    const windowSize = await browser.getWindowSize();
    console.log("window size", windowSize);
  });

  it('Set browser window size', async () => {
    await browser.setWindowSize(1280, 800); // in px
    const windowSize = await browser.getWindowSize();
    console.log("window size after changing", windowSize);
  });

  it('Switch to old window via url', async () => {
    await browserPage.clickNewWindow();

    // switch back via url match
    await browser.switchWindow('https://demoqa.com/browser-windows')
    const title = await browser.getTitle();
    console.log('Page Title:', title);
  });

  it('Switch to old window via page title', async () => {
    await browserPage.clickNewWindow();

    // switch back via title match
    await browser.switchWindow('DEMOQA')
    const title = await browser.getTitle();
    console.log('Page Title:', title);
  });

  it('Switch to old window via handles', async () => {
    // get window handle
    const handle = await browser.getWindowHandle();
    await browserPage.clickNewWindow();

    // switch back via window handle
    await browser.switchWindow(handle)
    const title = await browser.getTitle();
    console.log('Page Title:', title);
  });

  it('Open any url in a new window @new_window', async () => {
    // browser.newWindow(url, { type, windowName, windowFeatures })
    const result = await browser.newWindow('https://webdriver.io', {
      windowName: 'WebdriverIO window',
      windowFeature: 'width=1420,height=800,resizable,scrollbars=yes,status=1',
    })
    console.log(await browser.getTitle()) // outputs: "WebdriverIO · Next-gen browser and mobile automation test framework for Node.js"
    console.log(result.type) // outputs: "window"
    const handles = await browser.getWindowHandles()
    await browser.switchToWindow(handles[1])
    await browser.closeWindow()
    await browser.switchToWindow(handles[0])
    const title = await browser.getTitle();
    console.log(title) // outputs: "DemoQA"
    await expect(title).toHaveText('WOMEN - DRESS PRODUCTS')
  });

});