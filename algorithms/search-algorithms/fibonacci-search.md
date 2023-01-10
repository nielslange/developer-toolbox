# Fibonacci Search

Fibonacci search is an algorithm used to search for a given element in a sorted array. It works by dividing the search space into subarrays using Fibonacci numbers and comparing the element at the midpoint of each subarray to the target element. If the target element is larger than the midpoint element, it searches the right half of the subarray using the same process. If the target element is smaller, it searches the left half. It continues to divide the search space in this way until it finds the target element or determines that it is not in the array.

### Example in TypeScript

```typescript
function fibonacciSearch(arr: number[], target: number): number {
  let fibM2 = 0;
  let fibM1 = 1;
  let fibM = fibM2 + fibM1;

  while (fibM < arr.length) {
    fibM2 = fibM1;
    fibM1 = fibM;
    fibM = fibM2 + fibM1;
  }

  let offset = -1;

  while (fibM > 1) {
    const i = Math.min(offset + fibM2, arr.length - 1);
    if (arr[i] < target) {
      fibM = fibM1;
      fibM1 = fibM2;
      fibM2 = fibM - fibM1;
      offset = i;
    } else if (arr[i] > target) {
      fibM = fibM2;
      fibM1 = fibM1 - fibM2;
      fibM2 = fibM - fibM1;
    } else {
      return i;
    }
  }

  if (fibM1 && arr[offset + 1] === target) {
    return offset + 1;
  }

  return -1;
}
```

The `fibonacciSearch()` function starts by initializing three variables, `fibM2`, `fibM1`, and `fibM`, to the first three Fibonacci numbers. It then uses a loop to generate the next Fibonacci number and assign it to `fibM` until `fibM` is greater than or equal to the length of the array. It then initializes a variable `offset` to `-1` and enters another loop.

The inner loop uses the value of `fibM` to determine the size of the current subarray and the index of the element at its midpoint. It compares the value at this index to the target element and adjusts `fibM`, `fibM1`, and `fibM2` accordingly. If the value at the midpoint index is equal to the target element, it returns the index. If the inner loop finishes without finding the target element, it checks if the value immediately following the current subarray is equal to the target element and, if so, returns the index of that element. If the target element is not found, the function returns `-1`.

#### Usage

```typescript
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(fibonacciSearch(arr, 5)); // 4
console.log(fibonacciSearch(arr, 11)); // -1
```

This code searches for the value `5` in the sorted array `[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]`. The `fibonacciSearch()` function should return `4`, which is the index of `5` in the array. It also searches for the value `11`, which is not in the array, and should return `-1`.
