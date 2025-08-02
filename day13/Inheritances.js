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
exports.LoginPage = void 0;
//ML I -> Gp
var LoginPage = /** @class */ (function () {
    function LoginPage() {
    }
    LoginPage.prototype.enterUserName = function () {
        console.log("DemoSalesManager");
    };
    LoginPage.prototype.enterPassword = function () {
        console.log("crmsfa");
    };
    LoginPage.prototype.clickonLogin = function () {
        console.log("Login Button");
    };
    return LoginPage;
}());
exports.LoginPage = LoginPage;
//P
var WelComePage = /** @class */ (function (_super) {
    __extends(WelComePage, _super);
    function WelComePage() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    WelComePage.prototype.verifyUrl = function () {
        console.log("verify url");
    };
    WelComePage.prototype.enterUserName = function () {
        console.log("Demo");
    };
    return WelComePage;
}(LoginPage));
//c
var HomePage = /** @class */ (function (_super) {
    __extends(HomePage, _super);
    function HomePage() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    HomePage.prototype.clickonLeads = function () {
        console.log("Click on leads");
    };
    return HomePage;
}(WelComePage));
var LogOutPage = /** @class */ (function (_super) {
    __extends(LogOutPage, _super);
    function LogOutPage() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    LogOutPage.prototype.logout = function () {
        console.log("Logout");
    };
    return LogOutPage;
}(LoginPage));
/*const inherit=new WelComePage()
inherit.enterUserName()
inherit.enterPassword()
inherit.clickonLogin()
inherit.verifyUrl()*/
/*const hp=new HomePage()
hp.enterUserName()
hp.verifyUrl()
hp.clickonLeads()*/ 
