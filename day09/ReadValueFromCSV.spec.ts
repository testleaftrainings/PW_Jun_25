import test from '@playwright/test'
import { parse } from 'csv-parse/sync'
import fs from 'fs'
import path from 'path'


const value=parse(fs.readFileSync(path.join(__dirname,"../../Utils/LoginData.csv")),{
    columns:true, //TestId(tc001,tc002),UserName(),Password()
    skip_empty_lines:true
    
})

//for (let data of value
for(let csd of value){
test(`Login value with CSV ${csd.TestId}`,async({page})=>{
console.log(csd[1].Password)
await page.goto("http://leaftaps.com/opentaps/control/main")
await page.fill("#username",csd[1].UserName)
await page.fill("#password",csd[1].Password)
await page.click(".decorativeSubmit")

})
}

//Login value with CSV TC001