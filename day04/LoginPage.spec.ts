import test from "playwright/test";

test("Login page ",async({page})=>{
    await page.goto("http://leaftaps.com/opentaps/control/main")

    await page.locator("#username").fill("DemoSalesManager")
    await page.fill("#password","crmsfa")
   // await page.locator("#password").fill("crmsfa")
    await page.click(".decorativeSubmit")
    // await page.locator(".decorativeSubmit").click
    await page.click(`text='CRM/SFA'`)
    //get title of the page
    const pageTitle=await page.title()
    console.log(pageTitle)

    await page.waitForTimeout(5000)

})