import test from '@playwright/test'
import { request } from 'http'

let accessToken:any
let instUrl:any
let tokenType:any
let Id:any


test(`Generate Token`,async({request})=>{
//endpoint,headers,data
//form -> grant_type,client_id,client_secret,username,pass

const response=await request.post(`https://login.salesforce.com//services/oauth2/token`,{
    headers:{
        "Content-Type":"application/x-www-form-urlencoded",
        "Connection":"keep-alive"
    },
    form:{
        "grant_type":"password",
        "client_id":"3MVG9pRzvMkjMb6ke6ofxazCMMcU6CprOCcHzxnBYiKLgd.30T0TdvXmIg4tswuUDQNAxTV7Gs8LIBpV8auFx",
        "client_secret":"0EA32C55BC1E9B1C5D3118ABD72D03F791DA858C3F2C62229315E612021C5276",
        "username":"dilip@testleaf.com",
        "password":"Leaf@123"
    }
})

const resBody= await response.json()
console.log(resBody)
 accessToken=resBody.access_token
instUrl=resBody.instance_url
 tokenType=resBody.token_type

/*console.log(accessToken)
console.log(instUrl)
console.log(tokenType)*/

})


test(`Create Lead`,async({request})=>{

const response=await request.post(`${instUrl}/services/data/v64.0/sobjects/Lead`,{
    headers:{
        "Content-Type":"application/json",
        "Authorization":`${tokenType} ${accessToken}`
    },
    data:{
 "FirstName":"Dilip",
 "LastName":"Kumar",
 "Company":"Testleaf"
    }
})
const res=await response.json()
Id=res.id
//console.log(res)
//console.log(leadId)
})


test(`Get Lead`,async({request})=>{

const response=await request.get(`${instUrl}/services/data/v64.0/sobjects/Lead/${Id}`,{
    headers:{
        "Content-Type":"application/json",
        "Authorization":`${tokenType} ${accessToken}`
    },
   
})
const res=await response.json()
const lname=res.LastName
console.log(lname)
})


test(`Modify the Lead`,async({request})=>{

const response=await request.patch(`${instUrl}/services/data/v64.0/sobjects/Lead/${Id}`,{
    headers:{
        "Content-Type":"application/json",
        "Authorization":`${tokenType} ${accessToken}`
    },
    data:{
 "Company":"Qeagle"
    }
})

})

test(`Delete Lead`,async({request})=>{

const response1=await request.delete(`${instUrl}/services/data/v64.0/sobjects/Lead/${Id}`,{
    headers:{
        "Content-Type":"application/json",
        "Authorization":`${tokenType} ${accessToken}`
    }
   
})
})