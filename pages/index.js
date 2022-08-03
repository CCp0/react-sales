import Link from 'next/link'
import Loader from '../components/Loader'
import styles from '../styles/Home.module.css'
import toast from 'react-hot-toast';

const Home = () => {
  return (
    <div className={styles.container}>
      <Loader></Loader>
      <Link prefetch={false} href="/chris"><a>Chris' Sales</a></Link>
      <div>
      <button onClick={() => toast.success('hello toast!')}>
        Toast Me
      </button>
    </div>
    </div>
  )
}

export default Home