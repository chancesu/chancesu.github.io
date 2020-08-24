import React, { useEffect, useState } from 'react';
import { useStoreAction } from '@store'
import { useObserver } from 'mobx-react-lite'
import firebase from '../common/firebase'



const LoginBtn = () => {
  const BlogModule = useStoreAction('Blog');

  const  login = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup( provider).then(res => {
      const auth = {
        displayName: res.user.displayName,
        photoURL : res.user.photoURL,
        email : res.user.email,
        uid : res.user.uid
      }
      BlogModule.actions.setAuth(auth);
    })
  }

  return useObserver(() => {
    return (
      <>
        <button onClick={login}>로그인</button>
      </>
    )
  })
}

export default LoginBtn;