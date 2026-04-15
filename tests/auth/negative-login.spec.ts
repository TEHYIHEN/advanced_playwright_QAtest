import { test, expect } from '@playwright/test';
import { LoginPage } from '../../pages/loginpage';

test('SauceDemo negative login test', async ({ page }) => {
  const login = new LoginPage(page);

  await login.goto();


  await login.login('wrong_user', 'wrong_password');


  const error = page.locator('[data-test="error"]');

  await expect(error).toBeVisible();
  await expect(error).toContainText('Username and password do not match');
});