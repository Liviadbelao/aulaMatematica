import styles from './buttonsact.module.css'

const ButtonsAct = ({ on, text, cor }) => {
return (
  <div>
    <button style={{backgroundColor: cor}} className={styles.buttons} onClick={on} >{text}</button>
    </div>
)
}

export default ButtonsAct