// Pages
const LoginPage = require('../pageobjects/login.page')
const HomePage = require('../pageobjects/home.page')
const GeneralPage = require('../pageobjects/general.page')
// Functions
const GenericFunctions = require('../genericFunctions/genericFunctions')
// Selectors Pages
const HomeSelectors = require("../selectors/homeSelectors.json")
const LoginSelectors = require("../selectors/loginSelectors.json")
const GeneralSelectors = require("../selectors/generalSelectors.json")

describe('Do a search after a random city hotel', () => {
    it('Open the url', async () => {
        await LoginPage.openApp(LoginSelectors.url)
    })
    it('Click the accept all cookies button', async () => {
        await HomePage.clickElement(HomeSelectors.accept_all_cookies_button)
    })
    it('Validate that the default travellers input is 2 travellers 1 room', async () => {
        await HomePage.validateTextElement(GeneralSelectors.travellers_button, ['Travellers:', '2 travellers, 1 room'])
    })
    it('Select randomly from the list a location from Going to', async () => {
        await HomePage.clickElement(GeneralSelectors.going_to_button)
        await GeneralPage.selectRandomLocationGoingTo()
        await HomePage.clickElement(GeneralSelectors.first_element_going_to_list)
    })
    it('Select random dates from DatePicker and Apply button', async () => {
        await HomePage.clickElement(GeneralSelectors.dates_button)
        await GeneralPage.selectRandomDatesFromDatePicker()
        await HomePage.clickElement(GeneralSelectors.apply_button)
    })
    it('Select random Travellers', async () => {
        await HomePage.clickElement(GeneralSelectors.travellers_button)
        await GeneralPage.addRandomTravellers()
    })
    it('Click Done button', async () => {
        await GeneralPage.clickElement(GeneralSelectors.done_button)
    })
    it('Select search button ', async () => {
        await HomePage.clickElement(GeneralSelectors.search_button)
        await browser.pause(3000)
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
// numar random de copii - done (dar mai trebuie logica daca vrem sa fie tot automatizat)
// dupa faci search - validezi ca fieldurile au datele corecte dupa parametri ceruti mai sus
// valideaza parametri de validare in URL

// al 2-lea scenariu
// faci un cont
// te loghezi in aplicatie
// verifici ca esti logat



// create generalPage