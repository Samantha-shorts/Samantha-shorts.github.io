import type { NextPage } from 'next'
import Head from 'next/head'
import Step1 from '../components/home/step1'
import Step2 from '../components/home/step2'
import styles from '../styles/Home.module.scss'

const Home: NextPage = () => {
  return (
    <div className={styles.root}>
      <Head>
        <title>SAMANSA</title>
      </Head>
      <Step1 />
      <Step2 />
    </div>
  )
}

export default Home
