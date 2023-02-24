const Collector = require('../utils/collector');
const GenericFunctions = require('../genericFunctions/genericFunctions')
const GeneralSelectors = require('../selectors/generalSelectors.json')

/**
 * sub page containing specific selectors and methods for a specific page
 */
class GeneralPage {

    async selectRandomLocationGoingTo() {
        const cities = ["Cluj-Napoca", "Sibiu", "Bucuresti"]
        const random = Math.floor(Math.random() * cities.length);
        await $('[data-stid="destination_form_field-menu-input"]').setValue(cities[random])
    }

    async selectRandomDatesFromDatePicker() {
        const firstCalendarList = await $$("[data-stid='date-picker-month']:nth-child(1) tbody tr button")
        // Select from the first table calendar a random index
        let randomIndexFirstDate = await GenericFunctions.generateRandomNumberInRange(1, firstCalendarList.length);
        let randomIndexSecondDate = await GenericFunctions.generateRandomNumberInRange(1, firstCalendarList.length);

        while (randomIndexFirstDate >= randomIndexSecondDate) {
            randomIndexSecondDate = await GenericFunctions.generateRandomNumberInRange(1, firstCalendarList.length
            );
        }
        await $(`[data-stid='date-picker-month']:nth-child(1) tbody tr [data-day="${randomIndexFirstDate}"]`).click()
        await $(`[data-stid='date-picker-month']:nth-child(1) tbody tr [data-day="${randomIndexSecondDate}"]`).click()
    }

    async addRandomTravellers() {
        let children = await GenericFunctions.generateRandomNumberInRange(0, 6)
        let maxNumberOfAdults = 13 - children
        let randomlyNumberOfAdults = await GenericFunctions.generateRandomNumberInRange(1, maxNumberOfAdults)
        // Select minus button for adults to start booking travellers from 1 adult
        await $("button[class*='input-touch-target']:nth-child(1)").click()
        console.log("children in afara if-ului la inceput", children)
        console.log("numarul maxim de adultis", maxNumberOfAdults)
        console.log("numarul random de adulti", randomlyNumberOfAdults)

        // Add a random number of children, and fill in their ages with random age
        if (children > 0) {
            for (let i = 0; i < children; i++) {
                await $("[aria-label='Increase the number of children in room 1']").click()
            }
            for (let j = 0; j < children; j++) {
                let generateRandomChildAge = await GenericFunctions.generateRandomNumberInRange(1, 17)
                console.log({ generateRandomChildAge })
                await $(`[id="age-traveler_selector_children_age_selector-0-${j}"] option[value="${generateRandomChildAge}"]`).click()
            }
        }
        // Add a random number of Adults 
        for (let i = 1; i <= randomlyNumberOfAdults; i++) {
            await $("button[class*='input-touch-target']:nth-child(3)").click()
        }
        Collector.collect("test", children + randomlyNumberOfAdults +1);
    }

    async validateTravellersInput() {
        let collectedText = await Collector.getValueCollectorMap('test');
        await GenericFunctions.validateTextElement(GeneralSelectors.travellers_button, collectedText)
    }
}

module.exports = new GeneralPage();
