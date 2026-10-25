import  { useState } from 'react'

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
    console.log('rule is applied')
    const [state, setState]= useState('home')
    

  return (
    <>
        {console.log('something')}
        <button onClick={()=> setState('blog')}>Blog</button>
        <button onClick={()=> setState('home')}>Home</button>
        {RenderContent(state)}
    </>
  )
}
