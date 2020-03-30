import React from 'react'
import Auth from '../Authentication/Auth'
import style from './MainContainer.css'

export default function MainContainer() {
  return (
    <div className={style.mainContainer}>
      <Auth />
    </div>
  )
}
