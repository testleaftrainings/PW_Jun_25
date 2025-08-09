import test from '@playwright/test'
import { HomePage } from './MyHomePage'

test("Leads page",async({page})=>{

const pg=new HomePage(page)
await pg.loadUrl()
await pg.userDetails()
await pg.clickOnLogin()
await pg.clickOnCrmsfa()
await pg.clickOnLeads()

})


test("Contacts Page",async({page})=>{

    const pg1=new HomePage(page)
    await pg1.loadUrl()
    await pg1.userDetails()
    await pg1.clickOnLogin()
    await pg1.clickOnCrmsfa()
    await pg1.clickOnContacts()
})