import test, { chromium } from "@playwright/test"

test("Multiple Context",async()=>{

    const browser=await chromium.launch()
    const context1=await browser.newContext()
    const page1=await context1.newPage()
    await page1.goto("https://www.google.com")
    await page1.waitForTimeout(3000)

 const page2=await context1.newPage()
    await page2.goto("https://www.leafground.com/table.xhtml")
    await page2.waitForTimeout(2000)
})


test("Window Handling",async({context,page})=>{

await page.goto("https://www.flipkart.com/")

const data = page.locator("//input[@class='Pke_EE']")
await data.fill("phone")
await data.press('Enter')

await page.waitForTimeout(5000)
//create promise -> Event Listener
const createPromise =context.waitForEvent('page')
//click on action
page.locator("//div[contains(text(),'Nothing Phone')]").first().click()
//resolve the promise
const childPage=await createPromise
await page.waitForTimeout(5000)
console.log(await childPage.title())

await page.waitForTimeout(3000)

const price=await childPage.locator("//div[@class='Nx9bqj CxhGGd']").innerText()
console.log(price)

//where is focus -> child page
//close the child page

await childPage.close()

//where will be focus -> parent 

await page.locator("//input[@class='zDPmFV']").clear()

await page.waitForTimeout(3000)
})



test.only('Multiple Window Handling ',async({context,page})=>{

await page.goto("https://www.leafground.com/window.xhtml;")

//promise -> array format 
const [multipleWindow]=await Promise.all([

    context.waitForEvent('page'),
     page.locator("//span[text()='Open Multiple']").click()
])

//[w1-parent, w2-ch1,w3-ch2,...]
const allPages =multipleWindow.context().pages()
console.log(allPages.length)
//Title as window -> parent page
//title as table,dashboard -> child page

//dashboard -> mail id 
let tab:any
let tab1: any
for(let i=0;i<allPages.length;i++){

    await page.waitForTimeout(5000)
    const title=await allPages[i].title()
    console.log(title)

    if(title==='Web Table'){
        //resolve promise
        //childpage refernce will be tab
        tab=allPages[i]
    }

}
//action your do outside for loop
//await tab.locator("#email").fill("dilip@testleaf.com")

await tab.locator("//input[@id='form:j_idt89:globalFilter']").fill("France")

})