import Link from 'next/link'
import Loader from '../components/Loader'
import styles from '../styles/Home.module.css'

const Home = () => {
  return (
    <div className={styles.container}>
      <Loader></Loader>
      <Link prefetch={false} href="/chris"><a>Chris' Sales</a></Link>
    </div>
  )
}

export default Home