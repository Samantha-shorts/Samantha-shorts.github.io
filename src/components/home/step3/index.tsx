import { NextPage } from 'next'
import styles from "./styles.module.scss"
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const Step3: NextPage = () => {
  return (
    <div className={styles.step3}>
      <h2 className={styles.subtitle}>よくある質問</h2>
      <Accordion className={styles.accordion}>
        <AccordionSummary
          className={styles.accordionSummary}
          expandIcon={<ExpandMoreIcon className={styles.expandMoreIcon} />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Q. 月額はいくらですか？</Typography>
        </AccordionSummary>
        <AccordionDetails className={styles.accordionDetails}>
          <Typography>
            A. 月額250円です
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion className={styles.accordion}>
        <AccordionSummary
          className={styles.accordionSummary}
          expandIcon={<ExpandMoreIcon className={styles.expandMoreIcon} />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Q. 無料トライアルが終わったら自動的に課金されますか？</Typography>
        </AccordionSummary>
        <AccordionDetails className={styles.accordionDetails}>
          <Typography>
            A. カード登録不要の無料トライアルですので、自動課金や請求が来ることはありません
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion className={styles.accordion}>
        <AccordionSummary
          className={styles.accordionSummary}
          expandIcon={<ExpandMoreIcon className={styles.expandMoreIcon} />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Q. 無料トライアルが終わったらどうなりますか？</Typography>
        </AccordionSummary>
        <AccordionDetails className={styles.accordionDetails}>
          <Typography>
            A. アカウントはそのまま保持いただけますが、作品がご視聴できなくなります。
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion className={styles.accordion}>
        <AccordionSummary
          className={styles.accordionSummary}
          expandIcon={<ExpandMoreIcon className={styles.expandMoreIcon} />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Q. 支払い方法は何がありますか？</Typography>
        </AccordionSummary>
        <AccordionDetails className={styles.accordionDetails}>
          <Typography>
            A. 現時点ではクレジットカードまたはデビットカードのみのお支払いとなっております
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion className={styles.accordion}>
        <AccordionSummary
          className={styles.accordionSummary}
          expandIcon={<ExpandMoreIcon className={styles.expandMoreIcon} />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Q. 認証メールが届きません</Typography>
        </AccordionSummary>
        <AccordionDetails className={styles.accordionDetails}>
          <Typography>
            A. 迷惑メールをご確認ください。それでも見当たらない場合は、info@samanthajpn.comまでご連絡ください
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion className={styles.accordion}>
        <AccordionSummary
          className={styles.accordionSummary}
          expandIcon={<ExpandMoreIcon className={styles.expandMoreIcon} />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Q. どうやったら解約できますか？</Typography>
        </AccordionSummary>
        <AccordionDetails className={styles.accordionDetails}>
          <Typography>
            A. 解約はアプリではなくウェブ版で行っていただく必要があります。アカウントにログインをしていただき、右上のプロフィール画面をクリックしていただくと、「解約」ボタンが出てきます。
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion className={styles.accordion}>
        <AccordionSummary
          className={styles.accordionSummary}
          expandIcon={<ExpandMoreIcon className={styles.expandMoreIcon} />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Q. 合法サイトですか？</Typography>
        </AccordionSummary>
        <AccordionDetails className={styles.accordionDetails}>
          <Typography>
            A. はい。SAMANSAでは全てのクリエイターとライセンス契約をしております
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion className={styles.accordion}>
        <AccordionSummary
          className={styles.accordionSummary}
          expandIcon={<ExpandMoreIcon className={styles.expandMoreIcon} />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Q. 課金はどこですればいいですか？</Typography>
        </AccordionSummary>
        <AccordionDetails className={styles.accordionDetails}>
          <Typography>
            A. アプリではなくウェブ版でカード登録が必要になります。アカウントにログインしていただき、右上のプロフィールボタンを押すと「支払い」ボタンが出てきます
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion className={styles.accordion}>
        <AccordionSummary
          className={styles.accordionSummary}
          expandIcon={<ExpandMoreIcon className={styles.expandMoreIcon} />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Q. サービスについて質問があるのですが、どこに連絡をすればいいですか？</Typography>
        </AccordionSummary>
        <AccordionDetails className={styles.accordionDetails}>
          <Typography>
            A. info@samanthajpn.comまでご連絡ください
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  )
}

export default Step3