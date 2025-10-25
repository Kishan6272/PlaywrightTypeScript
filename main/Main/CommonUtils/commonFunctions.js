
module.exports = {

  /**
   * Custom click action with timeout and error handling
   * @param {import('@playwright/test').Locator} locator - The Playwright locator for the element to click
   * @param {number} timeoutMs - Timeout in milliseconds
   */                                                               


  /**
 * Generates a random alphanumeric name/string with an optional prefix.
 * @param {number} length The length of the random part (default is 6).
 * @param {string} prefix The prefix to use (default is 'Test_').
 * @returns {string} A unique string like "Test_aBc12X_1739504800000".
 */
async generateRandomName(length = 6, prefix = 'Test_') {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let randomPart = '';
    const charactersLength = characters.length;
    
    for (let i = 0; i < length; i++) {
        // Append a random character
        randomPart += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    
    // Add a unique timestamp for extra assurance
    return randomPart;
},

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



//   async generateRandomName(length = 8) {
//   const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
//   let result = 'TestUser_';
//   const charactersLength = characters.length;
//   for (let i = 0; i < length; i++) {
//     // Append a random character from the 'characters' string
//     result += characters.charAt(Math.floor(Math.random() * charactersLength));
//   }
//   // Add a timestamp for extra uniqueness
//   result += '_';
//   return result;
// }  


}
