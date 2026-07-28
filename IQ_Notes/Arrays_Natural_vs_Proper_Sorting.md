# Arrays — Natural Sorting vs Proper Sorting (a-b / b-a)

## Example File: `84_ArraysSorting.js`

```js
let nums = [10, 1, 21, 2];

// ❌ Natural sorting (default)
nums.sort();
console.log(nums); // [1, 10, 2, 21] ← Unexpected!

// ✅ Proper ascending sort
nums.sort((a, b) => a - b);
console.log(nums); // [1, 2, 10, 21]

// ✅ Proper descending sort
nums.sort((a, b) => b - a);
console.log(nums); // [21, 10, 2, 1]
```

---

## Comparison Table

| Aspect                     | Natural Sorting (default)                          | Proper Sorting with `a - b` / `b - a`               |
|----------------------------|----------------------------------------------------|------------------------------------------------------|
| **What it does**           | Converts elements to **strings**, then sorts lexicographically (dictionary-style) | Sorts elements as **numbers** using a compare function |
| **Compare function**       | ❌ None — uses default string conversion           | ✅ `(a, b) => a - b` (asc) or `(a, b) => b - a` (desc) |
| **Sorting logic**          | Character-by-character Unicode comparison          | Numeric subtraction — negative, zero, or positive     |
| **Result for `[10,1,21,2]`** | `[1, 10, 2, 21]` ❌ Wrong for numbers            | `[1, 2, 10, 21]` ✅ Correct ascending                 |
| **Works for strings?**     | ✅ Yes — perfect for alphabetical sorting          | ⚠️ Only if strings represent numbers (e.g., `"5" - "2"`) |
| **Works for numbers?**     | ❌ No — treats numbers as strings                  | ✅ Yes — true numeric comparison                      |
| **Performance**            | Fast (no callback overhead)                        | Slightly slower (callback invoked per comparison)     |
| **Predictability**         | ❌ Unpredictable for mixed or numeric data         | ✅ Fully predictable — you control the logic          |

---

## How It Works — Step-by-Step Walkthrough

### Layer 1: Natural Sorting (Default) — `nums.sort()`

Internally, JavaScript converts **every element to a string** first, then compares them character-by-character.

```
Original:  [10, 1, 21, 2]

Step 1: Convert to strings
  10 → "10"    1 → "1"    21 → "21"    2 → "2"

Step 2: Compare lexicographically (character by character)
  "1"  vs "10" → "1" is shorter, comes first  → 1, 10
  "10" vs "2"  → "1" < "2" as characters      → 10 comes BEFORE 2!
  "2"  vs "21" → "2" is shorter, comes first  → 2, 21

Result: [1, 10, 2, 21] ❌
```

> **Why?** Because `"10"` starts with `"1"` which is less than `"2"`, so `10` is placed **before** `2` — even though numerically `10 > 2`.

### Layer 2: Proper Ascending Sort — `nums.sort((a, b) => a - b)`

The compare function `(a, b) => a - b` returns:

| Return value | Meaning        | Order      |
|-------------|----------------|------------|
| `< 0`       | `a` is smaller | `a, b`     |
| `=== 0`     | `a` equals `b` | unchanged  |
| `> 0`       | `a` is larger  | `b, a`     |

```
Original:  [10, 1, 21, 2]

Step 1: (10, 1) → 10 - 1 = 9  (> 0) → swap    → [1, 10, 21, 2]
Step 2: (10, 21) → 10 - 21 = -11 (< 0) → keep  → [1, 10, 21, 2]
Step 3: (21, 2) → 21 - 2 = 19  (> 0) → swap    → [1, 10, 2, 21]
Step 4: (10, 2) → 10 - 2 = 8   (> 0) → swap    → [1, 2, 10, 21]
Step 5: (1, 2)  → 1 - 2 = -1   (< 0) → keep    → [1, 2, 10, 21] ✅

Result: [1, 2, 10, 21] ✅
```

### Layer 3: Proper Descending Sort — `nums.sort((a, b) => b - a)`

Same logic, but reversed subtraction:

```
Original:  [10, 1, 21, 2]

Step 1: (10, 1) → 1 - 10 = -9  (< 0) → keep   → [10, 1, 21, 2]
Step 2: (1, 21) → 21 - 1 = 20  (> 0) → swap   → [10, 21, 1, 2]
Step 3: (1, 2)  → 2 - 1 = 1    (> 0) → swap   → [10, 21, 2, 1]
Step 4: (21, 2) → 2 - 21 = -19 (< 0) → keep   → [10, 21, 2, 1]
Step 5: (10, 21) → 21 - 10 = 11 (> 0) → swap  → [21, 10, 2, 1]

Result: [21, 10, 2, 1] ✅
```

---

## The Sorting Pipeline (Visual)

```
┌─────────────────────────────────────────────────────────────────┐
│                        Input Array                              │
│                        [10, 1, 21, 2]                           │
└──────────────────────────┬──────────────────────────────────────┘
                           │
                           ▼
            ┌──────────────┴──────────────┐
            │                             │
            ▼                             ▼
┌───────────────────────┐   ┌───────────────────────────────────┐
│  Natural Sort         │   │  Proper Sort (Compare Function)   │
│  nums.sort()          │   │  nums.sort((a,b) => a - b)        │
├───────────────────────┤   ├───────────────────────────────────┤
│  Convert to strings   │   │  Keep as numbers                  │
│  "10", "1", "21", "2" │   │  10, 1, 21, 2                    │
├───────────────────────┤   ├───────────────────────────────────┤
│  Lexicographic compare│   │  Numeric compare (a - b)          │
│  "1" < "10" < "2"     │   │  1 < 2 < 10 < 21                 │
├───────────────────────┤   ├───────────────────────────────────┤
│  Result:              │   │  Result:                          │
│  [1, 10, 2, 21] ❌   │   │  [1, 2, 10, 21] ✅               │
└───────────────────────┘   └───────────────────────────────────┘
```

---

## Quick Rule of Thumb

| If you want to...                          | Use this                          |
|--------------------------------------------|-----------------------------------|
| Sort **strings alphabetically**            | `arr.sort()` ✅                   |
| Sort **numbers ascending**                 | `arr.sort((a, b) => a - b)` ✅    |
| Sort **numbers descending**                | `arr.sort((a, b) => b - a)` ✅    |
| Sort **objects by a numeric property**     | `arr.sort((a, b) => a.age - b.age)` ✅ |
| Sort **strings in reverse alphabetical**   | `arr.sort((a, b) => b.localeCompare(a))` ✅ |

---

## TL;DR

- **`nums.sort()`** converts everything to **strings** first, then sorts alphabetically — so `10` comes before `2` because `"1" < "2"`. ❌
- **`nums.sort((a, b) => a - b)`** compares actual **numbers** using subtraction — negative means `a` goes first, positive means `b` goes first. ✅
- **`nums.sort((a, b) => b - a)`** reverses the subtraction for **descending** order. ✅
- **Always use a compare function** when sorting numbers — the default natural sort is designed for strings, not numbers.
