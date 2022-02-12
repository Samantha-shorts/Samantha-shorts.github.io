import { NextPage } from 'next'
import { useInView } from 'react-intersection-observer';
import styles from "./styles.module.scss"

const Step2:NextPage = () => {

  const { ref, inView } = useInView({
    rootMargin: '-1000px',
    triggerOnce: true,
  });

  return (
    <div className={styles.step2}>
      <div
        className={`${inView ? "opacity-100" : "opacity-0 translate-y-[5%]"} duration-[1s]`}
        ref={ref}
      >
        
      </div>
    </div>
  )
}

export default Step2