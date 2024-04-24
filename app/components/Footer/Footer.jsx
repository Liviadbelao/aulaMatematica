


import Link from "next/link"

import styles from "./footer.module.css"
/* import { AiOutlineInstagram } from 'react-icons/Ai';
import { BsGithub } from 'react-icons/Bs'; */
/* import Home from "@/app/page"; */


export const Footer =()=>{
    return(
    <div className={styles.container}>
<div  className={styles.container2}>
     <p>Calculos Estatisticos</p>
   
     </div>
   
        <div className={styles.container2}>
     {/* <h3 className={styles.titulo}>Nossas Páginas</h3>
        <NavFooter rota={"./"} texto={'Home'}/>
        <NavFooter rota={"/academy"} texto={'cadastro'}/> */}
      
     </div>
     <div >
   {/*   <Link href={"https://linktr.ee/giuu509?utm_source=linktree_admin_share"} target="blanc">
     <AiOutlineInstagram className= {styles.icon}/>
</Link> */}
   {/*   <Link href={"https://github.com/Liviadbelao?tab=repositories"} target="blanc">
     <BsGithub  className= {styles.icon}/>
   </Link>
     <div className={styles.container3} >
     <NavFooter texto={'Todos os direitos reservados'} /> */}
   
     </div>
 
    </div>
    )
}
