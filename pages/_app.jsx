import Menu from '../components/Menu'
import '../styles/globals.css'

function MyApp({ Component, pageProps, router }) {
  return (
    <>
      <Menu key={router.route} />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
