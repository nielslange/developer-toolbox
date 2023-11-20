---
description: >-
  Breadth-first search is an algorithm for traversing or searching tree or graph
  data structures, exploring all neighbor nodes at the present depth before
  moving to nodes at the next depth level.
---

# Breadth First Search

Breadth-first search (BFS) is an algorithm that is used to traverse a tree or graph data structure. It starts at the root node and explores all the neighbouring nodes at the current depth level before moving on to the nodes at the next depth level.

To implement the breadth-first search, you would typically use a queue data structure to store the nodes that are waiting to be processed. At each step, you would remove the first node from the queue, process it, and add its children to the end of the queue. This process continues until all the nodes have been processed.

### Example in TypeScript

```typescript
function breadthFirstSearch(root: SearchNode): void {
  const queue = [root];

  while (queue.length > 0) {
    const current: any = queue.shift();
    console.log(current.value);

    for (const child of current.children) {
      queue.push(child);
    }
  }
}

class SearchNode {
  value: string;
  children: SearchNode[];

  constructor(value: string, children: SearchNode[]) {
    this.value = value;
    this.children = children;
  }
}
```

#### Usage

```typescript
const root = new SearchNode('A', [
  new SearchNode('B', [
    new SearchNode('D', []),
    new SearchNode('E', [])
  ]),
  new SearchNode('C', [
    new SearchNode('F', [])
  ])
]);

breadthFirstSearch(root); // Outputs: "A" "B" "C" "D" "E" "F"
```

In this example, the `breadthFirstSearch` function takes in a root node as an argument and uses a queue to store the nodes that are waiting to be processed. It processes each node by printing its value to the console, and adds its children to the end of the queue. This process continues until all the nodes have been processed.

\
