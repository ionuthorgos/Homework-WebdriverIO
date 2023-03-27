// Pages
const GeneralPage = require('../pageobjects/general.page')
const SearchResultsPage = require('../pageobjects/searchResultsPage')
// Functions
const GenericFunctions = require('../genericFunctions/genericFunctions')
// Selectors
const HomeSelectors = require("../selectors/homeSelectors.json")
const LoginSelectors = require("../selectors/loginSelectors.json")
const GeneralSelectors = require("../selectors/generalSelectors.json")
const SearchResultsSelectors = require("../selectors/searchResultsSelectors.json")

before(async function () {
    it('Open the url', async () => {
        // await browser.maximizeWindow()
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

// describe('Do a search after a random city hotel', () => {
//     it('Click the accept all cookies button', async () => {
//         await GenericFunctions.waitForElementToBeExpectedState(HomeSelectors.accept_all_cookies_button, 'be visible')
//         await GenericFunctions.clickElement(HomeSelectors.accept_all_cookies_button)
//     })
//     it('Validate that the default travellers input is 2 travellers 1 room', async () => {
//         await GenericFunctions.validateElementContainsText(GeneralSelectors.travellers_button, "text", ['Travellers:', '2 travellers, 1 room'])
//     })
//     it('Select randomly from the list a location from Going to', async () => {
//         await GenericFunctions.clickElement(GeneralSelectors.going_to_button)
//         await GeneralPage.selectRandomLocationGoingTo()
//         await GenericFunctions.clickElement(GeneralSelectors.first_element_going_to_list)
//     })
//     it('Select random dates from DatePicker and Apply button', async () => {
//         await GenericFunctions.clickElement(GeneralSelectors.dates_button)
//         await GeneralPage.selectRandomDatesFromDatePicker()
//         await GenericFunctions.clickElement(GeneralSelectors.apply_button)
//     })
//     it('Select random Travellers', async () => {
//         await GenericFunctions.clickElement(GeneralSelectors.travellers_button)
//         await GeneralPage.addRandomTravellers()
//     })
//     it('Click Done button', async () => {
//         await GenericFunctions.clickElement(GeneralSelectors.done_button)
//         await GenericFunctions.validateAttributeElement(GeneralSelectors.travellers_container, "aria-hidden", "true")
//     })
//     it('Select search button ', async () => {
//         await GenericFunctions.waitForElementToBeExpectedState(GeneralSelectors.search_button, 'be clickable')
//         await GenericFunctions.clickElement(GeneralSelectors.search_button)
//     })
//     it('Wait search loading animation to be made', async () => {
//         await GenericFunctions.waitForElementToBeExpectedState(GeneralSelectors.loading_animation,'not be displayed')
//     })
//     it('Wait Going to input to be displayed', async () => {
//         await GenericFunctions.waitForElementToBeExpectedState(SearchResultsSelectors.going_to_destination_input, 'be displayed')
//     })
//     it('Validate that the Travellers Input form has the correct data', async () => {
//         await GenericFunctions.validateElementContainsText(SearchResultsSelectors.travellers_input,'text','$Var.travellers')
//     })
//     it('Validate Url containing', async () => {
//         await GenericFunctions.urlParametersInclude('sort=RECOMMENDED')
//     })
//     it('Validate that the Guest rating is Any as default', async () => {
//         await GenericFunctions.validateAttributeElement(SearchResultsSelectors.input_radio_any,'checked','')
//     })
//     it('Validate that the Going To Input form has the correct data', async () => {
//         await GenericFunctions.validateElementContainsText(SearchResultsSelectors.going_to_destination_input,'text','$Var.goingTo')
//     })
// })

describe('Select a random Destination from the default list', () => {
    it('Click the accept all cookies button', async () => {
        await GenericFunctions.waitForElementToBeExpectedState(HomeSelectors.accept_all_cookies_button, 'be visible')
        await GenericFunctions.clickElement(HomeSelectors.accept_all_cookies_button)
    })
    
    it('Select randomly from the list a location from Going to', async () => {
        await GenericFunctions.clickElement(GeneralSelectors.going_to_button)
        await GeneralPage.selectRandomLocationGoingTo()
        await GenericFunctions.clickElement(GeneralSelectors.first_element_going_to_list)
    })
    it('Select search button ', async () => {
        await GenericFunctions.waitForElementToBeExpectedState(GeneralSelectors.search_button, 'be clickable')
        await GenericFunctions.clickElement(GeneralSelectors.search_button)
    })
    it('Validate Url containing', async () => {
                await GenericFunctions.urlParametersInclude('sort=RECOMMENDED')
            })

    it('Validate the discount from a random Destination', async () => {
        await GenericFunctions.calculateTheDiscount()
        await browser.pause(30000);
    })
})




// 3. create a test that, for any of the random destination that you choose, 
// it finds a hotel that has a % discount on its price and check that the % discounted price is correct 
// (make sure to handle all kinds of scenarios, even the one where you might pick a destination that has no discounts)


// afterScenario - add for mocha 
// beforeScenario 
// validate the url parameters (destination - date - travellers) after search 
