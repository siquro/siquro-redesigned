import CompanyHero from "@/components/CompanySections/CompanyHero";
import CompanyInnovation from "@/components/CompanySections/CompanyInnovation";
import CompanyIntegration from "@/components/CompanySections/CompanyIntegration";
import Head from "next/head";


const Company = () => {
    return (<>
        <Head>
            <title> SIQURO - About us</title>
            <meta
                name="description"
                content={'Description about us'}
                key="desc"
            />
        </Head>
        <CompanyHero />
        <CompanyInnovation />
        <CompanyIntegration/>
    </>);
}

export default Company;