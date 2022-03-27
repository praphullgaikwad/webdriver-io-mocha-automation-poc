import { expect as chaiExpect } from "chai";

import inputPage from "../../../pages/InputPage";
import dropdownPage from "../../../pages/DropdownPage";
import checkboxPage from "../../../pages/CheckboxesPage";
import iFramesPage from "../../../pages/IFramesPage";

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
         * 2. Select by visible text
         * 3. Select by attribute
         * 4. Select by index
         */

        await dropdownPage.navigateTo("/dropdown");

        // Assert default option is selected
        await dropdownPage.verifySelectedDropOption("Please select an option");

        // Select by visible text
        await dropdownPage.dropdown.selectByVisibleText("Option 2");

        // Select by attribute
        await dropdownPage.dropdown.selectByAttribute("value", "1");

        // Select by index
        await dropdownPage.dropdown.selectByIndex(2);
    });

    it("TC_BINT_003 - Verify user is able to tick/select a checkbox.", async () => {
        /**
         * Checkbox
         * Actions:
         * 1. Select an checkbox
         * 2. Unselect an checkbox (if selected)
         * 4. Assert if checkbox is selected
         * 5. Select all checkbox and verify
         */
        await checkboxPage.navigateTo("/checkboxes");

        // 1. Select an checkbox
        await checkboxPage.clickCheckBox(0);
        await checkboxPage.verifyCheckBoxSelected(0);

        // Unselect an checkbox (if selected)
        await checkboxPage.clickCheckBoxForce(1);
        await checkboxPage.clickCheckBox(1);

        // 4. Assert checkbox is not selected
        await checkboxPage.verifyCheckBoxSelected(1, false);

        // 5. Select all checkbox and verify
        await checkboxPage.clickCheckBoxForce(0);
        await checkboxPage.verifyCheckBoxSelected(0);

        await checkboxPage.clickCheckBoxForce(1);
        await checkboxPage.verifyCheckBoxSelected(1);
    });

    it("TC_BINT_009 - Verify user is able to perform key press in editor.", async () => {
        /**
         * Key press
         *
         */
        await iFramesPage.navigateTo("/frames");

        // Click iFrame
        await iFramesPage.clickIFrameType();

        // Switch to iFrame
        await iFramesPage.switchToIFrame();

        // Click on iFrame editor
        await iFramesPage.editorField.click();

        // Perform a keypress operation inside the editor
        await browser.keys(["Meta", "A"]);
        await browser.keys("Delete");
        await iFramesPage.typeIntoEditor("Handling Key Press...");

        // Switch back to parent frame
        await browser.switchToParentFrame();
    });
});
