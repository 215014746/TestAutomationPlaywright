import {Page,Locator} from '@playwright/test';  
import { BasePage } from './BasePage'; 

export class HomePage extends BasePage {
      
    get verifyHomePage(): Locator {
        return this.page.locator('//h2[contains(text(),"Welcome back")]');
    }

    get clickAdminButton(): Locator {
        return this.page.locator(':text-is("Admin")');
       
    }

    get clickUserProfileButton(): Locator {
        return this.page.locator('button:has-text("zee")');
    }
    
    get clickAdminPanelButton(): Locator {
        return this.page.locator('span').filter({ hasText: 'Admin Panel' }).first();
    }

     get clickLogoutButton(): Locator {
        return this.page.getByRole('button', { name: 'Logout' });
    }

   /* get verifyMyCoursesSection(): Locator {
        return this.page.getByRole('heading', { name: '📚 My Courses' });
    }*/

    get clickMyLearningButton(): Locator {
        return this.page.locator('//span[contains(., "My Learning")]');;
    } 
    
    get clickMyCoursesButton(): Locator {
        return this.page.locator('span').filter({ hasText: 'My Courses' }).first();
    }

    get verifyCourseEnrolledIn(): Locator {
        return this.page.getByRole('heading', { name: 'Automation Testing' });
    }

  

    async verifyHomePageIsVisible(){
    await this.verifyElementVisible(this.verifyHomePage);
    }

    async clickAdminButtn(){
    await this.clickElement(this.clickAdminButton);
    }

    async clickAdminPanelButtn(){
    await this.clickElement(this.clickAdminPanelButton);
    }

    async clickLogoutButtn(){
        await this.clickElement(this.clickLogoutButton);
    }

   /* async verifyMyCoursesSectionIsVisible(){
        await this.verifyElementVisible(this.verifyMyCoursesSection);
    }*/

    async verifyCourseEnrolledInIsVisible(){
        await this.verifyElementVisible(this.verifyCourseEnrolledIn);
    }

    async clickMyLearningButtn(){
        await this.clickElement(this.clickMyLearningButton);
    }   

    async clickMyCoursesButtn(){
        await this.clickElement(this.clickMyCoursesButton);
    }   
    
    async clickUserProfileButtn(){
        await this.clickElement(this.clickUserProfileButton);
    }

}