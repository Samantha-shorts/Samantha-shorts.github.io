import { NextPage } from "next"
import styles from "./styles.module.scss"
const Step1: NextPage = () => {
  return (
    <div className={styles.step1}>
      <img className={styles.logo} src="/images/logo.png" />
      <h1 className={styles.title}>世界のショート映画を<span>SAMANSA</span>で</h1>
      <p className={styles.txt}>
        SAMANSAは世界中の良質で面白いショート映画・ドラマ・ドキュメンタリーを発掘し、<br/>
        クリエイターと直接契約を交わして配信しているプラットフォームです。<br/>
      </p>
      <h2 className={styles.subtitle}>料金プラン</h2>
      <p className={styles.txt}>
        クレジットカードの登録が不要でご利用いただけます。<br/>
        2週間トライアル付き(以降月額250円)。<br/>
        ※トライアル終了後は自動課金ではありません。
      </p>

      <div className={styles.boxes}>
        <div className={styles.box}>
          <p>
            月額<br/>
            <span className={styles.big}>250</span>円
          </p>
        </div>
        <div className={styles.box}>
          <p>
            14日間<br/>
            <span>無料</span>体験
          </p>
        </div>
      </div>

      <div className={styles.btns}>
        <a href={process.env.REACT_APP_SAMANSA_URL}>
          <button className={styles.containedBtn}>
            今すぐ無料登録
          </button>
        </a>
        <a href={process.env.REACT_APP_SAMANSA_URL}>
          <button className={styles.outlinedBtn}>
            ログイン
          </button>
        </a>
      </div>
    </div>
  )
}

export default Step1