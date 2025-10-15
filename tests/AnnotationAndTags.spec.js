import { test, expect } from '@playwright/test';


test.skip('Annotation and Tags test', async ({ page }) => {
  // Your test code here
  console.log("kishann");
});


test('Annotation11 and Tags test', async ({ page }) => {
  // Your test code here
  test.fail();
});


test.fixme('Annotation and Fixme test @smoke', async ({ page }) => {
  // Your test code here
  console.log("kishann");
});


test('Slow Annotation and slow test  @smoke', async ({ page }) => {
  // Your test code here
  console.log("kishann");
  test.slow();
});


