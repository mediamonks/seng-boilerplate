import Example from '../src/lib/Example';
import IExample from '../src/lib/IExample';
import {mockExample} from './ExampleMock';

let example:IExample;

describe('Example', () =>
{
	beforeEach(function()
	{
		example = new Example();
	});

	it('should return the correct environment', () =>
	{
		expect(example.foo(mockExample)).toBe('foobar');
	});

	it('should return the default environment when none has been supplied', () =>
	{
		expect(example.foo()).toBe('baz');
	});
});
