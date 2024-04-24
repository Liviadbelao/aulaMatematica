import styles from './listitem.module.css';

const ListItem = ({ children, genero }) => {
  return (
    <div>
      <div className={styles.personsbox} id={styles[genero]}>{children}</div>
    </div>
  );
};

export default ListItem;