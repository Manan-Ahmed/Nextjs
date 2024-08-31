"use client"

 import  {  createContext,useContext, useState, } from "react"



const TgleThmContext = createContext({})

export default function ToggleThemeContext(
    {children}: {children: React.ReactNode}){
        
    

    const [isDarkTheme,setIsDarkTheme] = useState(true)

    const toggleTheme = ()=>{
        setIsDarkTheme(!isDarkTheme)
    }

    
    return(
        <>
        
        <TgleThmContext.Provider value={{isDarkTheme,toggleTheme}}>
            {children}
        </TgleThmContext.Provider>
        </>
    )
}



export const  ThemeContext = ()=> useContext(TgleThmContext)




// export const ThemeContext = () => useContext(TgleThmContext);
















// "use client";

// import { createContext, ReactPortal, useContext, useState } from "react";

// const TgleThmContext = createContext({});

// export default function ToggleThmeContext(
//     { children }: { children: React.ReactNode }
// ) {

//     const [isDarkTheme, setIsDarkTheme] = useState(true);

//     const toggleTheme = () => {
//         setIsDarkTheme(!isDarkTheme);
//     }

//     return (
//         <TgleThmContext.Provider value={{ isDarkTheme, toggleTheme }}>
//             {children}
//         </TgleThmContext.Provider>
//     )

// }


// export const ThemeContext = () => useContext(TgleThmContext);