import styles from './buttons.module.css'

const Buttons = ({ text, fn }) => {
return (
  <div>

    <button className={styles.glowonhover} onClick={fn}>{text}</button>
    </div>
)
}

export default Buttons