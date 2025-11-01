class CartPage {
    constructor(page) {
        this.page = page;
        this.cartLink = page.locator("#cartur");
        this.cartItems = page.locator("tr.success");
        this.productName = page.locator("tr td").nth(1);
        this.productPrice = page.locator("tr td").nth(2);
        this.placeOrderButton = page.getByRole('button', { name: 'Place Order' });
    }

    async goToCart() {
        await this.cartLink.click();
        await this.cartItems.first().waitFor();
    }

    async getProductsCount() {
        return await this.cartItems.count();
    }

    async getProductName() {
        return await this.productName.textContent();
    }

    async getProductPrice() {
        return await this.productPrice.textContent();
    }

    async clickPlaceOrder() {
        await this.placeOrderButton.click();
    }
}

module.exports = { CartPage };

