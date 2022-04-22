import type { NextPage } from 'next'
import Head from 'next/head'
import { useState } from 'react'
import {
  range,
  rangeChar,
  sortLine,
  sortNumericLine,
  reverseLine,
  removeBr,
  removeBlankLine,
  escapeHtml,
  unescapeHtml,
  stripHtml
} from 'utils/string'
import styles from 'styles/TextUtil.module.css'

const TextUtil: NextPage = () => {
  const [text, setText] = useState('');

  return (
    <>
      <Head>
        <title>Text Utility</title>
      </Head>

      <h2>Text Utility</h2>
      <div>
        set:
        <button onClick={e => setText(range(16))}>numbers</button>
        <button onClick={e => setText(rangeChar(26))}>alphabet</button>
      </div>
      <div>
        convert:
        <button onClick={e => setText(text.toLowerCase())}>lower</button>
        <button onClick={e => setText(text.toUpperCase())}>upper</button>
      </div>
      <div>
        sort lines:
        <button onClick={e => setText(sortLine(text))}>sort</button>
        <button onClick={e => setText(sortNumericLine(text))}>numeric sort</button>
        <button onClick={e => setText(reverseLine(text))}>reverse</button>
      </div>
      <div>
        line break:
        <button onClick={e => setText(removeBr(text))}>remove line breakes</button>
        <button onClick={e => setText(removeBlankLine(text))}>remove blank lines</button>
      </div>
      <div>
        html:
        <button onClick={e => setText(escapeHtml(text))}>escape</button>
        <button onClick={e => setText(unescapeHtml(text))}>unescape</button>
        <button onClick={e => setText(stripHtml(text))}>strip</button>
      </div>
      <div>
        <textarea placeholder="multiline text here"
          value={text} className={styles.textarea}
          onChange={e => setText(e.target.value)}
        ></textarea>
        <output>{text.length}</output>
      </div>
    </>
  )
}

export default TextUtil
