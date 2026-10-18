import { useTheme } from "./Context/ThemeContext"

export default function Children() {
    const themeContextData = useTheme();
  return (
    <p style={themeContextData.theme === 'light' ? 
        {backgroundColor: 'black', color: 'white'} :
        {backgroundColor: 'white', color: 'black'} }
    >
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dignissimos, quaerat.
    </p>
  )
}
