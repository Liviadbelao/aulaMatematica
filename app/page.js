import Image from "next/image";

import { Header } from './components/Header/Header'
import styles from './page.module.css'


export default function Home() {
  return (
    <div>
        <Header/>
          <div className={styles.divMain}>
          <h1 className={styles.h1}>Faça seus cálculos aqui </h1>
          
          </div>
          
    </div>
  )
}
