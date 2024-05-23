export const assertIsString = (value: unknown): asserts value is string => {
    if (typeof value !== 'string') {
      throw new Error(`Expected value to be a string, but received ${typeof value}`);
    }
  };
  
  export const assertIsNumber = (value: unknown): asserts value is number => {
    if (typeof value !== 'number') {
      throw new Error(`Expected value to be a number, but received ${typeof value}`);
    }
  };
  