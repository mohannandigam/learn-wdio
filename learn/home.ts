import { logger } from "../shared/logger";

describe("Navigate to Youtube Home Page", () => {
  it("should navigate to Youtube Home Page", () => {
    browser.url("https://www.youtube.com/");
    logger.info("Nanviagted to Youtube");
  });
});
