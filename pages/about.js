import Layout from "@/components/layout";
import MainSectionTech from "@/components/mainSectionTech";
import aboutJSON from "../public/about.json";
import styles from '../styles/about.module.css';

export default function About() {
    const title = "Acerca de";
    const description = "";
    return (
        <Layout title={title} description={description}>
            <MainSectionTech title={title} description={description} />
            <div className="container">
                {aboutJSON.map((data, index) => (
                    <div className={` card mb-2 ${styles.border}`} key={index}>
                        <div className="ms-3 mt-3 me-2 mb-3">
                            <h1 className="text-start display-2" >
                                {data.title}
                            </h1>
                            <hr className="hr hr-blurry" />
                            <p className="lead mt-4">{data.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </Layout>
    );
}
