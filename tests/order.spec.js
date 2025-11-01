const {test, expect} = require('@playwright/test');
const {POManager} = require('../pages/POManager');
const data = require('../test-data.json');

test('@Sanity User can submit an order Successfully', async ({ page }) => {
    const poManager = new POManager(page);
    const productToFind = data.productToFind;
    
    const homePage = poManager.getHomePage();
    await homePage.goTo();
    
    const productsPage = poManager.getProductsPage();
    const priceInProductsPage = await productsPage.searchProductAcrossPages(productToFind);
    await productsPage.addToCart();
    
    const cartPage = poManager.getCartPage();
    await cartPage.goToCart();
    const incartProductsCount = await cartPage.getProductsCount();
    const incartProductname = await cartPage.getProductName();
    const incartProductprice = await cartPage.getProductPrice();
    
    expect(incartProductsCount).toBe(1);
    expect(incartProductname).toBe(productToFind);
    expect(incartProductprice).toBe(priceInProductsPage);
    
    await cartPage.clickPlaceOrder();
    
    const checkoutPage = poManager.getCheckoutPage();
    await checkoutPage.fillCheckoutForm();
    const successMessage = await checkoutPage.clickPurchase();
    expect(successMessage).toBe("Thank you for your purchase!");
    
    const finalPrice= await checkoutPage.getFinalPrice();
    expect(finalPrice).toBe(priceInProductsPage);
})

