import test from '@playwright/test'

test.beforeAll("Set Data File",()=>{
    console.log("Read Data from Utils")
})


test.beforeEach("StorageState",()=>{
    console.log("Use the Storage state")
})

test.afterEach("Close the Page",()=>{
    console.log("new.close")
})


test.afterAll("close browser",()=>{
    console.log("close the browser")
})

test("Login page",()=>{
    console.log("Login page")
})


test("create Lead",()=>{
    console.log("createLead")
})