const websiteConstants = require('../../helper/constants/websites');

describe('Selectors of different types @selectors', () => {
  before(async () => {
    await browser.url(websiteConstants.AUTOMATION_EXERCISE_URL);
    const headerSection = await $('.header-middle');
    await headerSection.waitForExist({ timeout: 10000 });
  });

  async function getTextOfElementsInArray(arr) {
    const texts = []
    for (const ele of arr) {
      texts.push(await ele.getText());
    }
    return texts;
  }

  it('Basic CSS selector', async () => {
    // For class name with multiple strings
    const homeIcon = await $('.fa.fa-home');
    await homeIcon.waitForDisplayed();

    // With attributes
    const categories = await $$('[data-parent="#accordian"]');
    await categories[0].waitForDisplayed();
    console.log("Category 1", await categories[0].getText());

    // Contains partial text - use *=
    const carousel = await $('[class*="slide"]') // full class name: class= carousel slide
    await carousel.waitForDisplayed();

    // Starts with text - use ^= ; actual class name = recommended_items
    const recommendedSec = await $('div[class^="recommended"]').getText();
    console.log("recommended sec", recommendedSec);

    // Ends with text - use $= ; there are 2 elements ending with items
    const allSections = await $$('div[class$="items"]');
    console.log("All sections", await getTextOfElementsInArray(allSections));

    // Usage of '|=' :Attribute value starts with a specific value, either exactly that value or that value followed by a hyphen (-). eg: carousel-inner
    const carousel1 = await $$('[class|="carousel"]');
    console.log("Usage of |=", await getTextOfElementsInArray(carousel1));

    // Usage of '~=' :Attribute value contains a specific word (space-separated). eg: carousel slide
    const carousel2 = await $$('[class~="carousel"]');
    console.log("Usage of ~=", await getTextOfElementsInArray(carousel2));
  });

  it('CSS Selector: next-sibling(Adjacent Sibling) combinator +', async () => {
    // The next-sibling combinator (+) separates two selectors and matches the second element only if it immediately follows the first element, and both are children of the same parent
    // A + B (Selects B element that is immediately preceded by A, and both are children of the same parent)
    const loc1 = await $('.left.control-carousel + .right.control-carousel');
    await loc1.waitForDisplayed();
    console.log("class attribute", loc1.getAttribute('class'))
  });

  it('CSS Selector: Child combinator >', async () => {
    // A > B (Selects all B elements that are direct children of A)
    // Example: ul#main-menu > li (selects li elements that are direct children of ul with id main-menu) 
     // > : It matches only those elements matched by the second selector that are the direct children of elements matched by the first.
    const women = await $('[href="#Women"]'); // For link element give text of that link, not href
    await women.waitForDisplayed();
    await expect(women).toHaveAttribute('href', '#Women');
    await women.click();
    await browser.pause(5000);
   
    // The :first-of-type CSS pseudo-class represents the first element of its type (tag name) among a group of sibling elements.
    const loc1 = await $('div[id="Women"] > div > ul > li:first-of-type a'); // to select first category under women
    await loc1.scrollIntoView();
    await loc1.waitForClickable();
    await loc1.click();
    await browser.pause(2000);
    const secTitle = await $('div.features_items h2.title');
    await secTitle.waitForDisplayed();
    console.log("Dress section", await secTitle.getText());
    // we have to use toHaveText directly on element, without getText() on element
    await expect(secTitle).toHaveText('WOMEN - DRESS PRODUCTS')
  });

  it('CSS Selector: Subsequent-sibling combinator ~ @test', async () => {
    // A ~ B (Selects all B elements that are preceded by A, and both are children of the same parent)
    // Example: h2 ~ p (selects all p elements that follow an h2 and share the same parent)
    
  });
});
