import { logger } from "../shared/logger";

describe("Sauce demo login", () => {
  it("should login with valid user", async () => {
    browser.url("https://www.saucedemo.com/");
    browser.maximizeWindow();
    const username = $("#user-name");
    const password = $("#password");
    const login = $("#login-button");

    await username.setValue("standard_user");
    await password.setValue("secret_sauce");
    await login.click();
    await browser.pause(3000);
    logger.info("Login successful");
    const title: any = await browser.waitUntil((): any => {
      return browser.getTitle();
    });
    logger.info('Title = ' + title);
  });
});
