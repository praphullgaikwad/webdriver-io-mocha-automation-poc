import loginPage from "../../../pages/LoginPage";

describe("Login Smoke Tests - Testing login functionalities", () => {
    it("TC_SMOKE_LP_001 - Verify that user is able to login with provided credentials", async () => {
        // Go to login page
        await loginPage.navigateTo("/login");

        // Perform login operation
        await loginPage.enterUserName("tomsmith");
        await loginPage.enterPassword("SuperSecretPassword!");
        await loginPage.clickSubmitButton();

        // Verify login successful
        await loginPage.verifyLoginStatus("You logged into a secure area!");
    });
});
