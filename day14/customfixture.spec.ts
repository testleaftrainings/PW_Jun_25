import {test as baseClass} from '@playwright/test'

//{page}
//baseClass.extend<{}>({})
export const fixtures=baseClass.extend<{login:any}>({

    //login -> custom fixture name
    login: async({page},use)=>{
     await page.goto("http://leaftaps.com/opentaps/control/main")
     await page.fill("#username","DemoSalesmanager")
     await page.fill("#password","crmsfa")
     await page.click(".decorativeSubmit")
     await use(page)
    }

    //







})