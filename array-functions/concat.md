# concat()

`concat()` is a built-in method in TypeScript that allows you to join two or more arrays together and return a new array that contains all the elements of the original arrays. This method does not modify the original arrays, but instead creates a new array that is a copy of the original arrays with the new elements added to the end.

## Example

```ts
let arr1: string[] = ["hello"];
let arr2: string[] = ["world"];
let arr3: string[] = arr1.concat(arr2);

console.log(arr3); // Output: ["hello", "world"]
```

In this example, we have two arrays `arr1` and `arr2` which contain the strings "hello" and "world" respectively. We then use the `concat()` method to join the two arrays together and store the result in a new array `arr3`. Finally, we log the contents of arr3 to the console, which outputs `["hello", "world"]`.

## References

- [developer.mozilla.org](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/concat)
- [w3schools.com](https://www.w3schools.com/jsref/jsref_concat_string.asp)
