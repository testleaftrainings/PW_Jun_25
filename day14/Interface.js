//connect class to class -> extends
//connect abstract class and class -> extends
//connect class and interface -> implements
var baseTest = /** @class */ (function () {
    function baseTest() {
    }
    baseTest.prototype.loactor = function () {
        console.log("Locator");
    };
    baseTest.prototype.click = function () {
        console.log("Click");
    };
    baseTest.prototype.clear = function () {
        console.log("Clear");
    };
    baseTest.prototype.fill = function () {
        console.log("Fill");
    };
    return baseTest;
}());
var bt = new baseTest();
bt.clear();
bt.click();
bt.fill();
bt.loactor();
