'use client';

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
  stripHtml,
  noCase,
  camelCase,
  pascalCase,
  constCase,
} from '@/utils/string'
import styles from './page.module.css'
import type { Metadata } from 'next';
 
export const metadata: Metadata = {
  title: 'Text Utility',
}

export default function TextUtil() {
  const [text, setText] = useState('');

  return (
    <>
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
        <button onClick={e => setText(noCase(text))}>no case</button>
        <button onClick={e => setText(camelCase(text))}>camelCase</button>
        <button onClick={e => setText(pascalCase(text))}>PascalCase</button>
        <button onClick={e => setText(constCase(text))}>CONST_CASE</button>
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
