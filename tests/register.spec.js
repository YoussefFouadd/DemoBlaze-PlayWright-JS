 const {test, expect} = require('@playwright/test');
 const {POManager} = require('../pages/POManager');
const data = require('../test-data.json');


test('User can signup new account successfully', async ({ page }) => {
    const poManager = new POManager(page);
    const userName = data.name + Math.floor(Math.random() * 1000000);
    const password = data.password;
    const homePage = poManager.getHomePage();
    await homePage.goTo()
    await homePage.goToSignUpOption()
    const signUpPage = poManager.getSignUpPage();
    let message = await signUpPage.signUp(userName, password);
    expect(message).toBe('Sign up successful.');

 })