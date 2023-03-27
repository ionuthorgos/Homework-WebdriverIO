/**
* main page object containing all methods, selectors and functionality
* that is shared across all page objects
*/
const Collector = require('../utils/collector');
const { assert } = require('chai');

class GenericFunctions {
  /**
  * Opens a sub page of the page
  * @param path path of the sub page (e.g. /path/to/page.html)
  */
  async urlParametersInclude(parameter) {
    let url = await browser.getUrl();
    console.log({ url })
    assert.include(url, parameter, 'This is actually the ERROR message');
  }

  async validateCurrentUrlMatchesUrl(url) {
    assert.equal(await browser.getUrl(), url);
  }

  async clickElement(element) {
    await $(element).waitForClickable()
    await $(element).click()
  }

  async switchWindow(element) {
    await browser.switchWindow(element)
    //await browser.switchWindow('google.com')
  }

  async newWindow(element) {
    await browser.newWindow(element)
  }

  async fillInputField(element, value) {
    await $(element).waitForDisplayed()
    await $(element).setValue(value)
  }

  async validateAttributeElement(selector, expectedAttribute, expectedValue) {
    let attributeValue = await $(selector).getAttribute(expectedAttribute);
    console.log({ attributeValue })
    console.log({ expectedValue })
    assert.isTrue(
      attributeValue.includes(expectedValue),
      `The ${expectedAttribute} attribute does not include ${expectedValue}`
    );
  }

  async generateRandomNumberInRange(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  /**
* The if in this function allows us to send collected values in the "Write in field" step in the feature file
* One must write "$Var.<collectorKey>" as the input value for this to work, e.g. "$Var.firstPassword"
*/
  async validateElementContainsText(element, type, expectedText) {
    if (expectedText.includes('$Var.')) {
      let collectedText = await Collector.getValueCollectorMap(expectedText.slice(5));
      expectedText = collectedText;
    }
    switch (type) {
      case 'text':
        await expect($(element)).toHaveTextContaining(expectedText);
        break;
      case 'value':
        await expect($(element)).toHaveValueContaining(expectedText);
        break;
      default:
        throw new Error(
          'Wrong type provided. Please only use "text" and "value" as parameters.'
        );
    }
  }

  async validateListIsSortedAscending(element) {
    let actualTextArray = [];
    let expectedTextArray = [];
    const selectorArray = await $$(element)

    for await (const individualText of selectorArray) {
      actualTextArray.push(await individualText.getText());
    }

    expectedTextArray = [...actualTextArray].sort()
    console.log({ expectedTextArray })
  }
  // improve the names
  async calculateTheDiscount() {
    const hotelCards = await $$('[data-stid="lodging-card-responsive"]');
    const cardIndexesWithDiscounts = []
    // regex - 
    const extractDiscountedPrice = /The price is €(\d+)/;
    const extractOriginalPrice = /The price was €(\d+)/;
    const extractDiscount = /(\d+)% off/;

    // let comment
    for (let i = 0; i < hotelCards.length; i++) {
      const cardText = await hotelCards[i].getText()
      if (cardText.includes("% off")) {
        cardIndexesWithDiscounts.push(i)
      }
    }

    const randomIndex = Math.floor(Math.random() * cardIndexesWithDiscounts.length)

    //  add comment
    const randomIndexOfHotelCardWithDiscount = cardIndexesWithDiscounts[randomIndex]
    const randomCardText = await hotelCards[randomIndexOfHotelCardWithDiscount].getText()

    // extract prices and discount
    const originalPrice = randomCardText.match(extractOriginalPrice)
    const discountedPrice = randomCardText.match(extractDiscountedPrice)
    const actualDiscountPercentage = randomCardText.match(extractDiscount)[1]

    const expectedDiscountPercentage = Math.round(((originalPrice[1] - discountedPrice[1]) / originalPrice[1]) * 100)
    // originalPrice * actualDiscountPercentage = discountedPrice

    assert.equal(actualDiscountPercentage, expectedDiscountPercentage);
  }

  async waitUntilElementTextChanges(element, expectedText) {
    await browser.waitUntil(
      async () => (await $(element).getText()) === expectedText,
      {
        timeout: 10000,
        timeoutMsg: `The text on the ${element} did not change after 10 seconds`,
        interval: 1000,
      }
    );
  }

  async storeTextOfElementsFromList(element, key) {
    let actualTextArray = [];

    let selectorArray = await $$(element);
    for await (const individualText of selectorArray) {
      actualTextArray.push(await individualText.getText());
    }
    console.log({ actualTextArray })
    await Collector.collect(key, actualTextArray);
  }

  async waitForElementToBeExpectedState(selector, expectedState) {

    switch (expectedState) {
      case 'be displayed':
      case 'be visible':
        await $(selector).waitForDisplayed();
        break;
      case 'not be displayed':
      case 'not be visible':
        await $(selector).waitForDisplayed({ reverse: true });
        // 'reverse: true' waits for the element to disappear
        break;
      case 'be present':
      case 'exist':
        await $(selector).waitForExist();
        break;
      case 'not be present':
      case 'not exist':
        await $(selector).waitForExist({ reverse: true });
        break;
      case 'be clickable':
        await $(selector).waitForClickable();
        break;
      case 'not be clickable':
        await $(selector).waitForClickable({ reverse: true });
        break;
      case 'enabled':
        await $(selector).waitForEnabled();
        break;
      case 'not enabled':
        await $(selector).waitForEnabled({ reverse: true });
        break;
      case 'focused':
        await $(selector).isFocused();
        break;
      case 'not focused':
        await $(selector).isFocused({ reverse: true });
        break;
      case 'is existing':
        await $(selector).isExisting();
        break;
      case 'not existing':
        await $(selector).isExisting({ reverse: true });
        break;
      default:
        throw new Error(
          'Wrong expected state provided. Only use the following: be displayed, not be displayed, be visible, not be visible, be present, not be present, exist, not exist, be clickable, not be clickable, be enabled, not be enabled.'
        );
    }
  }
}
module.exports = new GenericFunctions();
