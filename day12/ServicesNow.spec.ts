import test, { chromium, expect } from '@playwright/test'
import { request } from 'http'

const user="admin"
const pass="1io7Xr@hSN$S"
const credentials=`${user}:${pass}`
const basicAuth=btoa(credentials)

let id:any

test(`Create a resources with servicenow`,async({request})=>{

    // const browser=await chromium.launch()
    // const context=await browser.newContext()
    // const req=context.request


    const response=await request.post(`https://dev277770.service-now.com/api/now/table/incident`,{
        headers:{
            "Content-Type":"application/json",
            "Authorization":`Basic ${basicAuth}`  //Base64 -ASCII character
            
        },
        data:{
    "short_description": "Learning API"
        }
    })

    const resBody=await response.json()
    //console.log(resBody)
     id=resBody.result.sys_id

    //assertion
    const statusCode=response.status()
    expect(statusCode).toBe(201)

    expect(response.statusText()).toBe("Created")
})

test(`Get a All Resources from incident table`,async({request})=>{


    const response=await request.get(`https://dev277770.service-now.com/api/now/table/incident/${id}`,{

        headers:{
            "Content-Type":"application/json",
            "Authorization":`Basic ${basicAuth}`  //Base64 -ASCII character
            
        }
    })

    const res=await response.json()
    console.log(res)
})