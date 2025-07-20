import test from '@playwright/test'

test.use({storageState:"Utils/Login1.json"})
test("Click Accounts ",async({page})=>{

    await page.goto("http://leaftaps.com/crmsfa/control/main")

    await page.click("//a[text()='Accounts']")

    console.log(await page.title())
})


test.use({storageState:"Utils/Login1.json"})
test("Use StorageState",async({page})=>{
    await page.goto("http://leaftaps.com/crmsfa/control/main")
    await page.locator("//a[text()='Leads']").click()
    console.log(await page.title())

})