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
| 9 | [HackerRank Challenge](#chapter-9-hackerrank-challenge) | Grade classification (if...else), number-to-word converter (switch) |
| 10 | [Loops Concepts](#chapter-10-loops-concepts) | For loop, while loop, do-while loop, nested loops, interview questions |
| 🧠 | [IQ Notes](#iq-notes) | Interview questions, keywords, shortcuts, increment/decrement, switch case, source code vs bytecode |

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

### HackerRank Challenges

| Challenge | Concept | Input | Output |
|-----------|---------|-------|--------|
| Grade Classification | `if...else if...else` | Marks (numeric) | AA / AB / BB / BC / CC / CD / DD / FF |
| Number to Word | `switch` statement | Number (1-9) | ONE / TWO / ... / NINE / PLEASE TRY AGAIN |

Both challenges use standard input (`stdin`) via `fs.readFileSync(0)` — the HackerRank edge I/O pattern for Node.js.

```bash
# Run grade classification
echo 85 | node chapter_09_HackerRankChallenge/47_ifelse_HackerRank.js

# Run number-to-word converter
echo 4 | node chapter_09_HackerRankChallenge/48_Switch_Case_hackerRank.js
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
| `mergehungingithub.png` | Screenshot: Merge hung on GitHub issue |
| `Headbranchisout of date.png` | Screenshot: Head branch is out of date issue |

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

---

## IQ Notes 🧠

**Folder:** `IQ_Notes/`

| File | Description |
|------|-------------|
| `01_Identifier_Rules.md` | Complete reference on identifier rules with tables, code walkthrough, and pipeline diagram |
| `02_Keywords.md` | Complete reference on JavaScript reserved keywords with comparison table |
| `03_commands_win.md` | VS Code keyboard shortcuts for Windows |
| `03_commands_mac.md` | VS Code keyboard shortcuts for macOS |
| `04_commands_mac.md` | (alias) VS Code keyboard shortcuts for macOS |
| `05_incrementanddecrement.txt` | Increment (`++`) and decrement (`--`) operator reference — pre/post variants |
| `06_SwitchCaseStatement.txt` | Switch case statement syntax, step-by-step execution, strict comparison behavior |
| `Source_Code_ByteCODE_Binary_IQ.md` | Source code vs Bytecode vs Binary code explained with example |
| `README.md` | Prompt template for generating new IQ note files |

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
10. Playwright 3x ──────────► (Coming next!)
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