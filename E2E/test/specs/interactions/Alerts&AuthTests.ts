describe("Web Interactions - Handling alerts & basic authentication", () => {
    it("TC_BINT_005 - Verify accept and dismiss alert.", async () => {
        /**
         * Handling alerts
         * Methods used:
         * 1. isAlertOpen()
         * 2. acceptAlert()
         * 3. dismissAlert()
         * 4. getAlertText()
         * 5. sendAlertText()
         */

        await browser.url("/javascript_alerts");

        // isAlertOpen() acceptAlert()
        await (await $("button=Click for JS Alert")).click();
        if (await browser.isAlertOpen()) {
            await browser.acceptAlert();
        }

        // dismissAlert()
        await (await $("button=Click for JS Confirm")).click();
        await browser.dismissAlert();

        // getAlertText() sendAlertText()
        await (await $("button=Click for JS Prompt")).click();
        let alertText = await browser.getAlertText();
        console.log(`>>Alert Text: ${alertText}`);
        await browser.sendAlertText("This is a sample text.");
        await browser.acceptAlert();
    });

    it("TC_BINT_006 - Verify working of basic authentication.", async () => {
        /**
         * Basic Auth - (Note: This looks like alert but we need to handle it differently)
         * In this case we have handle 'basic auth'. We can handle it by providing username and password
         * as shown in below url. We can also update the 'baseURL' as shown in below URL.
         */
        await browser.url(
            "https://admin:admin@the-internet.herokuapp.com/basic_auth"
        );
    });
});
