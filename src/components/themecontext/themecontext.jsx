import { list } from 'postcss';
import React, { Children, createContext, useContext } from 'react'

export const ThemeContext = createContext( {
    themeMode : "light",
    darkMode:()=>{ },
    
    lightMode : ()=>{}
});



export const ThemeContextProvider = ThemeContext.Provider;

export function useTheme (){
    return useContext(ThemeContext);
}