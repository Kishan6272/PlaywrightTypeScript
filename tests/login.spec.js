import { test, expect } from '@playwright/test';
import { log } from 'node:console';

const LoginPage = require('../main/Main/Pages/LoginPage');
const { readDataFromExcelFile } = require('../main/Main/CommonUtils/ExcelHelper');

const ExcelDataProvider = readDataFromExcelFile('Century_Data.xlsx');


test('login test demo', async ({ page }) => {
  console.log(ExcelDataProvider,ExcelDataProvider.length);
  
  for (let i = 0; i < 1; i++) {
  //await page.goto('https://ecommerce-playground.lambdatest.io/');
  const loginPage = new LoginPage(page);
  await loginPage.loginToApplication(i);
  await loginPage.onboardNewCustomerFillForm(i);
  await loginPage.knowYourCustomerForm(i);
  await loginPage.personalInfoBasicDetails(i);  
  await loginPage.secpersonalInfoCustomerProfileDetails(i);
  await loginPage.bankDetailsSelection(i);
  await loginPage.needAnalysisAndQuoteSection(i);
  await loginPage.additionalInfoPageAction(i);
  await loginPage.nomineePageInfo(i);
  await loginPage.lifestyleAndHealthPageAction(i);
  await loginPage.agentPageAction(i);
  await loginPage.paymentInfoPageAction(i);
  await loginPage.uploadDocumentsPageAction(i);
  }

});




// 1. Import necessary modules
//import { test, expect } from '@playwright/test';
// Assuming ExcelDataProvider and LoginPage are imported correctly
// import { ExcelDataProvider } from '../data/excel-data-loader'; 
// import { LoginPage } from '../pages/LoginPage';

// 2. Use test.describe to create a test suite (group)
test.describe('Customer Onboarding Data-Driven Suite', () => {
    
    // Create one Playwright test per row in ExcelDataProvider since Playwright does not provide test.each()
    for (const [index, rowData] of ExcelDataProvider.entries()) {
        test(`Onboarding test for customer: ${index + 1}`, async ({ page }) => {

            // 4. Instantiate the Page Object Model
            const loginPage = new LoginPage(page);
            
            // --- Test Steps using the current row data ---
            
            // Use test.step() for clarity in the report
            await test.step('Login and Initial Forms', async () => {
                await loginPage.loginToApplication(index);
                await loginPage.onboardNewCustomerFillForm(index);
                await loginPage.knowYourCustomerForm(index);
                await loginPage.personalInfoBasicDetails(index);
                await loginPage.secpersonalInfoCustomerProfileDetails(index);
            });

            await loginPage.bankDetailsSelection(index);
            await loginPage.needAnalysisAndQuoteSection(index);
            await loginPage.additionalInfoPageAction(index);
            await loginPage.nomineePageInfo(index);
            await loginPage.lifestyleAndHealthPageAction(index);
            await loginPage.agentPageAction(index);
            await loginPage.paymentInfoPageAction(index);
            await loginPage.uploadDocumentsPageAction(index);
            
            // Final assertion (optional, but recommended)
            // await expect(page.locator('.success-message')).toBeVisible();
        });
    }
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