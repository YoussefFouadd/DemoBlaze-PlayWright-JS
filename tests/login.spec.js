 const {test, expect} = require('@playwright/test');
 const {POManager} = require('../pages/POManager');
 const data = require('../test-data.json');


 test('@Sanity User can login successfully', async ({ page }) => {
  const poManager = new POManager(page);
  const homePage = poManager.getHomePage();
  await homePage.goTo();
  await homePage.goToLoginOption();
  const loginPage = poManager.getLoginPage();
  await loginPage.login(data.userName,data.password)
  const welcomeLocator = homePage.welcomeBox;
  await expect(welcomeLocator).toHaveText(`Welcome ${data.userName}`, { timeout: 5000 })    
 })