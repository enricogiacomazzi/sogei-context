import React, { PropsWithChildren, useMemo, useState } from "react"
import { themes } from "./commonProps";

interface ThemeContextValue {
    theme: themes,
    toggleTheme?: () => void
}

export const ThemeContext = React.createContext<ThemeContextValue>({theme: 'light'});

