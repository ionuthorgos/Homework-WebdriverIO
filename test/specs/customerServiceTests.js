const GeneralPage = require('../pageobjects/general.page')
const GenericFunctions = require('../genericFunctions/genericFunctions')
const GeneralSelectors = require('../selectors/generalSelectors.json')
const HomeSelectors = require('../selectors/homeSelectors.json')
const LoginSelectors = require('../selectors/loginSelectors.json')
const CustomerServiceSelectors = require('../selectors/customerServiceSelectors.json')


describe('Validate Customer Service URL', () => {

    it('Open the url', async () => {
        await GeneralPage.openURL(LoginSelectors.url)
    })
    it('Click the accept all cookies button', async () => {
        await GenericFunctions.waitForElementToBeExpectedState(HomeSelectors.accept_all_cookies_button, 'be visible')
        await GenericFunctions.clickElement(HomeSelectors.accept_all_cookies_button)
    })
    it('Validate that the default travellers input is 2 travellers 1 room', async () => {
        await GenericFunctions.validateElementContainsText(GeneralSelectors.travellers_button, "text", ['Travellers:', '2 travellers, 1 room'])
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
    it('Click the done button', async () => {
        await GenericFunctions.clickElement(GeneralSelectors.done_button)
        await GenericFunctions.validateAttributeElement(GeneralSelectors.travellers_container, "aria-hidden", "true")
    })
    it('Click the search button ', async () => {
        await GenericFunctions.waitForElementToBeExpectedState(GeneralSelectors.search_button, 'be clickable')
        await GenericFunctions.clickElement(GeneralSelectors.search_button)
    })
    it('Click What we are paid impacts our sort order link', async () => {
        await GenericFunctions.waitForElementToBeExpectedState(GeneralSelectors.impacts_sort_order_link, 'be clickable')
        await GenericFunctions.clickElement(GeneralSelectors.impacts_sort_order_link)
        await browser.pause(3000)
        await GenericFunctions.switchWindow('Customer Service Portal')

    })
    it('Validate that the first article toggle is not expanded', async () => {
        await GenericFunctions.waitForElementToBeExpectedState(CustomerServiceSelectors.first_article_expanded, 'be displayed')
        await GenericFunctions.clickElement(CustomerServiceSelectors.first_article_toggle)
        await GenericFunctions.waitForElementToBeExpectedState(CustomerServiceSelectors.first_article_expanded, 'not be present') 
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
