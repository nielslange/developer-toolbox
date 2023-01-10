# Sublist Search

Sublist search is an algorithm for finding a sublist of elements in a given list. The goal is to find a sequence of elements in the list that match a given sublist.

### Example in TypeScript

```typescript
function sublistSearch<T>(list: T[], sublist: T[]): number | null {
    for (let i = 0; i <= list.length - sublist.length; i++) {
        let j = 0;
        while (j < sublist.length && list[i + j] === sublist[j]) {
            j++;
        }
        if (j === sublist.length) {
            return i;
        }
    }
    return null;
}
```

This function takes two arguments: a list and a sublist to search for in the list. It uses a nested loop, the outer loop to iterate through the list and the inner loop to compare the current element of the outer loop with the elements in the sublist. For each element of the outer loop, it compares it to the corresponding element in the sublist. If all the elements match, it means that the sublist is found and it returns the index of the first element of the sublist in the original list. If it doesn't find the sublist, it returns `null` after the outer loop.

#### Usage

```typescript
const list = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const sublist = [4,5];
console.log(sublistSearch(list, sublist)); // Output: 3
const sublist2 = [9,5];
console.log(sublistSearch(list, sublist2)); // Output: null
```

This algorithm has a time complexity of `O(n*m)` where n is the length of the list, m is the length of the sublist. The performance of this algorithm can be improved using some other algorithms such as the Knuth–Morris–Pratt (KMP) algorithm which have a linear time complexity O(n+m). It should also be noted that the input list must be non-empty. Otherwise, it will throw an error.
