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
| 12 | [JavaScript Coding Assignments](#chapter-12-javascript-coding-assignments) | Fundamentals: print, even/odd, sum, factorial, reverse, count digits, Armstrong, palindrome; if-else: largest/smallest of 3, leap year, vote eligibility, electricity bill; **Arrays (Beginner + Intermediate): sum, average, count, positive/negative, index finding, second largest/smallest, max-min difference, even/odd arrays, first/last occurrence; Arrays (Advanced): reverse, remove duplicates, move zeros, merge, copy without inbuilt** |
| 13 | [Functions Concept](#chapter-13-functions-concept) | Function types, parameters, return values, template literals, function expressions, arrow functions, IIFE, spread operator, hoisting (var/let/const/function), TDZ, scope comparison |
| 14 | [Function Closure](#chapter-14-function-closure) | Scope of functions, closure basics, closure remembers, real-world closure (retry tracker, rate limiter) |
| 15 | [Strings](#chapter-15-strings) | String basics, string methods, searching with `includes()`, `startsWith()`, `endsWith()`, `indexOf()`, `lastIndexOf()`, **substring extraction, case conversion, replace/replaceAll, split/join, string conversion, string cheatsheet** |
| 16 | [Objects](#chapter-16-objects) | Object basics, dot/bracket notation, reference vs value, config objects, methods, nested properties, JSON vs object syntax |
| 17 | [Multi-Dimensions Array](#chapter-17-multi-dimensions-array) | 2D arrays, nested iteration, matrix operations, pattern building (right-angle, left-angle, pyramid) |
| 18 | [Callback Concept](#chapter-18-callback-concept) | Sync/Async callbacks, forEach, callback hell, pyramid of DOM, real-world E2E flow |
| 19 | [Promise Concept](#chapter-19-promise-concept) | Promise creation, .then/.catch/.finally, Promise.all, allSettled, race, real-world API scenarios, interview questions |
| 20 | [Async and Await](#chapter-20-async-and-await) | async/await syntax, Playwright example, error handling, sequential and parallel execution, retry patterns, interview questions, deep-dive notes |
| 21 | [Debug](#chapter-21-debug) | JavaScript execution context, call stack, hoisting in action with browser debugging |
| 22 | [100 Day Challenge](#chapter-22-100-day-challenge-of-javascript) | Execution context, scope, data types, operators, conditionals, loops, arrays, strings, objects, classes, **inheritance, polymorphism, encapsulation** for automation testing |
| 23 | [Testing Academy JavaScript Programming Test](#chapter-23-testing-academy-javascript-programming-test) | Even/odd, largest of three, string reversal, palindrome, factorial, Fibonacci, prime numbers, vowels, array maximum, duplicate removal |
| 24 | [Import and Export](#chapter-24-import-and-export) | ES modules, named/default exports, import aliases, reusable utilities, and logging modules |
| 25 | [Classes, Objects, and OOP](#chapter-25-classes-objects-and-oop) | Classes, constructors, public/private fields, static members, methods, and automation examples |
| 26 | [Encapsulation](#chapter-26-encapsulation) | Private fields, getter/setter methods, validation, and object state protection |
| 27 | [Inheritance](#chapter-27-inheritance) | Single, multilevel, hierarchical inheritance, method overriding, runtime polymorphism, mixin pattern |
| 28 | [Polymorphism](#chapter-28-polymorphism) | Method overriding, runtime polymorphism, BaseTest vs APITest |
| 29 | [OOPS Interview](#chapter-29-oops-interview) | TypeScript utility functions, type annotations, HTTP status code filtering |
| 🧠 | [IQ Notes](#iq-notes) | Interview questions, keywords, shortcuts, increment/decrement, switch case, source code vs bytecode, **complete arrays master guide**, **functions notes**, **hoisting guide (var/let/const)**, **object master class**, **overall master notes**, **JavaScript execution context & call stack notes**, **async/await deep dive notes** |
| 🗺️ | [RoadMap](#roadmap) | Playwright learning roadmap PDF |

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

### varletconst — Scope & Hoisting Practice

**Folder:** `chapter_12_JavascriptCodingAssignments/varletconst/`

| File | Description |
|------|-------------|
| `test1.js` | `let` vs `var` scope demonstration — `let` inside block scope vs function scope with `var` |

### Run Commands

```bash
# Fundamentals
node chapter_12_JavascriptCodingAssignments/fundametals/Q1_print1to10numbers.js
node chapter_12_JavascriptCodingAssignments/fundametals/Q10_palindromnumber.js

# varletconst
node chapter_12_JavascriptCodingAssignments/varletconst/test1.js
```

### Arrays — Beginner

**Folder:** `chapter_12_JavascriptCodingAssignments/Arrays/01_begineer/`

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

### Arrays — Intermediate

**Folder:** `chapter_12_JavascriptCodingAssignments/Arrays/02_Intermediate/`

| File | Description |
|------|-------------|
| `1_SecondLargest_WithoutSort.js` | Find the second largest number without using `sort()` — single-pass tracking |
| `2_SecondSmallest_WithoutSort.js` | Find the second smallest number without using `sort()` — single-pass tracking |
| `3_Diff_Max_Vs_Min_Array.js` | Difference between the maximum and minimum element in an array |
| `4_Array_Containing_only_even.js` | Build a new array containing only even numbers |
| `5_Array_Containing_only_Odd.js` | Build a new array containing only odd numbers |
| `6_Separate_posi_Nega.js` | Separate positive and negative numbers into two arrays |
| `7_find_All_elements_greater_given.js` | Find all elements greater than a given threshold value |
| `8_Count_Of_givenNumber.js` | Count how many times a given number appears in an array |
| `9_first_Occurance_Index.js` | Find the first occurrence index of a number without using `indexOf()` — `break` on first match |
| `10_last_Occurance_Index.js` | Find the last occurrence index of a number without using `lastIndexOf()` — keep updating on each match |

### Arrays Coding Challenges

| # | Question | Concept | Description |
|---|----------|---------|-------------|
| **Beginner** | | | |
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
| **Intermediate** | | | |
| 1 | Second Largest | Two-variable tracking | Second largest number without `sort()` |
| 2 | Second Smallest | Two-variable tracking | Second smallest number without `sort()` |
| 3 | Max − Min Difference | Track max & min | Difference between largest and smallest elements |
| 4 | Only Even Array | `for` loop + `push()` | Filter even numbers into a new array |
| 5 | Only Odd Array | `for` loop + `push()` | Filter odd numbers into a new array |
| 6 | Separate Pos/Neg | Two arrays + `push()` | Split numbers into positive and negative arrays |
| 7 | Greater Than Threshold | `for` loop + `push()` | Collect elements above a given value |
| 8 | Count Occurrences | `for` loop + counter | Count how many times a number appears |
| 9 | First Occurrence | `for` loop + `break` | First index of a number without `indexOf()` |
| 10 | Last Occurrence | `for` loop + overwrite | Last index of a number without `lastIndexOf()` |
| **Advanced** | | | |
| 1 | Reverse Array | Two-pointer swapping | Reverse an array in-place without built-in methods |
| 2 | Remove Duplicates | Manual tracking | Remove duplicate elements without using `Set` |
| 3 | Move Zeros to End | Shift + fill | Move all zeros to the end while preserving element order |
| 4 | Move Zeros to Front | Reverse traversal + fill | Move all zeros to the front while preserving element order |
| 5 | Merge Two Arrays | `for` loop + `push()` | Merge two arrays without using spread or `concat()` |
| 6 | Copy Array Without Spread/Inbuilt | Manual `for` loop | Copy an array without spread operator or built-in methods |
| 7 | Swap First & Last Elements | Temp variable swap | Swap the first and last elements of an array |
| 8 | Rotate Left by One | Variable shift | Rotate array elements by one position to the left |
| 9 | Rotate Right by One | `for...in` loop | Rotate array elements by one position to the right |
| 10 | Rotate by K Positions | Modular normalization | Rotate array elements by K positions (cyclic rotation) |

### Arrays — Advanced

**Folder:** `chapter_12_JavascriptCodingAssignments/Arrays/03_advanced/`

| File | Description |
|------|-------------|
| `ReverseArray.js` | Reverse an array in-place using two-pointer swapping technique |
| `RemoveDuplicateElements.js` | Remove duplicate elements from an array without using `Set` |
| `MovingAllZerosAttheEnd.js` | Move all zeros to the end of the array while preserving relative order |
| `MovingAllZerosAttheFront.js` | Move all zeros to the front of the array while preserving relative order |
| `MergingArrays.js` | Merge two arrays without using spread operator or `concat()` |
| `ArrayCopyWithoutSpreadandInbuilt.js` | Copy an array without using spread operator or built-in copy methods |
| `SwappingfirstandLastelements.js` | Swap the first and last elements of the array using a temporary variable |
| `RotateArrayElementsbyoneleft.js` | Rotate array elements by one position to the left using variable shift |
| `RotateArrayElementsbyoneright.js` | Rotate array elements by one position to the right using `for...in` loop |
| `RotateArrayElementsbykpositions.js` | Rotate array elements by K positions using modular normalization |

### Run Commands

```bash
# Arrays — Beginner
node chapter_12_JavascriptCodingAssignments/Arrays/01_begineer/1_findSumofAllElementsArray.js
node chapter_12_JavascriptCodingAssignments/Arrays/01_begineer/11_getIndexOfEleWithOutIndexOfUsingforInloop.js

# Arrays — Intermediate
node chapter_12_JavascriptCodingAssignments/Arrays/02_Intermediate/1_SecondLargest_WithoutSort.js
node chapter_12_JavascriptCodingAssignments/Arrays/02_Intermediate/10_last_Occurance_Index.js

# Arrays — Advanced
node chapter_12_JavascriptCodingAssignments/Arrays/03_advanced/ReverseArray.js
node chapter_12_JavascriptCodingAssignments/Arrays/03_advanced/RemoveDuplicateElements.js
node chapter_12_JavascriptCodingAssignments/Arrays/03_advanced/MovingAllZerosAttheEnd.js
node chapter_12_JavascriptCodingAssignments/Arrays/03_advanced/MovingAllZerosAttheFront.js
node chapter_12_JavascriptCodingAssignments/Arrays/03_advanced/MergingArrays.js
node chapter_12_JavascriptCodingAssignments/Arrays/03_advanced/ArrayCopyWithoutSpreadandInbuilt.js
node chapter_12_JavascriptCodingAssignments/Arrays/03_advanced/SwappingfirstandLastelements.js
node chapter_12_JavascriptCodingAssignments/Arrays/03_advanced/RotateArrayElementsbyoneleft.js
node chapter_12_JavascriptCodingAssignments/Arrays/03_advanced/RotateArrayElementsbyoneright.js
node chapter_12_JavascriptCodingAssignments/Arrays/03_advanced/RotateArrayElementsbykpositions.js
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

### Strings — Coding Assignments

**Folder:** `chapter_12_JavascriptCodingAssignments/Strings/`

| File | Description |
|------|-------------|
| `palindromprogram.js` | Check if a string is a palindrome — reverse string using `charAt()` and compare with original |
| `stringreverse.js` | Reverse a string — iterate from last index to first using `charAt()` and build reversed string |

| # | Question | Concept | Description |
|---|----------|---------|-------------|
| 1 | String Reverse | `for` loop + `charAt()` | Reverse a string by iterating backward |
| 2 | Palindrome Check | Reverse + compare | Check if string reads same forward and backward |

### Run Commands

```bash
# Strings
node chapter_12_JavascriptCodingAssignments/Strings/stringreverse.js
node chapter_12_JavascriptCodingAssignments/Strings/palindromprogram.js
```

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
| `102_function_withArrow.js` | ~~Deleted~~ — replaced by `102_Arrow_fn_Real.js`, `102_IIFE_fun.js`, `103_function_withArrow_Part2.js`, `104_function_withArrow.js` |
| `102_Arrow_fn_Real.js` | **NEW!** Arrow function with real-world scenario — HTTP status code validation (normal function, function expression, arrow function) |
| `102_IIFE_fun.js` | **NEW!** IIFE (Immediately Invoked Function Expression) — anonymous, arrow, and named function patterns |
| `103_function_withArrow_Part2.js` | **NEW!** Arrow functions — converting normal functions to arrow, implicit return, single-parameter shorthand |
| `104_function_withArrow.js` | **NEW!** Function expression with arrow functions — implicit return, single parameter shorthand |
| `104_Return_function.js` | **NEW!** Return function — HTTP status code classification with return values, `undefined` when no return |
| `105_spreadfunction.js` | **NEW!** Spread function — spread operator with functions, rest parameters, `some()` method |
| `106_Hostingconcept.js` | **NEW!** Hoisting concept — `var` hoisting with `undefined` initialization, mental model explanation |
| `107_Var_Hoisting.js` | **NEW!** Var hoisting — greeting variable hoisting example |
| `108_let_hoisting.js` | **NEW!** Let hoisting — `ReferenceError` due to Temporal Dead Zone (TDZ) |
| `109_function_Hoisting.js` | **NEW!** Function hoisting — `var` inside function scope with hoisting |
| `110_let.js` | **NEW!** Let and TDZ — Temporal Dead Zone with block scope |
| `111_IQ.js` | **NEW!** IQ: `var` function scope vs `let` block scope — redeclaration behavior |
| `112_var_let_const.js` | **NEW!** `var` vs `let` vs `const` — scope, redeclaration, hoisting comparison |
| `113_TDZ.js` | **NEW!** Temporal Dead Zone — accessing `let a` before declaration throws `ReferenceError` |
| `114_IQ.js` | **NEW!** IQ: Function hoisting — calling `greet()` before declaration with `function` declaration works |

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
| **IIFE** | `(function() {})()` | ❌ No | Immediate execution, isolation |

### Hoisting Behavior

| Declaration Type | Hoisted? | Initial Value | Accessible Before Declaration? |
|-----------------|----------|---------------|-------------------------------|
| `var` | ✅ Yes | `undefined` | ✅ Yes (returns `undefined`) |
| `let` | ✅ Yes | ❌ Uninitialized (TDZ) | ❌ No (`ReferenceError`) |
| `const` | ✅ Yes | ❌ Uninitialized (TDZ) | ❌ No (`ReferenceError`) |
| `function` | ✅ Yes | Function body | ✅ Yes |
| `class` | ✅ Yes | ❌ Uninitialized (TDZ) | ❌ No (`ReferenceError`) |

### Key Concepts

- **Functions** are reusable blocks of code — define once, call anywhere
- **Parameters** are placeholders in function definition; **arguments** are actual values passed during calling
- **4 function types** based on parameters and return values
- **Template literals** (`` ` ``) enable string interpolation with `${}`
- **Function expressions** store functions in variables
- **Arrow functions** provide concise syntax with implicit return for single expressions
- **IIFE** (Immediately Invoked Function Expression) — executes as soon as defined, useful for isolation
- **Spread operator** (`...`) — expands arrays into individual arguments in function calls
- **Rest parameters** (`...codes`) — collects multiple arguments into an array
- **Hoisting** — declarations moved to top of scope during compilation; `var` initialized with `undefined`, `let`/`const` in TDZ

### Run Commands

```bash
node chapter_13_functionsconcept/90_function.js
node chapter_13_functionsconcept/102_Arrow_fn_Real.js
node chapter_13_functionsconcept/102_IIFE_fun.js
node chapter_13_functionsconcept/103_function_withArrow_Part2.js
node chapter_13_functionsconcept/104_function_withArrow.js
node chapter_13_functionsconcept/104_Return_function.js
node chapter_13_functionsconcept/105_spreadfunction.js
node chapter_13_functionsconcept/106_Hostingconcept.js
node chapter_13_functionsconcept/107_Var_Hoisting.js
node chapter_13_functionsconcept/108_let_hoisting.js
node chapter_13_functionsconcept/109_function_Hoisting.js
node chapter_13_functionsconcept/110_let.js
node chapter_13_functionsconcept/111_IQ.js
node chapter_13_functionsconcept/112_var_let_const.js
node chapter_13_functionsconcept/113_TDZ.js
node chapter_13_functionsconcept/114_IQ.js
```

---

## Chapter 14: Function Closure

**Folder:** `chapter_14_function_closure/`

| File | Description |
|------|-------------|
| `115_Scope_of_Functions.js` | **Scope in Functions** — global vs local scope, nested function scope (inner can access outer, but not vice versa) |
| `116_Closure.js` | **Closure Basics** — inner function `installBrowser` closing over `name` from outer `startBrowser`, returned and called later |
| `117_Closure_Remembers.js` | **Closure Remembers** — `makeCounter` with `increment()`, `decrement()`, `get()` methods — closure preserves `count` across calls |
| `118_function_Closure_Real.js` | **Real-world Closure** — `maxRetryTracker(max)` — retry tracker for test cases using closure to persist `attempts` count |
| `119_function_simple.js` | **Rate Limiter** — `makeRateLimiter(limit)` — closure-based rate limiter tracking call count |
| `120_function_Closure.js` | **Basic Closure Example** — inner function remembers outer variable even after outer function finishes |
| `121_function_closure_withChocolateBox.js` | **Chocolate Box Closure** — closure preserving the remaining chocolates count across calls |
| `122_function_closure_withMoneySaving.js` | **Piggy Bank Closure** — closure preserving the saved money amount across repeated calls |
| `123_function_closure_Game.js` | **Game Score Closure** — closure preserving the score in a simple game example |

### Key Concepts

| Concept | Description | Example |
|---------|-------------|---------|
| **Function Scope** | Variables declared inside a function are local to that function; inner functions can access outer variables | `inner()` accessing `x` from `outer()` |
| **Closure** | A function that "remembers" its lexical scope even when executed outside that scope | `installBrowser` returned from `startBrowser` still accesses `name` |
| **Closure for State** | Closure preserves variable state between function calls | `counter.get()` returns updated `count` after each `increment()` |
| **Real-world: Retry Tracker** | Track retry attempts for test cases using closure | `runTCRetry("Login")` increments attempts each call |
| **Real-world: Rate Limiter** | Limit how many times an operation can be called | `limiter()` returns `false` after 3 calls |

### Closure Execution Flow

```
makeCounter(0) called
      │
      ▼
count = 0  (local variable in closure)
      │
      ▼
Returns { increment, decrement, get }
      │
      ▼
counter.increment()  ──► count becomes 1
counter.increment()  ──► count becomes 2
counter.increment()  ──► count becomes 3
counter.get()        ──► returns 3
counter.decrement()  ──► count becomes 2
```

### Run Commands

```bash
node chapter_14_function_closure/115_Scope_of_Functions.js
node chapter_14_function_closure/116_Closure.js
node chapter_14_function_closure/117_Closure_Remembers.js
node chapter_14_function_closure/118_function_Closure_Real.js
node chapter_14_function_closure/119_function_simple.js
node chapter_14_function_closure/120_function_Closure.js
node chapter_14_function_closure/121_function_closure_withChocolateBox.js
node chapter_14_function_closure/122_function_closure_withMoneySaving.js
node chapter_14_function_closure/123_function_closure_Game.js
```

---

## Chapter 15: Strings

**Folder:** `chapter_15_Strings/`

| File | Description |
|------|-------------|
| `124_String.js` | String basics — declaration, concatenation, and common string usage |
| `125_String_function.js` | String methods — case conversion, trimming, slicing, and replacements |
| `126_String_searching.js` | String searching — `includes()`, `startsWith()`, `endsWith()`, `indexOf()`, `lastIndexOf()` |
| `127_substring_extract.js` | **NEW!** Substring extraction — `slice()` (supports negative indexes), `substring()` (no negative), `at()` for positive/negative indexing |
| `128_string_more.js` | **NEW!** More string methods — `toUpperCase()`, `toLowerCase()`, `trim()`, `trimStart()`, `trimEnd()`, `replace()`, `replaceAll()`, `replace()` with regex `/g`, string concatenation methods |
| `129_string_extra.js` | **NEW!** Extra string operations — `replace()` with regex global flag, `split()` by comma/character, `join()` with custom separator, template literal formatting |
| `130_Stringconversion.js` | **NEW!** String conversions — `toString()`, `Number()`, `parseInt()`, string immutability demonstration |
| `javascript_stringcheatsheet.md` | **NEW!** JavaScript String Methods Cheat Sheet — quick reference table for all common string methods (search, extract, transform, split/join, padding, repeat) with one-liner examples |

### Key Concepts

- Strings are immutable in JavaScript, so methods return a new string rather than modifying the original
- Searching methods help validate URLs, filter text, and inspect content quickly
- String methods are commonly used in automation and real-world web testing scenarios
- `slice()` supports negative indexing (counts from end); `substring()` treats negatives as `0`
- `replace()` replaces first match; `replaceAll()` or regex with `/g` flag replaces all matches
- `split()` converts string → array; `join()` converts array → string
- `parseInt()` extracts integers from strings with trailing characters (e.g., `"42px"` → `42`)

### Run Commands

```bash
node chapter_15_Strings/124_String.js
node chapter_15_Strings/125_String_function.js
node chapter_15_Strings/126_String_searching.js
node chapter_15_Strings/127_substring_extract.js
node chapter_15_Strings/128_string_more.js
node chapter_15_Strings/129_string_extra.js
node chapter_15_Strings/130_Stringconversion.js
```

---

## Chapter 16: Objects

**Folder:** `chapter_16_Objects/`

| File | Description |
|------|-------------|
| `131_Objects.js` | Object basics — dot vs bracket notation, case-sensitive keys, reference copying (`let b = a3`), JSON vs object notation |
| `132_Object_Person.js` | **Comprehensive user object** — strings, numbers, booleans, null, undefined, nested objects (address → coordinates), arrays (hobbies), array of objects (skills, education, workExperience), methods (regular + arrow), nested methods, `const` mutation demonstration |
| `133_callref_callbyValue.js` | **Call by Value vs Call by Reference** — primitives copied by value (independent), objects copied by reference (shared mutation) |
| `134_config.js` | Empty config object — adding, updating, and deleting properties dynamically |
| `135_Objectexample.js` | Object vs JSON syntax — dot/bracket access, key quoting differences |
| `136_Object.js` | Object with method — `getName()` using `this.name` |
| `137_Object2.js` | Object creation, property access (dot + bracket), adding/modifying properties |
| `138_ObjectExample2.js` | Product object — properties (name, id, batch, yearOfMake) and `getProduct()` method with template literal |
| `139_Object_config.js` | Config object pattern — dynamic property addition, update, and deletion |

### Key Concepts

| Concept | Description | Example |
|---------|-------------|---------|
| **Dot Notation** | Access property with `.` — key must be valid identifier | `user.name` |
| **Bracket Notation** | Access property with `[]` — supports dynamic keys and special chars | `user["full name"]` |
| **Reference Copying** | Objects are assigned by reference, not by value | `let b = a; b.x = 1` affects `a.x` |
| **Call by Value** | Primitives are copied independently | `let b = a; b = 5` does NOT affect `a` |
| **Call by Reference** | Objects share the same memory reference | `let obj2 = obj1; obj2.val = 99` changes `obj1.val` |
| **Methods** | Functions inside objects, accessed with `()` | `user.getName()` |
| **`const` with Objects** | `const` prevents reassignment, NOT mutation | Can change properties, cannot reassign variable |
| **JSON vs Object** | JSON keys must be in double quotes; JS object keys don't need quotes | `{"name":"x"}` vs `{name:"x"}` |

### Run Commands

```bash
node chapter_16_Objects/131_Objects.js
node chapter_16_Objects/132_Object_Person.js
node chapter_16_Objects/133_callref_callbyValue.js
node chapter_16_Objects/135_Objectexample.js
node chapter_16_Objects/136_Object.js
node chapter_16_Objects/137_Object2.js
node chapter_16_Objects/138_ObjectExample2.js
node chapter_16_Objects/139_Object_config.js
```

---

## Chapter 18: Callback Concept

**Folder:** `chapter_18_CallbackConcept/`

| File | Description |
|------|-------------|
| `146_callback.js` | **Callback basics** — `placeOrder` with 3 invocation styles: named function, anonymous function, arrow function |
| `147_callback.js` | **Callback patterns** — `test` function with named, anonymous, and arrow callback styles |
| `148_callbacktest.js` | **Garima's story** — callback with arrow function, Playwright-style test syntax |
| `149_Sync_Callback.js` | **Synchronous callback** — `forEach` with test results array (PASS/FAIL) |
| `150_foreach.js` | **forEach with callback** — iterating fruits array with anonymous function |
| `151_forEach_1.js` | **forEach with names** — iterating names array with arrow and anonymous functions |
| `152_forEach_PrintNumbers.js` | **forEach with numbers** — printing numbers with index using anonymous function |
| `153_Async_callback.js` | **Asynchronous callback** — `setTimeout` simulating API response delay (5s) |
| `154_CallbackHell.js` | **Callback Hell — E2E Login Flow** — nested callbacks for browser → login → credentials → click (real QA scenario: app.vwo.com) |
| `155_Callback_RealHell.js` | **Real-world Callback Hell** — deeply nested `loginUser → getUserProfile → getUserOrders → getOrderDetails` pyramid |
| `156_Call_Return.js` | **Callback with return** — `calculate(a,b,operation)` returning result from callback |
| `157_Pyramid_DOM.js` | **Pyramid of DOM** — nested step1→step2→step3→step4 callbacks forming a pyramid structure |

### Key Concepts

| Concept | Description | Example |
|---------|-------------|---------|
| **Callback** | A function passed as an argument to another function | `placeOrder("Burger", print)` |
| **Named Callback** | Pre-defined function passed by reference | `placeOrder("Burger", print)` |
| **Anonymous Callback** | Inline function without a name | `placeOrder("Burger", function(){...})` |
| **Arrow Callback** | Concise arrow function syntax | `placeOrder("Burger", () => {...})` |
| **Synchronous Callback** | Executes immediately within the outer function | `forEach`, `calculate` |
| **Asynchronous Callback** | Executes later (e.g., after `setTimeout`) | `setTimeout(() => {...}, 5000)` |
| **Callback Hell** | Deeply nested callbacks forming a pyramid structure | E2E login flow with 5+ nested levels |
| **Pyramid of DOM** | Callback nesting that grows rightward and downward | `step1(→ step2(→ step3(→ step4(...))))` |

### Callback Hell vs Clean Code

```
Callback Hell (Nested)                    Clean Code (Flat)
─────────────────────                     ─────────────────
loginUser(                                function handleLogin() {
  → getUserProfile(                         loginUser(email, pwd, handleLogin);
    → getUserOrders(                      }
      → getOrderDetails(                  function handleProfile(profile) {
        → ...                               getUserOrders(user.id, handleOrders);
      }                                   }
    })                                    ...
  })
```

### Run Commands

```bash
node chapter_18_CallbackConcept/146_callback.js
node chapter_18_CallbackConcept/147_callback.js
node chapter_18_CallbackConcept/148_callbacktest.js
node chapter_18_CallbackConcept/149_Sync_Callback.js
node chapter_18_CallbackConcept/150_foreach.js
node chapter_18_CallbackConcept/151_forEach_1.js
node chapter_18_CallbackConcept/152_forEach_PrintNumbers.js
node chapter_18_CallbackConcept/153_Async_callback.js
node chapter_18_CallbackConcept/154_CallbackHell.js
node chapter_18_CallbackConcept/155_Callback_RealHell.js
node chapter_18_CallbackConcept/156_Call_Return.js
node chapter_18_CallbackConcept/157_Pyramid_DOM.js
```

---

## Chapter 19: Promise Concept

**Folder:** `chapter_19_promiseconcept/`

| File | Description |
|------|-------------|
| `158_Promise.js` | **Promise basics** — `new Promise()` with `resolve`/`reject`, food order example |
| `159_REAL_Promise_API.js` | **Real Promise API** — API call resolving with `{status, body}`, `.then()` consumption |
| `160_REAL_Promise_API.js` | **Promise rejection** — API call rejecting with `"500 Internal server error"`, `.catch()` handling |
| `161_Promise_Finally.js` | **Promise finally** — `.finally()` always executes regardless of resolve or reject |
| `162_Promise_REAL.js` | **Real-world promise chain** — E2E browser login flow: openBrowser → goToLogin → enterCredentials → clickLogin |
| `163_Promise_All.js` | **Promise.all** — parallel auth/DB/cache checks, fails fast on first rejection |
| `164_Promise_Settle.js` | **Promise.allSettled** — test report pattern: get results for ALL tests, not just first failure |
| `165_Promise_race.js` | **Promise.race** — fast server (100ms) vs slow server (500ms), returns first settled |
| `166_Promise_IQ.js` | **Promise IQ** — resolve/reject basics, chaining with `return val * 10`, `Promise.resolve()`/`Promise.reject()` shortcuts |
| `167_Promise_IQ2.js` | **Promise IQ 2** — `Promise.all` with PASS/FAIL tests, `Promise.allSettled` with API status codes |

### Key Concepts

| Concept | Description | Example |
|---------|-------------|---------|
| **Promise** | Object representing eventual completion/failure of async operation | `new Promise((resolve, reject) => {...})` |
| **Pending** | Initial state — neither fulfilled nor rejected | `console.log(order)` shows `Promise { <pending> }` |
| **Resolved / Fulfilled** | Operation completed successfully | `resolve({status: 200, body: "User Data"})` |
| **Rejected** | Operation failed | `reject("500 Internal server error")` |
| **`.then()`** | Handles resolved value | `apiCall.then(data => {...})` |
| **`.catch()`** | Handles rejection/error | `apiCall.catch(error => {...})` |
| **`.finally()`** | Always executes (cleanup) | `.finally(() => console.log("Done"))` |
| **Promise.all()** | Waits for ALL promises — fails fast if any rejects | `Promise.all([auth, db, cache])` |
| **Promise.allSettled()** | Waits for ALL — returns results regardless of reject | `Promise.allSettled([...])` — test report pattern |
| **Promise.race()** | Returns the first settled promise (resolve or reject) | `Promise.race([fastServer, slowServer])` |
| **Promise Chaining** | Sequential async operations via `.then()` return | `openBrowser().then(() => goToLogin()).then(...)` |

### Promise Combinators

| Method | Behavior | Use Case |
|--------|----------|----------|
| `Promise.all()` | Fails fast — rejects if ANY promise rejects | All checks must pass |
| `Promise.allSettled()` | Waits for all — returns `{status, value/reason}` for each | Test reports, batch results |
| `Promise.race()` | Returns first settled promise (resolve or reject) | Timeout race, fastest server |

### Run Commands

```bash
node chapter_19_promiseconcept/158_Promise.js
node chapter_19_promiseconcept/159_REAL_Promise_API.js
node chapter_19_promiseconcept/160_REAL_Promise_API.js
node chapter_19_promiseconcept/161_Promise_Finally.js
node chapter_19_promiseconcept/162_Promise_REAL.js
node chapter_19_promiseconcept/163_Promise_All.js
node chapter_19_promiseconcept/164_Promise_Settle.js
node chapter_19_promiseconcept/165_Promise_race.js
node chapter_19_promiseconcept/166_Promise_IQ.js
node chapter_19_promiseconcept/167_Promise_IQ2.js
```

---

## Chapter 20: Async and Await

**Folder:** `chapter_20_asyncandAwait/`

| File | Description |
|------|-------------|
| `168_async.js` | **async/await basics** — `getToken` → `getUser` chaining, `.then()` vs `async/await` comparison |
| `169_BetterWay.js` | **Better Way — async/await** — E2E login flow with `async function` + `await`, cleaner than promise chaining |
| `170_Asyncawait.js` | Demonstrates that async functions return Promises and how `await` reads resolved values |
| `171_RealExampleAsync.js` | Playwright test using `await` for page navigation, title assertion, and an asynchronous helper |
| `171_trycatch.js` | Error handling with `try`, `catch`, and `finally` around a rejected Promise |
| `172_seqExecution.js` | Sequential API-call simulation for dependent operations, including elapsed-time measurement |
| `173_ParallelExecution.js` | Parallel API-call simulation with `Promise.all()` and elapsed-time comparison |
| `174_APIFlacky.js` | Real-world QA retry pattern for flaky asynchronous API operations |
| `175_IQ.js` | Async/await interview examples, including event-loop output ordering across an `await` boundary |
| `AsynAndAwaitNotes.txt` | **Deep Dive Notes** — comprehensive async/await guide: why async programming, `async` always returns Promise, `await` waits for Promise, async required before await, real-time browser automation example, Playwright test pattern, common mistakes (missing async, missing await), function declaration styles, summary table |
| `recapofAsyncandawait.txt` | Placeholder for a concise async/await recap |

### Key Concepts

| Concept | Description | Example |
|---------|-------------|---------|
| **`async` function** | Declares a function that returns a Promise | `async function run() { ... }` |
| **`await`** | Pauses execution until the Promise settles | `let token = await getToken()` |
| **Promise Chaining vs async/await** | async/await is cleaner, more readable, avoids `.then()` nesting | See `169_BetterWay.js` |
| **Error Handling** | Use `try/catch/finally` with awaited operations | See `171_trycatch.js` |
| **Sequential vs Parallel** | Await dependent tasks in order; use `Promise.all()` for independent tasks | See `172_seqExecution.js` and `173_ParallelExecution.js` |
| **Retry Pattern** | Retry transient failures up to a defined limit | See `174_APIFlacky.js` |

### Promise Chaining vs async/await

```javascript
// Promise Chaining (.then())
openBrowser()
    .then(msg1 => { console.log(msg1); return goToLogin(); })
    .then(msg2 => { console.log(msg2); return enterCredentials(); })
    .then(msg3 => { console.log(msg3); return clickLogin(); })
    .then(msg4 => { console.log(msg4); });

// async/await (Cleaner)
async function runLoginFlow() {
    let msg1 = await openBrowser();
    console.log("Step 1: ", msg1);
    let msg2 = await goToLogin();
    console.log("Step 2: ", msg2);
    let msg3 = await enterCredentials();
    console.log("Step 3: ", msg3);
    let msg4 = await clickLogin();
    console.log("Step 4: ", msg4);
}
runLoginFlow();
```

### Run Commands

```bash
node chapter_20_asyncandAwait/168_async.js
node chapter_20_asyncandAwait/169_BetterWay.js
node chapter_20_asyncandAwait/170_Asyncawait.js
node chapter_20_asyncandAwait/171_trycatch.js
node chapter_20_asyncandAwait/172_seqExecution.js
node chapter_20_asyncandAwait/173_ParallelExecution.js
node chapter_20_asyncandAwait/174_APIFlacky.js
node chapter_20_asyncandAwait/175_IQ.js

# Requires @playwright/test and must be run with the Playwright test runner
npx playwright test chapter_20_asyncandAwait/171_RealExampleAsync.js
```

---

## Chapter 21: Debug

**Folder:** `chapter_21_Debug/`

| File | Description |
|------|-------------|
| `index.html` | HTML page with embedded `<script src="index.js">` — browser debugging setup |
| `index.js` | JavaScript execution context demo — `var x = 1`, function `a()` (x=10), function `b()` (x=100), logs `x` at global scope |
| `index1.js` | Hoisting demo — `var x = 7`, function `getName()` logs "Namaste JavaScript", calling `getName()` before and after declaration |

### Key Concepts

| Concept | Description | File |
|---------|-------------|------|
| **Execution Context** | Global Execution Context (GEC) created first, then new EC for each function call | `index.js` |
| **Call Stack** | Functions pushed onto call stack: `a()` → `b()` → pop, each with its own `x` | `index.js` |
| **Hoisting in Action** | `var x` hoisted with `undefined`, function `getName()` hoisted with full body | `index1.js` |

### Execution Flow (index.js)

```
Global Execution Context created
  │
  ├── Memory Phase: x = undefined, a = fn, b = fn
  │
  ├── Execution Phase:
  │     ├── x = 1
  │     ├── a() called → New EC for a() → x = 10 → console.log(10) → pop
  │     ├── b() called → New EC for b() → x = 100 → console.log(100) → pop
  │     └── console.log(x) → 1 (global x)
```

### Run Commands

```bash
# Open index.html in browser and check Console (F12)
# Or run with Node:
node chapter_21_Debug/index.js
node chapter_21_Debug/index1.js
```

---

## Chapter 22: 100 Day Challenge of JavaScript

**Folder:** `chapter_22_100DayChallengeofJavaScript/`

| File | Description |
|------|-------------|
| `Day1.md` | **Day 1 — JavaScript Execution Context & Call Stack** — Everything in JS happens inside Execution Context (Memory Component + Code Component), synchronous single-threaded language, step-by-step walkthrough of `square()` function execution, Call Stack LIFO mechanics |
| `Day2.md` | **Day 2 — Scope, Scope Chain, Lexical Environment & Variable Shadowing** — Scope decides where variables are accessible, lexical environment defined, scope chain mechanism, variable shadowing explained with real-world Playwright/QA automation examples |
| `Day3.md` | **Day 3 — JavaScript Data Types in Automation Testing** — Primitive and non-primitive types, `typeof`, strict comparisons, type conversion, the `typeof null` behavior, and array detection with `Array.isArray()` |
| `Day4.md` | **Day 4 — JavaScript Operators in Automation Testing** — Arithmetic, assignment, comparison, logical, and ternary operators with QA examples for API validation, credentials, browser support, and page performance |
| `Day5.md` | **Day 5 — Conditional Statements** — Decision-making with `if`, `if...else`, `else if`, nested conditions, `switch`, and automation-focused validation examples |
| `Day6.md` | **Day 6 — JavaScript Loops** — `for`, `while`, `do...while`, `for...of`, `for...in`, `break`, `continue`, nested loops, retries, and Playwright link validation |
| `Day7.md` | **Day 7 — JavaScript Arrays** — Array creation and indexing, common mutation methods, loops, arrays of objects, data-driven Playwright tests, and practical validation examples |
| `Day8.md` | **Day 8 — JavaScript Strings** — String creation, template literals, indexing, immutability, case conversion, trimming, searching, slicing, splitting, replacing, combining, and Playwright text validation |
| `Day9.md` | **Day 9 — JavaScript Objects** — Key-value pairs, property access, nested objects, arrays of objects, methods, `this`, object iteration, reference behavior, and automation test data |
| `Day10.md` | **Day 10 — JavaScript Classes & Constructors** — How classes act as blueprints for reusable test objects, how `new` creates instances, and how constructors initialize object state for scalable automation frameworks |
| `Day11.md` | **Day 11 — Inheritance** — Avoiding code duplication in test automation frameworks by sharing common setup/teardown methods through inheritance |
| `Day12.md` | **Day 12 — Polymorphism** — Same method name producing different behaviors depending on the object type (e.g., `browser.launch()` for Chrome/Firefox/Edge) |
| `Day13.md` | **Day 13 — Encapsulation** — Protecting data from accidental modification to build reliable automation frameworks |

### Key Concepts

| Concept | Description |
|---------|-------------|
| **Execution Context** | Container with Memory (Variable Environment) and Code (Thread of Execution) components |
| **Call Stack** | LIFO stack managing execution contexts — GEC at bottom, function ECs pushed/popped |
| **Scope** | Determines where variables/functions are accessible in the program |
| **Scope Chain** | Chain of lexical environments — inner scope can access outer scope variables |
| **Lexical Environment** | Local memory + lexical environment of parent (scope chain) |
| **Variable Shadowing** | Inner scope variable with same name as outer scope — outer variable is shadowed |
| **Data Types** | Primitive values (`string`, `number`, `boolean`, `undefined`, `null`, `bigint`, `symbol`) and non-primitive values such as objects, arrays, and functions |
| **Type Checking** | Use `typeof` for general type checks and `Array.isArray()` to distinguish arrays from other objects |
| **Strict Comparison** | `===` compares both value and type, helping automation tests catch mismatched UI, API, environment, and test-data formats |
| **Arithmetic & Assignment Operators** | Calculate test statistics and update values with operators such as `+`, `%`, `+=`, and `-=` |
| **Comparison & Logical Operators** | Validate actual versus expected results and combine conditions safely with `===`, `!==`, `&&`, `||`, and `!` |
| **Ternary Operator** | Express a simple conditional result using `condition ? valueIfTrue : valueIfFalse` |
| **Conditional Statements** | Make test-flow decisions with `if`, `else if`, `else`, nested conditions, and `switch` |
| **Loops** | Repeat test actions and process data with `for`, `while`, `do...while`, `for...of`, and `for...in` |
| **Arrays** | Store and process related test data, including arrays of objects for data-driven automation |
| **Strings** | Clean, compare, search, extract, split, replace, and validate text used in UI, URL, API, and test-data checks |
| **Objects** | Model users, configurations, API responses, and test data with properties, methods, nested structures, and arrays of objects |
| **Classes & Constructors** | Create reusable blueprints for test entities, initialize shared state with `constructor()`, and scale automation logic across multiple objects |
| **Inheritance** | Share common setup/teardown methods across test classes to avoid code duplication in automation frameworks |
| **Polymorphism** | Same method name produces different behavior depending on the object type — `browser.launch()` for Chrome/Firefox/Edge |
| **Encapsulation** | Protect test data and configuration from accidental modification by using private fields and controlled access |

---

## Chapter 23: Testing Academy JavaScript Programming Test

**Folder:** `chapter_23_testingAcademyJSProgramingTest/`

| File | Description |
|------|-------------|
| `01_NumberEvenorOdd.js` | Validate a number and determine whether it is even or odd |
| `02_LargestOf3numbers.js` | Find the largest of three numbers, including equal-value cases |
| `03_StringReverse.js` | Reverse a string with a backward `for` loop and `charAt()` |
| `04_StringPalindrom.js` | Reverse a string and check whether it is a palindrome |
| `05_FactorialOfGivenNumber.js` | Calculate a factorial with a `while` loop |
| `06_FibonaciSerias.js` | Generate a Fibonacci series of the requested length in an array |
| `07_PrimeNumberChecker.js` | Check whether a number is prime by testing possible factors |
| `08_CountVowelsInString.js` | Count vowels in a string with a case-insensitive regular expression |
| `09_FindLargestNumberInArray.js` | Find the largest value in an array through iteration |
| `10_RemoveDuplicateArray.js` | Build a unique array by filtering repeated values with `includes()` |

These exercises reinforce conditionals, loops, functions, strings, arrays, regular expressions, and input validation through common JavaScript programming-test questions.

---

## Chapter 24: Import and Export

**Folder:** `chapter_24_ImportandExport/`

| File | Description |
|------|-------------|
| `176_importandexport.js` | Defines and exposes `printNumber()` and `sum()` as named exports |
| `177_testImportExport.js` | Imports the named and default exports, then invokes each imported function |
| `178_defaultimport.js` | Exports `squareIt()` as the default export and `Subraction()` as a named export |
| `179_testutils.js` | Exports a base URL and a utility that converts a string to uppercase |
| `180_testimport.js` | Imports and uses the base URL and uppercase-formatting utility |
| `181_utils.js` | Exports an API base URL and reusable test-name formatting functions |
| `182_testu.js` | Resolves duplicate export names with import aliases and formats a test name |
| `183.js` | Imports the default logger and records a startup event |
| `logs/logger.js` | Provides a default logger and a named, formatted logging function |

### Key Concepts

| Concept | Example |
|---------|---------|
| **Named export** | `export function sum() { ... }` |
| **Named import** | `import { printNumber, sum } from './176_importandexport.js'` |
| **Default export** | `export default function squareIt() { ... }` |
| **Default import** | `import squareIt from './178_defaultimport.js'` |
| **Combined import** | `import squareIt, { Subraction } from './178_defaultimport.js'` |
| **Import alias** | `import { BASE_URL as bul_util } from './181_utils.js'` |
| **Nested module** | `import log from './logs/logger.js'` |

### Run Command

```bash
node chapter_24_ImportandExport/177_testImportExport.js
node chapter_24_ImportandExport/180_testimport.js
node chapter_24_ImportandExport/182_testu.js
node chapter_24_ImportandExport/183.js
```

These examples demonstrate how ES modules split reusable functions and constants across files, consume named and default exports, alias conflicting import names, and organize a logger in a nested module.

---

## Chapter 25: Classes, Objects, and OOP

**Folder:** `chapter_25_class_Object_Oops/`

| File | Description |
|------|-------------|
| `classandObject.md` | Introduces classes as blueprints and objects as real-world instances with attributes and behaviors |
| `01_Class_Object/184.js` | Defines a `Person` class with private fields and creates object instances |
| `01_Class_Object/185_car.js` | Demonstrates parameterized and default constructors with car and bike objects |
| `01_Class_Object/186.js` | Shows constructor execution when a new object is created |
| `01_Class_Object/187_Real_Scenario.js` | Models automation test cases with constructor properties and a display method |
| `02_Public_Private/188_Real.js` | Models browser instances with public fields and lifecycle methods |
| `02_Public_Private/189_IQ.js` | Demonstrates reusable API clients with instance-specific base URLs |
| `02_Public_Private/190_Private_Public.js` | Compares public fields with a private `#apiKey` field |
| `03_Static/191_static.js` | Tracks total and passed tests with shared static fields |
| `03_Static/192_IQ.js` | Adds a static summary method and contrasts it with instance methods |
| `03_Static/193.js` | Demonstrates a static college name shared by student instances |
| `03_Static/194.js` | Compares an outer variable with an instance field initialized by a constructor |

### Key Concepts

| Concept | Description |
|---------|-------------|
| **Class** | A blueprint that defines the attributes and behaviors shared by its objects |
| **Object** | A concrete instance created from a class with the `new` keyword |
| **Private field** | A class attribute prefixed with `#`, such as `#name` or `#age` |
| **Method** | A behavior declared inside a class, such as `eat()` or `sleep()` |
| **Object reference** | A variable such as `pramod` or `amit` that points to a `Person` instance |
| **Constructor** | Initialization logic that runs automatically when an object is created with `new` |
| **Public field** | Instance data accessible through an object reference, such as `browser.name` |
| **Static member** | Data or behavior owned by the class and shared across all instances |

### Run Commands

```bash
node chapter_25_class_Object_Oops/01_Class_Object/184.js
node chapter_25_class_Object_Oops/01_Class_Object/187_Real_Scenario.js
node chapter_25_class_Object_Oops/02_Public_Private/190_Private_Public.js
node chapter_25_class_Object_Oops/03_Static/191_static.js
node chapter_25_class_Object_Oops/03_Static/192_IQ.js
```

---

## Chapter 26: Encapsulation

**Folder:** `chapter_26_Oops_Encapsulation/`

| File | Description |
|------|-------------|
| `195_enpsu.js` | Demonstrates private fields using `#child1` and `#child2` with controlled access through getters and setters |
| `196_Car.js` | Encapsulates the car engine behind a private field and exposes safe update methods |
| `197_Ecap_Bank.js` | Simulates bank balance protection with a private `#balance` and conditional setter validation |
| `198_IQ.js` | Practice on encapsulation concepts and access control patterns |
| `199_IQ.js` | Additional interview-style encapsulation questions |
| `200_IQ.js` | More encapsulation examples for real-world state protection |
| `201_IQ.js` | Review questions covering private state and controlled mutation |

### Key Concepts

| Concept | Description |
|---------|-------------|
| **Encapsulation** | Hiding internal state and exposing only the necessary API |
| **Private field** | A property prefixed with `#` that is not directly accessible outside the class |
| **Getter** | Reads the private value through a safe method such as `getBalance()` |
| **Setter** | Updates the private value through validation logic such as `setBalance()` |
| **State protection** | Prevents direct mutation and enforces business rules |

### Run Commands

```bash
node chapter_26_Oops_Encapsulation/195_enpsu.js
node chapter_26_Oops_Encapsulation/196_Car.js
node chapter_26_Oops_Encapsulation/197_Ecap_Bank.js
```

These examples show how encapsulation keeps class internals safe while still allowing controlled access and reconciliation with real-world business rules.

---

## Chapter 27: Inheritance

**Folder:** `chapter_27_Oops_Inheritance/`

| Subfolder / File | Description |
|------------------|-------------|
| `01_Single_Inheritance/202_single.js` | Single inheritance — `LoginPage` extends `BasePage`, inheriting `open()` and `close()` methods |
| `01_Single_Inheritance/203_Animal.js` | Single inheritance — `Dog` extends `Animal` with `super()` constructor chaining and `super.method()` |
| `01_Single_Inheritance/204_IQ.js` | Method overriding — `APITest.setUp()` overrides `BaseTest.setUp()` to change browser-open behavior |
| `01_Single_Inheritance/205_IQ2.js` | Constructor chaining with `super()` — calling parent `setUp()` / `tearDown()` in a test framework |
| `01_Single_Inheritance/206_IQ3.js` | Runtime polymorphism — `UnitTest`, `APITest`, `E2ETest` override `execute()`, called via an array |
| `01_Single_Inheritance/207_IQ4.js` | Polymorphic page verification — `LoginPage`, `DashboardPage`, `CartPage` each override `verify()` |
| `01_Single_Inheritance/208_IQ.js` | Polymorphic reporting — `HTMLReport`, `JSONReport`, `TextReport` each implement different `generate()` |
| `02_Multiple_Inheritace/209_m.js` | Multiple inheritance — documents that JS does **not** support extending multiple classes |
| `02_Multiple_Inheritace/210_m1.js` | Mixin pattern — achieving multiple inheritance via composable class-returning functions |
| `03_MultiLevel_Inheritance/211.js` | Multilevel inheritance — `BasePage → AuthPage → AdminPage` chain |
| `04_Hierachial_Inheritance/212.js` | Hierarchical inheritance — `Son1`, `Son2`, `Son3` all extend a single `Father` class |

### Key Concepts

| Concept | Description |
|---------|-------------|
| **Single Inheritance** | A child class extends one parent class, reusing its methods and properties |
| **Method Overriding** | Child redefines a parent method with the same name to change behavior |
| **`super()`** | Calls the parent class constructor from the child class constructor |
| **`super.method()`** | Invokes the parent's version of an overridden method |
| **Runtime Polymorphism** | The same method call behaves differently based on the actual object type |
| **Multiple Inheritance (not supported)** | JS classes can only extend one parent — use **Mixins** as an alternative |
| **Multilevel Inheritance** | A chain: `GrandParent → Parent → Child` |
| **Hierarchical Inheritance** | Multiple children extend the same single parent |

### Run Commands

```bash
node chapter_27_Oops_Inheritance/01_Single_Inheritance/202_single.js
node chapter_27_Oops_Inheritance/01_Single_Inheritance/203_Animal.js
node chapter_27_Oops_Inheritance/01_Single_Inheritance/204_IQ.js
node chapter_27_Oops_Inheritance/01_Single_Inheritance/205_IQ2.js
node chapter_27_Oops_Inheritance/01_Single_Inheritance/206_IQ3.js
node chapter_27_Oops_Inheritance/01_Single_Inheritance/207_IQ4.js
node chapter_27_Oops_Inheritance/01_Single_Inheritance/208_IQ.js
node chapter_27_Oops_Inheritance/02_Multiple_Inheritace/209_m.js
node chapter_27_Oops_Inheritance/02_Multiple_Inheritace/210_m1.js
node chapter_27_Oops_Inheritance/03_MultiLevel_Inheritance/211.js
node chapter_27_Oops_Inheritance/04_Hierachial_Inheritance/212.js
```

Inheritance helps reduce duplication by keeping shared behavior in one class and reusing it across different specialized pages or objects.

---

## Chapter 28: Polymorphism

**Folder:** `chapter_28_Polymorphism/`

| File | Description |
|------|-------------|
| `213.js` | Method overriding — `BaseTest.setUp()` overridden by `APITest.setUp()`, runtime polymorphism in action |

### Key Concepts

| Concept | Description |
|---------|-------------|
| **Method Overriding** | Child class redefines a method from the parent class with the same name |
| **Runtime Polymorphism** | The method called depends on the object type at runtime |
| **BaseTest → APITest** | `btest.setUp()` calls BaseTest version, `test.setUp()` calls APITest version |

### Run Commands

```bash
node chapter_28_Polymorphism/213.js
```

---

## Chapter 29: OOPS Interview

**Folder:** `chapter_29_OOPS_Interview/`

| File | Description |
|------|-------------|
| `214.ts` | TypeScript utility functions — `buildEndPoint()`, `isSuccessCode()`, `logTestStep()` with type annotations |
| `215_IQ.ts` | TypeScript array filtering — `fetchFailedCodes()` filters HTTP status codes ≥ 400 |

### Key Concepts

| Concept | Description |
|---------|-------------|
| **Type Annotations** | `: string`, `: number`, `: number[]`, `: void`, `: boolean` — TypeScript static typing |
| **Array Filtering** | `filter()` with typed callback — `function(code: number): boolean` |
| **Utility Functions** | Reusable typed helpers for API endpoint building and status code validation |

### Run Commands

```bash
npx tsx chapter_29_OOPS_Interview/214.ts
npx tsx chapter_29_OOPS_Interview/215_IQ.ts
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
| `08_Hoisting_let_var_const.md` | **NEW!** Hoisting comparison table — `var` vs `let` vs `const` (hoisted, TDZ, scope, reassign, redeclare) |
| `09_Hoisting_complete_Guide.md` | **NEW!** Complete hoisting guide — definition, JS engine phases (Memory Creation → Execution), `var`/`let`/`const` hoisting, function hoisting, class hoisting, TDZ, interview questions |
| `10_Object_Master_class.md` | **NEW!** Complete Objects master class — 20 sections covering basic syntax, dot/bracket notation, nested objects, arrays in objects, array of objects, methods, `this` keyword, arrow vs regular functions, `const` mutation, `Object.freeze`/`seal`, destructuring, spread operator, reference vs value, shallow/deep copy, interview questions |
| `11_asyn_await.md` | **NEW!** Deep Dive into `async` and `await` — why async programming, `setTimeout` example, `async` always returns Promise, `await` waits for Promise, async required before await, real-time browser automation example (openBrowser → gotoLogin → enterCredentials → clickLogin), Playwright test pattern, common mistakes (missing async, missing await), function declaration styles (normal, expression, arrow), summary table |
| `Source_Code_ByteCODE_Binary_IQ.md` | Source code vs Bytecode vs Binary code explained with example |
| `README.md` | Prompt template for generating new IQ note files |
| `Array_Complete_Guide.md` | **NEW!** Complete Arrays master guide — creation, indexing, 20+ methods, real-time examples, Mermaid diagrams |
| `Arrays_Natural_vs_Proper_Sorting.md` | **NEW!** Natural sorting (default) vs proper sorting with `a-b` / `b-a` — comparison table, step-by-step walkthrough, pipeline diagram |
| `OverAll_Master_Notes_PlayWrite.docx` | Overall master notes covering Playwright concepts — comprehensive reference document |
| `JavascriptNotes/000_Javascriptexecutionunderstaing.txt` | JavaScript execution context deep-dive — Global Execution Context (Memory + Code components), call stack, synchronous single-threaded nature, step-by-step walkthrough of `square()` function execution, **Call Stack management (LIFO, push/pop, GEC at bottom, alternate names: Execution Context Stack, Program Stack, Control Stack, Runtime Stack, Machine Stack)** |
| `JavascriptNotes/ExecutionContextInJavaScript.png` | Visual diagram: Execution Context structure — Memory (Variable Environment) and Code (Thread of Execution) components |
| `JavascriptNotes/JavaScriptCodeExecutionFlowInExecutionContext.png` | Visual diagram: JavaScript code execution flow inside Execution Context — memory creation phase followed by code execution phase |
| `JavascriptNotes/JavaScriptCodeExecutionFlowInExecutionContext-Full Detailed.png` | **NEW!** Full detailed diagram: JavaScript code execution flow inside Execution Context — comprehensive visual with memory creation and code execution phases |
| `JavascriptNotes/JavaScript_Execution_Context_Guide.md` | **NEW!** Complete JavaScript Execution Context guide — what is EC, two components (Memory + Code), synchronous single-threaded nature, call stack, two-phase execution (Memory Creation + Code Execution), step-by-step walkthrough with `square()` example, Mermaid diagrams, **Call Stack deep-dive (why needed, LIFO push/pop mechanics, GEC at bottom, alternate names)** |
| `JavascriptNotes/JavaScript_Execution_Context_Notes.md` | **NEW!** JavaScript Execution Context notes — structured guide covering Episode 1 (EC overview, two components, synchronous single-threaded) and Episode 2 (GEC creation, call stack, two-phase execution: Memory Creation Phase + Code Execution Phase, `undefined` vs not defined) |

### How to Add New IQ Notes

Copy this prompt and use it with your AI assistant:

> Explain **[YOUR CONCEPT]** in a table view with clear comparison columns. Use a simple code/file example to walk through each layer. Save it as a `.md` file inside the `IQ_Notes` folder. Follow the same visual style as `Source_Code_ByteCODE_Binary_IQ.md` — breakdown table, example walkthrough, pipeline diagram, and TL;DR.

---

## Chapter 17: Multi-Dimensions Array

**Folder:** `chapter_17_Multi_Dimensions_Arrary/`

| File | Description |
|------|-------------|
| `140_Array.js` | 2D array basics — creation, nested `for` loop iteration, grid traversal with `process.stdout.write()` |
| `141_Array_2.js` | 2D array access — indexing, updating elements, row/column length, last element access, real-world test matrix example |
| `142_Array_functions.js` | 2D array operations — `map()` + `reduce()` for row-wise sums, real-world suite results with fail detection |
| `143_rightanglepattern.js` | Right-angle triangle pattern — nested loops building `*` in increasing order |
| `144_leftpattern.js` | Left-angle (reverse) triangle pattern — nested loops building `*` in decreasing order |
| `145_Pyramidpattern.js` | Pyramid pattern — spaces + stars using `2*i - 1` formula for centered output |

### Key Concepts

| Concept | Description | Example |
|---------|-------------|---------|
| **2D Array** | Array of arrays — matrix-like structure with rows and columns | `let grid = [[1,2,3],[4,5,6]]` |
| **Nested Iteration** | Outer loop for rows, inner loop for columns | `for(i){ for(j){ grid[i][j] } }` |
| **Row/Column Length** | `grid.length` = rows, `grid[0].length` = columns | Used for dynamic traversal |
| **Pattern Building** | Using nested loops to print geometric patterns | Right-angle, left-angle, pyramid |
| **Real-world Matrix** | Test results, scores, suite outcomes as 2D arrays | `[["Login","pass",200], ...]` |

### Run Commands

```bash
node chapter_17_Multi_Dimensions_Arrary/140_Array.js
node chapter_17_Multi_Dimensions_Arrary/141_Array_2.js
node chapter_17_Multi_Dimensions_Arrary/142_Array_functions.js
node chapter_17_Multi_Dimensions_Arrary/143_rightanglepattern.js
node chapter_17_Multi_Dimensions_Arrary/144_leftpattern.js
node chapter_17_Multi_Dimensions_Arrary/145_Pyramidpattern.js
```

---

## 🗺️ RoadMap

**Folder:** `RoadMap/`

| File | Description |
|------|-------------|
| `PlaywrightRoadMap.pdf` | Playwright learning roadmap — visual guide covering the complete learning path from basics to advanced Playwright automation |
| `90 Days Playwright(JS_TS) + AI Curriculum.xlsx` | 90-day structured curriculum combining Playwright (JS/TS) with AI — day-wise plan, topics, and milestones |

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
| 11. JS Coding Assignments ──► Fundamentals (print, sum, factorial, reverse, Armstrong, palindrome), if-else (largest/smallest, leap year, vote, electricity bill) & Arrays (Beginner: sum, avg, count, positive/negative, index finding · Intermediate: second largest/smallest, max−min difference, even/odd arrays, first/last occurrence · Advanced: reverse, remove duplicates, move zeros, merge, copy without inbuilt)
        │
12. Functions Concept ──────► Function types, parameters, return values, template literals, expressions, arrow functions, IIFE, spread, hoisting (var/let/const/function), TDZ, scope
        │
13. Function Closure ───────► Scope, closure basics, closure remembers state, real-world retry tracker & rate limiter
        │
14. Strings ────────────────► String methods, substring extraction, replace/replaceAll, split/join, conversion, cheatsheet
        │
15. Objects ────────────────► Object basics, dot/bracket notation, reference vs value, methods, config objects, JSON vs object
        │
16. Multi-Dimensions Array ──► 2D arrays, nested iteration, matrix operations, pattern building
        │
17. Callback Concept ───────► Sync/Async callbacks, forEach, callback hell, pyramid of DOM
        │
18. Promise Concept ────────► Promise creation, .then/.catch/.finally, Promise.all/allSettled/race
        │
19. Async and Await ────────► async/await syntax, promise chaining vs async/await, real-world login flow, deep dive notes
        │
20. Debug ──────────────────► JavaScript execution context, call stack, hoisting in action
        │
21. 100 Day Challenge ──────► Execution Context, Scope, Data Types, Operators, Conditionals, Loops, Arrays
        │
22. Programming Test ───────► Even/odd, strings, factorial, Fibonacci, primes, vowels, arrays
        │
23. Import and Export ──────► ES modules, named/default exports, aliases, reusable utilities, logging
        │
24. Classes, Objects & OOP ─► Class blueprints, private fields, methods, instances, references
        │
25. Encapsulation ──────────► Private fields, getters/setters, state protection
        │
26. Inheritance ────────────► Single, multilevel, hierarchical, method overriding, mixins
        │
27. Polymorphism ──────────► Method overriding, runtime dispatch
        │
28. OOPS Interview ────────► TypeScript utilities, typed array filtering
        │
29. Playwright 3x ─────────► (Coming next!)
        │
🗺️  RoadMap ───────────────► Playwright learning roadmap PDF
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
