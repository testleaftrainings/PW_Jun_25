import test from "@playwright/test";

test("Handle Frame with FrameObject ",async({page})=>{

    await page.goto("https://www.leafground.com/frame.xhtml")

    const firstFrame=page.frame({url:"https://www.leafground.com/default.xhtml"})
    await firstFrame?.locator("#Click").click()

    await page.waitForTimeout(3000)

    //nested
 const nestedFrame= page.frame({name:"frame2"})
 await nestedFrame?.locator("#Click").click()
})