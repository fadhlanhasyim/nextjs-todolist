import { useAuthContext } from 'contexts/authContext'
import { useRouter } from 'next/router'
import React, { useEffect } from 'react'

export default function ProtectedRoute({children} : {children : React.ReactNode}) {
    const router = useRouter()
    const {user} = useAuthContext()

    useEffect(() => {
      if (!user){
        router.push('/login')
      } 
    }, [router, user])
    
  return (
    <>{user ? children : null}</>
  )
}
