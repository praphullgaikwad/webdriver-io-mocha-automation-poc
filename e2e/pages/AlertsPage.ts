import BasePage from './BasePage';

export const JS_ALERT_BUTTON = 'button=Click for JS Alert';
export const ALERT_RESULT = '#result';
export const JS_CONFIRM_ALERT = 'button=Click for JS Confirm';
export const JS_PROMPT_ALERT = 'button=Click for JS Prompt';

class AlertsPage extends BasePage {
    /**
     * Getter Methods
     */
    get alertButton() {
        return $(JS_ALERT_BUTTON);
    }

    get alertResult() {
        return $(ALERT_RESULT);
    }

    get confirmAlert() {
        return $(JS_CONFIRM_ALERT);
    }

    get promptAlert() {
        return $(JS_PROMPT_ALERT);
    }

    /**
     *
     * Action Methods
     */
    async openAlert() {
        await this.click(await this.alertButton);
    }

    async acceptOpenAlert() {
        await browser.acceptAlert();
    }

    async dismissOpenAlert() {
        await browser.dismissAlert();
    }

    async openConfirmAlert() {
        await this.click(await this.confirmAlert);
    }

    async openPromptAlert() {
        await this.click(await this.promptAlert);
    }

    async typeIntoAlertBox(text: string) {
        await browser.sendAlertText(text);
    }

    async isAlertPresent() {
        return async function () {
            try {
                await this.getAlertText();

                return true;
            } catch (error) {
                if (error.name === 'no such alert') {
                    return false;
                } else {
                    throw error;
                }
            }
        };
    }
    /**
     * Verification Methods
     */
    async verifyAlertIsDisplayed() {
        let flag = await this.isAlertPresent();
        expect(flag).toBeTruthy();
        return flag;
    }

    async verifyAlertResultMessage(msgText: string) {
        await expect(this.alertResult).toHaveTextContaining(msgText);
    }

    async verifyPromptAlertText(alertText: string) {
        let promptAlertText = await browser.getAlertText();
        expect(promptAlertText).toHaveTextContaining(alertText);
    }
}
export default new AlertsPage();
