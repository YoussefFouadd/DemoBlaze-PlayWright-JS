const { test, expect } = require('@playwright/test');
const { POManager } = require('../pages/POManager');
const { APIUtils } = require('../utils/APIUtils');
const data = require('../test-data.json');

let sharedContext;
let sharedPage;

test.beforeEach(async ({ browser, request }) => {
  sharedContext = await browser.newContext();
  sharedPage = await sharedContext.newPage();

  const apiUtils = new APIUtils(request, {
    username: data.userName,
    password: data.password
  });
  const auth_token = await apiUtils.getToken();

  const poManager = new POManager(sharedPage);
  const homePage = poManager.getHomePage();
  await homePage.goTo();
  
  await sharedContext.addCookies([{
    name: 'tokenp_',
    value: auth_token,
    url: data.url
  }]);

  await homePage.goTo();
  const welcomeLocator = homePage.welcomeBox;
  await expect(welcomeLocator).toHaveText(`Welcome ${data.userName}`, { timeout: 5000 });
});


test('User can logout successfully', async () => {
  const poManager = new POManager(sharedPage);
  const productsPage = poManager.getProductsPage();
  await productsPage.logout();
  const homePage = poManager.getHomePage();
  await expect(homePage.getWelcomeBox()).toBeHidden();
  await expect(homePage.getLoginBox()).toBeVisible();
});

