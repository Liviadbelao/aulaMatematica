import styles from './minibuttons.module.css'

const MiniButtons = ({ icon, on }) => {
return (
  <div>
    <button onClick={on} className={styles.actionsbutton}>{icon}</button>
    </div>
)
}

export default MiniButtons