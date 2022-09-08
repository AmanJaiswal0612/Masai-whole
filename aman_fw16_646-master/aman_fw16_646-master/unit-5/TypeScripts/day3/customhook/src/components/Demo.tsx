import React from 'react'
import { useTimeout } from '../hooks/useTimeout'

const Demo = () => {
    const {ready}= useTimeout(5)
    
  return (


    <div>
        {!ready?<h1>Waiting...</h1>:<h1>I am Ready</h1>}
    </div>
  )
}

export default Demo