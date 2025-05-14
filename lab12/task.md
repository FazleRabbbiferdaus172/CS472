
## What is LibUV?

**LibUV** is a multi-platform support library that provides asynchronous I/O based on event loops. It's written in C and is used by Node.js to handle non-blocking operations like:

- File system access
- Networking (TCP, UDP)
- Timers
- Child processes


##  Difference Between `setImmediate(f)` and `setTimeout(f, time)`

| Feature            | `setImmediate(f)`                         | `setTimeout(f, time)`                         |
|--------------------|--------------------------------------------|------------------------------------------------|
| When it's executed | Executes on the next iteration of the event loop after I/O events | Executes after at least `time` milliseconds |
| Use case           | Typically used to schedule a callback after the current poll phase | Used for delays and time-based execution     |
| Timer Accuracy     | Not based on a delay                      | Based on a minimum delay                      |

## Difference Between `process.nextTick(f)` and `setImmediate(f)`

| Feature            | `process.nextTick(f)`                     | `setImmediate(f)`                             |
|--------------------|--------------------------------------------|------------------------------------------------|
| When it's executed | Before the event loop continues (microtask queue) | After I/O events, during the check phase     |
| Priority           | Higher                                     | Lower                                          |
| Use case           | For scheduling tasks to run immediately after the current operation | For deferring execution to after I/O         |

---

## 2. Ouput


nextTick 1  
Promise.resolve 1  
Promise.resolve 2  
nextTick inside Promise  
this is setTimeout  
this is setImmediate 1  
this is setImmediate 2  
Promise.resolve inside setImmediate  
readablStream close event  
file content  
this is setTimeout  

