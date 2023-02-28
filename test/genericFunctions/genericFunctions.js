/**
* main page object containing all methods, selectors and functionality
* that is shared across all page objects
*/
const Collector = require('../utils/collector');

class GenericFunctions {
  /**
  * Opens a sub page of the page
  * @param path path of the sub page (e.g. /path/to/page.html)
  */

  async clickElement(element) {
    await $(element).waitForClickable()
    await $(element).click()
  }

  async waitToBeDisplayed(element) {
    await $(element).waitForDisplayed()
  }

  async fillInputField(element, value) {
    await $(element).waitForDisplayed()
    await $(element).setValue(value)
  }

  async validateTextElement(element, expectedResult) {
    const ele = await $(element)
    await expect(ele).toHaveTextContaining(expectedResult)
  }

  async validateAttributeElementExist(element) {
    const ele = await $(element)
    await expect(ele).toExist()
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
  async validateIfElementIsExpectedState(selector, expectedState) {

    switch (expectedState) {
      case 'visible':
      case 'displayed':
        await expect($(selector)).toBeDisplayedInViewport();
        break;
      case 'not displayed':
      case 'not visible':
        await expect($(selector)).not.toBeDisplayedInViewport();
        break;
      case 'present':
      case 'existing':
        await expect($(selector)).toBePresent();
        break;
      case 'not present':
      case 'not existing':
        await expect($(selector)).not.toBePresent();
        break;
      case 'clickable':
        await expect($(selector)).toBeClickable();
        break;
      case 'not clickable':
        await expect($(selector)).not.toBeClickable();
        break;
      case 'enabled':
        await expect($(selector)).toBeEnabled();
        break;
      case 'not enabled':
        await expect($(selector)).not.toBeEnabled();
        break;
      case 'selected':
        await expect($(selector)).toBeSelected();
        break;
      case 'not selected':
        await expect($(selector)).not.toBeSelected();
        break;
      case 'focused':
        await expect($(selector)).toBeFocused();
        break;
      case 'not focused':
        await expect($(selector)).not.toBeFocused();
        break;
      default:
        throw new Error(
          'Wrong expected state provided. Only use the following: displayed, not displayed, visible, not visible, present, not present, existing, not existing, clickable, not clickable, enabled, not enabled, selected, not selected.'
        );
    }
  }

  async validateCurrentUrlMatchesUrl(url) {
    assert.equal(await browser.getUrl(), url);
  }
}
module.exports = new GenericFunctions();
