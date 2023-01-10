# Jump Search

Jump search is an algorithm for searching for a target value in a sorted array. It's similar to linear search in that it looks at every nth element, but it skips over some elements in a way that makes it more efficient.

### Example in TypeScript

```typescript
function jumpSearch(arr: number[], target: number): number | null {
    const n = arr.length;
    let step = Math.floor(Math.sqrt(n));
    let prev = 0;
    while (arr[Math.min(step, n) - 1] < target) {
        prev = step;
        step += Math.floor(Math.sqrt(n));
        if (prev >= n) {
            return null;
        }
    }
    while (arr[prev] < target) {
        prev++;
        if (prev === Math.min(step, n)) {
            return null;
        }
    }
    if (arr[prev] === target) {
        return prev;
    }
    return null;
}
```

This function takes two arguments: an array and a target value. It uses a while loop to jump over some elements in the array by taking `sqrt(n)` steps at a time. It starts with the first element and compares it with the target value. If the element is less than the target value, it moves to the next step. It keeps moving to the next step until it finds an element that is greater than or equal to the target value. Then it uses another while loop to check from the previous step until it finds the target value or reaches the end of the array. If it finds the target value, it returns the index. If it doesn't find the target value, it returns `null`.

#### Usage

```typescript
const array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(jumpSearch(array, 4)); // Output: 3
console.log(jumpSearch(array, 10)); // Output: null
```

Jump search is an O(√n) algorithm, which is faster than [linear search](linear-search.md) but slower than [binary search](binary-search.md). It is useful when the size of the array is too large to be able to scan every element using linear search, but also when the array is not big enough to justify the use of more complex algorithms like binary search or [interpolation search](interpolation-search.md). This algorithm works only with sorted arrays.
