import { Page } from '@playwright/test';
import { attachment } from 'allure-js-commons';

export class ScreenshotHelper {
    
    static async take(page: Page, name: string): Promise<void> {
        const screenshot = await page.screenshot({ fullPage: true });
        await attachment(name, screenshot, { contentType: 'image/png' });
    }

    static async takeOnFailure(page: Page, name: string): Promise<void> {
        try {
            const screenshot = await page.screenshot({ fullPage: true });
            await attachment(name, screenshot, { contentType: 'image/png' });
        } catch (error) {
            console.error(`Failed to take screenshot: ${name}`, error);
        }
    }
}