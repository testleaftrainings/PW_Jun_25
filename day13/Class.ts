import { login } from "./AccessModifiers"

class Browser{
browserType:string
browserVersion:number=134.67

// constructor(){
//     console.log("constructor")
// }

constructor(type:string){

    console.log(this.browserType=type)
}

//function -> as method()
launch(){
    console.log("Launch chrome browser")
}
close(){
    console.log("Close the browser")
}

}

//access the properties and method from the class -> reffer the class access data or method
//creating object  -> outside the class
//Browser obj=new Browser() -> java

//const obj=new Browser() ->TS 
const b1=new Browser("Edge")
//call method and properties  -> objectName.method() or object.Properties
console.log(b1.browserType)
console.log(b1.browserVersion)
b1.close()
b1.launch()


//create object from class to another class
const obj=new login()
obj.errorLog()