import React, { useContext } from "react";
import { CommonProps } from "../commonProps";
import { ThemeContext } from "../ThemeContext";
import { One } from "./One";


export const Three: React.FC<CommonProps> = ({children, title}) => { 
    const {theme , toggleTheme} = useContext(ThemeContext);
    const cls = theme === 'light' ? 'light' : 'dark';

    return (
        <div className={cls}>
            <h1>{title}</h1>
            {children}
            <button onClick={toggleTheme}>toggle theme</button>
        </div>
    );
}