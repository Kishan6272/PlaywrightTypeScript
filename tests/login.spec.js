import { test, expect } from '@playwright/test';
import { log } from 'node:console';

const  LoginPage = require('../main/Main/Pages/LoginPage');

test('login test demo', async ({ page }) => {
  //await page.goto('https://ecommerce-playground.lambdatest.io/');
  const loginPage = new LoginPage(page);
  await loginPage.loginToApplication();
  await loginPage.onboardNewCustomerFillForm();
  await loginPage.knowYourCustomerForm();
  await loginPage.personalInfoBasicDetails();  
  await loginPage.secpersonalInfoCustomerProfileDetails();
  await loginPage.bankDetailsSelection();
  await loginPage.needAnalysisAndQuoteSection();
  await loginPage.additionalInfoPageAction();
  await loginPage.nomineePageInfo();
  await loginPage.lifestyleAndHealthPageAction();
  await loginPage.agentPageAction();
  await loginPage.paymentInfoPageAction();
  await loginPage.uploadDocumentsPageAction();
});






//hooks in paywright 
test.beforeEach('Hooks in playwright', async ({ page }) => {
  console.log("This will execute before each test");
  await page.goto('https://ebranchpro.uat.pnbmetlife.com/');
 
});

// test.beforeAll('Hooks in playwright', async () => {
//   console.log("This will execute before All test");
 
// });

// test.afterEach('Hooks in playwright', async ({ page }) => {
//   console.log("This will execute after each test");
//  // await page.goto('https://ecommerce-playground.lambdatest.io/');
 
// });

test.afterAll('Hooks in playwright', async () => {
   console.log("This will execute after All test");
 
 });