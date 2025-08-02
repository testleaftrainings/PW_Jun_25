//ML I -> Gp
export class LoginPage{

enterUserName(){
    console.log("DemoSalesManager")
}

enterPassword(){
    console.log("crmsfa")
}

clickonLogin(){
console.log("Login Button")
}
}

//P
class WelComePage extends LoginPage{

    verifyUrl(){
        console.log("verify url" )
    }

    enterUserName() {
        console.log("Demo")
    }
}

//c
class HomePage extends WelComePage{

clickonLeads(){
    console.log("Click on leads")
}

}
class LogOutPage extends LoginPage{

    logout(){
        console.log("Logout")
    }
}


/*const inherit=new WelComePage()
inherit.enterUserName()
inherit.enterPassword()
inherit.clickonLogin()
inherit.verifyUrl()*/

/*const hp=new HomePage()
hp.enterUserName()
hp.verifyUrl()
hp.clickonLeads()*/