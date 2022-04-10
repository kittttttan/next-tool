import type { NextPage } from 'next'
import Head from 'next/head'
import { useState } from 'react'
import styles from '../styles/BinHex.module.css'

const BinHex: NextPage = () => {
  const [text, setText] = useState('')

  function handleFiles(files: FileList | null): void {
    console.log(files);
    if (!files) {
      return;
    }

    setText('');
    for (let file of files as any) {
      const fileReader: FileReader = new FileReader();
      fileReader.onloadend = (event: Event) => {
        const buffer = (event.target as FileReader).result as ArrayBuffer;
        setText(text + format(buffer));
      };
      fileReader.readAsArrayBuffer(file);
    }
  }

  function format(buffer: ArrayBuffer): string {
    let hex: string = '';
    const bin: Uint8Array = new Uint8Array(buffer);
    for (let b of bin as any) {
      hex += ('0' + b.toString(16)).slice(-2);
    }

    return hex.toUpperCase();
  }

  function hexToBin(hex: string): Blob {
    const size: number = hex.length >> 1;
    const bin: Uint8Array = new Uint8Array(size);
    for (let i: number = 0; i < size; ++i) {
      const pos: number = i << 1;
      const str: string = hex.substring(pos, pos + 2);
      bin[i] = parseInt(str, 16);
    }

    return new Blob([bin], {
      type: 'application/octet-binary'
    });
  }

  return (
    <>
      <Head>
        <title>Bin ↔ Hex</title>
      </Head>

      <h2>Bin ↔ Hex</h2>
      <div className={styles.input}>
        <input type="file" id="file" multiple={true}
          onChange={(e) => handleFiles(e.target.files)} /><br />
        <textarea id="ta1" placeholder="00FF or drop file here"
          value={text} className={styles.textarea}
          onChange={(e) => setText(e.target.value)}
          onDragEnter={(e) => {
            e.stopPropagation();
            e.preventDefault();
          }}
          onDragOver={(e) => {
            e.stopPropagation();
            e.preventDefault();
          }}
          onDrop={(e) => {
            e.stopPropagation();
            e.preventDefault();
            handleFiles(e.dataTransfer!.files);
          }}
        ></textarea>
      </div>
      <div>
        <button onClick={() => {
          const blob: Blob = hexToBin(text.replace(/[ \r\n\t]/g, ''));
          const url: string = URL.createObjectURL(blob);
          document.location.href = url;
        }}>to Bin</button>
      </div>
    </>
  )
}

export default BinHex
