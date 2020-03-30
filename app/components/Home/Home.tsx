import React from 'react';
import styles from './Home.css';
import TopBar from '../TopBar/TopBar';
import MainContainer from '../MainContainer/MainContainer';

export default function Home() {
  return (
    <div className={styles.home}>
      <TopBar />
      <MainContainer />
    </div>
  );
}
