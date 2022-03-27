import { expect as chaiExpect } from "chai";

import inputPage from "../../../pages/InputPage";
// import checkboxPage from "../../../pages/CheckboxesPage";
// import dropdownPage from "../../../pages/DropdownPage";
// import framesPage from "../../../pages/FramesPage";

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

        // 1. Type into input box
        await inputPage.typeIntoNumberField("6666");

        // 2. Clear the field and type or just add value
        await inputPage.clearNumberField();
        await inputPage.typeIntoNumberField("7777");

        // 3. Click and type
        await inputPage.clickAndType("8888");

        // 4. Slow typing
        await inputPage.typeIntoNumberField("9999", 200);
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
});
