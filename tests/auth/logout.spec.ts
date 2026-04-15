import { test, expect } from '@playwright/test';
import { LoginPage } from '../../pages/loginpage';
import { InventoryPage } from '../../pages/inventorypage';

test('SauceDemo logout test', async ({ page }) => {
  const login = new LoginPage(page);
  const inventory = new InventoryPage(page);

  
  await login.goto();
  await login.login('standard_user', 'secret_sauce');

  await inventory.verifyOnInventoryPage();


  await page.click('#react-burger-menu-btn');
  await page.click('#logout_sidebar_link');

  await expect(page).toHaveURL('https://www.saucedemo.com/');
  await expect(page.locator('#login-button')).toBeVisible();
});