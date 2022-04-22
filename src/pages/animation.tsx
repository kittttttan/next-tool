import type { NextPage } from 'next'
import Head from 'next/head'
import styles from 'styles/Animation.module.css'

const Animation: NextPage = () => {
  return (
    <>
      <Head>
        <title>Animation</title>
      </Head>

      <h2>Animation</h2>
      <div className={styles.warn}>
        <code>prefers-reduced-motion: reduce</code>
      </div>
      <section id="fuwa">
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

export default Animation
