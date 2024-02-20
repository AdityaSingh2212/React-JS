import { createContext, useContext } from "react";

export const ThemeContext = createContext({
    themeMode: "light",
    darkTheme: () => {},  //function
    lightTheme: () => {},  //function
})

export const ThemeProvider = ThemeContext.Provider //(.Provider is not written in different folder here)

export default function useTheme(){
    return useContext(ThemeContext)
}