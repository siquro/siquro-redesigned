import Payment from "@/components/ServicesSections/Payment";
import ServicesHero from "@/components/ServicesSections/ServicesHero";
import ServicesIntegration from "@/components/ServicesSections/ServicesIntegration";
import ServicesReporting from "@/components/ServicesSections/ServicesReporting";


const Services = () => {
    return (<div>
        <ServicesHero />
        <Payment />
        <ServicesReporting />
        <ServicesIntegration />
    </div>);
}

export default Services;