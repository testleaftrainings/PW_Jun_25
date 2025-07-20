import test from '@playwright/test'

test("file upload with Input tag and type is file",async({page})=>{

await page.goto("https://leafground.com/file.xhtml")
await page.locator("//span[text()='Choose']/following-sibling::input").first()
.setInputFiles("Utils/Playwright Alerts.pdf")
await page.waitForTimeout(3000)
})

test.only("File upload with Event Listeren",async({page})=>{
await page.goto("https://leafground.com/file.xhtml")

const fileupload=page.waitForEvent('filechooser')

await page.locator("//span[text()='Choose']/following-sibling::input").first().click()

const filup=await fileupload

await filup.setFiles("Utils/LoginData.csv")


})