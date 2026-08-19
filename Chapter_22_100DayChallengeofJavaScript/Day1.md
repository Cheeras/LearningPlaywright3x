🚨 Most JavaScript developers know how to write code… but do you know what actually happens behind the scenes when JavaScript runs it?

When I started revisiting JavaScript fundamentals deeply, I realized something important:

👉 Before understanding  **Promises, Async/Await, Playwright, or advanced JavaScript** , we should first understand  **how JavaScript actually executes our code** .

So here is my **Day 1 of the 100 Days JavaScript Learning Challenge** 🚀

#100DaysOfJavaScript

### 🔥 Day 1: JavaScript Execution Context & Call Stack

Everything in JavaScript happens inside something called an  **Execution Context** .

Think of an Execution Context as a **big container** where JavaScript executes your code.

It mainly contains two parts:

🧠 **1. Memory Component**

* Variables and functions are stored here.
* It is also called the  **Variable Environment** .

⚙️ **2. Code Component**

* JavaScript executes the code here.
* One line at a time.
* It is also called the  **Thread of Execution** .

JavaScript is a:

✅ **Synchronous** ✅ **Single-threaded language**

That means JavaScript executes  **one command at a time, in a specific order** .

---

### Consider this simple program:

```
var n = 2;

function square(num) {
    var ans = num * num;
    return ans;
}

var square2 = square(n);
var square4 = square(4);

```

Looks simple, right?

But internally, JavaScript is doing a lot more.

### Phase 1️⃣ — Memory Creation Phase

Before executing the code, JavaScript first allocates memory.

```
n       → undefined
square  → function code
square2 → undefined
square4 → undefined

```

For var variables, JavaScript initially stores the special value  **undefined** , while the complete function definition is stored for the function.

### Phase 2️⃣ — Code Execution Phase

Now JavaScript executes the program line by line.

```
var n = 2;

```

n changes from:

```
undefined → 2

```

When JavaScript encounters:

```
square(n);

```

something very interesting happens.

🔥 A **brand-new Execution Context** is created for that function call.

Inside that function execution context, JavaScript again performs:

1️⃣ Memory Creation Phase 2️⃣ Code Execution Phase

For square(n):

```
num → 2
ans → 4

```

Then:

```
return ans;

```

returns the value 4 back to:

```
var square2 = square(n);

```

Once the function finishes, its Execution Context is removed.

---

### 🥞 But who manages all these Execution Contexts?

That is where the **Call Stack** comes into the picture.

The Call Stack manages the  **order of execution of Execution Contexts** .

Think of it like a stack of plates.

```
        square()
           ↓
      ┌─────────┐
      │   E1    │
      ├─────────┤
      │   GEC   │
      └─────────┘

```

When a function is called:

➡️ Its Execution Context is **pushed** onto the Call Stack.

When the function finishes:

⬅️ Its Execution Context is **popped** from the Call Stack.

And after the complete JavaScript program finishes:

```
Call Stack → Empty

```

Simple concept — but this is the foundation for understanding:

👉 Hoisting 👉 Scope 👉 Closures 👉 Event Loop 👉 Promises 👉 Async/Await 👉 JavaScript concurrency 👉 Playwright asynchronous execution

💡 **My biggest takeaway from Day 1:**

> Don't just learn how to write JavaScript. Learn how JavaScript thinks when it executes your code.

Over the next  **100 days** , I'll be strengthening my JavaScript fundamentals step by step before diving deeper into  **Playwright Automation with JavaScript/TypeScript** .

If you're learning  **JavaScript, Automation Testing, or Playwright** , follow along. 🚀

👇 **Question for you:** What should I cover on  **Day 2** ?

A) Hoisting B) Scope & Scope Chain C) var vs let vs const D) Functions & Call Stack deeper dive

#JavaScript #100DaysOfCode #100DaysOfJavaScript #Playwright #AutomationTesting #QA #SoftwareTesting #TestAutomation #JavaScriptLearning #QualityAssurance #SDET #WebDevelopment #LearningInPublic
