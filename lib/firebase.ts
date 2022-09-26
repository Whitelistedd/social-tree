import 'firebase/auth'
import 'firebase/firestore'
import 'firebase/storage'

import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'

import Cookies from 'js-cookie'
import { NextRouter } from 'next/router'
import { getFirestore } from 'firebase/firestore'
import { initializeApp } from 'firebase/app'

export const clientCredentials = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.NEXT_PUBLIC_FIREBASE_DATABASE_URL,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
}

const app = initializeApp(clientCredentials)

export const db = getFirestore(app)

export const auth = getAuth(app)

type values = {
  email: string
  password: string
  router: NextRouter
}


export const handleFormSubmit = async ({ email, password, router }: values) => {
  try {
    const { user }: any = await signInWithEmailAndPassword(auth, email, password)

    const token = user.accessToken

    Cookies.set('token', token ? token : '')
    router.push('/')

  } catch ({ code, message }) {
    console.log({ code, message })
  }
}



export default app
