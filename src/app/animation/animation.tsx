'use client';

import styles from './page.module.css'

export default function Animation() {
    return (
      <>
        <div>
          <code>prefers-reduced-motion: <var className={styles.prm}></var></code>
        </div>
        <section>
          <h3>ふわふわ</h3>
          <div className={styles.display}>
            <div className={`${styles.block} ${styles.block1}`}>
              fuwa1
            </div>
            <div className={`${styles.block} ${styles.block2}`}>
              fuwa2
            </div>
            <div className={`${styles.block} ${styles.block3}`}>
              fuwa3
            </div>
          </div>
        </section>
      </>
    )
  }
  