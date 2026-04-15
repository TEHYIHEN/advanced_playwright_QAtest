import { teste2e, expect } from '../../fixtures/fixture';
import { InventoryPage } from '../../pages/inventorypage';
import { CartPage } from '../../pages/cartpage';

teste2e('checkout flow - complete purchase', async ({ loggedInPage }) => {
  const page = loggedInPage;

  const inventory = new InventoryPage(page);
  const cart = new CartPage(page);

  await page.goto('https://www.saucedemo.com/inventory.html');

  
  await inventory.addItemToCart();
  await inventory.goToCart();

  await cart.verifyCartHasItems(1);

 
  await page.click('#checkout');

  await page.fill('#first-name', 'John');
  await page.fill('#last-name', 'Doe');
  await page.fill('#postal-code', '12345');

  await page.click('#continue');
  await page.click('#finish');

  
  await expect(page.locator('.complete-header'))
    .toHaveText('Thank you for your order!');
});

//📌这个是有page的情况下，我留着一个写法为以后参考。
//以上代码用codegen写出来的比较简单。
// import { teste2e } from '../../fixtures/fixture';
// import { InventoryPage } from '../../pages/inventorypage';
// import { CartPage } from '../../pages/cartpage';
// import { CheckoutPage } from '../../pages/checkoutpage';

// teste2e('checkout flow - complete purchase', async ({ loggedInPage }) => {
//   const page = loggedInPage;

//   const inventory = new InventoryPage(page);
//   const cart = new CartPage(page);
//   const checkout = new CheckoutPage(page);

//   await page.goto('https://www.saucedemo.com/inventory.html');

//   await inventory.addItemToCart();
//   await inventory.goToCart();

//   await cart.verifyCartHasItems(1);

//   await checkout.startCheckout();
//   await checkout.fillInfo('John', 'Doe', '12345');
//   await checkout.continue();
//   await checkout.finish();

//   await checkout.verifySuccess();
// });