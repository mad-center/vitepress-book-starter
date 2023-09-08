import type MarkdownIt from 'markdown-it'

export const imageLinkPlugin = (md: MarkdownIt) => {
  // remember the original image render func
  const image = md.renderer.rules.image!
  // custom image render func
  md.renderer.rules.image = (...args) => {
    // tokens 是一个包含所有解析后的 Markdown 标记的数组，
    // idx 表示当前要处理的图片标记在数组中的索引
    const [tokens, idx] = args
    const token = tokens[idx]

    const url = token.attrGet('src')!
    // 这里这是一个demo，实际上不需要这样处理
    // token.attrSet('src', `/manuscript/${url}`)
    console.log(`image link: ${url}`)

    return image(...args)
  }
}