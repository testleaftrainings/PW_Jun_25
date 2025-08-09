import { WelcomePage } from "./WelcomePage";

export class HomePage extends WelcomePage{

    async clickOnLeads(){
        await this.lp.click("//a[text()='Leads']")
    }

    async clickOnContacts(){
        await this.lp.click("//a[text()='Contacts']")
    }



}