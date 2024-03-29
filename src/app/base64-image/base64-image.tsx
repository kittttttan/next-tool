'use client';

import { useState } from 'react'
import styles from './page.module.css'

export default function Base64Image() {
  const [code, setCode] = useState('')

  function readFile(files: FileList | null) {
    if (!files) {
      return;
    }

    const reader = new FileReader();
    reader.addEventListener('load', () => {
      setCode(reader.result as string)
    }, false)
    reader.readAsDataURL(files[0])
  }

  return (
    <>
      <div className={styles.input}>
        <input type="file" accept="image/*"
          onChange={(e) => readFile(e.target.files)} /><br />
        <input type="text" placeholder="data:image/jpeg;base64,/9j/4AAQ..."
          className={styles.code}
          value={code}
          onChange={(e) => setCode(e.target.value)} />
      </div>
      <div className={styles.img}>
        <img src={code} alt="blank image" />
      </div>
    </>
  )
}
