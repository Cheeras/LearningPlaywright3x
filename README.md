# Learning Playwright 3x 🚀

> A structured learning journey from **JavaScript fundamentals** to **Playwright automation** — with clear concept explainers, code examples, and interview-ready notes.

---

## 📚 Table of Contents

| # | Chapter | Topics Covered |
|---|---------|----------------|
| 1 | [GenAI Basics](#chapter-1-genai-basics) | Generative AI fundamentals |
| 2 | [JavaScript Concepts Part 1](#chapter-2-javascript-concepts-part-1) | JavaScript engine, Hello World |
| 3 | [JavaScript Concepts Part 2](#chapter-3-javascript-concepts-part-2) | `let` keyword, variable declaration |
| 4 | [Identifiers](#chapter-4-identifiers) | Identifier rules, comments, naming conventions |
| 5 | [Literals](#chapter-5-literals) | String, number, boolean, null, undefined, numeric literals |
| 6 | [Operators](#chapter-6-operators) | Data types, arithmetic, comparison, logical operators |
| 7 | [Statements](#chapter-7-statements) | if/else, nested if, multiple if-else with grade scoring |
| 8 | [Switch Case](#chapter-8-switch-case) | Switch statement, fall-through, grouping, real-world API testing, interview questions |
| 9 | [HackerRank Challenge](#chapter-9-hackerrank-challenge) | Grade classification (if...else), number-to-word converter (switch), factorial, circle/rectangle area & perimeter, grade calculator, array problems (max, min, frequency, duplicates, reverse) |
| 10 | [Loops Concepts](#chapter-10-loops-concepts) | For loop, while loop, do-while loop, nested loops, interview questions |
| 11 | [Arrays Concepts](#chapter-11-arrays-concepts) | Array creation, accessing, modifying, adding/removing, searching, iteration, transformation, sorting, slicing, concatenation, checking, copying, destructuring, real-time examples, interview questions |
| 12 | [JavaScript Coding Assignments](#chapter-12-javascript-coding-assignments) | Fundamentals: print, even/odd, sum, factorial, reverse, count digits, Armstrong, palindrome; if-else: largest/smallest of 3, leap year, vote eligibility, electricity bill; **Arrays: sum, average, count, positive/negative, index finding** |
| 13 | [Functions Concept](#chapter-13-functions-concept) | Function types, parameters, return values, template literals, function expressions, arrow functions |
| 🧠 | [IQ Notes](#iq-notes) | Interview questions, keywords, shortcuts, increment/decrement, switch case, source code vs bytecode, **complete arrays master guide**, **functions notes** |

---

## Chapter 1: GenAI Basics

**Folder:** `chapter_01_GenAI/`

| File | Description |
|------|-------------|
| `GenAIBasics.md` | Overview of Generative AI fundamentals |

Covers the basic concepts of Generative AI, setting the stage for understanding how AI assistants and automation tools work in the modern development landscape.

---

## Chapter 2: JavaScript Concepts — Part 1

**Folder:** `chapter_02_Javascript_Concepts_Part1/`

| File | Description |
|------|-------------|
| `index.js` | Simple "Hello, World!" program |
| `Javascriptengine.txt` | How the JavaScript engine works (Parsing → AST → Interpreter → Binary) |

### JavaScript Engine Pipeline

```
Source Code (.js)
      │
      ▼
   Parser
      │
      ▼
AST (Abstract Syntax Tree)
      │
      ▼
Interpreter (V8 Ignition)
      │
      ▼
Bytecode → JIT Compiler (TurboFan) → Machine Code
```

---

## Chapter 3: JavaScript Concepts — Part 2

**Folder:** `chapter_03_Javascript_Concepts_Part2/`

| File | Description |
|------|-------------|
| `01_Helloworld.js` | "Welcome to JavaScript!" — basic console output |
| `02_let_concept.js` | Introduction to `let` keyword for block-scoped variables |

### Key Concepts
- **`let`** — Block-scoped variable declaration (ES6)
- Cannot be redeclared in the same scope
- Hoisted but not initialized (Temporal Dead Zone)

---

## Chapter 4: Identifiers

**Folder:** `chapter_04_Identifier/`

| File | Description |
|------|-------------|
| `04_Identifier_Rules.js` | Valid & invalid identifiers, `$` and `_` usage |
| `05_Identifier_Rules_Part2.js` | Naming conventions: camelCase, PascalCase, snake_case, etc. |
| `06_Comments.js` | Single-line, multi-line, and JSDoc-style comments |
| `07_Identifier_IQ.js` | Interview questions on identifiers |

### Identifier Rules

| Rule | Description | Valid Example | Invalid Example |
|------|-------------|---------------|-----------------|
| 1 | Start with letter, `_`, or `$` | `let name` | `let 1st` |
| 2 | Can contain letters, digits, `_`, `$` | `let user_1` | `let my-name` |
| 3 | No spaces allowed | `let userName` | `let my name` |
| 4 | Cannot be reserved keywords | `let className` | `let class` |
| 5 | Case-sensitive | `name ≠ Name` | — |

### Naming Conventions

| Convention | Pattern | Example | Use Case |
|------------|---------|---------|----------|
| **camelCase** | `firstWord lowercase` | `userName` | Variables, functions |
| **PascalCase** | `EveryWord Capital` | `UserProfile` | Classes |
| **snake_case** | `words_underscored` | `user_profile` | Files, DB columns |
| **SCREAMING_SNAKE_CASE** | `ALL_CAPS` | `API_KEY` | Constants |
| **kebab-case** | `words-hyphenated` | ❌ Not valid in JS | CSS classes |

---

## Chapter 5: Literals

**Folder:** `chapter_05_Literals/`

| File | Description |
|------|-------------|
| `08_Literals.js` | String, Boolean, Number, Null literals |
| `09_null_undefined.js` | `null` vs `undefined` — definitions and `typeof` |
| `10_diff_null_undefined.md` | Comparison table: `null` vs `undefined` |
| `11_Literals.js` | Numeric literals: hex, octal, binary, exponential |
| `12_Numbers.js` | All number types: integer, float, scientific notation |
| `13_Numbers_part2.js` | Numeric separators (`_`) for readability |

### null vs undefined

| Feature | `undefined` | `null` |
|---------|-------------|--------|
| Meaning | Not assigned / missing | Intentionally empty |
| Assigned by | JavaScript automatically | Developer manually |
| `typeof` | `"undefined"` | `"object"` |
| Default variable value | Yes | No |
| `==` comparison | `null == undefined` → `true` |
| `===` comparison | `null === undefined` → `false` |

### Numeric Literals

| Type | Prefix | Example |
|------|--------|---------|
| Decimal | — | `42` |
| Binary | `0b` / `0B` | `0b101010` |
| Octal | `0o` / `0O` | `0o77` |
| Hexadecimal | `0x` / `0X` | `0x2A` |
| Exponential | `e` | `1e6` |
| Numeric Separators | `_` | `1_000_000` |

---

## Chapter 6: Operators

**Folder:** `chapter_06_Operators/`

| File | Description |
|------|-------------|
| `14_DataType.js` | Primitive vs Reference data types |
| `15_OperatorsConcept.js` | `var`, `let`, `const`, assignment operators |
| `16_Arithmetic_Operators.js` | `+`, `-`, `*`, `/`, `%`, `**` |
| `17_comparision_Operator.js` | `==`, `===`, `!=`, `!==`, `<`, `>`, `<=`, `>=` |
| `18_Logical_Operator.js` | `&`, `\|`, `&&`, `\|\|` |
| `19_Confusion_Comparision.js` | Loose vs strict comparison with empty strings |
| `20_Confusion_Comparision_part2.js` | `null` vs `undefined` comparison confusion |
| `21_String_Operations.js` | String concatenation and `typeof` with strings |
| `22_Ternary_Operator.js` | Ternary operator syntax (`condition ? ifTrue : ifFalse`) |
| `23_IQ1_Ternary.js` | IQ: Ternary for API status code validation |
| `24_IQ2_Ternary.js` | IQ: Ternary for environment-based URLs |
| `25_IQ3_Ternary.js` | IQ: Ternary for CI headless/headed browser mode |
| `26_IQ4_Ternary.js` | IQ: Ternary for SLA breach check with template literals |
| `27_Nested_Ternary_Op.js` | Nested ternary operator with age-based conditions |
| `28_IQ_Nested_Ternary.js` | IQ: Nested ternary for HTTP status code categories |
| `29_IQ_Nested_Ternary2.js` | IQ: Nested ternary for temperature feel classification |
| `30_Type_Op.js` | `typeof` operator — checking primitive types |
| `31_BitWise_Operator.js` | Bitwise operators: `&`, `\|`, `^`, `~`, `<<`, `>>` |
| `32_DataTypes.js` | Data types overview and examples |
| `33_Increment_Decrement.js` | Increment (`++`) operator basics — prefix vs postfix |
| `34_incre_decre_part2.js` | Increment/decrement operator — deeper examples |
| `35_Decrement_Op.js` | Decrement (`--`) operator — prefix vs postfix |
| `36_Null_Coalescing.js` | Nullish coalescing operator (`??`) |
| `37_Increment_Decrement_Assignmet.js` | Assignment with increment/decrement — combined expressions |
| `38_Increment_Decrement_Assginment_part2.js` | Advanced increment/decrement assignments — 12 interview-style challenges (FAANG-level) |
| `PreincrementOperator.png` | Diagram: pre-increment operator execution flow |
| `PostincrementOperator.png` | Diagram: post-increment operator execution flow |

### Comparison Cheat Sheet

```javascript
"" == 0           // true  (loose — type coercion)
"" === 0          // false (strict — type check)
"0" == 0          // true
"0" === 0         // false
null == undefined // true
null === undefined // false
null == 0         // false
null >= 0         // false
```

### Data Types

| Category | Types |
|----------|-------|
| **Primitive** | `string`, `number`, `boolean`, `bigint`, `undefined`, `null`, `symbol` |
| **Reference** | `Arrays`, `Functions`, `Objects` |

---

## Chapter 7: Statement

**Folder:** `chapter_07_Statement/`

| File | Description |
|------|-------------|
| `37_statement_if_else.js` | `if/else` basics — age check examples, nested if |
| `38_Multiple_if_else_Statement.js` | Grade scoring with multiple `if...else if...else` chains (3 versions: basic, simplified, clean) |
| `39_if_else_statementassignment_Level1.js` | **Level 1 — Basic:** Positive/negative/zero check, even/odd, voting eligibility |
| `40_if_else_statementassignment_Level2.js` | **Level 2 — Intermediate:** Largest of 3 numbers, grade calculator, leap year |
| `41_if_else_statementassignment_Level3.js` | **Level 3 — Advanced:** Electricity bill calculation — flat rate vs real-world tiered billing |

### Key Concepts

- **`if/else`** — Conditional branching with boolean expressions
- **Nested if** — Conditions inside conditions for multi-level logic
- **Multiple `if...else if...else`** — Chaining multiple conditions with optimized ordering (highest value first)
- **Refactoring patterns** — Removing redundant range checks for cleaner code and separating logic from display
- **Practice assignments** — 3 levels of practice: basic (positive/negative, even/odd, voting), intermediate (largest of 3, grade calc, leap year), and advanced (electricity bill with tiered slab rates)

---

## Chapter 8: Switch Case

**Folder:** `chapter_08_SwitchCaseConcept/`

| File | Description |
|------|-------------|
| `39_Switch_case_Statement.js` | Switch statement basics — day-of-week mapping with `break` and `default` |
| `40_IQ.js` | IQ: Switch fall-through behavior — sprint planning days without break |
| `41_REAL_API_Testing.js` | Real-world usage: HTTP status code response handling (200, 404) |
| `42_Switch_Group.js` | Grouping cases — browser engine detection (Chromium, Mozilla, WebKit) |
| `43_InterviewQuestion2.js` | IQ: Fall-through with fruits — no breaks, observing cascade execution |
| `44_InterviewQ3.js` | IQ: Switch with `true` — range-based test score grading (95, 85, 70, 50) |
| `45_InterviewQ4.js` | IQ: `switch` with `0` vs `false` — strict comparison (`===`) behavior |
| `46_IQ5.js` | IQ: Duplicate case values — what happens with two `case 10` blocks |
| `46_Switch_Case_Top10Questions.js` | Top 10 switch case interview questions — full reference with Number, String, Boolean, null, undefined, and Object expression types |
| `JavaScript_Switch_Case_Master_Guide_by_ChatGPT.pdf` | Comprehensive PDF guide: switch case syntax, rules, interview questions, best practices |
| `JavaScript_Switch_Case_Reference_Guide_With_Examples.pdf` | PDF reference: switch case with real-world examples and edge cases |

### Switch Case Behavior

| Feature | Description |
|---------|-------------|
| **Strict comparison** | Uses `===` — checks both value and type |
| **Fall-through** | Without `break`, execution continues to the next case |
| **Grouping** | Multiple cases can share the same code block |
| **`default`** | Executes when no case matches (can be placed anywhere) |
| **Expression types** | Number, String, Boolean, null, undefined, Object reference — case type must match expression type |

### Expression Type Coverage

| Expression Type | Example | Case Type Must Be |
|----------------|---------|-------------------|
| **Number** | `switch(day)` with `case 1:` | Number |
| **String** | `switch(browserName)` with `case "Chrome":` | String |
| **Boolean** | `switch(isLoggedIn)` with `case true:` | Boolean |
| **null** | `switch(value)` with `case null:` | null |
| **undefined** | `switch(value)` with `case undefined:` | undefined |
| **Object** | `switch(person)` with `case person:` | Same object reference |

### Switch vs if...else

| Scenario | Recommended |
|----------|-------------|
| Single discrete value (day, code, fruit) | `switch` |
| Range-based checks (scores, ages) | `if...else` |
| 3+ discrete values | `switch` (cleaner) |
| Complex conditions (AND/OR) | `if...else` |

---

## Chapter 9: HackerRank Challenge

**Folder:** `chapter_09_HackerRankChallenge/`

| File | Description |
|------|-------------|
| `47_ifelse_HackerRank.js` | HackerRank grade classification — `if...else` chain mapping marks to grades (AA → FF) |
| `48_Switch_Case_hackerRank.js` | HackerRank number-to-word converter — `switch` mapping digits 1-9 to English words |
| `49_ifelse_HackerRankScreenshot.png` | Screenshot: HackerRank `if...else` problem statement and expected output |
| `50_SwitchCase_HackerRankScreenshot.png` | Screenshot: HackerRank `switch` problem statement and expected output |
| `5_FactorialofgivenNumber.js` | Factorial of a given number using `while` loop |
| `6_area_perimeter_circle.js` | Area and perimeter of a circle using `Math.PI` |
| `6_Area_Perimeter_Ractangle.js` | Area and perimeter of a rectangle using `length × width` |
| `8_GradeCalculatr.js` | Grade calculator — `if...else` chain mapping scores 0–30 to grades A–F |
| `1_FactorialofgivenNumber.js` | Factorial using `while` loop (function-based) |
| `2_area_perimeter_circle.js` | Area & perimeter of a circle using `Math.PI` (function-based) |
| `3_Area_Perimeter_Ractangle.js` | Area & perimeter of a rectangle (function-based) |
| `4_GradeCalculatr.js` | Grade calculator — `if...else` chain mapping scores 0–30 to grades A–F (function-based) |
| `5_findMaxelementarray.js` | Find maximum element from an array using `for...of` |
| `6_frequencyOfArrayElements.js` | Frequency of each element in an array using `Map` |
| `7_findduplicateelements.js` | Find duplicate elements in an array (3 approaches: nested for, for-in, for-of) |
| `8_reverseOfArray.js` | Reverse an array — using `reverse()`, separate array, and two-pointer in-place swap |
| `9_findsmallestinArray.js` | Find smallest element in an array — using `for` loop and `Math.min(...arr)` |

### HackerRank Challenges

| Challenge | Concept | Input | Output |
|-----------|---------|-------|--------|
| Grade Classification | `if...else if...else` | Marks (numeric) | AA / AB / BB / BC / CC / CD / DD / FF |
| Number to Word | `switch` statement | Number (1-9) | ONE / TWO / ... / NINE / PLEASE TRY AGAIN |
| Factorial of a Number | `while` loop | Number (n) | Factorial value |
| Circle Area & Perimeter | `Math.PI` formula | Radius (r) | Area & Perimeter |
| Rectangle Area & Perimeter | Arithmetic formulas | Length, Width | Area & Perimeter |
| Grade Calculator | `if...else if...else` | Score (0–30) | A / B / C / D / E / F |
| Find Max Element | `for...of` loop | Array of numbers | Maximum value |
| Frequency of Elements | `Map` object | Array of numbers | Element → Count pairs |
| Find Duplicates | Nested loops / `for...in` / `for...of` | Array of numbers | Duplicate elements |
| Reverse an Array | Two-pointer in-place swap | Array of numbers | Reversed array |
| Find Smallest Element | `for` loop / `Math.min(...arr)` | Array of numbers | Minimum value |

Both challenges use standard input (`stdin`) via `fs.readFileSync(0)` — the HackerRank edge I/O pattern for Node.js.

```bash
# Run grade classification
echo 85 | node chapter_09_HackerRankChallenge/47_ifelse_HackerRank.js

# Run number-to-word converter
echo 4 | node chapter_09_HackerRankChallenge/48_Switch_Case_hackerRank.js

# Run factorial calculator
node chapter_09_HackerRankChallenge/5_FactorialofgivenNumber.js

# Run circle area & perimeter
node chapter_09_HackerRankChallenge/6_area_perimeter_circle.js

# Run rectangle area & perimeter
node chapter_09_HackerRankChallenge/6_Area_Perimeter_Ractangle.js

# Run grade calculator
node chapter_09_HackerRankChallenge/8_GradeCalculatr.js

# Run array problems
node chapter_09_HackerRankChallenge/5_findMaxelementarray.js
node chapter_09_HackerRankChallenge/6_frequencyOfArrayElements.js
node chapter_09_HackerRankChallenge/7_findduplicateelements.js
node chapter_09_HackerRankChallenge/8_reverseOfArray.js
node chapter_09_HackerRankChallenge/9_findsmallestinArray.js
```

---

## Chapter 10: Loops Concepts

**Folder:** `chapter_10_loopsconcepts/`

| File | Description |
|------|-------------|
| `00_noteforloops.txt` | Overview note — for loop in JavaScript |
| `51_Loop.js` | **For loop basics** — print 1 to 10, ICU syntax (Init, Condition, Update), pre/post increment behavior |
| `51_For_loop.js` | **Advanced for loop patterns** — initialization outside, omitted condition (infinite loop), missing updation |
| `52_Increment.js` | Pre-increment (`++a`) operator example |
| `53_IQ_forloop.js` | IQ: For loop with variable naming — using any valid identifier |
| `54_IQ_forloop2.js` | **Infosys & Tekion IQs:** Loop with identifiers, conditional gift logic inside loop |
| `55_whileloop.js` | **While loop basics** — for vs while comparison, manual increment |
| `56_whileloop2.js` | While loop with attempt counter (retry pattern) |
| `57_Modei.js` | While loop — printing "Modi will do 15+ years" |
| `60_Do_While.js` | **Do-while loop** — retry pattern, executes body at least once |
| `61_While_vs_for.js` | While with `break` — conditional loop exit |
| `62_DoWhile_vs_while.js` | **Do-while vs while** — comparison: while skips if false, do-while runs once |
| `63_NestedFor_Loop.js` | **Nested for loop** — 3×3 grid iteration with `index,j` pairs |
| `64_For_Loop_Assignment_Level1.js` | **Level 1 — Beginner:** Print 1–10, 10–1, even/odd 1–50, multiplication table of 7 |
| `65_For_Loop_Assignment_Level2.js` | **Level 2 — Beginner Plus:** Sum 1–100, sum even/odd, squares & cubes 1–10 |
| `66_For_Loop_Assignment_Level3.js` | **Level 3 — Intermediate:** Factorial, reverse counting by 5s, divisible by 3 & 5, count even/odd 1–1000 |
| `67_For_Loop_Assignment_Level6.js` | **Level 6 — Logic Building:** Multiples of 7, divisible by 3 not 5, first 20 multiples of 9, sum of squares/cubes |
| `68_For_Loop_Assignment_Level4_PatternBuilding.js` | **Level 4 — Pattern Building:** (placeholder) |
| `69_For_Loop_Assignment_Level7_interviewLevel.js` | **Level 7 — Interview Level:** Reverse a given number using `while` loop |
| `70_For_Loop_CountDigitOfnumber.js` | **Level 7 — Interview Level:** Count digits of a number using `Math.trunc()` |


### Loop Comparison

| Loop Type | Syntax | Executes At Least Once? | Use Case |
|-----------|--------|------------------------|----------|
| **`for`** | `for(init; cond; update)` | No | Known number of iterations |
| **`while`** | `while(cond) { }` | No | Condition-based, unknown iterations |
| **`do-while`** | `do { } while(cond);` | **Yes** | Must run body at least once |
| **Nested `for`** | `for` inside `for` | No | Multi-dimensional iteration (grids, matrices) |

### Key Concepts
- **ICU Syntax** — `I`nitialization, `C`ondition, `U`pdate
- All three parts of `for` are optional — omitting condition defaults to `true` (infinite loop)
- Pre/post increment doesn't matter in the update part of `for` — value used on next line
- `do-while` guarantees at least one execution regardless of condition

### For Loop Assignment Levels

| Level | File | Focus | Questions |
|-------|------|-------|-----------|
| **Level 1 — Beginner** | `64_For_Loop_Assignment_Level1.js` | Warm-up: print sequences, even/odd, multiplication table | 5 |
| **Level 2 — Beginner Plus** | `65_For_Loop_Assignment_Level2.js` | Summation, squares, cubes | 5 |
| **Level 3 — Intermediate** | `66_For_Loop_Assignment_Level3.js` | Factorial, reverse counting, divisibility, counting | 5 |
| **Level 4 — Pattern Building** | `68_For_Loop_Assignment_Level4_PatternBuilding.js` | (placeholder) | — |
| **Level 6 — Logic Building** | `67_For_Loop_Assignment_Level6.js` | Multiples, conditional divisibility, sum of squares/cubes | 5 |
| **Level 7 — Interview Level** | `69_For_Loop_Assignment_Level7_interviewLevel.js` | Reverse a number | 1 |
| **Level 7 — Interview Level** | `70_For_Loop_CountDigitOfnumber.js` | Count digits of a number | 1 |

---

## Chapter 11: Arrays Concepts

**Folder:** `chapter_11_ArraysConcept/`

| File | Description |
|------|-------------|
| `71_Arrays.js` | Array basics — creating arrays with literal syntax, `typeof` behavior |
| `72_Arrays.js` | In-depth array overview — mutability, reference type, index-based access |
| `73_Arrays_Creation.js` | Two ways to create arrays: literal `[]` syntax vs `Array()` constructor |
| `74_Arrays_CreationWithConstructor.js` | `Array()` constructor nuances — single number arg creates empty slots |
| `75_Arrays_AccessingAndModify.js` | Accessing elements by index and modifying values in-place |
| `76_Arrays_Add_Remove.js` | Adding/removing elements — `push()`, `pop()`, `shift()`, `unshift()` |
| `77_Arrays_REALTIME.js` | Real-world example: browser management with array operations |
| `78_Array_Searching.js` | Searching arrays — `includes()`, `indexOf()`, `lastIndexOf()`, `find()`, `findIndex()` |
| `79_IQ.js` | Interview questions: `find()`, `filter()`, edge cases with array methods |
| `80_Array_Iterate.js` | Iterating arrays — `for` loop, `for...of`, `forEach()`, `map()` |
| `81_Arrayfunctions_phase1.js` | Array transformation methods — `push()`, `pop()`, `shift()`, `unshift()`, `splice()`, `slice()` |
| `81_Arrayfunctions_phase2.js` | Array iteration methods — `forEach()`, `map()`, `filter()`, `reduce()` |
| `82_Arrayfunctions_phase2_part2.js` | Advanced array methods — `every()`, `some()`, `flat()`, `flatMap()` |
| `83_ArrayTransform.js` | Array transformation — `map()`, `filter()`, `reduce()` with real-world examples |
| `84_ArraysSorting.js` | Array sorting — natural sort (lexicographic) vs proper sort with compare function `(a,b) => a-b` |
| `85_Arrays_Slicing.js` | Array slicing — `slice()` vs `splice()` with start/end index behavior |
| `86_Arrayconcat.js` | Array concatenation — `concat()`, spread operator `[...a,...b]`, and `join()` with custom separator |
| `87_ArrayChecking.js` | Array checking — `Array.isArray()`, `every()` (all must pass), `some()` (at least one passes) |
| `88_ArrayCopy.js` | Array copying — spread `[...arr]`, `slice()`, `Array.from()`, `concat()` — shallow copy techniques |
| `89_ArrayDestruction.js` | Array destructuring — basic unpacking, rest pattern `...rest`, default values, skipping elements (hole), swapping without temp variable |
| `Memory_Diagram_Of_Array_Forward_backword_indexing_Explanation.png` | Visual diagram: forward and backward indexing in arrays |

### Array Methods Cheat Sheet

| Method | Description | Returns | Mutates Original? |
|--------|-------------|---------|-------------------|
| `push()` | Add element to end | New length | ✅ Yes |
| `pop()` | Remove element from end | Removed element | ✅ Yes |
| `shift()` | Remove element from start | Removed element | ✅ Yes |
| `unshift()` | Add element to start | New length | ✅ Yes |
| `includes()` | Check if element exists | `boolean` | ❌ No |
| `indexOf()` | First index of element | `number` (-1 if not found) | ❌ No |
| `lastIndexOf()` | Last index of element | `number` | ❌ No |
| `find()` | First element satisfying condition | Element or `undefined` | ❌ No |
| `findIndex()` | Index of first element satisfying condition | `number` | ❌ No |
| `filter()` | All elements satisfying condition | New array | ❌ No |
| `forEach()` | Execute function for each element | `undefined` | ❌ No |
| `map()` | Transform each element | New array | ❌ No |

### Array Indexing

```
Forward Indexing:   0    1    2    3    4
                  ┌────┬────┬────┬────┬────┐
                  │ 10 │ 20 │ 30 │ 40 │ 50 │
                  └────┴────┴────┴────┴────┘
Backward Indexing:  -5   -4   -3   -2   -1
```

### Key Concepts

- Arrays are **reference types** — stored in heap, variable holds reference
- **Zero-indexed** — first element is at index `0`
- **Negative indexing** not supported natively (use `arr[arr.length - 1]` for last element)
- `typeof arr` returns `"object"` — use `Array.isArray()` to check
- `Array()` constructor with single numeric argument creates array with **empty slots**, not filled with `undefined`
- **Shallow copy** — methods like `filter()` and `map()` return new arrays but don't deep-clone

---

## Chapter 12: JavaScript Coding Assignments

**Folder:** `chapter_12_JavascriptCodingAssignments/fundametals/`

| File | Description |
|------|-------------|
| `Q1_print1to10numbers.js` | Print numbers 1 to 50 using `for` loop |
| `Q2_printevennumber.js` | Print even numbers from 1 to 100 |
| `Q3_printoddnumbers.js` | Print odd numbers from 1 to 100 |
| `Q4_sumofnumbers.js` | Sum of numbers from 1 to 100 |
| `Q5_printmultable17.js` | Multiplication table of 17 |
| `Q6_factorialof8.js` | Factorial of 8 using `while` loop |
| `Q7_reversofnumber.js` | Reverse a given number (987654) |
| `Q8_CountDigits.js` | Count digits of a number (987654321) |
| `Q9_armstongnumber.js` | Check if a number is Armstrong |
| `Q10_palindromnumber.js` | Check if a number is Palindrome |

### Fundamentals — Level 1

| Question | Concept | Description |
|----------|---------|-------------|
| Q1 | `for` loop | Print 1 to 50 |
| Q2 | `for` loop + `%` | Print even numbers 1–100 |
| Q3 | `for` loop + `%` | Print odd numbers 1–100 |
| Q4 | `for` loop + accumulation | Sum 1 to 100 |
| Q5 | `for` loop + template literals | Multiplication table of 17 |
| Q6 | `while` loop | Factorial of 8 |
| Q7 | `while` loop + reverse logic | Reverse a number |
| Q8 | `while` loop | Count digits of a number |
| Q9 | `while` loop + `**` | Armstrong number check |
| Q10 | `while` loop + reverse + compare | Palindrome number check |

### Run Commands

```bash
# Fundamentals
node chapter_12_JavascriptCodingAssignments/fundametals/Q1_print1to10numbers.js
node chapter_12_JavascriptCodingAssignments/fundametals/Q10_palindromnumber.js
```

### Arrays — Level 3

**Folder:** `chapter_12_JavascriptCodingAssignments/Arrays/`

| File | Description |
|------|-------------|
| `1_findSumofAllElementsArray.js` | Find sum of all elements in an array |
| `2_findAvgofAllElementsArray.js` | Find average of all elements in an array |
| `3_countarrayelementwithoutlength.js` | Count array elements without using `.length` property |
| `4_countevennumberinArray.js` | Count even numbers in an array |
| `5_PrintOnlyPositivenumbers.js` | Print only positive numbers from an array |
| `6_PrintOnlyNegativenumbers.js` | Print only negative numbers from an array |
| `7_findsecondAndSecondLast.js` | Find second and second-last element from an array |
| `8_checknumberingivenArray.js` | Check if a number exists in a given array |
| `9_checknumberingivenArraywithincludefun.js` | Check if a number exists using `includes()` method |
| `10_getIndexOfEleWithOutIndexOf.js` | Get index of an element without using `indexOf()` — using `for` loop |
| `11_getIndexOfEleWithOutIndexOfUsingforInloop.js` | Get index of an element without using `indexOf()` — using `for...in` loop |

### Arrays Coding Challenges

| # | Question | Concept | Description |
|---|----------|---------|-------------|
| 1 | Sum of Elements | `for` loop + accumulation | Calculate sum of all array elements |
| 2 | Average of Elements | `for` loop + division | Calculate average of array elements |
| 3 | Count Without `.length` | `for...of` loop | Count elements without using `.length` |
| 4 | Count Even Numbers | `for` loop + `%` | Count even numbers in an array |
| 5 | Print Positive Numbers | `for` loop + condition | Filter and print positive numbers |
| 6 | Print Negative Numbers | `for` loop + condition | Filter and print negative numbers |
| 7 | Second & Second-Last | Index-based access | Find second and second-last elements |
| 8 | Check Number Exists | `for` loop + comparison | Check if a number exists in array |
| 9 | Check with `includes()` | `includes()` method | Check number existence using built-in method |
| 10 | Get Index Without `indexOf()` | `for` loop | Find element index without built-in method |
| 11 | Get Index with `for...in` | `for...in` loop | Find element index using `for...in` loop |

### Run Commands

```bash
# Arrays
node chapter_12_JavascriptCodingAssignments/Arrays/1_findSumofAllElementsArray.js
node chapter_12_JavascriptCodingAssignments/Arrays/11_getIndexOfEleWithOutIndexOfUsingforInloop.js
```

### if-else — Level 2

**Folder:** `chapter_12_JavascriptCodingAssignments/if-else/`

| File | Description |
|------|-------------|
| `largestof3numbers.js` | Find the largest of 3 numbers with equal-value edge cases |
| `smallestof3numbers.js` | Find the smallest of 3 numbers with equal-value edge cases |
| `checkleapyear.js` | Leap year check — divisible by 400 or (by 4 and not by 100) |
| `voteeligibility.js` | Vote eligibility check based on age (with invalid age guard) |
| `electricitybillgenerate.js` | Electricity bill calculator — tiered slab rates (100/200/300+ units) |

---

## Chapter 13: Functions Concept

**Folder:** `chapter_13_functionsconcept/`

| File | Description |
|------|-------------|
| `90_function.js` | Why functions? — without function (repetition) vs with function (reusable `checkResult`) |
| `91_function.js` | Why functions? — repeated sum logic vs reusable `calSum` function |
| `92_function2.js` | Function basics — `sayHello` with parameter, calling vs defining |
| `93_typeoffunction.js` | 4 function types overview — no return/no param, no return/with param, return/no param, return/with param |
| `94_Type1_withnoparam_noreturn.js` | **Type 1:** No parameter, no return value — `greet()`, `displayMessage()` |
| `95_Type1_withnoparam_noreturn_WithRealWorldScenario.js` | **Type 1 — Real-world:** Browser automation steps — open, navigate, click, fill, submit, close |
| `96_Type2_withnoparam_withReturn.js` | **Type 2:** No parameter, with return value — `getCurrentDate()`, `getRandomNumber()`, `getGreetingMessage()` |
| `97_Type3_Withparam_withOutReturn.js` | **Type 3:** With parameter, no return value — `greetUser(name)` — parameter vs argument distinction |
| `98_Type4_withParam_withReturn.js` | **Type 4:** With parameter, with return value — `sum(a,b)`, `multiply(x,y)` |
| `99_Type4_withParam_withReturn_WithRealTimeScenarios.js` | **Type 4 — Real-world:** Rectangle area calculator, tax calculation, final price with tax |
| `100_Templete_literal.js` | Template literals — `` `Hello ${name}` `` syntax for string interpolation |
| `101_function_With_Expression.js` | Function expressions — `const greet2 = function(name) { ... }` |
| `102_function_withArrow.js` | Arrow functions — `const greet3 = (name) => { ... }`, implicit return, single-parameter shorthand |

### Function Types Overview

| Type | Parameters | Return Value | Example | Use Case |
|------|-----------|--------------|---------|----------|
| **Type 1** | ❌ No | ❌ No | `greet()` | Logging, side effects |
| **Type 2** | ❌ No | ✅ Yes | `getCurrentDate()` | Generating values, API calls |
| **Type 3** | ✅ Yes | ❌ No | `greetUser(name)` | Displaying user-specific messages |
| **Type 4** | ✅ Yes | ✅ Yes | `sum(a, b)` | Calculations, data processing |

### Function Definition vs Calling

```javascript
// Definition — parameter (placeholder)
function greetUser(name) {
    console.log("Hello " + name);
}

// Calling — argument (actual value)
greetUser("Alice"); // "Alice" is the argument
```

### Function Declaration Styles

| Style | Syntax | Hoisted? | Use Case |
|-------|--------|----------|----------|
| **Function Declaration** | `function name() {}` | ✅ Yes | Named reusable functions |
| **Function Expression** | `const fn = function() {}` | ❌ No | Callbacks, assignments |
| **Arrow Function** | `const fn = () => {}` | ❌ No | Concise syntax, `this` binding |

### Key Concepts

- **Functions** are reusable blocks of code — define once, call anywhere
- **Parameters** are placeholders in function definition; **arguments** are actual values passed during calling
- **4 function types** based on parameters and return values
- **Template literals** (`` ` ``) enable string interpolation with `${}`
- **Function expressions** store functions in variables
- **Arrow functions** provide concise syntax with implicit return for single expressions

### Run Commands

```bash
node chapter_13_functionsconcept/90_function.js
node chapter_13_functionsconcept/102_function_withArrow.js
```

---

## IQ Notes 🧠

**Folder:** `IQ_Notes/`

| File | Description |
|------|-------------|
| `00_Notes_link.txt` | Links to useful reference notes |
| `01_Identifier_Rules.md` | Complete reference on identifier rules with tables, code walkthrough, and pipeline diagram |
| `02_Keywords.md` | Complete reference on JavaScript reserved keywords with comparison table |
| `03_commands_mac.md` | VS Code keyboard shortcuts for macOS |
| `04_commands_win.md` | VS Code keyboard shortcuts for Windows |
| `05_incrementanddecrement.txt` | Increment (`++`) and decrement (`--`) operator reference — pre/post variants |
| `06_SwitchCaseStatement.txt` | Switch case statement syntax, step-by-step execution, strict comparison behavior |
| `07_functionsNote.txt` | Functions basics — definition vs calling, parameter vs argument |
| `Source_Code_ByteCODE_Binary_IQ.md` | Source code vs Bytecode vs Binary code explained with example |
| `README.md` | Prompt template for generating new IQ note files |
| `Array_Complete_Guide.md` | **NEW!** Complete Arrays master guide — creation, indexing, 20+ methods, real-time examples, Mermaid diagrams |
| `Arrays_Natural_vs_Proper_Sorting.md` | **NEW!** Natural sorting (default) vs proper sorting with `a-b` / `b-a` — comparison table, step-by-step walkthrough, pipeline diagram |

### How to Add New IQ Notes

Copy this prompt and use it with your AI assistant:

> Explain **[YOUR CONCEPT]** in a table view with clear comparison columns. Use a simple code/file example to walk through each layer. Save it as a `.md` file inside the `IQ_Notes` folder. Follow the same visual style as `Source_Code_ByteCODE_Binary_IQ.md` — breakdown table, example walkthrough, pipeline diagram, and TL;DR.

---

## 🎯 Learning Path

```
1. GenAI Basics ────────────► Context & AI fundamentals
        │
2. JavaScript Engine ───────► How JS runs in the browser
        │
3. Variables & Identifiers ──► Naming, scoping, conventions
        │
4. Literals & Data Types ───► Values, null vs undefined, numbers
        │
5. Operators ───────────────► Arithmetic, comparison, logical
        │
6. Statements ──────────────► if/else, nested if, grading
        │
7. Switch Case ─────────────► Switch, fall-through, grouping, IQs
        │
8. HackerRank Challenge ────► if-else & switch coding challenges
        │
9. Loops Concepts ──────────► for, while, do-while, nested loops
        │
10. Arrays Concepts ────────► Creation, methods, iteration, searching
        │
11. JS Coding Assignments ──► Fundamentals (print, sum, factorial, reverse, Armstrong, palindrome), if-else (largest/smallest, leap year, vote, electricity bill) & Arrays (sum, avg, count, positive/negative, index finding)
        │
12. Functions Concept ──────► Function types, parameters, return values, template literals, expressions, arrow functions
        │
13. Playwright 3x ──────────► (Coming next!)
```

---

## 🚀 Getting Started

To run any JavaScript file in this repository:

```bash
# Using Node.js
node chapter_03_Javascript_Concepts_Part2/01_Helloworld.js

# Or using the VS Code Code Runner extension
# Simply click the "Run" button above any .js file
```

### Prerequisites

- [Node.js](https://nodejs.org/) (v14 or higher)
- [VS Code](https://code.visualstudio.com/)
- Recommended extensions: Code Runner, ESLint, Prettier

---

## 📝 License

This project is for educational purposes — free to use and share.

---

## 🙌 Contributing

Feel free to fork this repo, add new chapters, fix issues, or improve the documentation. Pull requests are welcome!

---

*Happy Learning! 🎉 — Shankar Cheerala*