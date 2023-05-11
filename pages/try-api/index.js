import Layout from "@/components/layout";
import MainSectionTech from "@/components/mainSectionTech";
import ApiKeysStarted from "@/components/API/apiKeysStarted";

export default function index() {
    const title = "Acelera tu proceso de pruebas con nuestra API!";
    const description = ""

    return (
    
        <Layout title={title}>
            <MainSectionTech title={title} description={description}/>
            <ApiKeysStarted/>
        </Layout>    
    )
}
