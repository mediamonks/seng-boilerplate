export default class Example
{
	public foo(str:string):string
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
