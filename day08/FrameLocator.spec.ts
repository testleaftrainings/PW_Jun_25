import test from "@playwright/test";

test("Handle Frame with FrameLocator",async({page})=>{
    
await page.goto("https://www.leafground.com/frame.xhtml")

await page.frameLocator("(//iframe)[1]").locator("#Click").click()

await page.waitForTimeout(4000)

//nested frame
//locator firstFrame.secondFrame.locator.click

await page.frameLocator("(//iframe)[3]").frameLocator("#frame2").locator("#Click").click()
await page.waitForTimeout(3000)
})