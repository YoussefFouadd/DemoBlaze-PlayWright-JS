const {HomePage} = require('./HomePage');
const {SignUpPage } = require('./SignUpPage');
const {LoginPage} = require('./LoginPage');
const {ProductsPage} = require('./ProductsPage');
const {CartPage} = require('./CartPage');
const {CheckoutPage} = require('./CheckoutPage');


class POManager
{
constructor(page)
{
    this.page = page;
    this.homePage= new HomePage(this.page);
    this.signUpPage = new SignUpPage(this.page);
    this.loginPage = new LoginPage(this.page);
    this.productsPage = new ProductsPage(this.page);
    this.cartPage = new CartPage(this.page);
    this.checkoutPage = new CheckoutPage(this.page);

}

getHomePage() {
    return this.homePage;
}

getSignUpPage()
{
    return this.signUpPage;
}

getLoginPage()
{
    return this.loginPage;
}
    
getProductsPage()
{
    return this.productsPage;
}

getCartPage() {
    return this.cartPage;
}

getCheckoutPage() {
    return this.checkoutPage;
}

}
module.exports = {POManager};