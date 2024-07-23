import { logger } from '../../shared/logger';
import LoginPage from '../pageobjects/login.page'

describe('My Login application', () => {
    it('should login with valid credentials', async () => {
        await LoginPage.open()
        logger.info('Info message');
    })
})
