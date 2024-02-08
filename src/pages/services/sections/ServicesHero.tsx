import Image from "next/image"
import { useTheme } from "next-themes";
import Button from "@/components/Button";




const ServicesHero = () => {
    const { theme, setTheme } = useTheme();

    return (
        <section className="services__hero--section bg-servicesHeroBg bg-no-repeat bg-cover mt-[-130px] ">
            <div className="section_wrapper auto-padding justify-between flex flex-col dark:bg-[#000000bd] md:flex-row h-full">
                <div className="flex flex-col justify-center pt-[250px] pb-[310px] w-full md:w-3/5">
                    <h2 className="title-h2 !font-kodchasan !text-5xl mb-5 !text-primaryLight">SERVICES</h2>
                    <h1 className="title-h1 font-extrabold mb-[27px] !text-primaryLight">BUSINESS POTENTIAL</h1>
                    <p className="text  font-bold mb-[40px] !text-primaryLight">
                        Everything is designed to make merchants' lives easier, from integration to pricing, reporting, and payouts, and everything arrives fast, orderly, and securely.
                    </p>
                    <div className="">
                        <Button title={'start project'} link={"contacts"} color={"light"} />
                    </div>
                </div>
                {/* <div className="">

                </div> */}
            </div>
        </section>
    );
}

export default ServicesHero;