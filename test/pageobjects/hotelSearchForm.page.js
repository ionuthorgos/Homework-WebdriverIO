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
        
        // Select from the first table calendar a random index
        let randomIndexFirstDate = await this.generateRandomNumberInRange(1,firstCalendarList.length);
        let randomIndexSecondDate = await this.generateRandomNumberInRange(1,firstCalendarList.length);

        while (randomIndexFirstDate === randomIndexSecondDate) {
            randomIndexSecondDate = await this.generateRandomNumberInRange(1,firstCalendarList.length
            );
        }
        await $(`[data-stid='date-picker-month']:nth-child(1) tbody tr [data-day="${randomIndexFirstDate}"]`).click()
        await $(`[data-stid='date-picker-month']:nth-child(1) tbody tr [data-day="${randomIndexSecondDate}"]`).click()

    }
}

module.exports = new HotelSearchForm();
