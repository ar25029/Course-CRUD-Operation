import React, {useEffect} from 'react'

function Contact() {

  useEffect(()=>{
    document.title= "Contact || Physics Tutor"
  },[])

  return (
    <div>
        <h1>This is contact page</h1>
    </div>
  )
}

export default Contact