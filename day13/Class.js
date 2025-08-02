"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var AccessModifiers_1 = require("./AccessModifiers");
var Browser = /** @class */ (function () {
    // constructor(){
    //     console.log("constructor")
    // }
    function Browser(type) {
        this.browserVersion = 134.67;
        console.log(this.browserType = type);
    }
    //function -> as method()
    Browser.prototype.launch = function () {
        console.log("Launch chrome browser");
    };
    Browser.prototype.close = function () {
        console.log("Close the browser");
    };
    return Browser;
}());
//access the properties and method from the class -> reffer the class access data or method
//creating object  -> outside the class
//Browser obj=new Browser() -> java
//const obj=new Browser() ->TS 
var b1 = new Browser("Edge");
//call method and properties  -> objectName.method() or object.Properties
console.log(b1.browserType);
console.log(b1.browserVersion);
b1.close();
b1.launch();
var obj = new AccessModifiers_1.login();
obj.errorLog();
