 const data = require('../test-data.json');

class HomePage {

constructor(page)
{
    this.page = page;
    this.goToSignUp = page.locator("#signin2");
    this.goToLogin = page.locator("#login2");
    this.welcomeBox= page.locator("#nameofuser");

}

async goTo(username,password)
{
    await this.page.goto(data.url);

}

async goToSignUpOption(username,password)
{
    await this.goToSignUp.click();

}
    
async goToLoginOption(username,password)
{
    await this.goToLogin.click();

}
getWelcomeBox()
{
    return this.welcomeBox;
}
    
getLoginBox()
{
    return this.goToLogin;
}

}
module.exports = {HomePage};