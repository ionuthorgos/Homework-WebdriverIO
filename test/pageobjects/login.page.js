

const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class LoginPage extends Page {
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

    async clickElement(element){
        await $(element).click()
    }

    async validateTextElement(element){
        const ele = await $(element)
        console.log("elements ", await ele.getText())
        await expect(ele).toHaveTextContaining(['Travellers:', '2 travellers, 1 room'])
    }

    async selectRandomLocationGoingTo(){
        const cities = ["Cluj-Napoca", "Sibiu", "Bucuresti"]
        const random = Math.floor(Math.random() * cities.length);
        
        await $('[data-stid="destination_form_field-menu-input"]').setValue(cities[random])
    }
}

module.exports = new LoginPage();
