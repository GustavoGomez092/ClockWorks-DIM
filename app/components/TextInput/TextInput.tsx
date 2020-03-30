import React from 'react'
import styles from './TextInput.css'

export default function TextInput(props:any) {
  return (
    <div style={props.style} className={styles.textInput}>
      <input type={props.type || 'text'} className={styles.input} placeholder={props.placeholder}  onChange={props.onChange}/>
      {props.error ? <p className={styles.error}>{props.error}</p> : null}
    </div>
  )
}
