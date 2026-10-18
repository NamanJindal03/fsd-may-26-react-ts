import { createContext, useContext, useState, type ReactNode } from "react";

interface ThemeProviderProps{
    children: ReactNode
}

type Theme = 'light' | 'dark';

interface ThemeContextType {
    theme: Theme,
    setTheme: (theme: Theme) => void
}

const ThemeContext = createContext<ThemeContextType| undefined>(undefined);

export function ThemeProvider({children}: ThemeProviderProps){
    const [theme, setTheme] = useState<Theme>('light')

    return (
        <ThemeContext.Provider value={{theme, setTheme}}>
            {children}
        </ThemeContext.Provider>
    )
}

//custom hook 
export function useTheme(): ThemeContextType{
    const contextValue = useContext(ThemeContext)
    if(contextValue === undefined){
        throw new Error("some error")
    }
    return contextValue
}