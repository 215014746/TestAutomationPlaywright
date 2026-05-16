import { test } from '../src/fixtures/customFixtures';
import { validUsers } from '../src/data/testData';
import { feature, severity, description, step, Severity } from 'allure-js-commons';
import { ScreenshotHelper } from '../src/utils/ScreenshotHelper';

test.describe('Login Functionality', () => {
    test.describe.configure({ mode: 'serial' });

    test('should allow admin user to login successfully', async ({ loginPage, homePage, adminPanelPage, page }) => {

        await feature('Admin Login');
        await severity(Severity.CRITICAL);
        await description('Admin logs in, enrols a user in a course, then logs out');

        const adminUser = validUsers.admin;

        await step('Navigate to login page', async () => {
            await loginPage.goto();
            await loginPage.clickLoginButton();
        });

        await step('Login as admin', async () => {
            await loginPage.login(adminUser.email, adminUser.password);
            await homePage.verifyHomePage.waitFor({ state: 'visible' });
            await ScreenshotHelper.take(page, 'Admin Home Page');
        });

        await step('Navigate to Admin Panel', async () => {
            await homePage.clickAdminButtn();
            await homePage.clickAdminPanelButtn();
            await adminPanelPage.verifyAdminDashboard.waitFor({ state: 'visible' });
            await adminPanelPage.verifyAdminPanel.waitFor({ state: 'visible' });
            await ScreenshotHelper.take(page, 'Admin Panel');
        });

        await step('Enrol user in course', async () => {
            await adminPanelPage.clickEnrollmentButtn();
            await adminPanelPage.clickEnrolUsersButtn();
            await adminPanelPage.verifyEnrollmentPage.waitFor({ state: 'visible' });
            await adminPanelPage.selectCourse('Automation Testing');
            await adminPanelPage.searchStudent('zee2025@ndosi.com');
            await adminPanelPage.clickEnrolUserButtn();
            await ScreenshotHelper.take(page, 'Enrolment Complete');
        });

        await step('Logout', async () => {
            await adminPanelPage.clickBackToWebsiteButtn();
            await homePage.clickAdminButtn();
            await homePage.clickLogoutButtn();
        });
    });

    test('User should be able to login and verify enrolment', async ({ loginPage, homePage, page }) => {

        await feature('User Enrolment Verification');
        await severity(Severity.NORMAL);
        await description('Standard user logs in and verifies their course enrolment');

        const user = validUsers.standardUser;

        await step('Navigate to login page', async () => {
            await loginPage.goto();
            await loginPage.clickLoginButton();
        });

        await step('Login as standard user', async () => {
            await loginPage.login(user.email, user.password);
            await homePage.verifyHomePage.waitFor({ state: 'visible' });
            await ScreenshotHelper.take(page, 'User Home Page');
        });

        await step('Verify course enrolment', async () => {
            await homePage.clickMyLearningButtn();
            await homePage.clickMyCoursesButtn();
            await homePage.verifyCourseEnrolledIn.waitFor({ state: 'visible' });
            await ScreenshotHelper.take(page, 'Course Enrolled');
        });

        await step('Logout', async () => {
            await homePage.clickUserProfileButtn();
            await homePage.clickLogoutButtn();
        });
    });
});