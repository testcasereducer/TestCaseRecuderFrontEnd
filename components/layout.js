import Footer from "./footer";
import Header from "./header";
import Head from "next/head";

export default function Layout({ children, title = "App" }) {
    return (
        <>
            <Head>
                <title>{title}</title>
            </Head>

            <Header />
            <main className="container">{children}</main>
            <Footer />
        </>
    );
}
