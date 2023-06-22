import React, { createContext, useState } from "react";

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
    const [isDarkModeEnabled, setIsDarkModeEnabled] = useState(false);

    const toggleDarkMode = () => {
        setIsDarkModeEnabled(!isDarkModeEnabled);
    };

    return <ThemeContext.Provider value={{ isDarkModeEnabled, toggleDarkMode }}>{children}</ThemeContext.Provider>;
};
