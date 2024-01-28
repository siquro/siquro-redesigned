import Image from "next/image"
import { useRouter } from "next/router";
import { useTheme } from "next-themes";
import Button from "@/components/Button";




const ServicesHero = () => {
    const router = useRouter();
    const { theme, setTheme } = useTheme();

    return (
        <section className="services__hero--section bg-primaryLight dark:bg-primaryDark mt-[-130px] ">
            <div className="section_wrapper auto-padding justify-between flex flex-col md:flex-row">
                <div className="flex flex-col justify-center basis-3/5 pt-[250px] pb-[310px]">
                    <h2 className="title-h2 !font-kodchasan !text-5xl mb-5">SERVICES</h2>
                    <h1 className="title-h1 font-extrabold mb-[27px]">BUSINESS POTENTIAL</h1>
                    <p className="text  font-bold mb-[40px]">
                        Everything is designed to make merchants' lives easier, from integration to pricing, reporting, and payouts, and everything arrives fast, orderly, and securely.
                    </p>
                    <div className="">
                        <Button title={'start project'} onClickHandler={() => { router.push('/contact'); }} color={"light"} />
                    </div>
                </div>
                {/* <div className="">

                </div> */}
            </div>
        </section>
    );
}

export default ServicesHero;