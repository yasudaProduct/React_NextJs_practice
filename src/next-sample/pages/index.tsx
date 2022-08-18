import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import styled from 'styled-components'

const H1 = styled.h1`color: red;`

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        ...
        <H1>
          Welcome to <a href="https://nextjs.org">next.js!</a>
        </H1>
      </main>
    </div>
  )
}

export default Home