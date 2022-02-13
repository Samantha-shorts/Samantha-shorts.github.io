import '../styles/tailwind.css'
import '../styles/globals.scss'
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import '../styles/swiper.scss';
import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {

  return (
    <Component {...pageProps} />
  )
}

export default MyApp
