// Pages
const GeneralPage = require('../pageobjects/general.page')
const SearchResultsPage = require('../pageobjects/searchResultsPage')
// Functions
const GenericFunctions = require('../genericFunctions/genericFunctions')
// Selectors
const HomeSelectors = require("../selectors/homeSelectors.json")
const LoginSelectors = require("../selectors/loginSelectors.json")
const GeneralSelectors = require("../selectors/generalSelectors.json")

before(async function () {
    it('Open the url', async () => {
        await GeneralPage.openURL(LoginSelectors.url)
    })
    // it('Loggin in the app', async () => {
    //     await GenericFunctions.clickElement(LoginSelectors.sign_in_button)
    //     await GenericFunctions.clickElement(LoginSelectors.login_button)
    //     await GenericFunctions.fillInputField(LoginSelectors.email_address_input, LoginSelectors.email_address)
    //     await GenericFunctions.fillInputField(LoginSelectors.password_input, LoginSelectors.password)
    //     await GenericFunctions.clickElement(LoginSelectors.login_form)
    // })
    // it('Validate that the user is succesffully logged in', async () => {
    //     await GenericFunctions.validateElementContainsText(LoginSelectors.header_profile_name, "text", "ionut")
    // })
});

describe('Do a search after a random city hotel', () => {
    it('Click the accept all cookies button', async () => {
        await GenericFunctions.waitToBeDisplayed(HomeSelectors.accept_all_cookies_button)
        await GenericFunctions.clickElement(HomeSelectors.accept_all_cookies_button)
    })
    it('Validate that the default travellers input is 2 travellers 1 room', async () => {
        await GenericFunctions.validateTextElement(GeneralSelectors.travellers_button, ['Travellers:', '2 travellers, 1 room'])
    })
    it('Select randomly from the list a location from Going to', async () => {
        await GenericFunctions.clickElement(GeneralSelectors.going_to_button)
        await GeneralPage.selectRandomLocationGoingTo()
        await GenericFunctions.clickElement(GeneralSelectors.first_element_going_to_list)
    })
    it('Select random dates from DatePicker and Apply button', async () => {
        await GenericFunctions.clickElement(GeneralSelectors.dates_button)
        await GeneralPage.selectRandomDatesFromDatePicker()
        await GenericFunctions.clickElement(GeneralSelectors.apply_button)
    })
    it('Select random Travellers', async () => {
        await GenericFunctions.clickElement(GeneralSelectors.travellers_button)
        await GeneralPage.addRandomTravellers()
    })
    it('Click Done button', async () => {
        await GenericFunctions.clickElement(GeneralSelectors.done_button)
    })
    it('Select search button ', async () => {
        await GenericFunctions.clickElement(GeneralSelectors.search_button)
    })
    it('Wait the searches to be made', async () => {
        await GenericFunctions.waitToBeDisplayed(GeneralSelectors.travellers_button)
    })
    it('Wait the searches to be made', async () => {
        await GenericFunctions.validateIfElementIsExpectedState(GeneralSelectors.going_to_button,'clickable')
    })
    // it('Validate that the Travellers Input form has the correct data', async () => {
    //     await SearchResultsPage.validateTravellersInput('$Var.travellers')
    // })
    it('Validate that the Going To Input form has the correct data', async () => {
        await SearchResultsPage.validateGoingToField('$Var.goingTo')
    })
})

// take a look at the functions that you built and see if you can’t split some of them into separate, 
//smaller functions that do specific things (don’t overdo it, just try to think where it makes sense to split them - 
//try to imagine that if this website were really yours, you’d want more options for the parameters that you choose, 
//rather than them being random all the time) - done

// add a validation that checks that the “What we are paid impacts our sort order” link works correctly - done



// create a test that, for any of the random destination that you choose, 
// it finds a hotel that has a % discount on its price and check that the % discounted price is correct 
// (make sure to handle all kinds of scenarios, even the one where you might pick a destination that has no discounts)

// finish the URL parameter validation part (low priority)


 
