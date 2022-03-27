import chai from "chai";

export default class BasePage {
    constructor() {}

    /** All reusable web functions */

    /**
     * @param path : The web url which you want to visit.
     */
    async navigateTo(path: string) {
        await browser.maximizeWindow();
        await browser.url(path);
    }

    /**
     * @param ele: The WebElement on which you want to perform type action.
     */
    async click(ele: WebdriverIO.Element) {
        await ele.waitForClickable();
        // If valid element id not found - throw error
        if (!ele.elementId) {
            throw Error(ele.error.message);
        }
        await ele.click();
    }

    /**
     * @param ele: The WebElement on which you want to perform type action.
     * @param text: Text which you want to type into typebox.
     * @param delay: Delay in milliseconds.
     */
    async typeInto(ele: WebdriverIO.Element, text: string, delay = 0) {
        await ele.waitForDisplayed({ timeout: 5000 });
        // If valid element id not found - throw error
        if (!ele.elementId) {
            throw Error(ele.error.message);
        }
        if (!delay) {
            await ele.setValue(text);
        } else {
            // Clear field
            await this.click(await ele);
            await ele.clearValue();

            // Type with delay
            for (let i = 0; i < text.length; i++) {
                await ele.addValue(text[i]);
                await browser.pause(delay);
            }
        }
    }
}
