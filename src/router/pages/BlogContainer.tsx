import { Outlet } from "react-router-dom"

export default function BlogContainer() {
  return (
    <>
        {/* Navigation bar which allows me to navigate between differnet blog routes */}
        <div>BlogContainer</div>
            <Outlet />
        {/* Navigation bar which allows me to navigate between differnet blog routes 
            Blog recommendation -> 
            Most visited blogs 
        */}
        <div style={{position: "fixed", bottom: '0px'}}>BlogContainer Ending</div>
    </>

  )
}
