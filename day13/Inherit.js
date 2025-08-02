"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var Inheritances_1 = require("./Inheritances");
var Login1 = /** @class */ (function (_super) {
    __extends(Login1, _super);
    function Login1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Login1.prototype.enterUserName = function () {
        //parent class method we can use super keyword
        _super.prototype.enterUserName.call(this);
        console.log("DemoCsr");
    };
    return Login1;
}(Inheritances_1.LoginPage));
var l1 = new Login1();
l1.enterPassword();
l1.clickonLogin();
l1.enterUserName(); //DemoSalesManager
