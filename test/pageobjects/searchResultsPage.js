/**
 * sub page containing specific selectors and methods for a specific page
 */
const Collector = require('../utils/collector');
const { assert } = require('chai');
const GeneralSelectors = require("../selectors/generalSelectors.json")

class SearchResultsPage {
    async validateGoingToField(expectedText) {
        if (expectedText.includes('$Var.')) {
            let collectedText = await Collector.getValueCollectorMap(expectedText.slice(5));
            expectedText = collectedText;
        }
        let actualText = (await $(GeneralSelectors.going_to_button).getText()).split("\n")[1];
        console.log({expectedText})
        console.log({actualText})
        assert.include(actualText, expectedText, 'This is actually the ERROR message');
    }

    async validateTravellersInput(expectedText) {
        if (expectedText.includes('$Var.')) {
            let collectedText = await Collector.getValueCollectorMap(expectedText.slice(5));
            expectedText = collectedText;
        }
        console.log({expectedText})
        let actualText = (await $("[data-stid*='open-room-picker']").getText()).split("\n")[2]       
        console.log({actualText})

        assert.include(actualText, expectedText, 'This is actually the ERROR message');

    }
}
module.exports = new SearchResultsPage();
