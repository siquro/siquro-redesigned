import Head from "next/head";
import CompanyIntegration from "./sections/CompanyIntegration";
import CompanyHero from "./sections/CompanyHero";
import CompanyInnovation from "./sections/CompanyInnovation";


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
        <CompanyIntegration />
    </>);
}

export default Company;