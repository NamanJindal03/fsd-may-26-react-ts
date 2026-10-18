import { useTheme } from "./Context/ThemeContext"

export default function Navbar() {
    const themeContextData = useTheme();

    function handleThemeChange(){
        if(themeContextData.theme === 'light'){
            themeContextData.setTheme('dark')
        }
        else{
            themeContextData.setTheme('light')
        }
    }
  return (
    <>
        <div> 
            <button onClick={handleThemeChange}> Change Theme</button>
        </div>
    </>
  )
}
