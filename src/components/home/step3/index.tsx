import { NextPage } from 'next'
import styles from "./styles.module.scss"

const Step3:NextPage = () => {
  return (
    <div className={styles.step3}>
      <h2 className={styles.subtitle}>よくある質問</h2>
      <div className={styles.question}>
        <p>Q. samansa.jp (12月7日以前)に登録したアカウントはどうなりますか？</p>
        <img src="/images/angle-down-solid.svg" alt="" />
      </div>
      <div className={styles.question}>
        <p>Q. samansa.jp (12月7日以前)に登録したアカウントはどうなりますか？</p>
        <img src="/images/angle-down-solid.svg" alt="" />
      </div>
      <div className={styles.question}>
        <p>Q. samansa.jp (12月7日以前)に登録したアカウントはどうなりますか？</p>
        <img src="/images/angle-down-solid.svg" alt="" />
      </div>
    </div>
  )
}

export default Step3