import {type Page, expect } from '@playwright/test';

export class InventoryPage {
  constructor(private page: Page) {}

  addToCartBtn = '#add-to-cart-sauce-labs-backpack';
  cartIcon = '.shopping_cart_link';

  async addItemToCart() {
    await this.page.click(this.addToCartBtn);
  }

  async goToCart() {
    await this.page.click(this.cartIcon);
  }

  async verifyOnInventoryPage() {
    await expect(this.page).toHaveURL(/inventory/);
  }
}