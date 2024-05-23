# ts-utils

A collection of useful utility functions and types for TypeScript developers.

## Features

- **Type Guards**: Functions to help narrow types safely.
- **Utility Types**: Custom types that can be reused in projects.
- **Assertion Functions**: Functions to assert types at runtime.
- **Data Validation**: Simple schema-based validation for objects.
- **Common Helpers**: Utility functions for everyday tasks.

## Installation

You can install `ts-utils` using npm:

```bash
npm install @nodesleep/ts-utils
```
or using yarn:
```bash
yarn add @nodesleep/ts-utils
```

## Usage
### Type Guards
```Javascript
import { isString, isNumber } from '@nodesleep/ts-utils';

const value: unknown = 'hello';
if (isString(value)) {
  console.log(`The value is a string: ${value}`);
}

const anotherValue: unknown = 42;
if (isNumber(anotherValue)) {
  console.log(`The value is a number: ${anotherValue}`);
}
```
### Utility Types
```Javascript
import { DeepPartial, Nullable } from '@nodesleep/ts-utils';

type ExampleType = {
  name: string;
  age: number;
};

const partialExample: DeepPartial<ExampleType> = { name: 'John' };
const nullableExample: Nullable<string> = null;
```
### Assertion Functions
```Javascript
import { assertIsString, assertIsNumber } from '@nodesleep/ts-utils';

const someValue: unknown = 'hello';
assertIsString(someValue);
console.log(`The value is a string: ${someValue}`);

const anotherValue: unknown = 42;
assertIsNumber(anotherValue);
console.log(`The value is a number: ${anotherValue}`);
```
### Data Validation
```Javascript
import { validateObject, validateArray } from '@nodesleep/ts-utils';

const schema = {
  name: (value: unknown): value is string => typeof value === 'string',
  age: (value: unknown): value is number => typeof value === 'number',
};

const person = {
  name: 'Alice',
  age: 30,
};

if (validateObject(person, schema)) {
  console.log('Person is valid');
} else {
  console.log('Person is invalid');
}
```
### Common Helpers
``` Javascript
import { deepClone, mergeObjects, flattenArray } from '@nodesleep/ts-utils';

const obj1 = { a: 1 };
const obj2 = { b: 2 };
const merged = mergeObjects(obj1, obj2);
console.log(merged); // { a: 1, b: 2 }

const nestedArray = [[1, 2], [3, 4]];
const flatArray = flattenArray(nestedArray);
console.log(flatArray); // [1, 2, 3, 4]

const original = { key: 'value' };
const clone = deepClone(original);
console.log(clone); // { key: 'value' }
```
## Contributing
Contributions are welcome! Please open an issue or submit a pull request.
## License
This project is licensed under the MIT License.
