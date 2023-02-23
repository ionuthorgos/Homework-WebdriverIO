const GenericFunctions = require('../genericFunctions/genericFunctions');
const Collector = require('../utils/collector');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class HotelSearchForm extends GenericFunctions {

    async selectRandomLocationGoingTo() {
        const cities = ["Cluj-Napoca", "Sibiu", "Bucuresti"]
        const random = Math.floor(Math.random() * cities.length);
        await $('[data-stid="destination_form_field-menu-input"]').setValue(cities[random])
    }

    async selectRandomDatesFromDatePicker() {
        const firstCalendarList = await $$("[data-stid='date-picker-month']:nth-child(1) tbody tr button")
        // Select from the first table calendar a random index
        let randomIndexFirstDate = await this.generateRandomNumberInRange(1, firstCalendarList.length);
        let randomIndexSecondDate = await this.generateRandomNumberInRange(1, firstCalendarList.length);

        while (randomIndexFirstDate >= randomIndexSecondDate) {
            randomIndexSecondDate = await this.generateRandomNumberInRange(1, firstCalendarList.length
            );
        }
        await $(`[data-stid='date-picker-month']:nth-child(1) tbody tr [data-day="${randomIndexFirstDate}"]`).click()
        await $(`[data-stid='date-picker-month']:nth-child(1) tbody tr [data-day="${randomIndexSecondDate}"]`).click()
    }

    async addRandomTravellers() {
        let children = await this.generateRandomNumberInRange(0, 6)
        let currentAdults = 13 - children
        let maxNumberOfAdults = await this.generateRandomNumberInRange(1, currentAdults)
        // Select minus button for adults to start booking travellers from 1 adult
        await $("button[class*='input-touch-target']:nth-child(1)").click()
        // Add a random number of children, and fill in their ages with random number
        if (children > 0) {
            for (let i = 0; i < children; i++) {
                await $("[aria-label='Increase the number of children in room 1']").click()
            }
            for (let j = 0; j < children; j++) {
                let generateRandomChildAge = await this.generateRandomNumberInRange(1, 17)
                await $(`[id="age-traveler_selector_children_age_selector-0-${j}"] option[value="${generateRandomChildAge}"]`).click()
            }
        }
        // Add a random number of Adults 
        for (let i = 1; i <= maxNumberOfAdults; i++) {
            await $("button[class*='input-touch-target']:nth-child(3)").click()
        }

         let collectedText = await this.getValueCollectorMap(children);
         console.log("teeeeest", await this.collect('test', collectedText))

    }

    async validateTravellersInput() {
        // console.log("functia addRandom" , collect('collectedText', collectedText))
        // await expect().toHaveTextContaining(expectedResult)
    }
}

module.exports = new HotelSearchForm();
