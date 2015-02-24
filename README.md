Node.js the Right Way
=====================

# Introduction

- Asyncronous techniques
- try it seven ways

# Chapter 1 - Getting Started

- I/O Bound programs 
- Node responds to events by executing callbacks.
- Single-threaded, highly-parallelized
- "*backwardism*"

### 5 Aspects
1. Practical programming - tasks you're likely to use NodeJS for.
1. Architecture and core - eventloop is in C, app code executed in JS runtime.
1. Patterns - using `EventEmitter` and `Stream`
1. JavaScriptisms - ECMAScript5: Harmony conventions
1. Support - testing, benchmarks, deployment. Robust, scalable, manageable.

# Chapter 2 - Wrangling the File System

### Event Loop
1. Loads entire script, running through the last line.
1. Sees that there's more to do (callbacks).
1. Awaits events to trigger callback.
1. Executes callback.
1. Finished? Keep waiting for events...

Process.argv is an array "argument vector"

### Spawn Child Processes

stdin, stdout, stderr are Streams. have pipe() to our own.

**EventEmitter** Class can pass extra data as parameters to the event callback
