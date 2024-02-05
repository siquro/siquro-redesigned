import Head from "next/head";
import { CareersContactUs } from "./sections/CareersContactUs";
import { CareersHero } from "./sections/CareersHero";
import OpenPositions from "./sections/OpenPositions";

const Careers = () => {
    return (<>
        <Head>
            <title> SIQURO - Careers</title>
            <meta
                name="description"
                content={'Description careers page'}
                key="desc"
            />
        </Head>
        <CareersHero />
        <OpenPositions />
        <CareersContactUs />
    </>);
}

export default Careers;