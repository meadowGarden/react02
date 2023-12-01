import { useContext } from "react";
import { ThemeProvider } from "./ThemeProvider";

export const ThemeSwitcher = () => {
    const {theme, toggleTheme} = useContext(ThemeProvider)
    return (
        <div>
            <p> theme is {theme}</p>
            <button className={theme + "ButtonTheme"} onClick={toggleTheme}>
                change theme
            </button>
        </div>
    );
};







