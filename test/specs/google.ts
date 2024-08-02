import { logger } from "../../shared/logger";

describe("Navigate to Google Home Page", () => {
  it("should navigate to Google Home Page", () => {
    browser.url("https://www.google.com/");
    logger.info("Nanviagted to Google");
  });
});
