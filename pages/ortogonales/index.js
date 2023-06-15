import Layout from "@/components/layout";
import MainSectionTech from "@/components/mainSectionTech";
import Table from "@/components/ortogonal/table";
import Techniques from "@/public/techniques";

export default function Ortogonal() {
    
    const {title, description} = Techniques.find((item) => item.id === 2);

    return (
    
        <Layout title={title}>
            <MainSectionTech title={title} description={description}/>
            <Table/>
        </Layout>    
    )
}