/**
* main page object containing all methods, selectors and functionality
* that is shared across all page objects
*/
class GenericFunctions{
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
        console.log("actual text", await $("[data-stid*='open-room-picker']").getText())
        await expect(ele).toHaveTextContaining(expectedResult)
    }

    async generateRandomNumberInRange(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
}
module.exports = new GenericFunctions();
