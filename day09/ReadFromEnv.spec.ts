import test from '@playwright/test'
import dotenv from 'dotenv'


//set path of env file
dotenv.config({path:`Utils/prod.env`})

test("Read From ENV file",async({page})=>{

    //process -> global object Node.js
    //env-> environment variables
    //LT_UserName -> retrieves the value of an env variable named LT_UserName
    console.log(process.env.LT_UserName)
let user=process.env.LT_UserName as string
let pass=process.env.LT_Password as string
            await page.goto("http://leaftaps.com/opentaps/control/main")
await page.fill("#username",user)
await page.fill("#password",pass)
await page.click(".decorativeSubmit")
})