import Button from "@/components/Button";
import { useTheme } from "next-themes";




const ServicesHero = () => {
    const { theme, setTheme } = useTheme();

    return (
        <section className="services__hero--section bg-servicesHeroBg bg-no-repeat bg-cover mt-[-130px] ">
            <div className="section_wrapper auto-padding justify-between flex flex-col dark:bg-[#000000bd] md:flex-row h-full">
                <div className="flex flex-col justify-center pt-[150px] md:pt-[250px] pb-[310px] w-full md:w-3/5">
                    <h4 className="title-h4 !text-primaryLight">SERVICES</h4>
                    <h1 className="title-h1 mb-[27px] !text-primaryLight">BUSINESS POTENTIAL</h1>
                    <p className="text mb-[40px] !text-primaryLight">
                        Everything is designed to make merchants' lives easier, from integration to pricing, reporting, and payouts, and everything arrives fast, orderly, and securely.
                    </p>
                    <div className="">
                        <Button title={'start project'} link={"contacts"} color={"light"} />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default ServicesHero;