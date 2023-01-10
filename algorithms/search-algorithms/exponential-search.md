# Exponential Search

Exponential search is an algorithm used to search for a given element in a sorted array. It works by starting with the element at the midpoint of the array and comparing it to the target element. If the target element is larger than the midpoint element, it searches the right half of the array using the same process. If the target element is smaller, it searches the left half. It continues to divide the search space in half until it finds the target element or determines that it is not in the array.

### Example in TypeScript

```typescript
function exponentialSearch(arr: number[], target: number): number {
  if (arr[0] === target) {
    return 0;
  }

  let i = 1;
  while (i < arr.length && arr[i] <= target) {
    i *= 2;
  }

  return binarySearch(arr, i / 2, Math.min(i, arr.length - 1), target);
}

function binarySearch(arr: number[], low: number, high: number, target: number): number {
  if (high >= low) {
    const mid = low + Math.floor((high - low) / 2);
    if (arr[mid] === target) {
      return mid;
    }
    if (arr[mid] > target) {
      return binarySearch(arr, low, mid - 1, target);
    }
    return binarySearch(arr, mid + 1, high, target);
  }
  return -1;
}

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(exponentialSearch(arr, 5)); // 4
console.log(exponentialSearch(arr, 11)); // -1
```

The `exponentialSearch()` function starts by checking if the target element is the first element in the array. If it is, it returns `0`. Otherwise, it uses a loop to double `i` until `arr[i]` is greater than the target element or `i` is greater than or equal to the length of the array. It then calls the `binarySearch()` function on the portion of the array from `arr[i / 2]` to the minimum of `arr[i]` and the last element in the array.

The `binarySearch()` function is a standard implementation of binary search, which is a search algorithm that works by repeatedly dividing the search space in half until the target element is found or it is determined that the element is not in the array.

This code searches for the value `5` in the sorted array `[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]`. The `exponentialSearch()` function should return `4`, which is the index of `5` in the array. It also searches for the value `11`, which is not in the array, and should return `-1`.
