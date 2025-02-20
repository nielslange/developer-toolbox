# `copyWithin()`

The `copyWithin()` method copies a sequence of elements within an array and pastes them at a specified position **in-place**, modifying the original array.

## Example

```typescript
const arr: number[] = [1, 2, 3, 4, 5];
arr.copyWithin(2, 0, 2);

console.log(arr); // Output: [1, 2, 1, 2, 5]
```

- The first argument (`2`) is the target index where the copied elements will be placed.
- The second argument (`0`) is the start index of the elements to be copied.
- The third argument (`2`) is the exclusive end index of the copied elements.

This modifies `arr` to `[1, 2, 1, 2, 5]` by copying elements `1` and `2` and placing them at index `2`, replacing the original values.
