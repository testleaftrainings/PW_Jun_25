import { LoginPage } from "./LoginPage";

export class WelcomePage extends LoginPage{

async clickOnCrmsfa(){
    await this.lp.click("text=CRM/SFA")
}

async clickOnLogOut(){
    await this.lp.click(".decorativeSubmit")
}

}
