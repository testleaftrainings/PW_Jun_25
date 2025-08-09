import {fixtures} from './customfixture.spec'

//test("")

fixtures("Login fixture is use",async({login})=>{
    await login.click("text=CRM/SFA")
    console.log(await login.title())
    

})


