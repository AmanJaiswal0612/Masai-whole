import React from 'react'
import Button from './Button'


function NewCount() {

  const[state,setState] = React.useState(true) 
  return (
    <div>
        
            <button onClick={()=>setState(!state)}>{!state?"Hide":"Show"}</button>
             {!state&& <Button/>}            
     
     
      
    </div>
  )
}

export default NewCount