
class ProductsPage {
  constructor(page) {
    this.page = page;

    // Locators
    this.pageTitle = page.locator('.title');
    this.inventoryItems = page.locator('.inventory_item');
    this.cartLink = page.locator('.shopping_cart_link');
    this.cartBadge = page.locator('.shopping_cart_badge');
  }

  async getProductCount() {
    return await this.inventoryItems.count();
  }

  async addProductToCart(productName) {
    const product = this.page.locator('.inventory_item')
      .filter({ hasText: productName });

    await product.locator('button').click();
  }

  async openCart() {
    await this.cartLink.click();
  }
}

module.exports = { ProductsPage };
