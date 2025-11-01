const data = require('../test-data.json');

class CheckoutPage {
    constructor(page) {
        this.page = page;
        this.nameInput = page.locator("#name");
        this.countryInput = page.locator("#country");
        this.cityInput = page.locator("#city");
        this.cardInput = page.locator("#card");
        this.monthInput = page.locator("#month");
        this.yearInput = page.locator("#year");
        this.purchaseButton = page.getByRole('button', { name: 'Purchase' });
        this.successMessage = page.locator('.sweet-alert h2');
        this.orderDetails = page.locator('.lead.text-muted');
    }

    async fillCheckoutForm() {
        await this.nameInput.fill(data.name);
        await this.countryInput.fill(data.country);
        await this.cityInput.fill(data.city);
        await this.cardInput.fill(data.card);
        await this.monthInput.fill(data.month);
        await this.yearInput.fill(data.year);
    }

    async clickPurchase() {
        await this.purchaseButton.click();
        return await this.successMessage.textContent();
    }

    async getFinalPrice() {
        const orderDetailsText = await this.orderDetails.textContent();
        const amount = orderDetailsText.match(/Amount:\s*(\d+)\s*USD/)[1];
        return amount;
    }
}

module.exports = { CheckoutPage };

