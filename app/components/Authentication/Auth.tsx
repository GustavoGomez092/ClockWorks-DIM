import React, { useState, useEffect } from 'react'
import styles from './Auth.css'
import { firebaseAuth } from '../../utils/firebase'
import Button from '../Button/Button'
import TextInput from '../TextInput/TextInput'
import AnimatedTransition from '../Transition/Transition'

export default function Auth() {
  const [error, setError] = useState('')
  const [mountError, setMountError] = useState(false)
  const [mountButton, setMountButton] = useState(true)
  const [mountEmail, setMountEmail] = useState(false)
  const [mountPassword, setmountPassword] = useState(false)
  const [email, setemail] = useState('')
  const [password, setpassword] = useState('')

  const showButton = () => {
    setMountButton(true)
  }
  const hideButton = () => {
    setMountButton(false)
  }
  const showEmail = () => {
    setMountEmail(true)
  }
  const hideEmail = () => {
    setMountEmail(false)
  }
  const showPassword = () => {
    setmountPassword(true)
  }
  const hidePassword = () => {
    setmountPassword(false)
  }
  const showError = () => {
    setMountError(true)
  }
  const hideError = () => {
    setMountError(false)
  }

  const authorize = async() => {
    try {
      const response = await firebaseAuth(email, password)
      console.log(response)
    } catch (error) {
      setError(error.message)
    }
  }

  useEffect(() => {
    if (error && !mountError) {
      showError()
      setTimeout(function(){ hideError() }, 3000);
    }
  }, [error]);

  return (
    <div className={styles.auth}>
      <AnimatedTransition show={mountButton} onComplete={()=>showEmail()}>
        <Button svgURL='https://upload.wikimedia.org/wikipedia/commons/a/ab/Gmail_Icon.svg' onClick={() => hideButton()} text='Sign in with Email' />
      </AnimatedTransition>
      <AnimatedTransition show={mountEmail} onComplete={()=>showPassword()}>
        <div style={{display: 'flex', flex: 1}}>
          <div style={{ display: 'flex', flex:4}}>
            <TextInput placeholder='your@email.com' onChange={(e:any) => setemail(e.target.value)} error='this error message'/>
          </div>
          <div style={{ display: 'flex', flex:1}}>
            <Button text='next' color='success' onClick={()=> {hideEmail()}}/>
          </div>
        </div>
      </AnimatedTransition>
      <AnimatedTransition show={mountPassword} onComplete={()=>authorize()}>
        <div style={{display: 'flex', flex: 1}}>
          <div style={{ display: 'flex', flex:4}}>
            <TextInput placeholder='Your password' type='password' onChange={(e:any) => setpassword(e.target.value)}/>
          </div>
          <div style={{ display: 'flex', flex:1}}>
            <Button text='Sign in' color='success' onClick={()=> hidePassword()}/>
          </div>
        </div>
      </AnimatedTransition>
      <AnimatedTransition show={mountError} onComplete={()=>{setError('');showButton()}}>
          <div><p className={styles.error}>{error}</p></div>
        </AnimatedTransition>
    </div>
  )
}
