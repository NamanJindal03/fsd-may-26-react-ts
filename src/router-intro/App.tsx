import React, { useState } from 'react'

//internal state changes -> 

function RenderContent(state: string){
    if(state === 'home'){
        return <>Home</>
    }
    else if(state === 'blog'){
        return <>Blog</>
    }
}

export default function App() {
    const [state, setState]= useState('home')
    

  return (
    <>
        <button onClick={()=> setState('blog')}>Blog</button>
        <button onClick={()=> setState('home')}>Home</button>
        {RenderContent(state)}
    </>
  )
}
