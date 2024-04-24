import Image from 'next/image';
import styles from './header.module.css';
import NavLink from '../navlink/NavLink.jsx'

export const Header = () => {
    return (
        <div className={styles.header}>
            <div className={styles.imageLogo}>
                <Image className={styles.logo} src={'/th-removebg-preview.png'} width={70} height={70} />
            </div>

            <div className={styles.links}>
                <div className={styles.linka}>
                    <NavLink  rota={'/'} texto = {'Home'} />
                </div>

                <div className={styles.linka}>
                    
                    <NavLink  rota={'/academy'} texto = {'Cálculos'} />
                </div>
            </div>
        </div>
        );
}