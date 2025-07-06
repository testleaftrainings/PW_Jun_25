import test, { expect } from "@playwright/test"

test("Auto Retry Assertion",async({page})=>{

    await page.goto("https://leafground.com/input.xhtml")
//enabled
    await expect(page.getByPlaceholder("Babu Manickam")).toBeEnabled()
    //toBeDisabled({timeout:10000})
    //hard Assertion
    console.log("Completed")
})

test("Soft Assertion ",async({page})=>{

     await page.goto("https://leafground.com/input.xhtml")
await expect.soft(page.getByPlaceholder("Babu Manickam")).toBeDisabled()
//soft assert
console.log("Soft Assert")

})

test.only("Non Retry Assertion",async({page})=>{

    await  page.goto("http://leaftaps.com/opentaps/control/main")
    const title=await page.title()
    console.log(title)

    const actualTitle="leaftaps - TestLeaf Automation Platform"
     expect.soft(title).toEqual(actualTitle)
    console.log("Title verifed")
})