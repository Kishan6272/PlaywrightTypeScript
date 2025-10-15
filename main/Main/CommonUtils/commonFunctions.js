
module.exports = {

  /**
   * Custom click action with timeout and error handling
   * @param {import('@playwright/test').Locator} locator - The Playwright locator for the element to click
   * @param {number} timeoutMs - Timeout in milliseconds
   */                                                               


async clickWithTimeout(locator, timeoutMs) {
    console.log(`[Custom Action] Attempting to click element with timeout: ${timeoutMs}ms`);

    try {
      // Use the built-in timeout option
      await locator.click({
        timeout: timeoutMs
      });
      console.log(`[Custom Action] Click successful.`);
    } catch (error) {
      console.error(`[Custom Error] Click failed after ${timeoutMs}ms.`);
      // Take a final screenshot on failure for debugging
      await this.page.screenshot({ path: `failure-click-timeout.png` });
      throw error; // Re-throw the error to ensure the test fails
    }
  },


  async fillWithTimeout(locator, value, timeoutMs) {
        // ... (function implementation from above) ...
        console.log(`[Custom Action] Attempting to fill element with value "${value}" and timeout: ${timeoutMs}ms`);

        try {
            await locator.fill(value, { timeout: timeoutMs });
            console.log(`[Custom Action] Fill successful.`);
        } catch (error) {
            console.error(`[Custom Error] Fill failed after ${timeoutMs}ms.`);
            // Since 'this.page' is available in a POM, the screenshot works.
            await this.page.screenshot({ path: `failure-fill-timeout.png` });
            throw error; 
        }
    }


}
