import Themebtn from "./components/themebtn/themebtn"
import Card from "./components/card/card"
import { ThemeContextProvider } from "./components/themecontext/themecontext"
import { ThemeContext } from "./components/themecontext/themecontext"
import { useEffect, useState } from "react"
function App() {

  

   const [themeMode , setThemeMode] =useState("light");

   useEffect(()=>{
    document.querySelector("html").classList.remove("light", "dark");
    document.querySelector("html").classList.add(themeMode);
   },[themeMode])
   function darkMode() {
     for(let i=1;i<800;i++)
     {
      document.querySelector("html").classList.remove("light", "dark");

      setInterval(()=>{ document.querySelector("html").classList.add("dark");},100)
     }

    setThemeMode("dark");
    console.log(themeMode);
   }

  const lightMode =()=>
    {
      setThemeMode("light")
      console.log(themeMode);
    } 
  return (
   <ThemeContextProvider value={{themeMode,darkMode,lightMode}}>
<div className="flex flex-wrap min-h-screen items-center">
                <div className="w-full">
                    <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
                        <Themebtn/>
                    </div>

                    <div className="w-full max-w-sm mx-auto">
                       <Card/>
                    </div>
                </div>
            </div>
            </ThemeContextProvider>
  )
}

export default App
