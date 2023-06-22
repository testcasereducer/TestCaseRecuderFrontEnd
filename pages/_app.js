import "@/styles/globals.css";
import "@/styles/lambda.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "@/styles/dark-mode.css";
import { ThemeProvider } from "@/components/themeContext";

export default function App({ Component, pageProps }) {
    return (
        <ThemeProvider>
            <Component {...pageProps} />
        </ThemeProvider>
    );
}
