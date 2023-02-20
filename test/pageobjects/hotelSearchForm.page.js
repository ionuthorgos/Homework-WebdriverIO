const GenericFunctions = require('../genericFunctions/genericFunctions');
/**
 * sub page containing specific selectors and methods for a specific page
 */
class HotelSearchForm extends GenericFunctions {

    async selectRandomLocationGoingTo(){
        const cities = ["Cluj-Napoca", "Sibiu", "Bucuresti"]
        const random = Math.floor(Math.random() * cities.length);
        
        await $('[data-stid="destination_form_field-menu-input"]').setValue(cities[random])
    }

    async selectRandomDates(){
        const firstCalendar = $$("[data-stid='date-picker-month']:nth-child(1) tbody tr button")

        console.log({firstCalendar})
    }
}

module.exports = new HotelSearchForm();
