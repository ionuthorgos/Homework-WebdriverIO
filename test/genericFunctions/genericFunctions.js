const Collector = require('../utils/collector');

/**
* main page object containing all methods, selectors and functionality
* that is shared across all page objects
*/
module.exports = class GenericFunctions extends Collector {
    /**
    * Opens a sub page of the page
    * @param path path of the sub page (e.g. /path/to/page.html)
    */

    async clickElement(element) {
        await $(element).click()
    }

    async fillInputField(element, value) {
        await $(element).setValue(value)
    }

    async validateTextElement(element, expectedResult) {
        const ele = await $(element)
        await expect(ele).toHaveTextContaining(expectedResult)
    }

    async generateRandomNumberInRange(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    async validateElementContainsText(selector, expectedText){
        await expect($(selector)).toHaveTextContaining(expectedText)
    }
}
