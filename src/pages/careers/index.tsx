import CareersContactUs from "@/components/CareersSections/CareersContactUs";
import CareersHero from "@/components/CareersSections/CareersHero";
import OpenPositions from "@/components/CareersSections/OpenPositions";
import Head from "next/head";

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