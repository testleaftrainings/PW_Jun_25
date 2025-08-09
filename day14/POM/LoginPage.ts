import{Page} from "playwright";

export class LoginPage{

    //page:Page
 lp:Page // empty user defined variable which is type page(PW)

constructor(lp:Page){
    this.lp=lp
}

async loadUrl(){
    await this.lp.goto("http://leaftaps.com/opentaps/control/main")
}

async userDetails(){
    await this.lp.fill("#username","DemoSalesManager")
    await this.lp.fill("#password","crmsfa")
}


async clickOnLogin(){
    await this.lp.click(".decorativeSubmit")
}


}