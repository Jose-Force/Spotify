import React from "react";
import mediaIcon from "../image/MediaIcon.png";
import styles from '../Style/Characters.module.css';

export default function Characters( {allAudioClips} ){
  return (
    <div>
      {
        allAudioClips.map(e=>{
          const min = e.duration/60
          const seg = (min - parseInt(min))*60
          return(
            <div key = {e.id}>
              <hr></hr>
              <div className={styles.charactersContainer}>
                <div className={styles.containerImg}><img src={e.user.urls.image} alt='Img not found'/></div>
                <div className={styles.containerTex}>
                  <div className={styles.title}>{e.title}</div>
                  {
                    e.description === undefined ? 
                    <div className={styles.description}>There is no description to display</div> : 
                    <div className={styles.description}>{e.description}</div> 
                  }
                  <div className={styles.containermedia}>
                    <div className={styles.media}><img src={mediaIcon}/></div>
                    <div>{parseInt(min)} min {parseInt(seg)} seg</div>
                  </div>
                </div>
              </div>
            </div>
          )
        })
      }
    </div>
  )
}
