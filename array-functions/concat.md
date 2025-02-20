# concat()

The `concat()` method in TypeScript joins two or more arrays into a new array without modifying the original ones.

## Example

```ts
let arr1: string[] = [ 'hello' ];
let arr2: string[] = [ 'world' ];
let arr3: string[] = arr1.concat( arr2 );

console.log( arr3 ); // Output: ["hello", "world"]
```

In this example, `arr1` and `arr2` contain `"hello"` and `"world"`, respectively. The `concat()` method merges them into a new array, `arr3`.
