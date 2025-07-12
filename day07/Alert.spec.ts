//for Alert -> Auto dismissing Alert

import test from "@playwright/test"
test("Auto Dismissing Alert ",async({page})=>{
await page.goto("https://www.leafground.com/alert.xhtml")

//simple alert --> accpect
await page.locator("//span[text()='Show']").first().click()

await page.waitForTimeout(2000)

//confirmation -> cancel
await page.locator("//span[text()='Show']").nth(1).click()

await page.waitForTimeout(3000)
})

// page.on-> handle all alert which present in the test
// page.once -> handle only one alert(first Alert) in the test

test("Handling Alert with Event Listeners with page,once",async({page})=>{

page.once('dialog',alertType=>{
   const typeOfAlert= alertType.type()
   console.log(typeOfAlert)

   console.log(alertType.message())

   alertType.accept()

})

await page.goto("https://www.leafground.com/alert.xhtml")

//simple alert ->accept
await page.locator("//span[text()='Show']").first().click()

await page.waitForTimeout(4000)

//confirmation -> dismiss
await page.locator("//span[text()='Show']").nth(1).click()

await page.waitForTimeout(4000)

})


test.only("Handle Multiple Alert",async({page})=>{

    page.on('dialog',alertType=>{

        const val=alertType.type()
        console.log(val)
        console.log(alertType.message())

        if(val=="confirm"){
            alertType.dismiss()
        }else{
            alertType.accept()
        }

    })

    await page.goto("https://www.leafground.com/alert.xhtml")

//simple alert ->accept
await page.locator("//span[text()='Show']").first().click()

await page.waitForTimeout(4000)

//confirmation -> confirm -> accept
await page.locator("//span[text()='Show']").nth(1).click()

await page.waitForTimeout(4000)

})


test("Sweet alert",async({page})=>{

    await page.goto("https://www.leafground.com/alert.xhtml")
    await page.locator("//span[text()='Show']").nth(2).click()
    await page.locator(".ui-icon ui-icon-closethick").first().click()
}


)