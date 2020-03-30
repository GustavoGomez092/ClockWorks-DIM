import React from 'react'
import styles from './Button.css'

export default function Button (props:any) {
  return (
    <>
      <div style={props.style} onClick={props.onClick} className={props.color === 'success' ? styles['google-btn-success'] : styles['google-btn']}>
      { props.svgURL ?
        <div className={styles['google-icon-wrapper']}>
           <img className={styles['google-icon-svg']} src={props.svgURL} />
        </div>
        : null }
        {props.text ? <p className={props.color === 'success' ? styles['btn-text-success'] : styles['btn-text']}><b>{props.text}</b></p> : null}
      </div>
    </>
  )
}
