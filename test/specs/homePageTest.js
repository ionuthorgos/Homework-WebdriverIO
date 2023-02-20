// Pages
const LoginPage = require('../pageobjects/login.page')
const HomePage = require('../pageobjects/home.page')
const HotelSearchFormPage = require('../pageobjects/hotelSearchForm.page')
// Functions
const GenericFunctions = require('../genericFunctions/genericFunctions')
// Selectors Pages
const HomeSelectors = require("../selectors/homeSelectors.json")
const LoginSelectors = require("../selectors/loginSelectors.json")
const HotelSearchFormSelectors = require("../selectors/hotelSearchFormSelectors.json")

describe('Do a search after a random city hotel', () => {
    it('Open the url', async () => {
        await LoginPage.openApp(LoginSelectors.url)
    })
    it('Click the accept all cookies button', async () => {
        await HomePage.clickElement(HomeSelectors.accept_all_cookies_button)
    })
    
    it('Validate that the default travellers input is 2 travellers 1 room', async () => {
        await HotelSearchFormPage.validateTextElement(HotelSearchFormSelectors.travellers_button, ['Travellers:', '2 travellers, 1 room'])
    })

    it('Select randomly from the list a location from Going to', async () => {
        await HotelSearchFormPage.clickElement(HotelSearchFormSelectors.going_to_button)
        await HotelSearchFormPage.selectRandomLocationGoingTo()
        await HotelSearchFormPage.clickElement(HotelSearchFormSelectors.first_element_going_to_list)
    })

    it('Select search button ', async () => {
        await HotelSearchFormPage.clickElement(HotelSearchFormSelectors.search_button)
    })
})

// primul scenariu
// clean code - done
// unde se poate parametriza, selector si text in aceeasi functie - done
// fisiere separate pentru functii generice
// rename fisierele
// selectezi date random din date picker
// numar random de adulti
// numar random de copii
// dupa faci search - validaezi ca fieldurile au datele corecte dupa parametri ceruti mai sus
// valideaza parametri de validare in URL

// al 2-lea scenariu
// faci un cont
// te loghezi in aplicatie
// verifici ca esti logat