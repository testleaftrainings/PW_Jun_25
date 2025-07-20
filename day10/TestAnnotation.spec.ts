import test from '@playwright/test'

test.use({storageState:"Utils/Login1.json"})
test("Test annotation only",async({page})=>{
await page.goto("http://leaftaps.com/crmsfa/control/main")
    await page.locator("//a[text()='Leads']").click()
    console.log(await page.title())
})

test.skip("Test Annotation Skip",async({page})=>{

    await page.goto("https://www.google.com")
})


test.fail("Test Annotation fail",async({page})=>{
    await page.goto("https:www.facebook.com")
})

test.fixme("Test Annotation fixme", async({page})=>{
   
await page.goto("http://leaftaps.com/opentaps/control/main")
await page.fill("#username","Democsr")
await page.fill("#password","crmsfa")
await page.click(".decorativeSubmit")
await page.getByText("CRM/SFA").click()

})


test("Test Annotation info",async({page},testInfo)=>{

    test.info().annotations.push({type:"Smoke",description:"Checking test info"},
        {type:"Author",description:"Dilip"}
    )

    await page.goto("https://www.google.com")
    // console.log(testInfo.status)
    // console.log(testInfo.title)
    

})