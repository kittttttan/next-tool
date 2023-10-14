'use client';

import { useState } from 'react'
import { format, hexToBin } from '@/utils/hex'
import styles from './page.module.css'

export default function BinHex() {
  const [text, setText] = useState('')

  function handleFiles(files: FileList | null): void {
    console.log(files)
    if (!files) {
      return
    }

    setText('')
    for (let file of files as any) {
      const fileReader = new FileReader()
      fileReader.onloadend = (event) => {
        const buffer = event.target?.result as ArrayBuffer
        setText(text + format(buffer))
      }
      fileReader.readAsArrayBuffer(file)
    }
  }

  return (
    <>
      <div className={styles.input}>
        <input type="file" multiple={true}
          onChange={(e) => handleFiles(e.target.files)} /><br />
        <textarea placeholder="00FF or drop file here"
          value={text} className={styles.textarea}
          onChange={(e) => setText(e.target.value)}
          onDragEnter={(e) => {
            e.stopPropagation()
            e.preventDefault()
          }}
          onDragOver={(e) => {
            e.stopPropagation()
            e.preventDefault()
          }}
          onDrop={(e) => {
            e.stopPropagation()
            e.preventDefault()
            handleFiles(e.dataTransfer!.files)
          }}
        ></textarea>
      </div>
      <div>
        <button onClick={() => {
          const blob = hexToBin(text.replace(/[ \r\n\t]/g, ''))
          const url = URL.createObjectURL(blob)
          document.location.href = url
        }}>to Bin</button>
      </div>
    </>
  )
}
