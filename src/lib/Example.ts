/**
 * @namespace example
 * @class Example
 * @constructor
 */
export default class Example
{
	/**
	 * Returns a value!
	 *
	 * @method foo
	 * @param {string} str The input string
	 * @returns {string}
     */
	public foo(str?:string):string
	{
		if (typeof str == 'undefined')
		{
			return 'baz';
		}
		else
		{
			return str + 'bar';
		}
	}
}
