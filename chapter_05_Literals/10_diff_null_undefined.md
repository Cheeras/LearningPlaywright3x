| Feature                 | `undefined`                         | `null`                               |
| ----------------------- | ----------------------------------- | ------------------------------------ |
| Meaning                 | Value is **not assigned / missing** | Value is **intentionally empty**     |
| Assigned by             | Often **JavaScript automatically**  | Usually **developer manually**       |
| Type                    | `undefined`                         | `object` ⚠️                          |
| `typeof` result         | `typeof undefined` → `"undefined"`  | `typeof null` → `"object"`           |
| Default variable value  | Yes                                 | No                                   |
| Example                 | `let name;`                         | `let name = null;`                   |
| Function with no return | Returns `undefined`                 | Must explicitly return `null`        |
| Missing object property | Returns `undefined`                 | Only `null` when explicitly assigned |
| `==` comparison         | `null == undefined` → `true`        | `null == undefined` → `true`         |
| `===` comparison        | `null === undefined` → `false`      | `null === undefined` → `false`       |
| Design meaning          | **Not available / not initialized** | **No value intentionally**           |
