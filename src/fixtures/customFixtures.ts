import {test as base} from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { HomePage } from '../pages/HomePage';
import { AdminPanelPage } from '../pages/AdminPanelPage';

type CustomFixtures = {
    loginPage: LoginPage;
    homePage: HomePage;
    adminPanelPage: AdminPanelPage;
};

export const test = base.extend<CustomFixtures>({
    loginPage: async ({ page }, use) => {
        const loginPage = new LoginPage(page);  
        await use(loginPage);
    },
    homePage: async ({ page }, use) => {
        const homePage = new HomePage(page);  
        await use(homePage);
    },
    adminPanelPage: async ({ page }, use) => {
        const adminPanelPage = new AdminPanelPage(page);  
        await use(adminPanelPage);
    }
});

export { expect } from '@playwright/test';