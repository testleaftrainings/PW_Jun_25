import test from '@playwright/test'
//read from the json file
import data from '../../Utils/LoginValue.json'

for(let val of data){

    test(`Json Value  ${val.TestID}`,async({page})=>{
        console.log(val.username)
        await page.goto("http://leaftaps.com/opentaps/control/main")
await page.fill("#username",val.username)
await page.fill("#password",val.password)
await page.click(".decorativeSubmit")
    })

}

//Json value Democsr->1
//Json value DemoCsr2->2