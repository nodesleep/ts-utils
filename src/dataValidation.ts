export const validateObject = <T>(obj: unknown, schema: { [K in keyof T]: (value: unknown) => boolean }): obj is T => {
    if (typeof obj !== 'object' || obj === null) {
      return false;
    }
  
    return (Object.keys(schema) as (keyof T)[]).every((key) => schema[key]((obj as T)[key]));
  };
  
  export const validateArray = <T>(arr: unknown, validator: (value: unknown) => value is T): arr is T[] => {
    return Array.isArray(arr) && arr.every(validator);
  };
  