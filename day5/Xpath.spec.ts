import test from "@playwright/test";

test("Xpath",async({page})=>{

    await page.goto("http://leaftaps.com/opentaps/control/main")

    await page.locator("//input[@id='username']").fill("DemoSalesManager")

    await page.locator("(//input[@class='inputLogin'])[2]").fill("crmsfa")

    await page.locator("//input[contains(@class,'Submit')]").click()

//await page.fill("//input[@id='username']","DemoSalesManager")
})