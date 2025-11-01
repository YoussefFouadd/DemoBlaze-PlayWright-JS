class SignUpPage {

constructor(page)
{
    this.page = page;
    this.userName = page.locator("#sign-username");
    this.password = page.locator("#sign-password");
    this.signUpButton = page.locator("button:has-text('Sign up')");

}

async signUp(username,password)
{
    await this.userName.fill(username);
    await this.password.fill(password);
    let message;

    this.page.on('dialog', async dialog => {
        message = dialog.message();
        await dialog.accept();
    });

    await this.signUpButton.click();
    await this.page.waitForEvent('dialog');
    return message;
}

}
module.exports = {SignUpPage};