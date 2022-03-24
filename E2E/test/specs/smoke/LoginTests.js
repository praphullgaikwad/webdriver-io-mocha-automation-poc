import { expect as expectChai } from "chai";

describe("Smoke Tests - Testing critical functionalities", () => {
  it("TC_SMOKE_001 - Verify homepage URL and Title", async () => {
    // Verify homepage URL
    let actUrl = await browser.getUrl();
    expectChai(actUrl).to.equal("https://the-internet.herokuapp.com/");

    // Verify homepage title
    let pageTitle = await browser.getTitle();
    expectChai(pageTitle).to.equal("The Internet");
  });

  it("TC_SMOKE_002 - should login with valid credentials", async () => {
    // Go to login page
    await browser.url("/login");

    // Perform login operation
    await $("#username").setValue("tomsmith");
    await $("#password").setValue("SuperSecretPassword!");
    await $('button[type="submit"]').click();

    // Verify login successful
    await expect($("#flash")).toBeExisting();
    await expect($("#flash")).toHaveTextContaining(
      "You logged into a secure area!"
    );
  });
});
