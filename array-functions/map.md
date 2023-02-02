# map()

The `map()` function is a higher-order array function in JavaScript and TypeScript. It takes an array and a callback function as arguments, and it returns a new array with the results of the callback function applied to each element in the original array. In this example, the `map()` function takes an array of numbers, `numbers`, and returns a new array, `doubledNumbers`, with each element of `numbers` doubled.

```typescript
const numbers: number[] = [1, 2, 3, 4, 5];

const doubledNumbers = numbers.map(number => number * 2);

console.log(doubledNumbers); 
// Output: [2, 4, 6, 8, 10]
```
