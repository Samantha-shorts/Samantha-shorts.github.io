import { NextPage } from 'next'
import styles from "./styles.module.scss"

const Footer: NextPage = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.footerHead}>
        <div className={styles.snsList}>
          <a href="https://twitter.com/samanthajpn"
            target="blank">
            <img src="/images/sns/Twitter.svg" alt="" />
          </a>
          <a href="https://www.facebook.com/samansaJPN/"
            target="blank">
            <img src="/images/sns/FB.svg" alt="" />
          </a>
          <a href="https://www.instagram.com/samansajpn/"
            target="blank">
            <img src="/images/sns/IG.svg" alt="" />
          </a>
          <a href="https://www.youtube.com/channel/UCv-HBPyWdeUW_t5bpR8_XPQ"
            target="blank">
            <img src="/images/sns/Youtube.svg" alt="" />
          </a>
          <a href="https://www.tiktok.com/@samansajp" target="blank">
            <img src="/images/sns/Tiktok.svg" alt="" />
          </a>
        </div>
        <div className={styles.linkList}>
          <a href="https://www.aboutsamansa.com/" target="blank">運営会社</a>
          <a href="https://www.aboutsamansa.com/#:~:text=ご不明な点やご質問がありましたら、ぜひお気軽にご連絡ください。" target="blank">お問い合わせ</a>
          {/* <a>料金について</a> */}
          <a href="#qa">Q&A</a>
          <a href="https://www.aboutsamansa.com/#:~:text=Others-,利用規約,-プライバシーポリシー" target="blank">利用規約</a>
          <a href="https://www.aboutsamansa.com/#:~:text=利用規約-,プライバシーポリシー,-個人情報保護" target="blank">プライバシーポリシー</a>
          {/* <a href="https://samansa.com/filmmakers/" target="blank">クリエイターはこちら</a> */}
        </div>
      </div>
      <div className={styles.footerLogo}>
        <img src="/images/logo.png" />
        <div>Copyright© Samantha. All Rights Reserved.</div>
      </div>
    </div>
  )
}

export default Footer