import { remark } from 'remark' // v13以降は不要
import html from 'remark-html'
import gfm from 'remark-gfm'
import parse from 'remark-parse'
import { unified } from 'unified'

export default async function markdownToHtml(markdown: string) {
  const result = await unified()
    .use(parse)
    .use(html)
    .use(gfm)
    .process(markdown)
  return result.toString()
}
