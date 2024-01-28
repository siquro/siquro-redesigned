import Payment from "./sections/Payment";
import ServicesHero from "./sections/ServicesHero";
import ServicesReporting from "./sections/ServicesReporting";
import ServicesIntegration from "./sections/ServicesIntegration";

const Services = () => {
    return (<div>
        <ServicesHero />
        <Payment />
        <ServicesReporting />
        <ServicesIntegration />
    </div>);
}

export default Services;