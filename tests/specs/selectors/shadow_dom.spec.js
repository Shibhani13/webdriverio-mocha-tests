const websiteConstants = require('../../helper/constants/websites');

describe('Shadow DOM elements', () => {
  it('Shadow DOM elements using deep nested locators (old version) @shadow_elements', async () => {
    await browser.url(websiteConstants.SHADOW_DOM_URL);
    await browser.pause(10000);
    const shopNowButton = await $('shop-app').shadow$('iron-pages > shop-home').shadow$('a[aria-label="Men\'s Outerwear Shop Now"]');
    // or await $('shop-app').shadow$('shop-home').shadow$('a[aria-label="Men\'s Outerwear Shop Now"]');
    await shopNowButton.waitForExist({ timeout: 10000 });
    await shopNowButton.click();
    await browser.pause(10000);
  });

  // it('Shadow DOM elements using deep nested locators (old version)', async () => {
  //   await browser.url('https://shop.polymer-project.org/');
  //   await browser.pause(10000);
  //   // Step 1: Get the outer shadow host <shop-app>
  //   const shopApp = await $('shop-app');
  //   const shopAppShadow = await browser.execute(el => el.shadowRoot, shopApp);

  //   // Step 2: From <shop-app>'s shadow root, get <shop-home>
  //   const shopHome = await browser.execute(el => el.shadowRoot.querySelector('shop-home'), shopApp);

  //   // Step 3: Get the shadow root of <shop-home>
  //   const shopHomeShadow = await browser.execute(el => el.shadowRoot, shopHome);

  //   // Step 4: Get the "Men's Outerwear Shop Now" link
  //   const mensLink = await browser.execute(el =>
  //     el.shadowRoot.querySelector('a[aria-label="Men\'s Outerwear Shop Now"]'), shopHome);

  //   // Step 5: Click the link (wrap in $(...) to use WebdriverIO actions)
  //   await $(mensLink).click();
  //   // await shopNow.waitForDisplayed();
  //   // await shopNow.click();
  //   await browser.pause(10000);
  // });
});
