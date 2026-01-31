import {initializeApp } from 'firebase/app'
import { initializeAuth, getReactNativePersistence } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'
import AsyncStorage from '@react-native-async-storage/async-storage'

const firebaseConfig = {
  apiKey: "AIzaSyAj3Si1A5q5RYS1REs_hEdR8dBDzVlp6xc",
  authDomain: "memoapp-a119f.firebaseapp.com",
  projectId: "memoapp-a119f",
  storageBucket: "memoapp-a119f.firebasestorage.app",
  messagingSenderId: "434427350996",
  appId: "1:434427350996:web:722bffaeff95ca03601041"
}

const app = initializeApp(firebaseConfig)
const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(AsyncStorage)
})
const db = getFirestore(app)

export { app, auth, db }