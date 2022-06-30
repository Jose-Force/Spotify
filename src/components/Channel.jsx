import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from 'react-router-dom';
import { getApiAudio} from "../actions";
import Characters from "./Characters";
import Aside from "./Aside";
import NavBar from "./NavBar";
import Header from "./Header";
import styles from '../Style/Channel.module.css';

export default function Channel(){
  const dispatch = useDispatch();
  const {id} = useParams();

  useEffect(() => {
    dispatch(getApiAudio(id))
  }, [dispatch, id,])

  const allAudioClips = useSelector((state)=>state.audioClips)


  return (
    <div className={styles.channelContainer}>
      <Aside />
      <div>
        <div>
          <NavBar />
        </div>
        <Header allAudioClips={allAudioClips} />
        <div>
          <p className={styles.epi}>Todos los episodios</p>
          <Characters allAudioClips={allAudioClips} />
        </div>
      </div>
    </div>
  )
}