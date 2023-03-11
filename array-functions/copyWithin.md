# copyWithin()

`copyWithin()` is a built-in method in TypeScript that allows you to copy a sequence of elements within an array and paste them to a different location within the same array. This method modifies the original array in place and returns a reference to the modified array.

## Example

```ts
const arr: number[] = [1, 2, 3, 4, 5];
arr.copyWithin(2, 0, 2);

console.log(arr); // Output: [1, 2, 1, 2, 5]
```

In this example, we have an array `arr` containing the numbers 1 through 5. We then use the `copyWithin()` method to copy the first two elements of the array (1 and 2) and paste them starting at the third position of the array (index 2). The second argument of `copyWithin()` is the starting index where the copying begins, and the third argument is the ending index (exclusive) of the sequence to be copied. Finally, we log the contents of arr to the console, which outputs `[1, 2, 1, 2, 5]`. As you can see, the first two elements of `arr` were copied and pasted into the array starting at index 2, overwriting the original elements at those positions.
