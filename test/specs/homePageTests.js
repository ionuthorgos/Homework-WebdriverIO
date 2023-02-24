// Pages
const LoginPage = require('../pageobjects/login.page')
const HomePage = require('../pageobjects/home.page')
const GeneralPage = require('../pageobjects/general.page')
// Functions
const GenericFunctions = require('../genericFunctions/genericFunctions')
// Selectors
const HomeSelectors = require("../selectors/homeSelectors.json")
const LoginSelectors = require("../selectors/loginSelectors.json")
const GeneralSelectors = require("../selectors/generalSelectors.json")
const Collector = require('../utils/collector')

before(async function () {
    it('Open the url', async () => {
        await LoginPage.openURL(LoginSelectors.url)
    })
    it('Open the url', async () => {
        await LoginPage.login()
    })
    // it('Navigate to Sign page', async () => {
    //     await LoginPage.clickElement(LoginSelectors.sign_in_button)
    // })
    // it('Select Login button', async () => {
    //     await LoginPage.clickElement(LoginSelectors.login_button)
    // })
    // it('Fill in email address', async () => {
    //     await LoginPage.fillInputField(LoginSelectors.email_address_input, LoginSelectors.email_address)
    // })
    // it('Fill in the password', async () => {
    //     await LoginPage.fillInputField(LoginSelectors.password_input, LoginSelectors.password)
    // })
    // it('Select Sign in form button', async () => {
    //     await LoginPage.clickElement(LoginSelectors.login_form)
    // })
    it('Validate that the user is succesffully logged in', async () => {
        await HomePage.validateElementContainsText(LoginSelectors.header_profile_name, "ionut")
    })
});

describe('Do a search after a random city hotel', () => {

    it('Click the accept all cookies button', async () => {
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
    it('Validate that the form has the correct data', async () => {
        await GeneralPage.validateTravellersInput()
    })
})


// primul scenariu
// clean code - done
// unde se poate parametriza, selector si text in aceeasi functie - done
// fisiere separate pentru functii generice - done
// rename fisierele - done
// selectezi date random din date picker - done
// numar random de adulti - done
// numar random de copii - done
// dupa faci search - validezi ca fieldurile au datele corecte dupa parametri ceruti mai sus
// valideaza parametri de validare in URL

// al 2-lea scenariu - done
// faci un cont - done
// te loghezi in aplicatie - done
// verifici ca esti logat - done
 
