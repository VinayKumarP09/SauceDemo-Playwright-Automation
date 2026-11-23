
class CartPage {
  constructor(page) {
    this.page = page;

    // Locators
    this.cartTitle = page.locator('.title');
    this.cartItems = page.locator('.cart_item');
   // this.productName = page.locator('.inventory_item_name');
   this.productName = page.locator('.cart_item .inventory_item_name');
    this.productPrice = page.locator('.inventory_item_price');
    this.removeButton = page.locator('[data-test^="remove"]');
    this.checkoutButton = page.locator('[data-test="checkout"]');
  }

  async getCartItemCount() {
    return await this.cartItems.count();
  }

  async removeProduct() {
    await this.removeButton.click();
  }
}

module.exports = { CartPage };
