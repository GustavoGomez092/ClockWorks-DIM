import React from 'react';
import styles from './TopBar.css';
const { remote } = require('electron');

export default function TopBar() {
  return (
    <div className={styles.topBar}>
      <i className="fas fa-bars fa-lg draggable"></i>
      <p>Welcome user</p>
      <i className="fas fa-minus fa-lg" onClick={()=> remote?.BrowserWindow?.getFocusedWindow()?.minimize()}></i>
    </div>
  )
}
