const { describe, it, expect } = require('@jest/globals');
const { sum, myRemove, myFizzBuzz } = require('./sum');

describe('sum', () => {
  it('4 + 5 = 9', () => {
    expect(sum(4, 5)).toBe(9);
  });
  
  it('0 + 0 = 0', () => {
    expect(sum(0, 0)).toBe(0);
  });
  
  it("Error is thrown if parameters are 4 and '5'", () => {
    expect( () => { sum(0,'5') } ).toThrowError();
  });
  
  it("Error message is 'parameters must be numbers'", () => {
    expect( () => { sum(0,'5') } ).toThrowError('parameters must be numbers');
  });
});

describe('myRemove', () => {
  it('Verifies if myRemove([1, 2, 3, 4,], 3) returns the expected result', () => {
    const numbersArray = [1, 2, 3, 4];
    expect(myRemove(numbersArray, 3)).toEqual([1, 2, 4]);
  });
  
  it('Verifies if myRemove([1, 2, 3, 4,], 3) not return [1, 2, 3, 4]', () => {
    const numbersArray = [1, 2, 3, 4];
    expect(myRemove(numbersArray, 3)).not.toEqual([1, 2, 3, 4]);
  });
  
  it('Verifies if myRemove([1, 2, 3, 4,], 5) returns the expected result', () => {
    const numbersArray = [1, 2, 3, 4];
    expect(myRemove(numbersArray, 5)).toEqual([1, 2, 3, 4]);
  });
});

describe('myFizzBuzz', () => {
  it('num is divisible to 3 and 5', () => {
    expect(myFizzBuzz(15)).toBe('fizzbuzz');
  });

  it('num is divisible to 3', () => {
    expect(myFizzBuzz(3)).toBe('fizz');
  });

  it('num is divisible to 5', () => {
    expect(myFizzBuzz(5)).toBe('buzz');
  });

  it('num is not divisible to 3 or 5', () => {
    expect(myFizzBuzz(2)).toBe(2);
  });

  it('num is not a number', () => {
    expect(myFizzBuzz('')).toBe(false);
  });
});