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

  async clickElement(element) {
    await $(element).waitForClickable()
    await $(element).click()
  }

  async fillInputField(element, value) {
    await $(element).waitForDisplayed()
    await $(element).setValue(value)
  }

  async validateAttributeElement(selector, expectedAttribute, expectedValue) {
    let attributeValue = await $(selector).getAttribute(expectedAttribute);
    console.log({attributeValue})
    console.log({expectedValue})
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
      default:
        throw new Error(
          'Wrong expected state provided. Only use the following: be displayed, not be displayed, be visible, not be visible, be present, not be present, exist, not exist, be clickable, not be clickable, be enabled, not be enabled.'
        );
    }
  }

  async validateCurrentUrlMatchesUrl(url) {
    assert.equal(await browser.getUrl(), url);
  }
}
module.exports = new GenericFunctions();
