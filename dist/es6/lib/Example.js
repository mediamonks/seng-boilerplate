/**
 * @namespace example
 * @class Example
 * @constructor
 */
export default class Example {
    /**
     * Returns a value!
     *
     * @method foo
     * @param {string} str The input string
     * @returns {string}
     */
    foo(str) {
        if (typeof str == 'undefined') {
            return 'baz';
        }
        else {
            return str + 'bar';
        }
    }
}
