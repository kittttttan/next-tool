'use client';

import { useState } from 'react'
import styles from './page.module.css'

export default function Localize() {
  const [text, setText] = useState('');
  const [iosText, setIosText] = useState('');
  const [androidText, setAndroidText] = useState('');

  function format(s: string): void {
    setText(s);
    setIosText(toIos(s));
    setAndroidText(toAndroid(s));
  }

  function formatIos(s: string): void {
    setIosText(s);

    const t = fromIos(s);
    setText(t);
    setAndroidText(toAndroid(t));
  }

  function formatAndroid(s: string): void {
    setAndroidText(s);

    const t = fromAndroid(s);
    setText(t);
    setIosText(toIos(t));
  }

  function toIos(s: string): string {
    const lines = s.split('\n');

    let res = '';
    for (const line of lines) {
      const words = line.split('\t');
      if (!words || words.length < 2) { continue; }
      res += `"${words[0]}" = "${words[1].replace('\n', '\\n')}";\n`;
    }

    return res;
  }

  function fromIos(s: string): string {
    const lines = s.split('\n');

    let res = '';
    for (const line of lines) {
      const found = line.match(/"(.*)" *= *"(.*)";/);
      console.log(found);
      if (!found) { continue; }
      res += `${found[1]}\t${found[2]}\n`;
    }

    return res;
  }

  function toAndroid(s: string): string {
    const lines = s.split('\n');

    let res = '<resources>\n';
    for (const line of lines) {
      const words = line.split('\t');
      if (!words || words.length < 2) { continue; }
      res += `\t<string name="${words[0]}">${words[1].replace('\n', '\\n')}</string>\n`;
    }

    res += '</resources>\n';

    return res;
  }

  function fromAndroid(s: string): string {
    const lines = s.split('\n');

    let res = '';
    for (const line of lines) {
      const found = line.match(/<string name="(.*?)"[^>]*>(.*)<\/string>/);
      console.log(found);
      if (!found) { continue; }
      res += `${found[1]}\t${found[2]}\n`;
    }

    return res;
  }

  return (
    <>
      <div className={styles.texts}>
        <div>
          <textarea placeholder="multiline text here"
            value={text} className={styles.textarea}
            onChange={e => format(e.target.value)}
          ></textarea>
        </div>
        <div>
          <textarea placeholder="iOS Localized String here"
            value={iosText} className={styles.textarea}
            onChange={e => formatIos(e.target.value)}
          ></textarea>
        </div>
        <div>
          <textarea placeholder="Android string here"
            value={androidText} className={styles.textarea}
            onChange={e => formatAndroid(e.target.value)}
          ></textarea>
        </div>
      </div>
    </>
  )
}
