# Bogo Sort 💩

Bogo sort is a humorous and inefficient sorting algorithm. It is based on the idea of randomly shuffling elements of an array until they are in the correct order.

It is not considered as a practical sorting algorithm due to its extremely slow-running time, even for small input sizes. It's mostly used as a demonstration of the importance of using efficient algorithms.

### Example in TypeScript

```typescript
function bogoSort(arr: number[]): number[] {
    while (!isSorted(arr)) {
        shuffle(arr);
    }
    return arr;
}

function isSorted(arr: number[]): boolean {
    for (let i = 1; i < arr.length; i++) {
        if (arr[i - 1] > arr[i]) {
            return false;
        }
    }
    return true;
}

function shuffle(arr: number[]) {
    for (let i = arr.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
}
```

This function takes an array as an argument and checks whether the array is sorted using the `isSorted(arr)` function. If it's not sorted, it shuffles the array using the `shuffle(arr)` function.

#### Usage

```typescript
const array = [3, 2, 1, 4, 5, 6, 8, 7, 9];
console.log(bogoSort(array));
```

It should be noted that the bogo sort is impractical to be used as a sorting algorithm. Due to its extremely high running time, The time complexity of this algorithm is `O(∞)` on average and `O(n!)` in the worst case, where `n` is the number of elements in the array. Even for small input sizes, it takes a very long time to sort the array, and it's most likely will never complete. It's a good demonstration for why the efficient sorting algorithms are important and the time complexity of an algorithm should be considered when choosing the algorithm.
