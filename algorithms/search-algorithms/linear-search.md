# Linear Search

Linear search is an algorithm for finding a target value in an array. It looks at each element in the array one at a time, in the order they appear, until it finds the target value or reaches the end of the array.

### Example in TypeScript

```typescript
function linearSearch(arr: number[], target: number): number | null {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === target) {
            return i;
        }
    }
    return null;
}
```

This function takes two arguments: an array and a target value. It uses a for loop to iterate through each element in the array. For each element, it compares it to the target value. If it finds a match, it returns the index of that element. If it doesn't find a match, it returns `null` after the loop.

#### Usage

```typescript
const array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(linearSearch(array, 4)); // Output: 3
console.log(linearSearch(array, 10)); // Output: null
```

The linear search has a time complexity of O(n), which means that it will take longer to search for a value in a larger array. It's the simplest search algorithm, but also the slowest one, it's useful when the size of the array is small or when the array is unsorted. As the size of the array increases, it becomes less efficient when compared to other algorithms such as [binary search](binary-search.md) or [interpolation search](interpolation-search.md).

\
