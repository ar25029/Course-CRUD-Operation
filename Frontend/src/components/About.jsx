import React, {useEffect} from 'react'

function About() {

  useEffect(()=>{
    document.title= "About || Physics Tutor"
  },[])

  return (
    <div>
        <h1>This is About us page</h1>
    </div>
  )
}

export default About