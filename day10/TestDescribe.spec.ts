import test from  '@playwright/test'

// serial, parallel,seq-> deafault

test.use({storageState:"Utils/Login1.json"})
test.describe.serial("Test Annotation Describe",()=>{

    
    test("Click Accounts ",async({page})=>{
        await page.goto("http://leaftaps.com/crmsfa/control/main")
        await page.click("//a[text()='Account']")
        console.log(await page.title())
    })

    
    test("Click Leads",async({page})=>{
        await page.goto("http://leaftaps.com/crmsfa/control/main")
        await page.locator("//a[text()='Leads']").click()
        console.log(await page.title())
    
    })


     test("Click Leads1",async({page})=>{
        await page.goto("http://leaftaps.com/crmsfa/control/main")
        await page.locator("//a[text()='Leads']").click()
        console.log(await page.title())
    
    })


}) 



test.use({storageState:"Utils/Login1.json"})
test.describe("Test Annotation Describe",()=>{

    test.describe.configure({mode:"serial",retries:1})
    
    test("Click Accounts config",async({page})=>{
        await page.goto("http://leaftaps.com/crmsfa/control/main")
        await page.click("//a[text()='Account']")
        console.log(await page.title())
    })

    
    test("Click Leads1 config",async({page})=>{
        await page.goto("http://leaftaps.com/crmsfa/control/main")
        await page.locator("//a[text()='Leads']").click()
        console.log(await page.title())
    
    })


     test("Click Leads config",async({page})=>{
        await page.goto("http://leaftaps.com/crmsfa/control/main")
        await page.locator("//a[text()='Leads']").click()
        console.log(await page.title())
    
    })


})