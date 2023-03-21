const Collector = require('../utils/collector');
const GenericFunctions = require('../genericFunctions/genericFunctions')
const { assert } = require('chai');
/**
 * sub page containing specific selectors and methods for a specific page
 */
class GeneralPage {
    async openURL(url) {
        await browser.url(url);
        await expect(browser).toHaveUrlContaining(url)
    }

    async selectRandomLocationGoingTo() {
        const cities = ["Cluj-Napoca", "Sibiu", "Bucharest"]
        const random = Math.floor(Math.random() * cities.length);
        await $('[data-stid="destination_form_field-menu-input"]').setValue(cities[random])
        Collector.collect("goingTo", cities[random]);
    }

    // add validation when the number from datepicker is disabled
    async selectRandomDatesFromDatePicker() {
        const firstCalendarList = await $$("[data-stid='date-picker-month']:nth-child(1) tbody tr button")
        // Select from the first table calendar a random index
        let randomIndexFirstDate = await GenericFunctions.generateRandomNumberInRange(1, firstCalendarList.length);
        console.log("first index generated",randomIndexFirstDate)
        let randomIndexSecondDate = await GenericFunctions.generateRandomNumberInRange(1, firstCalendarList.length);
        let firstDateStatus = await $(`[data-stid='date-picker-month']:nth-child(1) tbody tr [data-day="${randomIndexFirstDate}"]`).isEnabled()
        console.log("first date status", firstDateStatus)
        while (!firstDateStatus) {
            randomIndexFirstDate = await GenericFunctions.generateRandomNumberInRange(1, firstCalendarList.length);
            firstDateStatus = await $(`[data-stid='date-picker-month']:nth-child(1) tbody tr [data-day="${randomIndexFirstDate}"]`).isEnabled()
        }
            while (randomIndexFirstDate >= randomIndexSecondDate) {
                randomIndexSecondDate = await GenericFunctions.generateRandomNumberInRange(1, firstCalendarList.length);
            }
        
        await $(`[data-stid='date-picker-month']:nth-child(1) tbody tr [data-day="${randomIndexFirstDate}"]`).click()
        await $(`[data-stid='date-picker-month']:nth-child(1) tbody tr [data-day="${randomIndexSecondDate}"]`).click()
    }

    async addRandomTravellers() {
        // Select minus button for adults to start booking travellers from 1 adult
        await $("button[class*='input-touch-target']:nth-child(1)").click()
        let children = await GenericFunctions.generateRandomNumberInRange(0, 6)
        let maxNumberOfAdults = 13 - children
        let randomlyNumberOfAdults = await GenericFunctions.generateRandomNumberInRange(0, maxNumberOfAdults)

        // Add a random number of children, and fill in their ages with random age
        if (children > 0) {
            await this.increaseNumberOfChildren(children)
            for (let j = 0; j < children; j++) {
                let generateRandomChildAge = await GenericFunctions.generateRandomNumberInRange(1, 17)
                await $(`[id="age-traveler_selector_children_age_selector-0-${j}"] option[value="${generateRandomChildAge}"]`).click()
            }
        }

        await this.increaseNumberOfAdults(randomlyNumberOfAdults)
        let totalTravellers = (children + randomlyNumberOfAdults) + 1
        Collector.collect("travellers", totalTravellers)
    }
    // Increase the number of Adults
    async increaseNumberOfAdults(numberAdults) {
        for (let i = 0; i < numberAdults; i++) {
            await $("button[class*='input-touch-target']:nth-child(3)").click()
        }
    }
    // Increase the number of Children
    async increaseNumberOfChildren(numberChildren) {
        for (let i = 0; i < numberChildren; i++) {
            await $("[aria-label='Increase the number of children in room 1']").click()
        }
    }
}

module.exports = new GeneralPage();
