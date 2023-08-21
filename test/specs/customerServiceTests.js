const GeneralPage = require('../pageobjects/general.page')
const GenericFunctions = require('../genericFunctions/genericFunctions')
const GeneralSelectors = require('../selectors/generalSelectors.json')
// const HomeSelectors = require('../selectors/homeSelectors.json')
const LoginSelectors = require('../selectors/loginSelectors.json')
const CustomerServiceSelectors = require('../selectors/customerServiceSelectors.json')

before(async function () {
    it('Open the url', async () => {
        await GeneralPage.openURL(LoginSelectors.url)
    })
})

describe('Validate Customer Service URL', () => {
    // it('Click the accept all cookies button', async () => {
    //     await GenericFunctions.waitForElementToBeExpectedState(HomeSelectors.accept_all_cookies_button, 'be visible')
    //     await GenericFunctions.clickElement(HomeSelectors.accept_all_cookies_button)
    // })
    it('Validate that the default travellers input is 2 travellers 1 room', async () => {
        await GenericFunctions.validateElementContainsText(GeneralSelectors.travellers_button, "text", ['Travellers:', '2 travellers, 1 room'])
    })
    // it('Select randomly from the list a location from Going to', async () => {
    //     await GenericFunctions.clickElement(GeneralSelectors.going_to_button)
    //     await GeneralPage.selectRandomLocationGoingTo()
    //     await GenericFunctions.clickElement(GeneralSelectors.first_element_going_to_list)
    // })
    // it('Select random dates from DatePicker and Apply button', async () => {
    //     await GenericFunctions.clickElement(GeneralSelectors.dates_button)
    //     await GeneralPage.selectRandomDatesFromDatePicker()
    //     await GenericFunctions.clickElement(GeneralSelectors.apply_button)
    // })
    // it('Select random Travellers', async () => {
    //     await GenericFunctions.clickElement(GeneralSelectors.travellers_button)
    //     await GeneralPage.addRandomTravellers()
    // })
    // it('Click the done button', async () => {
    //     await GenericFunctions.clickElement(GeneralSelectors.done_button)
    //     await GenericFunctions.validateAttributeElement(GeneralSelectors.travellers_container, "aria-hidden", "true")
    // })
    // it('Click the search button ', async () => {
    //     await GenericFunctions.waitForElementToBeExpectedState(GeneralSelectors.search_button, 'be clickable')
    //     await GenericFunctions.clickElement(GeneralSelectors.search_button)
    // })
    // it('Click What we are paid impacts our sort order link', async () => {
    //     await GenericFunctions.waitForElementToBeExpectedState(GeneralSelectors.impacts_sort_order_link, 'be clickable')
    //     await GenericFunctions.clickElement(GeneralSelectors.impacts_sort_order_link)
    //     await browser.pause(3000)
    //     await GenericFunctions.switchWindow('Customer Service Portal')

    // })
    // it('Validate that the first article toggle is not expanded', async () => {
    //     await GenericFunctions.waitForElementToBeExpectedState(CustomerServiceSelectors.first_article_expanded, 'be displayed')
    //     await GenericFunctions.clickElement(CustomerServiceSelectors.first_article_toggle)
    //     await GenericFunctions.waitForElementToBeExpectedState(CustomerServiceSelectors.first_article_expanded, 'not be present')
    // })
})


