import { expect as chaiExpect } from "chai";

describe("Performing various basic web interactions", () => {
    it("TC_BINT_001 - Verify user is able to type into Input box.", async () => {
        /**
         * Input box
         * Actions:
         *  1. Type into input box
         *  2. Clear the field and type or just add value
         *  3. Click and type
         *  4. Slow typing
         */
        await browser.url("/inputs");
        let ele = await $("[type=number]");
        await ele.setValue("12345");
    });

    it("TC_BINT_002 - Verify user is able to select a dropdown list option", async () => {
        /**
         * Dropdown
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
        await (await selectedElement.parentElement()).click();
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

    it("TC_BINT_003 - Verify user is able to tick/select a checkbox.", async () => {
        /**
         * Checkbox
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

    it("TC_BINT_009 - Verify user is able to perform key press in editor.", async () => {
        /**
         * Key press
         *
         */
        await browser.url("/frames");
        await (await $("=iFrame")).click();
        let eleFrame = await $("#mce_0_ifr");
        await browser.switchToFrame(eleFrame);
        let editorElement = await $("#tinymce");
        await editorElement.click();

        // Key Press
        await browser.keys(["Meta", "A"]);
        await browser.keys("Delete");
        await editorElement.setValue("Handling Key Press...");
        await browser.switchToParentFrame();
    });

    it("TC_BINT_010 - Verify user is able to scroll the page..", async () => {
        /**
         * Basic scrolling
         * Methods used:
         * 1. scrollIntoView()
         */

        await browser.url("https://amazon.com/");
        //  If you want to see element at top
        await (await $("span=Top Sellers in Books for you")).scrollIntoView();
        //  If you want to see element at bottom
        await (
            await $("span=Top Sellers in Books for you")
        ).scrollIntoView(false);
    });
});
