## a. Output

`Greetings, John
hi undefined
hello Smith`

---

## b. Lexical Environment Description:

### Global Environment

- **Creation Phase**
  - outer: null
  - this: window
  - LE: [{
      str: undefined,
      user: undefined,
      show: <function>
    }]
  - TDZ: {}

- **Execution Phase**
  - outer: null
  - this: window
  - LE: [{
      str: "Greetings, ",
      user: obj,
      show: <function>
    }]
  - TDZ: {}

---

### display() Function Execution Context

- **Creation Phase**
  - outer: Global
  - this: user
  - LE: [{ arguments: { length: 0 } }]
  - TDZ: {}

- **Execution Phase**
  - outer: Global LE
  - this: user
  - LE: [{ arguments: { length: 0 } }]
  - TDZ: {}

---

### show

- **creation**

  - outer: Global Lexical

  - this: window

  - LE: [{ msg: "hi", arguments: { 0: "hi", length: 1 } }]

  - TDZ: {}

- **execution**

  - outer: Global LE

  - this: window

  - LE: [{ msg: "hi", arguments: { 0: "hi", length: 1 } }]

  - TDZ: {}

----

### show

- ** creation **

  - outer: Global LE

  - this: user

  - LE: [{ msg: "hello", arguments: { 0: "hello", length: 1 } }]

  - TDZ: {}

- ** execution **

  - outer: Window

  - this: user object

  - LE: [{ msg: "hello", arguments: { 0: "hello", length: 1 } }]

  - TDZ: {}

---