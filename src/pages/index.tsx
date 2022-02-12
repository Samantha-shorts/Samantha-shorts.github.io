import type { NextPage } from 'next'
import Head from 'next/head'
import Step1 from '../components/home/step1'
import styles from '../styles/Home.module.scss'

const Home: NextPage = () => {
  return (
    <div className={styles.root}>
      <Head>
        <title>SAMANSA</title>
      </Head>
      <Step1 />
    </div>
  )
}

export default Home
