import Head from "next/head";
import { CompanyHero } from "./sections/CompanyHero";
import { CompanyInnovation } from "./sections/CompanyInnovation";
import CompanyIntegration from "./sections/CompanyIntegration";

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