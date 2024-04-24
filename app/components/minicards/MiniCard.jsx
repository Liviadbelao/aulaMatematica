import styles from './minicard.module.css'

const MiniCard = ({ children, cor }) => {
    return (
        <div className={styles.registrosreceitasitem} style={{ backgorundColor: { cor } }} >
            {children}
        </div>

    )
}
export default MiniCard

