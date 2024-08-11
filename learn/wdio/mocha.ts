import { logger } from "../../shared/logger";

describe("Test", () => {
  before(() => {
    logger.info("Before All");
  });
  beforeEach(() => {
    logger.info("Before Each");
  });
  it("Test 1", () => {
    logger.info("Test 1");
  });
  it("Test 2", () => {
    logger.info("Test 2");
  });
  it.skip("Test 3", () => {
    logger.info("Test 3");
  });
  it("Test 4", () => {
    logger.info("Test 4");
  });
  after(() => {
    logger.info("After All");
  });
  afterEach(() => {
    logger.info("After Each");
  });
});
