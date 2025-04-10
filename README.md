### Supported Algorithm
* Insertion sort
* Merge sort
* QuickSort
* Prim's MST (Adjacency List)
* Dijkstra's Shortest Path (Adjacency List)

### Supported Data Structures
* Singly linked list
* Doubly linked list
* Queue
* Stack
* Graph with Adjacency List
* Graph with Adjacency Matrix (untested)

### How It Works

Make sure you have [Node.js](https://nodejs.org/en/) and yarn installed: `npm install --global yarn`

clone the repo and install the dependencies

```bash
yarn install
```

edit the `ligma.config.js` file
```javascript
module.exports = {
    dsa: [
        "InsertionSort",
        "MergeSort",
        "Queue",
        "Stack",
        "QuickSort",
        "DijkstraList",
        "PrimsList",
    ],
}
```

create a day of katas, this will use the list in the `ligma.config.js`.
```bash
yarn generate
```

this will progressively create folders named

```
src/day1
src/day2
...
```

`yarn generate` will also update the `tsconfig.json` and `jest.config` to point
the latest `day` folder via tspaths.  This allows us to avoid updating anything
for testing each day.

#### Testing
```
yarn test
```

I have yet to create a testing strategy for next sets of algorithms, but we
will get there when i cross that bridge.
