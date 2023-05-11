import React, { useState, useEffect, useRef } from "react";
import Layout from "@/components/layout";
import MainSectionTech from "@/components/mainSectionTech";
import InputLambda from "@/components/limites/inputLambda";

export default function Ortogonal() {
    const title = "Tests";
    const description = "solo test";



    return (
        <Layout title={title}>
            <MainSectionTech title={title} description={description} />
            <div className="container d-flex justify-content-between">
               <InputLambda key={"input-lambda1"}/>
            </div>
        </Layout>
    );
}
