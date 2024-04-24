import styles from './cardreceita.module.css'

const CardReceita = ({ titulo, cor }) => {
    return (
      
            <div className={styles.card} style={{backgorundColor:cor}}>
                 <p className={styles.registrosreceitastitle}>{titulo}</p>
      
            </div>
     
    )
}
export default CardReceita