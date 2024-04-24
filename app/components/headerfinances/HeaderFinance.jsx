import styles from './headerfinance.module.css'

const HeaderFinance = ({ nome, email }) => {
return (
  <div className={styles.profile}>
    <p className={styles.welcome}>Olá, {nome}</p>
    <p className={styles.useremail}>{email}</p>
    </div>
)
}

export default HeaderFinance