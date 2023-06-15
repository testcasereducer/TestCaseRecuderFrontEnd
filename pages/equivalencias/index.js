import Layout from "@/components/layout";
import MainSectionTech from "@/components/mainSectionTech";
import Table from "@/components/equivalencias/table";
import Techniques from "@/public/techniques";

export default function Equivalencia() {
    
    const {title, description} = Techniques.find((item) => item.id === 0);

    return (
    
        <Layout title={title}>
            <MainSectionTech title={title} description={description}/>
            <Table/>
        </Layout>    
    )
}