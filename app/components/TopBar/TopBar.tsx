import React from 'react';
import styles from './TopBar.css';
const { remote } = require('electron');

export default function TopBar() {
  return (
    <div className={styles.topBar}>
      <i className="fas fa-bars fa-lg draggable"></i>
      <p className='unselectable'>Welcome to DIM</p>
      <i className="fas fa-minus fa-lg unselectable" onClick={()=> remote?.BrowserWindow?.getFocusedWindow()?.minimize()}></i>
    </div>
  )
}
