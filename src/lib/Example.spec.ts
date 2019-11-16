import Example from './Example';

describe('Example', () => {
  it('should return the correct environment', () => {
    expect(new Example().foo('foo')).toEqual('foobar');
    expect(new Example().foo()).toEqual('baz');
  });
});
