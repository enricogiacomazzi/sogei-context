import React, { PropsWithChildren, useContext } from "react";
import { CommonProps } from "../commonProps";
import { ThemeContext } from "../ThemeContext";

import { Two } from "./Two";


export const One: React.FC<CommonProps> = ({children, title}) => { 
    const {theme} = useContext(ThemeContext);
    const cls = theme === 'light' ? 'light' : 'dark';
    return (
        <div className={cls}>
            <h1>{title}</h1>
            <Two title={title + '2'}/>
        </div>
    );
}


interface state {
    username: string,
    id: number,
    address: string 
}