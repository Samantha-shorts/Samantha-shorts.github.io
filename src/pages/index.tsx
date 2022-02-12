import type { NextPage } from 'next'
import Step1 from '../components/step1'
import styles from '../styles/Home.module.scss'

const Home: NextPage = () => {
  return (
    <div className={styles.root}>
      <Step1 />
    </div>
  )
}

export default Home
