import styles from './inputs.module.css'

const Input = ({ valor, tipo, nome, pl, oc  }) => {
return (
  <div>
    <input className={styles.inputdescription} value={valor} type={tipo} name={nome} placeholder={pl} onChange={oc} />
  </div>
)
}

export default Input