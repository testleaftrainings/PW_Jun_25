import test from '@playwright/test'
import dotenv from 'dotenv'

//read multiple env file
const fileRead=process.env.envfile || 'QA' 
//const fileRead=process.env.envfile||'QA'

//$env:envFile="QA"
//$env:envFile="prod"

//set path of env file
dotenv.config({path:`Utils/${fileRead}.env`})

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

//set the envFile
//$env:envFile="QA" or "prod"

//unset the envFile
//$env:envFile=""