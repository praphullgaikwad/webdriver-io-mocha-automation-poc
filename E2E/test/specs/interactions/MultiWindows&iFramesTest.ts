describe("Web Interactions - Handling multiple windows & iFrames", () => {
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
        await browser.url("/windows");
        await (await $("=Click Here")).click();
        await (await $("=Elemental Selenium")).click();
        let currWinTitle = await browser.getTitle();
        let parentWinHandleID = await browser.getWindowHandle();
        console.log(`>>Current Window Title: ${currWinTitle}`);

        // Switch to specific window
        let windowHandles = await browser.getWindowHandles();
        for (let i = 0; i < windowHandles.length; i++) {
            let windowHandleID = windowHandles[i];
            console.log(`Window handle: ${windowHandleID}`);
            await browser.switchToWindow(windowHandleID);
            let currentWindowTitle = await browser.getTitle();
            if (
                currentWindowTitle ===
                "Elemental Selenium: Receive a Free, Weekly Tip on Using Selenium like a Pro"
            ) {
                await browser.switchToWindow(windowHandles[i]);
                let headerText = await (await $("<h1>")).getText();
                console.log(`Header Text: ${headerText}`);
            }
        }

        // Switch back to parent window
        await browser.switchToWindow(parentWinHandleID);
        let parentWindowHeaderText = await (await $("<h3>")).getText();
        console.log(`Parent window header text: ${parentWindowHeaderText}`);
    });

    it("TC_BINT_008 - Verify that user is able to type into editor.", async () => {
        /**
         * iFrames Handling
         * Methods used:
         * 1. switchToFrame()
         * 2. switchToParentFrame()
         */
        await browser.url("/frames");
        await (await $("=iFrame")).click();
        let eleFrame = await $("#mce_0_ifr");
        await browser.switchToFrame(eleFrame);

        // Interaction with frame
        let editorElement = await $("#tinymce");
        await editorElement.setValue("Typing into a frame...");
    });
});
