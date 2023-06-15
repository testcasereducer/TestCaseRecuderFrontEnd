import Layout from "@/components/layout";
import MainSectionTech from "@/components/mainSectionTech";
import Table from "@/components/limites/table";
import Techniques from "@/public/techniques";

export default function Limite() {
    
    const {title, description} = Techniques.find((item) => item.id === 1);

    return ( 
    
        <Layout title={title}>
            <MainSectionTech title={title} description={description}/>
            <Table/>
        </Layout>    
    )
} 