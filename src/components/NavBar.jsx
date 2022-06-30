import React from "react";
import styles from '../Style/NavBar.module.css';
import { Link } from "react-router-dom";

export default function NavBar(){



  return(
    <Link to ='/'><div className={styles.navContainer}> <button>&lt;</button> </div></Link>
  )
}