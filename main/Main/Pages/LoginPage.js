const { expect } = require("@playwright/test");
const { clickWithTimeout } = require("../CommonUtils/commonFunctions");
//import { test } from "@playwright/test";

class LoginPage{

    constructor(page){
        this.page = page;
        this.myAccount = page.locator("//span[contains(text(),'AddOns')]");
        this.modules= page.locator("//span[contains(text(),'Modules')]");
        // this.passwordInput = page.locator("input#input-password");
        // this.loginButton = page.locator("input[value='Login']");
    }


    async loginToApplication(){
        await this.myAccount.hover({timeout:40000});
        await clickWithTimeout(this.modules,30000);
        // await this.page.click("//span[contains(text(),'Login')]");
        // // await this.emailInput.fill(username);
        // // await this.passwordInput.fill(password);
        // await this.loginButton.click();
        await this.page.pause();
    }
}

module.exports = LoginPage;