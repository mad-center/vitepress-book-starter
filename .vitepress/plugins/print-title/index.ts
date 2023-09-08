// playground: https://markdown-it.github.io/
// input # test
// [
//   {
//     "type": "heading_open",
//     "tag": "h1",
// ......
//  {
//     "type": "inline",
//     "tag": "",
// ......
//   {
//     "type": "heading_close",
//     "tag": "h1",

import type MarkdownIt from 'markdown-it';

export const printTitlesPlugin = (md: MarkdownIt) => {
  // 记录当前标题级别的栈
  const titleLevels: number[] = [];

  // 注册处理标题标记的规则
  md.core.ruler.push('print-titles', (state) => {
    const tokens = state.tokens;

    for (let i = 0; i < tokens.length; i++) {
      const token = tokens[i];

      if (token.type === 'heading_open') {
        // 获取标题级别
        const level = parseInt(token.tag.substr(1), 10);

        // 获取标题文本内容
        const nextToken = tokens[i + 1];
        const titleText = nextToken && nextToken.type === 'inline' ? nextToken.content : '';

        // 打印标题文本内容
        console.log(`Title Level ${level}: ${titleText}`);

        // 更新标题级别栈
        titleLevels.push(level);
      } else if (token.type === 'heading_close') {
        // 弹出标题级别栈
        titleLevels.pop();
      }
    }
  });
};
