import{Page,Locator} from "@playwright/test";
import { BasePage } from "./BasePage";

export class AdminPanelPage extends BasePage {

    get verifyAdminDashboard(): Locator {
        return this.page.getByRole('heading', { name: '🔐 Admin Dashboard' });
    } 
    get verifyAdminPanel(): Locator {
        return this.page.getByRole('heading', { name: '🔧 Admin Panel' });
    }

    get clickEnrollmentButton(): Locator {
        return this.page.locator('//button[contains(., "Enrollments")]');
        //page.getByRole('button', { name: '🎓Enrollments' })
    }

    get verifyEnrollmentPage(): Locator {
        return this.page.getByRole('heading', { name: '🎓 Manage Enrollments' });
    }

    get clickEnrolUsersButton(): Locator {
        return this.page.getByRole('button', { name: '+ Enroll User' });
    }

    get selectCourseDropdown(): Locator {
        return this.page.locator("//div[@class='admin-enrollments']//div//div//form//div//select");
        //page.getByRole('combobox', { name: 'Select Course' })
    } 

    get searchAndSelectUserByEmail(): Locator {
        return this.page.getByRole('textbox', { name: '🔍 Search by name or email...' });
    }

    get clickEnrolUser(): Locator {
        return this.page.getByText('Enroll User', { exact: true });
    }

    get clickBackToWebsiteButton(): Locator {
        return this.page.getByRole('button', { name: '← Back to Website' });
    }

   


    async verifyAdminDashboardIsVisible(){
    await this.verifyElementVisible(this.verifyAdminDashboard);
    }

   async verifyAdminPanelIsVisible(){
    await this.verifyElementVisible(this.verifyAdminPanel);
    }

    async clickEnrollmentButtn(){
    await this.clickElement(this.clickEnrollmentButton);
     }

    async verifyEnrollmentPageIsVisible(){  
    await this.verifyElementVisible(this.verifyEnrollmentPage);
    }

    async clickEnrolUsersButtn(){   
    await this.clickElement(this.clickEnrolUsersButton);
    }

    async selectCourse(courseName: string){
        console.log(`Selecting course: ${courseName}`);
        await this.selectCourseDropdown.selectOption({ label: courseName });
    }

   /* async searchStudent(studentNameOrEmail: string){
        console.log(`Searching for student: ${studentNameOrEmail}`);
        await this.enterText(this.searchAndSelectUserByEmail, studentNameOrEmail);
    }*/

    async searchStudent(studentNameOrEmail: string) {
    console.log(`Searching for student: ${studentNameOrEmail}`);

    await this.enterText(this.searchAndSelectUserByEmail, studentNameOrEmail);

    const studentOption = this.page.locator(
        `text=${studentNameOrEmail}`
    );

    await studentOption.waitFor({ state: 'visible' });
    await studentOption.click();
}

    async clickEnrolUserButtn(){
        await this.clickElement(this.clickEnrolUser);
    } 
    
    async clickBackToWebsiteButtn(){
        await this.clickElement(this.clickBackToWebsiteButton);
    }

    

}    
