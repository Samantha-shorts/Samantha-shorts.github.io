import type { NextPage } from 'next'
import Head from 'next/head'
import Step3 from 'src/components/home/step3'
import Step4 from 'src/components/home/step4'
import Step5 from 'src/components/home/step5'
import Step1 from 'src/components/home/step1'
import Step2 from 'src/components/home/step2'
import Footer from 'src/components/home/footer'
import styles from 'src/styles/Home.module.scss'

const Home: NextPage = () => {
  return (
    <div className={styles.root}>
      <Head>
        <title>SAMANSA</title>
      </Head>
      <Step1 />
      <Step2 />
      <Step3 />
      <Step4 />
      <Step5 />
      <Footer />
    </div>
  )
}

export default Home
