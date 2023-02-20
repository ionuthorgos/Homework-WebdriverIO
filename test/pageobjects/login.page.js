const GenericFunctions = require('../genericFunctions/genericFunctions');
/**
 * sub page containing specific selectors and methods for a specific page
 */
class LoginPage extends GenericFunctions {
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
    async login(username, password) {
        await this.inputUsername.setValue(username);
        await this.inputPassword.setValue(password);
        await this.btnSubmit.click();
    }

    
    async openApp(url) {
        await browser.url(url);
        await expect(browser).toHaveUrlContaining(url)
    }
}

module.exports = new LoginPage();
