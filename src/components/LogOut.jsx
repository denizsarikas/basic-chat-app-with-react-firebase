import React from 'react'
import { auth } from '../firebase/config'
import { signOut } from "firebase/auth"

const style = {
    button: `bg-gray-200 px-4 py-2 hover:bg-gray-100`
}

const googleSignOut = () => {
  signOut(auth)
  console.log("user signed out")
}

const LogOut = () => {

  return (
    <button onClick={googleSignOut} className={style.button}>
        Logout
    </button>
  )
}

export default LogOut