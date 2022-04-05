import BasePage from "./BasePage";

export const NUMBER_FIELD = "[type=number]";

class InputPage extends BasePage {
    /**
     * Getter Methods
     */

    get numberField() {
        return $(NUMBER_FIELD);
    }

    /**
     * Action Methods
     */
    async clearNumberField() {
        await this.click(await this.numberField);
        await browser.keys(["Meta", "A"]);
        await browser.keys("Delete");
    }

    async typeIntoNumberField(text: string, delay = 0) {
        await this.typeInto(await this.numberField, text, delay);
    }

    async clickAndType(text: string) {
        await this.click(await this.numberField);
        await this.typeInto(await this.numberField, text);
    }
}
export default new InputPage();
