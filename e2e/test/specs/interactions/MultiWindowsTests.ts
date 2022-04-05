import multiWindowsMainPage from '../../../pages/MultiWindowsMainPage';

describe('Web Interactions - Handling multiple windows & iFrames', () => {
    it("TC_BINT_004 - Verify new window's title and url.", async () => {
        /**
         * Windows handling
         * Steps:
         * 1. Launch the browser
         * 2. Open another windows
         * 3. Switch to the window based on title
         * 4. Switch back to the main window
         *
         * Methods used:
         * 1. getTitle()
         * 2. getWindowHandle()
         * 3. getWindowHandles()
         * 4. switchToWindow()
         */

        // Open new windows
        await multiWindowsMainPage.openPage('Multiple Windows');

        //Get current window handle Id
        let parentWindowHandleId = await browser.getWindowHandle();

        // Get current window page title
        let currentPageTitle = await browser.getTitle();

        // Open first window
        await multiWindowsMainPage.click(await multiWindowsMainPage.clickHere);

        // Open second window
        await multiWindowsMainPage.click(await multiWindowsMainPage.elementalSelenium);

        // Switch to specific window with title
        await multiWindowsMainPage.switchToWindowHandle(
            'Elemental Selenium: Receive a Free, Weekly Tip on Using Selenium like a Pro'
        );

        // Switch back to parent window
        await browser.switchToWindow(parentWindowHandleId);

        // Verify page title after switching back to parent window
        await multiWindowsMainPage.verifyPageTitle(currentPageTitle);
    });
});
