# Breadth First Search

Breadth First Search (BFS) is an algorithm that is used to traverse a tree or graph data structure. It starts at the root node and explores all the neighboring nodes at the current depth level before moving on to the nodes at the next depth level.

To implement breadth-first search, you would typically use a queue data structure to store the nodes that are waiting to be processed. At each step, you would remove the first node from the queue, process it, and add its children to the end of the queue. This process continues until all the nodes have been processed.

### Example in TypeScript

```typescript
function breadthFirstSearch(root: Node): void {
  const queue = [root];

  while (queue.length > 0) {
    const current = queue.shift();
    console.log(current.value);

    for (const child of current.children) {
      queue.push(child);
    }
  }
}

class Node {
  value: string;
  children: Node[];

  constructor(value: string, children: Node[]) {
    this.value = value;
    this.children = children;
  }
}

const root = new Node('A', [
  new Node('B', [
    new Node('D', []),
    new Node('E', [])
  ]),
  new Node('C', [
    new Node('F', [])
  ])
]);

breadthFirstSearch(root);
```

In this example, the `breadthFirstSearch` function takes in a root node as an argument and uses a queue to store the nodes that are waiting to be processed. It processes each node by printing its value to the console, and adds its children to the end of the queue. This process continues until all the nodes have been processed.

\
