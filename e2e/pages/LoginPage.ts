import BasePage from "./BasePage";

export const USERNAME = "#username";
export const PASSWORD = "#password";
export const SUBMIT_BUTTON = "button[type='submit']";
export const MESSAGE = "#flash";

class LoginPage extends BasePage {
    /**
     * Getter Methods
     */
    get usernameField() {
        return $(USERNAME);
    }

    get passwordField() {
        return $(PASSWORD);
    }

    get submitButton() {
        return $(SUBMIT_BUTTON);
    }

    get messageField() {
        return $(MESSAGE);
    }

    /**
     * Action Methods
     */
    async enterUserName(text: string) {
        await this.typeInto(await this.usernameField, text, 200);
    }

    async enterPassword(text: string) {
        await this.typeInto(await this.passwordField, text);
    }

    async clickSubmitButton() {
        await this.click(await this.submitButton);
    }

    /**
     * Verification Methods
     */

    async verifyLoginStatus(textMsg: string, loginStatus = true) {
        expect(await this.messageField).toBeDisplayed();
        expect(await this.messageField).toHaveTextContaining(
            "You logged into a secure area!"
        );
    }
}

export default new LoginPage();
