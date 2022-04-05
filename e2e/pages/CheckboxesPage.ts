import BasePage from "./BasePage";

export const CHECKBOXES = '//form[@id="checkboxes"]/input';
class CheckboxesPage extends BasePage {
    /**
     * Getter Methods
     */
    get checkBoxes() {
        return $$(CHECKBOXES);
    }

    /**
     * Action Methods
     */
    /**
     * @param checkBoxNumber: Which no. of checkbox you want to click, for ex: 1
     * Note: Here, checkBoxNumber starts from 0
     */
    async clickCheckBox(checkBoxNumber = 1) {
        let listCheckBoxes = await this.checkBoxes;
        for (let i = 0; i < listCheckBoxes.length; i++) {
            if (i === checkBoxNumber) {
                await this.click(listCheckBoxes[i]);
            }
        }
    }

    /**
     * This method make sure that the checkbox remains selected whether it is previously selected or not
     * @param checkBoxNumber: Number of checkbox you want to click, for ex: 1,
     * Note: Here, checkBoxNumber starts from 0
     */
    async clickCheckBoxForce(checkBoxNumber = 1) {
        let listCheckBoxes = await this.checkBoxes;
        if (!(await listCheckBoxes[checkBoxNumber].isSelected())) {
            await this.click(listCheckBoxes[checkBoxNumber]);
        }
    }

    /**
     * Verification Methods
     */
    /**
     * @param checkBoxNumber : Number of checkbox to click, for ex: 1,
     * Note: Here, checkBoxNumber starts from 0
     * @param status : 'true' for selected or 'false' for not selected.
     */
    async verifyCheckBoxSelected(checkBoxNumber = 1, status = true) {
        let listCheckBoxes = await this.checkBoxes;
        let actStatus = await listCheckBoxes[checkBoxNumber].isSelected();

        if (status) {
            expect(actStatus).toBeTruthy();
        } else {
            expect(actStatus).not.toBeTruthy();
        }
    }
}
export default new CheckboxesPage();
