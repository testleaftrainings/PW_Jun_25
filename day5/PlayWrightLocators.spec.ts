import test from "@playwright/test";

test("PlayWright Locators",async({page})=>{

    await page.goto("https://parabank.parasoft.com/parabank/index.htm")

    //getByText ->AdminPage
    await page.getByText("Admin Page").click()
await page.waitForTimeout(3000)

//forgot info -> getByRole
await page.getByRole('link',{name:'Forgot login info?'}).click()
await page.waitForTimeout(3000)

//getByAltText
await page.getByAltText("ParaBank").click()
await page.waitForTimeout(3000)

await page.getByText("Locations").first().click() 
await page.waitForTimeout(3000)

await page.getByPlaceholder("Search").click()
await page.waitForTimeout(3000)

})


test.only("Label ",async({page})=>{
await page.goto("http://leaftaps.com/opentaps/control/main")
await page.getByLabel("Username").fill("DemoSalesManager")

})