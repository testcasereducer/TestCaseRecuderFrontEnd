import Layout from "@/components/layout";
import MainSectionTech from "@/components/mainSectionTech";
import Table from "@/components/ortogonal/table";

export default function Ortogonal() {
    
    const title = "Arreglos Ortogonales";
    const description = "Ahorra tiempo y recursos en pruebas de software con nuestra herramienta de reducción de casos de\
                        prueba. Basada en las técnicas más utilizadas de la industria, incluyendo partición de\
                        equivalencia, valores límite y arreglos ortogonales"

    return (
    
        <Layout title={title}>
            <MainSectionTech title={title} description={description}/>
            <Table/>
        </Layout>    
    )
}