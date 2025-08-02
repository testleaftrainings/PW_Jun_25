"use strict";
// public  -> default modifier (even if not mentioned)
//anywhere inside, outside or subclass
Object.defineProperty(exports, "__esModule", { value: true });
exports.login = void 0;
// private -> can be accessed only inside the class
// protected -> inside  same class and inside the subclass
var login = /** @class */ (function () {
    function login() {
        this.user = 'dilip';
        this.pass = 'crmsfa';
        this.logval = 67;
    }
    login.prototype.log = function () {
        console.log("pro");
    };
    login.prototype.errorLog = function () {
        console.log("Public Value");
    };
    login.prototype.getdata = function () {
        console.log("".concat(this.user, " ").concat(this.pass, " ").concat(this.logval));
    };
    return login;
}());
exports.login = login;
var val = new login();
val.errorLog();
val.getdata();
console.log(val.user);
