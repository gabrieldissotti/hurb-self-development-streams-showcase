import { useRef } from 'react'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  const video1 = useRef(null);
  const video2 = useRef(null);
  const video3 = useRef(null);
  
  function togglePlay(elementRef) { 
    if (elementRef.current.paused) 
      elementRef.current.play(); 
    else 
      elementRef.current.pause(); 
  } 
  
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>

        <p className={styles.description}>
          Passe o mouse encima para tocar o video
        </p>

        <div className={styles.grid}>
          <video
            id="video1"
            className={styles.card}
            onMouseOver={() => togglePlay(video1)}
            onMouseOut={() => togglePlay(video1)}
            ref={video1}
          >
            <source src="/api/video" type="video/mp4" />
          </video>

          <video
            id="video2"
            className={styles.card}
            onMouseOver={() => togglePlay(video2)}
            onMouseOut={() => togglePlay(video2)}
            ref={video2}
          >
            <source src="/api/video" type="video/mp4" />
          </video>

          <video
            id="video3"
            className={styles.card}
            onMouseOver={() => togglePlay(video3)}
            onMouseOut={() => togglePlay(video3)}
            ref={video3}
          >
            <source src="/api/video" type="video/mp4" />
          </video>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}
