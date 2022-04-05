import BasePage from "./BasePage";

export const DROPDOWN = "#dropdown";
export const SELECTED_DROPDOWN = "//select/option[@selected='selected']";
class DropdownPage extends BasePage {
    /**
     * Getter Methods
     */
    get dropdown() {
        return $(DROPDOWN);
    }

    get dropdownField() {
        return $(SELECTED_DROPDOWN);
    }

    /**
     * Action Methods
     */

    /**
     * Verification Methods
     */
    async verifySelectedDropOption(dropdownOptionText: string) {
        let val = await this.dropdownField.getText();
        expect(val).toHaveText(dropdownOptionText);
    }
}
export default new DropdownPage();
