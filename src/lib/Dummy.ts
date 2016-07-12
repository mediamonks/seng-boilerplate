/**
 * Test file for code coverage checks
 * This file is not covered by any tests, but should show up in code coverage
 * results as a very low coverage percentage.
 *
 * @namespace example
 * @class Dummy
 * @constructor
 */
export default class Dummy
{
	/**
	 * Returns a value!
	 *
	 * @method foo
	 * @param {string} str The input string
	 * @return {string}
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
