import htmlTreeIndex from './fnindex';
import htmlTreeInteractive from './interactive';
import htmlTreeLogN from './logn';
import { HTMLNodeType, type Node } from './types';
const fs = require('fs').promises;

function nodeTypeToTag(type: HTMLNodeType): string {
  switch (type) {
    case HTMLNodeType.Html:
        return 'html';
    case HTMLNodeType.Link:
        return 'link';
    case HTMLNodeType.Head:
      return 'head';
    case HTMLNodeType.Body:
      return 'body';
    case HTMLNodeType.Scripts:
      return 'script';
    case HTMLNodeType.Header:
      return 'header';
    case HTMLNodeType.Main:
      return 'main';
    case HTMLNodeType.Footer:
      return 'footer';
    case HTMLNodeType.Section:
      return 'section';
    case HTMLNodeType.Article:
      return 'article';
    case HTMLNodeType.Div:
      return 'div';
    case HTMLNodeType.Paragraph:
      return 'p';
    case HTMLNodeType.Title:
      return 'h1';
    case HTMLNodeType.List:
      return 'ul';
    default:
      return 'div';
  }
}

function nodeToHTML(node: Node): string {
    const tag = nodeTypeToTag(node.type);
    let attrs = '';
  
    if (node.props) {
      for (const [key, value] of Object.entries(node.props)) {
        if (key === 'class' || key === 'href' || key === 'rel' || key === 'src') {
          attrs += ` ${key}="${value}"`;
        }
      }
    }
  
    const children = node.nodes.map(nodeToHTML).join('');
    
    if (tag === 'link') {
      return `<${tag}${attrs} />`;
    } else if ( tag === 'script') {
        return `<${tag}${attrs}></${tag}>`;
    } else if (node.props && node.props.text) {
      return `<${tag}${attrs}>${node.props.text}${children}</${tag}>`;
    } else {
      return `<${tag}${attrs}>${children}</${tag}>`;
    }
  }

function generateHTML(tree: Node): string {
  const content = nodeToHTML(tree);
  return `<!DOCTYPE html>
  ${content}
  `;
}

async function writeHTMLToFile(
  filename: string,
  content: string
): Promise<void> {
  try {
    await fs.writeFile(filename, content);
    console.log(`${filename} has been saved successfully.`);
  } catch (err) {
    console.error(`Error writing to ${filename}`, err);
  }
}

const logN = generateHTML(htmlTreeLogN);
const interactive = generateHTML(htmlTreeInteractive);
const index = generateHTML(htmlTreeIndex);

async function saveHTMLFiles() {
  await writeHTMLToFile('logn.html', logN);
  await writeHTMLToFile('interactive.html', interactive);
  await writeHTMLToFile('index.html', index);
}
saveHTMLFiles();
