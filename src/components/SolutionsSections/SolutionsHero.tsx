import { useTheme } from "next-themes";
import { useRouter } from "next/router";




const SolutionsHero = () => {
    const router = useRouter();
    const { theme, setTheme } = useTheme();

    return (
        <section className="solutions__hero--section bg-primaryLight dark:bg-primaryDark mt-[-130px] ">
            <div className="section_wrapper auto-padding justify-between flex flex-col md:flex-row">
                <div className="flex flex-col justify-center basis pt-[150px] md:pt-[250px] pb-[310px] text-center">
                    <h4 className="title-h4">SOLUTIONS</h4>
                    <h1 className="title-h1 mb-[27px]">Designed for growth, a complete payments platform</h1>
                </div>
            </div>
        </section>
    );
}

export default SolutionsHero;