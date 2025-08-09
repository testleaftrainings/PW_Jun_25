import {  devices, test } from "@playwright/test";


test.use({
    ...devices['iPad (gen 11)'] // ...->spread syntax it does the job of concatenating to arrays  
})

test(`Device Emulation`,async ({page}) => {
    
    page.goto(`http://leaftaps.com/opentaps/control/main`);

    await page.waitForTimeout(5000)

})