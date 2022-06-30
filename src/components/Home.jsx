import React from "react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getApiChannels } from "../actions";
import Card from "./Card";
import styles from '../Style/Home.module.css';
import NavBar from "./NavBar";
import Aside from "./Aside";

export default function Home(){
  
  const dispatch = useDispatch();
  const channels = useSelector((state) => state.channels);

  useEffect(()=>{
    dispatch(getApiChannels());
  },[]) 

  return(
      <div className={styles.allContainer}>
        <Aside />
        <div className={styles.cardContainer}>
          <NavBar />
          <div className={styles.channelContainer}>
            <h2 className={styles.cardH2}>Podcasts recomendados</h2>
            <Card channels = {channels}/>
          </div>
        </div>
      </div>
  )
}

