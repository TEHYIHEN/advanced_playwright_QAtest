//📌📌目前有了storageState in config.ts ,其实这个也不需要了。为了以后一些复杂逻辑，先keep着以后可能用到。

import { test as base, type Page } from '@playwright/test';
import { LoginPage } from '../pages/loginpage';

type MyFixtures = {
  loggedInPage: Page;
};

export const teste2e = base.extend<MyFixtures>({
  loggedInPage: async ({ page }, use) => {
    const login = new LoginPage(page);

    
    if (await page.locator('#login-button').isVisible()) {
      await login.goto();
      await login.login('standard_user', 'secret_sauce');
    }

    await use(page);
  },
});

export { expect } from '@playwright/test';