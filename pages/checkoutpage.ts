import {type Page, expect } from '@playwright/test';

type FillInfo = {

    first: string,
    last: string,
    postal: string
};


export class CheckoutPage {
  constructor(private page:Page) {}

  async startCheckout() {
    await this.page.click('#checkout');
  }

  async fillInfo({first, last, postal}:FillInfo) {
    await this.page.fill('#first-name', first);
    await this.page.fill('#last-name', last);
    await this.page.fill('#postal-code', postal);
  }

  async continue() {
    await this.page.click('#continue');
  }

  async finish() {
    await this.page.click('#finish');
  }

  async verifySuccess() {
    await expect(this.page.locator('.complete-header'))
      .toHaveText('Thank you for your order!');
  }
}