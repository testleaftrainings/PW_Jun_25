import test from '@playwright/test'

test("Storage State",async({page})=>{
    
await page.goto("http://leaftaps.com/opentaps/control/main")
await page.fill("#username","Democsr")
await page.fill("#password","crmsfa")
await page.click(".decorativeSubmit")
await page.getByText("CRM/SFA").click()

//storage this infromation
await page.context().storageState({path:"Utils/Login1.json"})

})


// test.use({storageState:"Utils/Login1.json"})
// test.only("Use StorageState",async({page})=>{
//     await page.goto("http://leaftaps.com/crmsfa/control/main")
//     await page.locator("//a[text()='Leads']").click()
//     console.log(await page.title())

// })