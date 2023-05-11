import styles from "@/styles/Home.module.css";
import Layout from "@/components/layout";
import Link from "next/link";
import Techniques from "@/components/techniques";
import MainSection from "@/components/mainSection";
import Sections from "@/components/sections";

export default function Home() {
    return (
        <Layout title="Inicio">
            <MainSection />
            <hr className="hr hr-blurry" />
            <Techniques />
            <hr className="hr hr-blurry" />
            {/* <Sections /> */}
        </Layout>
    );
}
