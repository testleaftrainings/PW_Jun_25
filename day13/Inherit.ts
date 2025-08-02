import { LoginPage } from "./Inheritances"

class Login1 extends LoginPage{

    enterUserName() {
        //parent class method we can use super keyword
        super.enterUserName()
        console.log("DemoCsr")
    }
}

const l1=new Login1()
l1.enterPassword()
l1.clickonLogin()
l1.enterUserName() //DemoSalesManager
