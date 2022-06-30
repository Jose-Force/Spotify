import React from "react";
import { Link } from "react-router-dom";
import styles from '../Style/Card.module.css';

export default function Card({channels}){

  return(
    <div className={styles.cardContainer}>
      {
        channels.map(e =>{
          return(
            <Link to={"/Channel/" + e.id}>
              <div key = {e.id} className = {styles.card}>
                <div className={styles.imgContainer}>
                  <img src= {e.urls.logo_image.original} alt='Img not found'/>
                </div>
                <div className={styles.title}>{e.title}</div>
                <div className={styles.type}>{e.channel_style}</div>
              </div>
            </Link>
          )
        })
      }
    </div>
  )
}