import { test, expect } from '@playwright/test';
import { LoginPage } from '../../pages/loginpage';
import { InventoryPage } from '../../pages/inventorypage';



test('SauceDemo login test', async ({ page }) => {
  const login = new LoginPage(page);
  const inventory = new InventoryPage(page);

  await login.goto();
  await login.login('standard_user', 'secret_sauce');

  await inventory.verifyOnInventoryPage();
});