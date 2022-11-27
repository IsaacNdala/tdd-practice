import capitalize from './capitalize';

test('turn fist character capitalized', () => {
    expect(capitalize('isaac')).toBe('Isaac');
    expect(capitalize('ndala')).toBe('Ndala');
});