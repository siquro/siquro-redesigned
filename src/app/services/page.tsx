import ServicesHero from "@/components/servicesPage/ServicesHero";
import ServicesGoLocal from "@/components/servicesPage/ServicesIGoLocal";
import ServicesPayment from "@/components/servicesPage/ServicesPayment";
import ServicesReporting from "@/components/servicesPage/ServicesReporting";

const Services = () => {
    return (<div>
        <ServicesHero />
        <ServicesPayment />
        <ServicesReporting />
        <ServicesGoLocal />
    </div>);
}

export default Services;