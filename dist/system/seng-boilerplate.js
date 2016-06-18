System.register("lib/Example", [], function(exports_1) {
    "use strict";
    var Example;
    return {
        setters:[],
        execute: function() {
            /**
             * @namespace example
             * @class Example
             * @constructor
             */
            Example = (function () {
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
            exports_1("default", Example);
        }
    }
});
System.register("lib/IExample", [], function(exports_2) {
    "use strict";
    return {
        setters:[],
        execute: function() {
        }
    }
});
System.register("index", ["lib/Example"], function(exports_3) {
    "use strict";
    var Example_1;
    return {
        setters:[
            function (Example_1_1) {
                Example_1 = Example_1_1;
            }],
        execute: function() {
            exports_3("default",Example_1.default);
        }
    }
});
