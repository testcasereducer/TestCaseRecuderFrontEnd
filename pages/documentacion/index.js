import Layout from "@/components/layout";
import MainSectionTech from "@/components/mainSectionTech";
import techniques from "../../public/techniques.json";
import { useState } from "react";

import DocEP from "./docEP";
import DocLVA from "./docLVA";
import DocOA from "./docOA";
import stepsEP from "../../public/EP/steps.json";
import stepsLVA from "../../public/LVA/steps.json";
import stepsOA from "../../public/OA/steps.json";

export default function index() {
    const [techniqueSelected, setTechniqueSelected] = useState("LVA");

    const docs = {
        EP: <DocEP steps={stepsEP} />,
        LVA: <DocLVA steps={stepsLVA} />,
        OA: <DocOA steps={stepsOA} />,
    };

    const title = "Documentación";
    const description = "";

    return (
        <Layout title={title}>
            <MainSectionTech title={title} description={description} />
            <hr className="hr hr-blurry" />
            <ul className="nav nav-pills nav-justified">
                {techniques !== null ? (
                    techniques.map(({ id, title, description, link, iconName, abbreviation }) => (
                        <li className="nav-item" key={id}>
                            <button
                                className={`nav-link ${techniqueSelected === abbreviation ? "active" : ""}`}
                                aria-current="page"
                                href="#"
                                key={id}
                                onClick={() => setTechniqueSelected(abbreviation)}>
                                {title} <i className={`ms-2 bi ${iconName}`}></i>
                            </button>
                        </li>
                    ))
                ) : (
                    <h1>No hay técnicas disponibles.</h1>
                )}
            </ul>

            <hr className="hr hr-blurry" />

            {docs[techniqueSelected]}
        </Layout>
    );
}
