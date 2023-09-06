import {resolve} from 'node:path'
import fs from 'fs-extra'

export const fetchBook = async () => {

  const bookInfo = await fs.readFile(
    resolve(process.cwd(), './manuscript/book.txt'),
    'utf-8'
  )

  return bookInfo
    .split('\r\n')
    .filter((item) => item.endsWith('.md'))
    .map((item) => resolve(process.cwd(), `./manuscript/${item}`))
}