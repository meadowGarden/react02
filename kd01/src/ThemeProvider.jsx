import {createContext, useState} from "react";


export const ThemeContext = createContext();


export const ThemeProvider = ({children}) => {

    const [theme, setTheme] = useState(ThemeContext);

    const toggleTheme = () => {
        setTheme((prevState) => (prevState === "black" ? "white" : "black"));
    };

    return (
        <ThemeContext.Provider value={{theme, toggleTheme}}>
            <div>{children}</div>
        </ThemeContext.Provider>
    );
};


