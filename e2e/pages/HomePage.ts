import BasePage from "./BasePage";

class HomePage extends BasePage {
    /**
     * Verification Methods
     */

    async verifyHomepageUrl() {
        expect(browser).toHaveUrl("https://the-internet.herokuapp.com/");
    }

    async verifyHomePageTitle() {
        let actPageTitle = await browser.getTitle();
        expect(actPageTitle).toHaveText("The Internet");
    }
}

export default new HomePage();
