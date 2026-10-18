import { ThemeProvider } from "./Context/ThemeContext"
import Children from "./Children"
import Navbar from "./Navbar"
export default function App() {
  return (
    <ThemeProvider>
      <div>App</div>
      <Navbar />
      <Children />
    </ThemeProvider>
  )
}
