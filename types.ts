export enum HTMLNodeType {
  'Html',
  'Head',
  'Body',
  'Scripts',
  'Header',
  'Main',
  'Footer',
  'Section',
  'Article',
  'Div',
  'Paragraph',
  'Title',
  'List',
  'Link',
}

export type NodeProps = {
  class?: string;
  text?: string;
  href?: string;
  rel?: string;
  src?: string;
};

export type Node = {
  id: string;
  type: HTMLNodeType;
  nodes: Node[];
  props?: NodeProps;
};

export type NodeIndex = {
  [key: string]: Node;
};
