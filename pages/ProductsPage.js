class ProductsPage {

constructor(page)
{
    this.page = page;
    this.logOut = page.locator("#logout2");
    this.products = page.locator(".card-block");
    this.nextButton = page.locator("#next2");
    this.addToCartButton = page.getByText("Add to cart");
}

async logout()
{
   await this.logOut.click();
}

async searchProductAcrossPages(productName) {
    let productFound = false;
    let priceInProductsPage = null;
    
    // Wait for products to load initially
    await this.products.first().waitFor();

    while (!productFound) {
        const products = this.products;
        const productCard = products.filter({ hasText: productName }).first();
        
        if (await productCard.count() > 0) {
            priceInProductsPage = (await productCard.locator("h5").textContent()).slice(1);
            await productCard.locator(".card-title a").click();
            productFound = true;
        } else {
            if (await this.nextButton.isVisible()) {
                await this.nextButton.click();
                await this.products.first().waitFor({state: 'visible'});
                await this.page.waitForTimeout(1000);
            } else {
                break;
            }
        }
    }

    return priceInProductsPage;
}

async addToCart() {
    this.page.on('dialog', async dialog => {
        await dialog.accept();
    });
    await this.addToCartButton.click();
    await this.page.waitForEvent('dialog');
}

}
module.exports = {ProductsPage};