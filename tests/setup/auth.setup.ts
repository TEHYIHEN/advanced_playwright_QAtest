import { test } from '@playwright/test';

test('generate auth state', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');

  await page.fill('#user-name', 'standard_user');
  await page.fill('#password', 'secret_sauce');
  await page.click('#login-button');

  // 💾 保存登录状态
  await page.context().storageState({
    path: 'auth.json',
  });
});