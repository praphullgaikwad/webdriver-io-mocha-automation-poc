import BasePage from './BasePage';

export const CLICK_HERE = '=Click Here';
export const ELEMENTAL_SELENIUM = '=Elemental Selenium';
class MultiWindowsMainPage extends BasePage {
    /**
     * Getter Methods
     */
    get clickHere() {
        return $(CLICK_HERE);
    }

    get elementalSelenium() {
        return $(ELEMENTAL_SELENIUM);
    }

    /**
     * Action Methods
     */

    /**
     * @param pageTitle - Title of the page on which to switch
     */
    async switchToWindowHandle(pageTitle: string) {
        // Get all window handles
        let windowHandles = await browser.getWindowHandles();
        for (let i = 0; i < windowHandles.length; i++) {
            let windowHandleID = windowHandles[i];
            // Switch to each window handle
            await browser.switchToWindow(windowHandleID);
            // Get current window handle title
            let currentWindowTitle = await browser.getTitle();
            // Switch to perticular window handle with title
            if (currentWindowTitle === pageTitle) {
                await browser.switchToWindow(windowHandles[i]);
            }
        }
    }

    /**
     * Verification Methods
     */

    /**
     * @param pageTitle - Title of the page on which to switch
     */
    async verifyPageTitle(pageTitle: string) {
        let currentPageTitle = await browser.getTitle();
        expect(currentPageTitle).toHaveText(pageTitle);
    }
}
export default new MultiWindowsMainPage();
