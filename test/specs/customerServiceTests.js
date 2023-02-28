const CustomerServicesSelectors = require("../selectors/customerServicesSelectors.json")
const GeneralPage = require('../pageobjects/general.page')
const GenericFunctions = require('../genericFunctions/genericFunctions')


describe('Validate Customer Service URL', () => {
    it('Navigate to my trips', async () => {
        await GeneralPage.openURL('https://service.hotels.com/en-us/#/myTrips/')
        await GenericFunctions.clickElement(CustomerServicesSelectors.refunds_on_hotel)
        await GenericFunctions.validateAttributeElementExist(CustomerServicesSelectors.article_list_open)
    })
})


// create a flow for testing sorts and filters, according to what you think is most important. 
// For this exercise, you must remember to think like a QA and take business logic into account. 
// You won’t have time to test all these functionalities. 
// I’ll expect you to be able to explain why you chose X sort / filter over another.
// Create the test case steps manually first (just the flow, it doesn’t have to be very detailed) 
// and then start automating it, as that will help you with the programming part.

// 1. Open the url
// 2. Check by default status - to be sort by Recommended
// 3. Verfiy the list to be as expected 

// for filters
// 1. Guest rating to be as default
// 2. Price per nigh - as default - min -max
// 3. Verify  