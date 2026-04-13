import { test } from '@playwright/test';
import { LoginPage } from '../pages/loginpage';
import { InventoryPage } from '../pages/inventorypage';
import { CartPage } from '../pages/cartpage';


test('add item to cart', async ({ page }) => {
  const login = new LoginPage(page);
  const inventory = new InventoryPage(page);
  const cart = new CartPage(page);

  await login.goto();
  await login.login('standard_user', 'secret_sauce');

  await inventory.addItemToCart();
  await inventory.goToCart();

  await cart.verifyCartHasItems(1);
});