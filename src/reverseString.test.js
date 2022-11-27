import reverseString from "./reverseString";

test("reverse string", () => {
    expect(reverseString('ndala')).toBe('aladn');
    expect(reverseString('isaac')).toBe('caasi');
})