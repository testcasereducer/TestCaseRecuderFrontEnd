import Footer from "./footer";
import Header from "./header";
import Head from "next/head";
import { useEffect, useState, useContext } from 'react';
import { ThemeContext} from './themeContext';


export default function Layout({ children, title = "App" }) {

    const { isDarkModeEnabled, toggleDarkMode } = useContext(ThemeContext);

    useEffect(() => {
        if (isDarkModeEnabled) 
            document.documentElement.classList.add('dark-mode');
        else      
            document.documentElement.classList.remove('dark-mode');
        localStorage.setItem("darkMode", isDarkModeEnabled.toString());

    }, [isDarkModeEnabled]);


    return (
        <>
            <Head>
                <title>{title}</title>
            </Head>
            <Header isDarkModeEnabled={isDarkModeEnabled} toggleDarkMode={toggleDarkMode}/>
            <main className="container">{children}</main>
            <Footer />
        </>
    );
}
