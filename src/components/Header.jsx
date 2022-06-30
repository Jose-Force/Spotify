import React from "react";
import styles from '../Style/Header.module.css';

export default function Header({allAudioClips, id}){

  return(
    <div>
     {allAudioClips.length > 0 ? 
      <div className={styles.headerContainer}>
        <div className={styles.imgHeader}><img src={allAudioClips[0].channel.urls.logo_image.original} alt='Img not found' /></div>
        <div className={styles.headerLetter}> 
        <p>PÓDCAST</p>
        <div className={styles.headerTitle}>{allAudioClips[0].channel.title}</div>
        <p>Spotify Studios</p>
        </div>
      </div> : null}
    </div>
  )

}