import { KMRootNode, KMSubNode } from '../types';
const xmind = require('xmind');

export class Xmind {
  private filename: string;
  constructor(filename: string) {
    this.filename = filename;
  }

  process() {
    const workbook = xmind.open(this.filename);
    const primarySheet = workbook.getPrimarySheet();
    const rootTopic = primarySheet.rootTopic;
    const result: KMRootNode = {
      root: {},
      template: 'right',
      theme: 'fresh-blue-compat',
      version: '1.4.43',
    };

    const walkTopic = (topic: any) => {
      const item: KMSubNode = {
        data: {
          id: topic.id,
          text: topic.getTitle(),
          created: Date.now(),
        },
        children: [],
      };

      if (topic.children && topic.children.length) {
        item.children = topic.children.map((child: any) => walkTopic(child));
      }

      return item;
    };

    result.root = walkTopic(rootTopic);

    return result;
  }
}
