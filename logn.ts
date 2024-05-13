import { htmlTree } from './htmlTree';
import { HTMLNodeType, type Node } from './types';

const htmlTreeLogN = htmlTree

function addNode(id: string, node: Node, tree: Node): boolean {
  if (tree.id === id) {
    tree.nodes.push(node);
    return true;
  }
  for (const child of tree.nodes) {
    if (addNode(id, node, child)) {
      return true;
    }
  }
  return false;
}
const newNode: Node = {
  id: 'new-node',
  type: HTMLNodeType.Paragraph,
  nodes: [],
  props: { text: 'This is a new paragraph.' },
};

console.time(`Execution Time: logn`);
const isSuccess = addNode('logo', newNode, htmlTreeLogN);
console.timeEnd(`Execution Time: logn`);

console.log(isSuccess ? 'Node added successfully' : 'Node not found');

export default htmlTreeLogN;
