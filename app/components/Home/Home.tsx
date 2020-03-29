import React from 'react';
import styles from './Home.css';
import TopBar from '../TopBar/TopBar';

export default function Home() {
  return (
    <div className={styles.home}>
      <TopBar />
    </div>
  );
}
