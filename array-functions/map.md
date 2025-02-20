# `map()`

The `map()` method is a higher-order function that creates a **new array** by applying a callback function to each element of an existing array.

## Example

```typescript
const numbers: number[] = [ 1, 2, 3, 4, 5 ];

const doubledNumbers = numbers.map( ( number ) => number * 2 );

console.log( doubledNumbers ); // Output: [2, 4, 6, 8, 10]
```

- `map()` iterates over each element in `numbers`.
- The callback function (`number * 2`) doubles each value.
- The result is stored in `doubledNumbers`, without modifying the original array.
