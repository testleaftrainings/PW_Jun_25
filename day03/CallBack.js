
//call back function call one function to another function with help parameter-> is user define value
//callback -> user define
function browserlaunch( callback){
    console.log("Chrome Browser")
    callback
}

function loadUrl(){
    console.log("www.google.com")
}

browserlaunch(loadUrl())

//callback()=> loadUrl()

// browserlaunch()
// loadUrl()


//call back Hell
function a(callback){
    callback
}
function b(callback){
    callback
}

function c(callback){
    callback
}

c(()=>a(()=>b))