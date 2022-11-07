import MainMenu from './MainMenu/MainMenu'
import Footer from './Footer/Footer'
import styles from '../styles/Layout.module.scss'

const mainStyle = 'py-6'

const Layout = ({ children }) => {
  return (
    <div className={styles.container}>
     <MainMenu/>
        <main className={styles.main}>
          {children}
        </main>
      <Footer/>
    </div>
  )
}
export default Layout