import { useAuthContext } from 'contexts/authContext'
import React from 'react'

export default function Auth() {
    const {data, setData} = useAuthContext() as any
    const handleClick = () => setData('rms')
  return (
    <div className='flex justify-center items-center'>
     <button onClick={handleClick}>Click me!</button>
     <h1>{data}</h1>
    </div>
  )
}
