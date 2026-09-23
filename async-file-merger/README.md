# Async File Merger Lab

**Name:** خالد محمد احمد السيد المصري

## What this code does
This project builds on our previous Event Emitter lab. The goal is to read two different text files without blocking the Node.js event loop (Non-Blocking Async) and then merge their content into a third file.

## How it works
1. I used the built-in `fs` module to read `file1.txt` and `file2.txt` using `fs.readFile()` which is asynchronous.
2. I imported my custom `EventEmitter` from `event.js`.
3. Every time a file finishes reading, it emits a `fileLoaded` event.
4. A listener counts how many files are loaded. Once the counter reaches 2, it emits a `mergeFiles` event.
5. Finally, the `mergeFiles` listener combines the text and uses `fs.writeFile()` to create `final.txt` successfully.
