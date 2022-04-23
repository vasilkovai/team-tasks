import { useState, useEffect } from 'react';
import { projectAuth, projectFirestore } from '../firebase/config'
import { useAuthContext } from "./useAuthContext";

export const useLogin = () => {
  const [isCancelled, setIsCanselled] = useState(false)
  const [error, setError] = useState(null)
  const [isPending, setIsPending] = useState(false)
  const { dispatch } = useAuthContext()


  const login = async (email, password) => {
    setError(null)
    setIsPending(true)

    //sign the user out

    try {
      const res = await projectAuth.signInWithEmailAndPassword(email, password)

      // update online status
      await projectFirestore.collection('users').doc(res.user.uid).update({ online: true })


      // dispatch logout action
      dispatch({ type: 'LOGIN', payload: res.user })

      //update state
      if (!isCancelled) {
        setError(null)
        setIsPending(false)
      }
    }
    catch(err) {
      if (!isCancelled) {
        console.log(err.message)
        setError(err.message)
        setIsPending(false)
      }
    }
  }

  useEffect(() => {
    return () => setIsCanselled(true)
  }, [])

  return { login, error, isPending, isCancelled}
}
