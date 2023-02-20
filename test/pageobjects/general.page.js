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
        let randomIndexFirstDate = await this.generateRandomNumberInRange(1, firstCalendarList.length);
        let randomIndexSecondDate = await this.generateRandomNumberInRange(1, firstCalendarList.length);

        while (randomIndexFirstDate === randomIndexSecondDate) {
            randomIndexSecondDate = await this.generateRandomNumberInRange(1, firstCalendarList.length
            );
        }
        await $(`[data-stid='date-picker-month']:nth-child(1) tbody tr [data-day="${randomIndexFirstDate}"]`).click()
        await $(`[data-stid='date-picker-month']:nth-child(1) tbody tr [data-day="${randomIndexSecondDate}"]`).click()
    }

    async addRandomTravellers() {
        let adults = await this.generateRandomNumberInRange(1, 12)
        let children = 14 - adults

        while (children === 6) {
            adults = await this.generateRandomNumberInRange(1, 12)
            children = 14 - adults
        }
        for (let i = 1; i <= adults; i++) {
            await $("button[class*='input-touch-target']:nth-child(3)").click()
        }
        // I have to complete the age 
        // for (let i = 0; i <= children; i++) {
        //      await $("[aria-label='Increase the number of children in room 1']").click()
       // }
       
       return adults
    }

    async validateTravellersInput(){
       console.log(this.addRandomTravellers())
        // await expect().toHaveTextContaining(expectedResult)
    }
}

module.exports = new HotelSearchForm();
