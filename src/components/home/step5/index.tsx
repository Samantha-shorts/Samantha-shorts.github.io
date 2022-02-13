import { NextPage } from 'next'
import styles from "./styles.module.scss"

const Step5:NextPage = () => {
  return (
    <div className={styles.step5}>
      <img className={styles.bg} src="/images/bg2.png" alt="" />
      <div className={styles.box}>
        <h2>世界のショート映画を<br className="pcNo"/><span>SAMANSA</span>で</h2>
        <a href="https://samansa.com">
          <button className={styles.containedBtn}>
            今すぐ無料登録
          </button>
        </a>
      </div>
    </div>
  )
}

export default Step5