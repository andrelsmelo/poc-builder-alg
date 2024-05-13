import { HTMLNodeType, type Node } from './types';

export const htmlTree: Node = {
  id: 'html',
  type: HTMLNodeType.Html,
  nodes: [
    {
        id: 'head',
        type: HTMLNodeType.Head,
        nodes: [
          {
            id: 'title',
            type: HTMLNodeType.Title,
            nodes: [],
            props: { text: 'Generated HTML' },
          },
          {
            id: 'tailwind-css',
            type: HTMLNodeType.Scripts,
            nodes: [],
            props: { src: 'https://cdn.tailwindcss.com' },
          },
        ],
      },
    {
      id: 'document',
      type: HTMLNodeType.Body,
      nodes: [
        {
          id: 'header',
          type: HTMLNodeType.Header,
          nodes: [
            {
              id: 'nav',
              type: HTMLNodeType.Div,
              nodes: [
                {
                  id: 'logo',
                  type: HTMLNodeType.Title,
                  nodes: [],
                  props: { class: 'bg-dark text-white p-4', text: 'Logo Here' },
                },
                {
                  id: 'menu',
                  type: HTMLNodeType.List,
                  nodes: [
                    {
                      id: 'menu-item1',
                      type: HTMLNodeType.Paragraph,
                      nodes: [],
                      props: {
                        text: 'Home',
                        class: 'text-blue-500 hover:text-blue-700',
                      },
                    },
                    {
                      id: 'menu-item2',
                      type: HTMLNodeType.Paragraph,
                      nodes: [],
                      props: {
                        text: 'About',
                        class: 'text-blue-500 hover:text-blue-700',
                      },
                    },
                    {
                      id: 'menu-item3',
                      type: HTMLNodeType.Paragraph,
                      nodes: [],
                      props: {
                        text: 'Contact',
                        class: 'text-blue-500 hover:text-blue-700',
                      },
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          id: 'main',
          type: HTMLNodeType.Main,
          nodes: [
            {
              id: 'first-section',
              type: HTMLNodeType.Section,
              nodes: [
                {
                  id: 'first-article',
                  type: HTMLNodeType.Article,
                  nodes: [
                    {
                      id: 'title1',
                      type: HTMLNodeType.Title,
                      nodes: [],
                      props: {
                        class: 'text-2xl font-bold',
                        text: 'Article Title 1',
                      },
                    },
                    {
                      id: 'paragraph1',
                      type: HTMLNodeType.Paragraph,
                      nodes: [],
                      props: {
                        class: 'text-gray-700',
                        text: 'First paragraph of the article.',
                      },
                    },
                    {
                      id: 'list1',
                      type: HTMLNodeType.List,
                      nodes: [
                        {
                          id: 'list-item1',
                          type: HTMLNodeType.Paragraph,
                          nodes: [],
                          props: {
                            class: 'list-disc list-inside',
                            text: 'List item 1',
                          },
                        },
                        {
                          id: 'list-item2',
                          type: HTMLNodeType.Paragraph,
                          nodes: [],
                          props: {
                            class: 'list-disc list-inside',
                            text: 'List item 2',
                          },
                        },
                        {
                          id: 'list-item3',
                          type: HTMLNodeType.Paragraph,
                          nodes: [],
                          props: {
                            class: 'list-disc list-inside',
                            text: 'List item 3',
                          },
                        },
                      ],
                    },
                  ],
                },
              ],
            },
            ...Array.from({ length: 9 }, (_, i) => ({
              id: `section-${i + 2}`,
              type: HTMLNodeType.Section,
              nodes: [
                {
                  id: `article-${i + 2}`,
                  type: HTMLNodeType.Article,
                  nodes: [
                    {
                      id: `title-${i + 2}`,
                      type: HTMLNodeType.Title,
                      nodes: [],
                      props: {
                        class: 'text-2xl font-bold',
                        text: `Article Title ${i + 2}`,
                      },
                    },
                    {
                      id: `paragraph-${i + 2}-1`,
                      type: HTMLNodeType.Paragraph,
                      nodes: [],
                      props: {
                        class: 'text-gray-700',
                        text: `First paragraph of article ${i + 2}.`,
                      },
                    },
                    {
                      id: `paragraph-${i + 2}-2`,
                      type: HTMLNodeType.Paragraph,
                      nodes: [],
                      props: {
                        class: 'text-gray-700',
                        text: `Second paragraph of article ${i + 2}.`,
                      },
                    },
                    {
                      id: `list-${i + 2}`,
                      type: HTMLNodeType.List,
                      nodes: [
                        {
                          id: `list-${i + 2}-item1`,
                          type: HTMLNodeType.Paragraph,
                          nodes: [],
                          props: {
                            class: 'list-disc list-inside',
                            text: `List item ${i * 3 + 1}`,
                          },
                        },
                        {
                          id: `list-${i + 2}-item2`,
                          type: HTMLNodeType.Paragraph,
                          nodes: [],
                          props: {
                            class: 'list-disc list-inside',
                            text: `List item ${i * 3 + 2}`,
                          },
                        },
                        {
                          id: `list-${i + 2}-item3`,
                          type: HTMLNodeType.Paragraph,
                          nodes: [],
                          props: {
                            class: 'list-disc list-inside',
                            text: `List item ${i * 3 + 3}`,
                          },
                        },
                      ],
                    },
                  ],
                },
              ],
            })),
          ],
        },
        {
          id: 'footer',
          type: HTMLNodeType.Footer,
          nodes: [
            {
              id: 'footer-content',
              type: HTMLNodeType.Div,
              nodes: [
                {
                  id: 'footer-text',
                  type: HTMLNodeType.Paragraph,
                  nodes: [],
                  props: {
                    class: 'text-center text-gray-500 p-4',
                    text: 'Footer content here',
                  },
                },
              ],
            },
          ],
        },
      ],
    },
  ],
};
