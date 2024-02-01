import Image from "next/image"
import { useRouter } from "next/router";
import { useTheme } from "next-themes";
import Button from "@/components/Button";




const SolutionsHero = () => {
    const router = useRouter();
    const { theme, setTheme } = useTheme();

    return (
        <section className="solutions__hero--section bg-primaryLight dark:bg-primaryDark mt-[-130px] ">
            <div className="section_wrapper auto-padding justify-between flex flex-col md:flex-row">
                <div className="flex flex-col justify-center basis pt-[250px] pb-[310px] text-center">
                    <h2 className="title-h2 !font-kodchasan !text-5xl mb-5">SOLUTIONS</h2>
                    <h1 className="title-h1 font-extrabold mb-[27px]">Designed for growth, a complete payments platform</h1>
                </div>
            </div>
        </section>
    );
}

export default SolutionsHero;