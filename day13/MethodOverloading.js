var ElementAction = /** @class */ (function () {
    function ElementAction() {
    }
    //true -> dd click
    ElementAction.prototype.eleclick = function (locator, val) {
        if (val == true) {
            console.log("Double click");
        }
        else {
            console.log("Normal click");
        }
    };
    return ElementAction;
}());
var ob = new ElementAction();
ob.eleclick("click");
ob.eleclick("ok", true);
