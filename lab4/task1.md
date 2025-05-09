## CODE 1

### Output

undefined
8
8
9
10
undefined

### Lexical Environment 

1. Global EC creation:
- Outer: null,
- this: window
- LE: [{
  a: undefined,
  b: undefined,
  c: undefined,
}]
- TDZ: { x }

2. Global EC execution:
- Outer: null,
- this: window
- LE: [{
  a: 5,
  b: 10,
  c: function,
  x: undefined,
}]
- TDZ: {}

3. FEC c creation:
- Outer: Global
- this: undefined
- LE: [{
  arguments: object,
  a: 8,
  b: 9,
  c: 10
  f: undefined,
  x: undefined,
}]
- TDZ: {}

4. FEC c execution:
- Outer: Global
- this: undefined
- LE: [{
  arguments: object,
  a: 8,
  b: 9,
  c: 10
  f: <function>,
  x: 10,
}]
- TDZ: {} 

5. FEC f creation:
- Outer: c
- this: undefined
- LE: [{
  arguments: object,
  a: 8,
  b: 9,
  c: 10,
  x: undefined,
}]
TDZ: {}

6. FEC f execution:
- Outer: c
- this: undefined
- LE: [{
  arguments: object,
  a: 8,
  b: 10,
  c: 10,
  x: 5,
}]
- TDZ: {} 

----

## Code 2

### Output
81
25

### Lexical Environment 

1. Global EC creation:
- Outer: null,
- this: window
- LE: [{
  x: undefined,
  myFunction: <function>,
}]
- TDZ: {}


2. Global EC execution:
- Outer: null, 
- this: window
- LE: [{ 
  x: 5,
  myFunction: <function>,
}], 
- TDZ: {}

3. FEC (myFunction first call) creation:
- Outer: Global
- this: undefined
- LE: [{
  arguments: object,
}]
- TDZ: {}

4. FEC (myFunction first call) execution:
- Outer: Global
- this: undefined
- LE: [{
  arguments: object,
}]
- TDZ: {} 

5. FEC (myFunction second call) creation:
- Outer: Global
- this: undefined
- LE: [{
  arguments: object,
}]
- TDZ: {}

6. FEC (myFunction second call) execution:
- Outer: Global
- this: undefined
- LE: [{
  arguments: object,
}]
- TDZ: {}

---

## Code 3

### Output

10

### Lexical Environment

1. Global EC creation:
- Outer: null,
- this: window
- LE: [{
  foo: undefined,
  bar: <function>,
}]
- TDZ: {}

2. Global EC execution:
- Outer: null, 
- this: window
- LE: [{ 
  foo: 1,
  bar: <function>,
}], 
- TDZ: {}

3. FEC bar creation:
- Outer: Global
- this: undefined
- LE: [{
  arguments: object,
  foo: undefined,
}]
- TDZ: {}

4. FEC bar execution:
- Outer: Global
- this: undefined
- LE: [{
  arguments: object,
  foo: 10,
}]
- TDZ: {} 