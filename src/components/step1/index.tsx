import { NextPage } from "next"
import styles from "./styles.module.scss"

const Step1: NextPage = () => {
  return (
    <div className={styles.step1}>
      <img src="/images/logo.png" />
      <h1>世界のショート映画をSAMANSAで</h1>
      <p>
        SAMANSAは世界中の良質で面白いショート映画・ドラマ・ドキュメンタリーを発掘し、<br/>
        クリエイターと直接契約を交わして配信しているプラットフォームです。<br/>
      </p>
      <h2>料金プラン</h2>
      <p>
        クレジットカードの登録が不要でご利用いただけます。<br/>
        2週間トライアル付き(以降月額250円)。<br/>
        ※トライアル終了後は自動課金ではありません。
      </p>
    </div>
  )
}

export default Step1