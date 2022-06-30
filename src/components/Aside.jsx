import React from "react";
import styles from '../Style/Aside.module.css';
import logo from "../image/Logo.png";

export default function Aside(){
  return(
   <div className={styles.asideContainer}>
     <div >
      <img src={logo}/>
      <p>Inicio</p>
      <p>Buscar</p>
      <p>Tu biblioteca</p>
      </div>
   </div>
  )
}