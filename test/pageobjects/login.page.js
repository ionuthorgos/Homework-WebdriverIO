const LoginSelectors = require("../selectors/loginSelectors.json")
const GenericFunctions = require("../genericFunctions/genericFunctions")

/**
 * sub page containing specific selectors and methods for a specific page
 */
class LoginPage {
    /**
     * define selectors using getter methods
     */
    get inputUsername() {
        return $('#username');
    }

    get inputPassword() {
        return $('#password');
    }

    get btnSubmit() {
        return $('button[type="submit"]');
    }
 
    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    async login() { 
        await GenericFunctions.clickElement(LoginSelectors.sign_in_button)
        await GenericFunctions.clickElement(LoginSelectors.login_button)
        await GenericFunctions.fillInputField(LoginSelectors.email_address_input,'ionut.horgos@lola.tech')
        await GenericFunctions.fillInputField(LoginSelectors.password_input,'testLola1234!')
        await GenericFunctions.clickElement(LoginSelectors.login_form)
    }
    
    async openURL(url) {
        await browser.url(url);
        await expect(browser).toHaveUrlContaining(url)
    }
}

module.exports = new LoginPage();
