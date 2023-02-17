const LoginPage = require('../pageobjects/login.page')

describe('Open the app hotels.com', () => {
    it('Open the url', async () => {
        await LoginPage.openApp('https://www.hotels.com/?locale=en_IE&pos=HCOM_EMEA&siteid=300000025')
    })
    // it('Click the accept all cookies button', async () => {
    //     await LoginPage.clickElement('button[class*="osano-cm-accept-all"]')
    // })
    it('Validate that the default travellers input is 2 travellers 1 room', async () => {
        await LoginPage.validateTextElement('[data-stid*="open-room-picker"]')
        await LoginPage.clickElement('[data-stid="destination_form_field-menu-trigger"]')
        await LoginPage.selectRandomLocationGoingTo()
        await LoginPage.clickElement('li[data-stid="destination_form_field-result-item"]:nth-child(1)')
        await LoginPage.clickElement('[id="search_button"]')
        await browser.pause(4000)
    })
})