import { expect as chaiExpect } from "chai";

describe("Performing various basic web interactions", () => {
    it("TC_BINT_001 - Verify Input box", () => {
        /**
         * 1. Input box
         * Actions:
         *  1. Type into input box
         *  2. Clear the field and type or just add value
         *  3. Click and type
         *  4. Slow typing
         */
        await browser.url("/inputs");
        let ele = await $("[type=number]");
        await ele.click();
        await ele.moveTo();
        await ele.scrollIntoView();
        await ele.setValue("12345");
    });

    it("TC_BINT_002 - Verify Input box", () => {
        /**
         * 2. Dropdown
         * Actions:
         * 1. Assert default option is selected
         * 2. Select by attribute, text, index
         * 3. Get a list of options
         */
        // Assert default option is selected
        await browser.url("/dropdown");
        let selectedElement = await $("//select/option[@selected='selected']");
        let val = await selectedElement.getText();
        chaiExpect(val).to.equal("Please select an option");

        // Select by attribute, text, index
        let dropdownElement = await $("#dropdown");
        dropdownElement.selectByVisibleText("Option 2");
        dropdownElement.selectByAttribute("value", "1");
        dropdownElement.selectByIndex(2);

        // Get a list of options
        await(await selectedElement.parentElement()).click();
        let listOptionsArr = await $$("select > option");
        let arr = [];
        for (let i = 0; i < listOptionsArr.length; i++) {
            console.log(
                "dropdown option " +
                    i +
                    "= " +
                    (await listOptionsArr[i].getText())
            );
            arr.push(await listOptionsArr[i].getText());
        }
    });

    it("TC_BINT_003 - Verify Input box", () => {
        /**
         * 3. Checkbox
         * Actions:
         * 1. Select an option
         * 2. Unselect an option (if selected)
         * 4. Assert if option is selected
         * 5. Select all options
         */
        await browser.url("/checkboxes");
        let checkboxElement = await $('//form[@id="checkboxes"]/input[1]');
        if (!(await checkboxElement.isSelected())) {
            await checkboxElement.click();
        }
        let isChecked = await checkboxElement.isSelected();
        chaiExpect(isChecked).to.be.true;
    });

    it("TC_BINT_004 - Verify Input box", () => {
        /**
         * 4. Windows handling
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
        await(await $("=Click Here")).click();
        await(await $("=Elemental Selenium")).click();
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
                let headerText = await(await $("<h1>")).getText();
                console.log(`Header Text: ${headerText}`);
            }
        }

        // Switch back to parent window
        await browser.switchToWindow(parentWinHandleID);
        let parentWindowHeaderText = await(await $("<h3>")).getText();
        console.log(`Parent window header text: ${parentWindowHeaderText}`);
    });

    it("TC_BINT_005 - Verify Input box", () => {
        /**
         * 4. Handling alerts
         * Methods used:
         * 1. isAlertOpen()
         * 2. acceptAlert()
         * 3. dismissAlert()
         * 4. getAlertText()
         * 5. sendAlertText()
         */

        await browser.url("/javascript_alerts");

        // isAlertOpen() acceptAlert()
        await(await $("button=Click for JS Alert")).click();
        if (await browser.isAlertOpen()) {
            await browser.acceptAlert();
        }

        // dismissAlert()
        await(await $("button=Click for JS Confirm")).click();
        await browser.dismissAlert();

        // getAlertText() sendAlertText()
        await(await $("button=Click for JS Prompt")).click();
        let alertText = await browser.getAlertText();
        console.log(`>>Alert Text: ${alertText}`);
        await browser.sendAlertText("This is a sample text.");
        await browser.acceptAlert();
    });

    it("TC_BINT_006 - Verify Input box", () => {
        /**
         * 5. Basic Auth - (Note: This looks like alert but we need to handle it differently)
         * In this case we have handle 'basic auth'. We can handle it by providing username and password
         * as shown in below url. We can also update the 'baseURL' as shown in below URL.
         */
        await browser.url(
            "https://admin:admin@the-internet.herokuapp.com/basic_auth"
        );
    });

    it("TC_BINT_007 - Verify Input box", () => {
        /**
         * 5. File upload
         *
         */
        console.log(">>Current Working Directory: " + process.cwd());
        await browser.url("/upload");
        await(await $("#file-upload")).addValue(
            `${process.cwd()}/data/file-upload/dummy.txt`
        );
        await(await $("#file-submit")).click();
    });

    it("TC_BINT_007 - Verify Input box", () => {
        /**
         * 6. iFrames
         * Methods used:
         * 1. switchToFrame()
         * 2. switchToParentFrame()
         */
        // await browser.url("/frames");
        // await (await $("=iFrame")).click();
        // let eleFrame = await $("#mce_0_ifr");
        // await browser.switchToFrame(eleFrame);
        // // Interaction with frame
        // let editorElement = await $("#tinymce");
        // await editorElement.setValue("Typing into a frame...");
    });

    it("TC_BINT_007 - Verify Input box", () => {
        /**
         * 7. Key press
         *
         */
        await editorElement.click();
        await browser.keys(["Meta", "A"]);
        await browser.keys("Delete");
        await editorElement.setValue("Handling Key Press...");
        await browser.switchToParentFrame();
    });

    it("TC_BINT_007 - Verify Input box", () => {
        /**
         * 8. Basic scrolling
         * Methods used:
         * 1. scrollIntoView()
         */

        await browser.url("https://amazon.com/");
        //  If you want to see element at top
        await(await $("span=Top Sellers in Books for you")).scrollIntoView();
        //  If you want to see element at bottom
        await(await $("span=Top Sellers in Books for you")).scrollIntoView(
            false
        );
    });
});
