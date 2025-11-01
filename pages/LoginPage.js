class LoginPage {

constructor(page)
{
    this.page = page;
    this.userName = page.locator("#loginusername");
    this.password = page.locator("#loginpassword");
    this.logInButton= page.locator("button:has-text('Log in')");

}

async login(username,password)
{
    await this.userName.fill(username);
    await this.password.fill(password);
    await this.logInButton.click();

}

}
module.exports = {LoginPage};