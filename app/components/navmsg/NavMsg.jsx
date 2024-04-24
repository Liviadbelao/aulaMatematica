import styles from './navmsg.module.css'


const NavMsg = ({ msg, type }) => {
    return (
        <div className={styles.msg} id={styles[type]} >
            <p>{msg}</p>
        </div>


    )
}

export default NavMsg