"use strict";
/**
 * @namespace example
 * @class Example
 * @constructor
 */
var Example = (function () {
    function Example() {
    }
    /**
     * Returns a value!
     *
     * @method foo
     * @param {string} str The input string
     * @returns {string}
     */
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
