import { expect, test } from "@playwright/test";

test(`Visual Regression Testing`, async ({ page }) => { 

    await page.goto(`https://www.testleaf.com/`);

    const ss = await page.screenshot(); // baseline image gets stored in the file under the specific folder

    expect(ss).toMatchSnapshot();

})

/* 
Percy
npm install --save-dev @percy/cli @percy/playwright */

test.only(`Visual Regression for a web element test box`, async ({ page }) => { 

    await page.goto(`http://leaftaps.com/opentaps/control/main`);

    const ele = page.locator(`#username`)

    const ss1 = await ele.screenshot() /// baseline image gets stored in the file under the specific folder

    expect(ss1).toMatchSnapshot();

})
