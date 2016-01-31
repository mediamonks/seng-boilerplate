"use strict";
var Example = (function () {
    function Example() {
    }
    Example.prototype.foo = function (str) {
        if (typeof str == 'undefined') {
            return 'baz';
        }
        else {
            return str + 'bar';
        }
    };
    return Example;
}());
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Example;
