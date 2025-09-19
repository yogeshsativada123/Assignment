import { test, expect } from '@playwright/test';
import HomePage from '../pages/HomePage.js';
import SignupPage from '../pages/SignupPage.js';
import LoginPage from '../pages/LoginPage.js';
import ContactPage from '../pages/ContactPage.js';
import ProductPage from '../pages/ProductPage.js';
import logger from '../utils/logger.js';

test.describe.serial('DemoBlaze Sequential Flow', () => {
  let page, home, signup, login, contact, product;
  const username = 'testUser65395';
  const password = 'Password@66695';

  test.beforeAll(async ({ browser }) => {
    page = await browser.newPage();
    await page.goto('/');
    home = new HomePage(page);
    signup = new SignupPage(page);
    login = new LoginPage(page);
    contact = new ContactPage(page);
    product = new ProductPage(page);
    logger.info('Browser launched and navigated to DemoBlaze');
  });

  test('Scenario 1: Signup', async () => {
    // Dialog handler for signup
    page.once('dialog', async dialog => await dialog.accept());
    await home.clickSignup();
    await signup.signup(username, password);
    logger.info('User signed up successfully');
  });

  test('Scenario 2: Login', async () => {
    await home.clickLogin();
    await login.login(username, password);
    const loggedUser = await home.getLoggedInUser();
    expect(loggedUser).toContain(username);
    logger.info('User logged in successfully');
  });

  test('Scenario 3: Contact', async () => {
    // Dialog handler for contact
    page.once('dialog', async dialog => await dialog.accept());
    await home.clickContact();
    await contact.sendMessage('test@mail.com', 'Tester', 'Hello World!');
    logger.info('Contact message sent successfully');
  });

  test('Scenario 4: Product', async () => {
    await home.clickPhonesCategory();
    const details = await product.getFirstProductDetails();
    logger.info(`Captured Product: ${details.name} - ${details.price}`);
  });

  test('Scenario 5: Logout', async () => {
    // Wait for logout button to be visible
    await page.waitForSelector('#logout2', { state: 'visible' });
    await home.clickLogout();
    logger.info('User logged out successfully');
  });

  test.afterAll(async () => {
    await page.close();
    logger.info('Browser closed');
  });
});