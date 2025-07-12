import test from "@playwright/test";

test("Handle Frame ",async({page})=>{

    await page.goto("https://www.leafground.com/frame.xhtml")

   const allFrame= page.frames()
   console.log(allFrame.length)

   //main page also consider is one frame->  0(main page) 
   //index value = 0(main page)
   //index[1]=first frame
   //index[2]=second frame
   //index[3]=thrid frame
   //index[4]=fourth frame

   //based on index 
   const firstFrame=allFrame[1]
console.log("Before frame :"+await firstFrame.locator("#Click").innerText())

   await firstFrame.locator("#Click").click()

   console.log("After frame :"+await firstFrame.locator("#Click").innerText())

   //nested  frame

   const fourthFrame=allFrame[4]
   await fourthFrame.locator("#Click").click()
})