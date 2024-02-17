
import ServicesHero from "@/components/ServicesSections/ServicesHero";
import ServicesGoLocal from "@/components/ServicesSections/ServicesIGoLocal";
import ServicesPayment from "@/components/ServicesSections/ServicesPayment";
import ServicesReporting from "@/components/ServicesSections/ServicesReporting";


const Services = () => {
    return (<div>
        <ServicesHero />
        <ServicesPayment />
        <ServicesReporting />
        <ServicesGoLocal />
    </div>);
}

export default Services;