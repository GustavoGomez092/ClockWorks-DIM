// This import loads the firebase namespace along with all its type information.
import * as firebase from 'firebase/app'

// These imports load individual services into the firebase namespace.
import 'firebase/auth'
import 'firebase/firestore'
import 'firebase/analytics'

const firebaseConfig = {
  apiKey: 'AIzaSyDrM5Za6Tdnk2fsUbJO-Te3ZBmFbSr9Cm8',
  authDomain: 'clockworks-2020.firebaseapp.com',
  databaseURL: 'https://clockworks-2020.firebaseio.com',
  projectId: 'clockworks-2020',
  storageBucket: 'clockworks-2020.appspot.com',
  messagingSenderId: '875913788283',
  appId: '1:875913788283:web:153eec69b7abb462f55bde',
  measurementId: 'G-R2VN9SGZNC'
}

const Firebase = firebase.initializeApp(firebaseConfig)
Firebase.analytics()
const db = firebase.firestore()

export const firebaseAuth = (email, password) => {
  return new Promise((resolve, reject) => {
    Firebase.auth().signInWithEmailAndPassword(email, password).then(function (result) {
      db.collection('users').doc(result.user.uid).get().then((doc) => {
        if (doc.exists) {
          console.log('Document data:', doc.data())
          resolve(doc.data())
        } else {
          // doc.data() will be undefined in this case
          reject(new Error('No such document!'))
        }
      }).catch(function (error) {
        reject(new Error(error))
      })
    }).catch(function (error) {
      reject(new Error(error))
    })
  })
}
