import homePage from "../../../pages/HomePage";

describe("Smoke Tests - Testing login functionalities", () => {
    it("TC_SMOKE_HP_001 - Verify the homepage URL and Title", async () => {
        // Verify homepage URL
        await homePage.verifyHomepageUrl();

        // Verify homepage title
        await homePage.verifyHomePageTitle();
    });
});
