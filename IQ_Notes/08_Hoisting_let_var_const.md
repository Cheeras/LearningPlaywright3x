| Feature                             | `var`                        | `let`                         | `const`                       |
| ----------------------------------- | ---------------------------- | ----------------------------- | ----------------------------- |
| Hoisted?                            | Yes                          | Yes                           | Yes                           |
| State during memory creation        | Initialized with `undefined` | Created but **uninitialized** | Created but **uninitialized** |
| Accessible before declaration?      | Yes                          | No                            | No                            |
| Result before declaration           | `undefined`                  | `ReferenceError`              | `ReferenceError`              |
| Temporal Dead Zone                  | No                           | Yes                           | Yes                           |
| Scope                               | Function-scoped              | Block-scoped                  | Block-scoped                  |
| Must initialize during declaration? | No                           | No                            | Yes                           |
| Can reassign the variable?          | Yes                          | Yes                           | No                            |
| Can redeclare in the same scope?    | Yes                          | No                            | No                            |
| Can modify array/object contents?   | Yes                          | Yes                           | Yes                           |
