import Head from "next/head";
import OpenPositions from "./sections/OpenPositions";
import CareersContactUs from "./sections/CareersContactUs";
import CareersHero from "./sections/CareersHero";

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