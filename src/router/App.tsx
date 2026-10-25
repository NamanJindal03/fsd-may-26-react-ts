//this will be acting as a main.jsx file 
import { BrowserRouter } from "react-router-dom"
import Intro from "./Intro"

export default function app() {
  return (
    <BrowserRouter>
        <Intro />
    </BrowserRouter>
  )
}
