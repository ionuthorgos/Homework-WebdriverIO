const GenericFunctions = require('../genericFunctions/genericFunctions');
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
        const secondCalendarList = await $$("[data-stid='date-picker-month']:nth-child(2) tbody tr button")

        // Select from the first table calendar a random index
        let randomIndexFirstCalendar = await this.generateRandomNumberInRange(
            1,
            firstCalendarList.length
        );
        console.log("random Index First calendar",await randomIndexFirstCalendar)
        await $(`[data-stid='date-picker-month']:nth-child(1) tbody tr [data-day="${randomIndexFirstCalendar}"]`).click()
        // Select from the second table calendar a random index
        let randomIndexSecondCalendar = await this.generateRandomNumberInRange(
            1,
            secondCalendarList.length
        );
        await $(`[data-stid='date-picker-month']:nth-child(2) tbody tr [data-day="${randomIndexSecondCalendar}"]`).click()
    }
}

module.exports = new HotelSearchForm();
