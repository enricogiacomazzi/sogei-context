import React from "react";
import { CommonProps } from "../commonProps";
import { ThemeContext } from "../ThemeContext";
import { Three } from "./Three";


export const Two: React.FC<CommonProps> = ({children, title}) => (
    <ThemeContext.Consumer>
        {({theme, toggleTheme}) => (
            <div className={theme === 'light' ? 'light' : 'dark'}>
                <h1>{title}</h1>
                    <Three title={title + '3'}>
                        <span>ciao a tutti!</span>
                        <button onClick={toggleTheme}>toggle theme from consumer</button>
                    </Three>
            </div>
        )}
    </ThemeContext.Consumer>
    
);