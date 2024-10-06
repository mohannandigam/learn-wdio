import { expect } from "@wdio/globals";
import LoginPage from "../pageobjects/login.page";
import SecurePage from "../pageobjects/secure.page";
import { logger } from "../../shared/logger";

describe("My Login application", () => {
  it("should login with valid credentials", async () => {
    await LoginPage.open();
    logger.info("Login page opened");
    await LoginPage.login("tomsmith", "SuperSecretPassword!");
    await expect(SecurePage.flashAlert).toBeExisting();
    await expect(SecurePage.flashAlert).toHaveText(
      "You logged into a secure area!"
    );
    logger.info("Login successful");
    await browser.pause(5000);
  });
});
