import { teste2e, expect } from '../../fixtures/fixture';
import { InventoryPage } from '../../pages/inventorypage';

teste2e('inventory flow - browse and add items', async ({ loggedInPage }) => {
  const page = loggedInPage;

  const inventory = new InventoryPage(page);

  await page.goto('https://www.saucedemo.com/inventory.html');

  
  await inventory.verifyOnInventoryPage();

 
  await inventory.addItemToCart();
  await page.click('#add-to-cart-sauce-labs-bike-light');

  
  const badge = await page.locator('.shopping_cart_badge').innerText();
  expect(Number(badge)).toBe(2);
});