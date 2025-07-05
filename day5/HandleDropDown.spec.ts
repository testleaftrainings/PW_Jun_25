import test from "playwright/test";
test.only("DropDown With SelectTag",async({page})=>{

await page.goto("https://www.leafground.com/select.xhtml")

await page.selectOption(".ui-selectonemenu",{label:'Playwright'})

await page.waitForTimeout(3000)

await page.selectOption(".ui-selectonemenu",{index:3})
await page.waitForTimeout(3000)

//to print all value from dropdown
//parent and child -'>' parent value '>' tagnameoption
const value= page.locator(".ui-selectonemenu>option")
const ddCount =await value.count()
//const ddCount= await page.locator(".ui-selectonemenu>option").count()
console.log(ddCount)
for(let i=0;i<ddCount;i++){
    console.log(await value.nth(i).innerText())
    //inner text -> prit value from application (text Value)
}



})


test("Non Select Tag",async({page})=>{

    await page.goto("https://www.leafground.com/select.xhtml")

    //click on the  dropdown
    await page.locator("[id='j_idt87:country_label']").click()

    //click on the click
    await page.locator("[id='j_idt87:country_4']").click()
})