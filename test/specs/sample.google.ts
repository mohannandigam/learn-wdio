import { logger } from '../../shared/logger';

describe('Navigate to Google Home page', () => {
  it('Navigate to Google', async() => {
    await browser.url('https://www.google.com/');
    logger.info('Navigated to google home page');
    await browser.pause(1000);
    console.log("Page URL: "+ await browser.getUrl());
    await browser.saveScreenshot('./screenshot/screenshot.png');
    logger.info('took a screenshot');

  });
});