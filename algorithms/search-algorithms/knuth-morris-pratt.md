# Knuth–Morris–Pratt

The Knuth–Morris–Pratt (KMP) algorithm is a string matching algorithm that is used to find the occurrence of a pattern in a larger text. It's similar to the Boyer-Moore algorithm and the basic idea is to avoid the re-examination of the characters that have already been matched.

The main idea behind the KMP algorithm is to use a "failure table" or "prefix function" to keep track of the longest proper prefix of a substring that is also a suffix of that same substring. This table is used to avoid re-examination of the text and allows the algorithm to skip ahead when a mismatch is found.

### Example in TypeScript

```typescript
function KMPSearch(text: string, pattern: string): number | null {
    const n = text.length;
    const m = pattern.length;

    const lps = computeLPS(pattern);

    let i = 0, j = 0;
    while (i < n) {
        if (pattern[j] === text[i]) {
            i++;
            j++;
        }

        if (j === m) {
            return i - j;
        } else if (i < n && pattern[j] !== text[i]) {
            if (j !== 0) {
                j = lps[j - 1];
            } else {
                i++;
            }
        }
    }
    return null;
}

function computeLPS(pattern: string): number[] {
    const m = pattern.length;
    const lps = new Array(m).fill(0);
    let len = 0;
    let i = 1;
    while (i < m) {
        if (pattern[i] === pattern[len]) {
            len++;
            lps[i] = len;
            i++;
        } else {
            if (len !== 0) {
                len = lps[len - 1];
            } else {
                lps[i] = 0;
                i++;
            }
        }
    }
    return lps;
}
```

This function takes two arguments: the text to search in and the pattern to search for. It uses a while loop to iterate through the text and a nested loop to calculate the "failure table" or "prefix function" using the `computeLPS(pattern)` function.

When the algorithm finds a match, it increases both `i` and `j` and if `j` equals the pattern length it means that the substring is found, and it returns the index of the first element of the substring in the original text. If there's no match found, then if `j` is not equal to 0 the algorithm uses the value in the failure table to skip to the next possible match. Otherwise, it increases `i`.

#### Usage

```typescript
const text = "ABABDABACDABABCABAB";
const pattern = "ABABCABAB";
console.log(KMPSearch(text, pattern)); // Output: 10
const text2 = "ABABDABACDABABCABAB";
const pattern2 = "ABCD";
console.log(KMPSearch(text2, pattern2)); // Output: null
```

The time complexity of the KMP algorithm is `O(n+m)` where n is the length of the text and m is the length of the pattern, making it faster than the basic brute force algorithm (`O(nm)`) or the Boyer-Moore algorithm(`O(n+m)` in the best case, but `O(nm)` in the worst case). It's a well-known algorithm in the field of string matching, and has many applications such as find and replace operations in text editors, text compression, etc. Keep in mind that the `computeLPS(pattern)` function must be called only once before performing `KMPSearch()`, if the pattern is fixed, calling `computeLPS()` only once will save time. Furthermore, the input text and pattern must be non-empty. Otherwise, it will throw an error.
