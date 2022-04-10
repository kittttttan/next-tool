import type { NextPage } from 'next'
import Head from 'next/head'
import { useState } from 'react'
import styles from '../styles/TextUtil.module.css'

const TextUtil: NextPage = () => {
  const [text, setText] = useState('');

  function range(n: number): string {
    const as: number[] = [];
    if (n > 0) {
      for (let i = 0; i < n; i++) {
        as.push(i);
      }
    }

    return as.join('\n');
  }

  function rangeChar(n: number): string {
    let as: string[] = [];
    if (n > 0) {
      const a = 'a'.charCodeAt(0);
      for (let i = 0; i < n; i++) {
        as.push(String.fromCharCode(a + i));
      }
    }

    return as.join('\n');
  }

  function lower(s: string): string {
    return s.toLowerCase();
  }

  function upper(s: string): string {
    return s.toUpperCase();
  }

  function sortLine(s: string): string {
    let ss: string[] = s.split('\n');
    ss = ss.sort();

    return ss.join('\n');
  }

  function sortNumericLine(s: string): string {
    let ss: string[] = s.split('\n');
    ss = ss.sort((a: string, b: string): number => {
      let reg: RegExp = /^\d+/;
      let as: RegExpMatchArray | null = a.match(reg);
      let bs: RegExpMatchArray | null = b.match(reg);
      let an: number = as ? +as[0] : 0;
      let bn: number = bs ? +bs[0] : 0;

      return an - bn;
    });

    return ss.join('\n');
  }

  function reverseLine(s: string): string {
    let ss: string[] = s.split('\n');
    ss = ss.reverse();

    return ss.join('\n');
  }

  function removeBr(s: string): string {
    return s.replace(/[\r\n]+/g, '');
  }

  function removeBlankLine(s: string): string {
    return s.replace(/[\r\n]+/g, '\n');
  }

  return (
    <>
      <Head>
        <title>Text Utility</title>
      </Head>

      <h2>Text Utility</h2>
      <div>
        set:
        <button onClick={() => {
          setText(range(16))
        }}>numbers</button>
        <button onClick={() => {
          setText(rangeChar(26))
        }}>alphabet</button>
      </div>
      <div>
        convert:
        <button onClick={() => {
          setText(lower(text))
        }}>lower</button>
        <button onClick={() => {
          setText(upper(text))
        }}>upper</button>
      </div>
      <div>
        sort lines:
        <button onClick={() => {
          setText(sortLine(text))
        }}>sort</button>
        <button onClick={() => {
          setText(sortNumericLine(text))
        }}>numeric sort</button>
        <button onClick={() => {
          setText(reverseLine(text))
        }}>reverse</button>
      </div>
      <div>
        line break:
        <button onClick={() => {
          setText(removeBr(text))
        }}>remove line breakes</button>
        <button onClick={() => {
          setText(removeBlankLine(text))
        }}>remove blank lines</button>
      </div>
      <div>
        <textarea placeholder="multiline text here"
          value={text} className={styles.textarea}
          onChange={(e) => setText(e.target.value)}
        ></textarea>
        <output>{text.length}</output>
      </div>
    </>
  )
}

export default TextUtil
