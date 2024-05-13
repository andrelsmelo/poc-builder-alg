import { htmlTree } from "./htmlTree";
import { type Node, type NodeIndex, HTMLNodeType } from "./types";


const htmlTreeIndex = htmlTree;

const nodeIndex: NodeIndex = {};

function buildNodeIndex(node: Node) {
  nodeIndex[node.id] = node;
  node.nodes.forEach(buildNodeIndex);
}

buildNodeIndex(htmlTreeIndex);

function addNodeWithIndex(id: string, newNode: Node): boolean {
  const parent = nodeIndex[id];
  if (parent) {
    parent.nodes.push(newNode);
    buildNodeIndex(newNode);
    return true;
  }
  return false;
}

const xablauNode: Node = {
  id: 'xablau-node',
  type: HTMLNodeType.Paragraph,
  nodes: [],
  props: { text: 'Xablau' },
};

const xablau2Node: Node = {
  id: 'xablau-2-node',
  type: HTMLNodeType.Paragraph,
  nodes: [],
  props: { text: 'Xablau' },
};

console.time(`Execution Time: indexação`);
addNodeWithIndex('list-10-item2', xablau2Node);
addNodeWithIndex('footer-text', xablauNode);
console.timeEnd(`Execution Time: indexação`);

// console.log(isSuccess ? 'Node added successfully' : 'Node not found');
export default htmlTreeIndex;