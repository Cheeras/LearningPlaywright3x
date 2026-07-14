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
| 🧠 | [IQ Notes](#iq-notes) | Interview questions, keywords, shortcuts, source code vs bytecode |

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

**Folder:** `chapter_06_Operator/`

| File | Description |
|------|-------------|
| `14_DataType.js` | Primitive vs Reference data types |
| `15_OperatorsConcept.js` | `var`, `let`, `const`, assignment operators |
| `16_Arithmetic_Operators.js` | `+`, `-`, `*`, `/`, `%`, `**` |
| `17_comparision_Operator.js` | `==`, `===`, `!=`, `!==`, `<`, `>`, `<=`, `>=` |
| `18_Logical_Operator.js` | `&`, `\|`, `&&`, `\|\|` |
| `19_Confusion_Comparision.js` | Loose vs strict comparison with empty strings |
| `20_Confusion_Comparision_part2.js` | `null` vs `undefined` comparison confusion |

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

## IQ Notes 🧠

**Folder:** `IQ_Notes/`

| File | Description |
|------|-------------|
| `01_Identifier_Rules.md` | Complete reference on identifier rules with tables, code walkthrough, and pipeline diagram |
| `02_Keywords.md` | Complete reference on JavaScript reserved keywords with comparison table |
| `03_commands_win.md` | VS Code keyboard shortcuts for Windows |
| `03_commands_mac.md` | VS Code keyboard shortcuts for macOS |
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
6. Playwright 3x ───────────► (Coming next!)
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