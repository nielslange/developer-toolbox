# Interpolation Search

Interpolation search is an algorithm for searching for a target value in a sorted array. It's similar to binary search in that it repeatedly divides the search interval in half, but it uses the information about the relative position of the target value to the values at the indices of the array.

### Example in TypeScript

```typescript
function interpolationSearch(arr: number[], target: number): number | null {
    let low = 0;
    let high = arr.length - 1;
  
    while (low <= high && target >= arr[low] && target <= arr[high]) {
        const pos = low + ((target - arr[low]) * (high - low)) / (arr[high] - arr[low]);
        const current = arr[Math.floor(pos)];

        if (current === target) {
            return Math.floor(pos);
        }
        if (current < target) {
            low = Math.floor(pos) + 1;
        } else {
            high = Math.floor(pos) - 1;
        }
    }
    return null;
}
```

This function takes two arguments: an array and a target value. It uses a while loop to repeatedly divide the search interval in half. Inside while loop, it first calculate the position of the element that we are looking for by `pos = low + ((target - arr[low]) * (high - low)) / (arr[high] - arr[low])` This formula uses the information about the relative position of the target value to the values at the indices of the array. Then, it check if the element at that position is target. If it is, it returns the index. If it's less than the target, it updates the `low` variable to be one greater than the current position. If it's greater than the target, it updates the `high` variable to be one less than the current position. if the target is not in the array, this function returns `null`.

#### Usage

```typescript
const array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(interpolationSearch(array, 4)); // Output: 3
console.log(interpolationSearch(array, 10)); // Output: null
```

The interpolation search is generally more efficient than [binary search](binary-search.md) when the values in the array are uniformly distributed, but it can be less efficient when the values are not uniformly distributed because it can lead to a large number of iterations.
