import { type Page, expect } from '@playwright/test';

export class CartPage {
  constructor(private page: Page) {}

  cartItems = '.cart_item';

  async verifyCartHasItems(count: number) {
    await expect(this.page.locator(this.cartItems)).toHaveCount(count);
  }
}