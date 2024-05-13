import { htmlTree } from "./htmlTree";
import { HTMLNodeType, type Node } from "./types";

const htmlTreeInteractive = htmlTree;

function addNodeIterative(id: string, newNode: Node, tree: Node): boolean {
  const stack = [tree];

  while (stack.length > 0) {
    const currentNode = stack.pop();
    if (currentNode!.id === id) {
      currentNode!.nodes.push(newNode);
      return true;
    }
    currentNode!.nodes.forEach((child) => stack.push(child));
  }

  return false;
}

const newNode: Node = {
  id: 'new-node',
  type: HTMLNodeType.Paragraph,
  nodes: [],
  props: { text: 'This is a new paragraph.' },
};
console.time(`Execution Time: iteração`);
const isSuccess = addNodeIterative('first-article', newNode, htmlTreeInteractive);
console.timeEnd(`Execution Time: iteração`);

console.log(isSuccess ? 'Node added successfully' : 'Node not found');

export default htmlTreeInteractive;
