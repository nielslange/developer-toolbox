# Depth First Search

Depth-first search (DFS) is a search algorithm that traverses a graph or tree data structure in a depth-ward motion, meaning that it explores as far as possible along each branch before backtracking. It is used to search through the nodes of a graph or tree in a specific order to find a particular node or to check if a path exists between two nodes.

### Example in TypeScript

```typescript
function depthFirstSearch(node: Node, target: any): boolean {
  if (node.data === target) {
    return true;
  }

  node.visited = true;

  for (const neighbor of node.neighbors) {
    if (!neighbor.visited) {
      if (depthFirstSearch(neighbor, target)) {
        return true;
      }
    }
  }

  return false;
}
```

#### Usage

```typescript
const root = new Node('A', [
  new Node('B', [
    new Node('D', []),
    new Node('E', [])
  ]),
  new Node('C', [
    new Node('F', [])
  ])
]);

depthFirstSearch(root, 'A');
```

This function takes in a starting `node` and a target value to search for. It marks the current node as visited and then checks if the data stored at the node is equal to the target value. If it is, it returns `true`. If not, it marks the current node as visited and then iterates through each of its neighbours. For each neighbour, it checks if it has been visited and, if not, calls the `depthFirstSearch()` function recursively on that neighbour. If the function returns `true` at any point, it immediately returns `true` to the caller. If the function finishes iterating through all the neighbours and has not yet returned `true`, it returns `false` to indicate that the target value was not found.
