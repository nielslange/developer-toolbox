---
description: >-
  Binary search is a fast algorithm for finding an item in a sorted list by
  repeatedly halving the search interval.
---

# Binary Search

Binary search is an algorithm that is used to search for a specific element in a sorted list. It works by repeatedly dividing the list in half, until the element being searched for is found, or it is clear that the element is not in the list.

### Example in TypeScript

```typescript
function binarySearch(list: number[], element: number): number | null {
  let start = 0;
  let end = list.length - 1;

  while (start <= end) {
    const mid = Math.floor((start + end) / 2);

    if (list[mid] === element) {
      return mid;
    } else if (list[mid] < element) {
      start = mid + 1;
    } else {
      end = mid - 1;
    }
  }

  return null;
}
```

#### Usage

```typescript
const list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(binarySearch(list, 3));  // Outputs: 2
console.log(binarySearch(list, 11)); // Outputs: null
```

In this example, the `binarySearch` function takes in a sorted list and an element to search for as arguments. It uses a loop to repeatedly divide the list in half until the element is found, or it is clear that the element is not in the list. If the element is found, the function returns its index in the list. If the element is not found, the function returns null.
