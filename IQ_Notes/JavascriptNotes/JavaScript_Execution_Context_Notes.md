# JavaScript Execution Context — Complete Notes

> A structured guide to how JavaScript runs code behind the scenes: Execution Contexts, the Call Stack, Memory Creation, and Code Execution phases.

---

## Episode 1: What is an Execution Context?

**Everything in JavaScript happens inside an Execution Context.**

Think of the Execution Context as a **big box (container)** in which the entire JavaScript program runs.

### The Two Components of an Execution Context

| Component | Also Known As | What It Does |
|---|---|---|
| **Memory Component** | Variable Environment | Stores all variables and functions as **key–value pairs** |
| **Code Component** | Thread of Execution | Executes the code **one line at a time** |

**Example of Memory Component storage:**
```
key : value
a   : 10
fn  : {...}
```

### JavaScript is Synchronous & Single-Threaded

- **Single-threaded** → JavaScript executes **one command at a time**.
- **Synchronous** → JavaScript moves to the **next line only after** the current line finishes executing, in a specific, predictable order.

> Together, this makes JavaScript a **synchronous, single-threaded** language.

📎 *Reference diagram: `JavaScriptCodeExecutionFlowInExecutionContext.png`*

---

## Episode 2: How the Execution Context is Created

Before any JavaScript program runs, JavaScript internally creates a **Global Execution Context (GEC)** and places it on the **Call Stack**.

### Example Program

```javascript
var n = 2;

function square(num) {
    var ans = num * num;
    return ans;
}

var square2 = square(n);
var square4 = square(4);
```

The Global Execution Context is created in **two phases**:

1. **Phase 1 — Memory Creation Phase**
2. **Phase 2 — Code Execution Phase**

---

## Phase 1: Memory Creation Phase

In this phase, JavaScript scans the **entire program line by line** and allocates memory **in advance** for all variables and functions — without running any actual code yet.

### Step-by-Step Allocation

| Step | Line Encountered | What Happens |
|---|---|---|
| 1 | `var n = 2;` | Memory allocated for `n` |
| 2 | `function square(num) {...}` | Memory allocated for `square` |
| 3 | — | Variables are initialized with the special placeholder value **`undefined`** |
| 4 | Function `square` | The **entire function code is copied** into the Memory Component |
| 5 | `var square2`, `var square4` | Memory allocated, initialized to `undefined` |

### Resulting Memory State (Global Execution Context)

```
n        : undefined
square   : fn {...}      // entire function code copied here
square2  : undefined
square4  : undefined
```

> ⚡ **Key Rule:** Whatever the data type, every variable gets `undefined` during this phase. **Functions are the exception** — their entire code block is copied as-is into memory immediately.

---

## Phase 2: Code Execution Phase

JavaScript now runs through the program **again, line by line**, actually executing the code and performing calculations.

### Walkthrough

**Line 1:** `var n = 2;`
- The value `2` is now actually placed into `n`, replacing `undefined`.
```
n : 2   (undefined → 2)
```

**Lines 2–5:** Function definition (`function square(num) {...}`)
- Nothing to execute — this is just a definition, already handled in Phase 1.

**Line 6:** `var square2 = square(n);` → **Function Invocation**
- Seeing a function name followed by `()` means the function is being **called/invoked**.
- Functions are the *heart of JavaScript* — invoking one is where things get interesting.
- Functions behave like **mini-programs**. When invoked, a **brand-new Execution Context** is created for that function call.

> 🔑 **Important:** Everything discussed so far was happening inside the **Global Execution Context**. Invoking a function creates a **new, separate Execution Context**, pushed onto the Call Stack.

---

## Function Invocation: A New Execution Context is Born

When `square(n)` is called, JavaScript creates a brand-new Execution Context — with its **own** Memory and Code components — and again runs it through the same two phases.

```javascript
function square(num) {
    var ans = num * num;
    return ans;
}
```

### Phase 1 — Memory Creation (inside `square`'s Execution Context)

Memory is allocated for the function's **parameters** and **local variables**:

```
num : undefined
ans : undefined
```

### Phase 2 — Code Execution (inside `square`'s Execution Context)

| Step | Action | Result |
|---|---|---|
| 1 | Argument `n` (value `2`) is passed to parameter `num` | `num : 2` |
| 2 | `var ans = num * num;` executes → `2 * 2 = 4` | `ans : 4` (undefined → 4) |
| 3 | `return ans;` executes | Control returns to the **caller** with value `4` |

> 💡 **Terminology:** `n` is the **argument** passed at the call site; `num` is the **parameter** that receives it inside the function.

### The `return` Keyword

Whenever JavaScript encounters `return`, it means:

> "This function's work is done — return control (and the value) back to the Execution Context where the function was originally invoked."

So in our example:
```javascript
var square2 = square(n);   // control returns HERE with value 4
```
- `ans` (value `4`) is fetched from the function's local memory.
- `square2` is updated: `undefined → 4`.
- The `square` function's Execution Context is **popped off the Call Stack** and destroyed — its job is complete.

### Repeat for `square(4)`

**Line 7:** `var square4 = square(4);`
- The exact same process repeats: a **brand-new Execution Context** is created (parameter `num = 4`), memory creation → code execution → `ans = 16` → `return` → `square4 = 16` → Execution Context destroyed.

---

## Visual Summary Table (Full Trace)

| Global Memory | Value After Phase 1 | Value After Full Execution |
|---|---|---|
| `n` | `undefined` | `2` |
| `square` | `fn {...}` | `fn {...}` (unchanged) |
| `square2` | `undefined` | `4` |
| `square4` | `undefined` | `16` |

| `square(num)` Local Memory (per call) | After Phase 1 | After Phase 2 |
|---|---|---|
| `num` | `undefined` | `2` (or `4` on 2nd call) |
| `ans` | `undefined` | `4` (or `16` on 2nd call) |

---

## Key Takeaways

- ✅ Every JS program starts by creating a **Global Execution Context**, placed on the **Call Stack**.
- ✅ Every Execution Context has **2 components**: Memory (Variable Environment) and Code (Thread of Execution).
- ✅ Every Execution Context is built in **2 phases**: Memory Creation → Code Execution.
- ✅ During Memory Creation, variables get `undefined`; **functions get their entire code copied** into memory.
- ✅ Every **function call** creates a **brand-new Execution Context** (with its own Memory + Code components and its own 2 phases).
- ✅ The `return` keyword sends control (and a value) back to wherever the function was invoked, after which that function's Execution Context is removed from the Call Stack.

---

## Reference Diagrams

1. `JavaScriptCodeExecutionFlowInExecutionContext.png` — Overview of Global Execution Context, Memory/Code components, and function-copy behavior.
2. `JavaScriptCodeExecutionFlowInExecutionContext-Full_Detailed.png` — Full detailed trace showing `n → num` value flow, `ans` calculation, and `return` control flow back to the caller.
