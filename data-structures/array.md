# Array

An array is a linear data structure that stores a collection of elements of the same data type. Arrays are used to store multiple values in a single variable, rather than declaring separate variables for each value.

In most programming languages, including TypeScript, arrays are zero-based, meaning that the first element of the array has an index of 0. You can access the elements of an array using their indices, which start at 0 for the first element and increment by 1 for each subsequent element.

For example, if you have an array called `numbers` that stores the elements 1, 2, 3, 4, and 5, you can access the first element of the array using `numbers[0]`, the second element using `numbers[1]`, and so on.

You can also use the length property of an array to determine the number of elements in the array. For example, if `numbers` is an array with 5 elements, `numbers.length` would return 5.

Arrays are useful for storing and organising data when you need to store multiple values that are related to each other, such as a list of student names or a list of account balances. They can be used to store elements of any data type, including numbers, strings, and objects.

### Example in TypeScript

```typescript
let array: number[] = [1, 2, 3, 4, 5];
let array: Array<number> = [1, 2, 3, 4, 5];
```
