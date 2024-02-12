import CryptoSolutions from "@/components/SolutionsSections/CryptoSolutions";
import SolutionsHero from "@/components/SolutionsSections/SolutionsHero";
import SolutionsList from "@/components/SolutionsSections/SolutionsList";
import SolutionsReporting from "@/components/SolutionsSections/SolutionsReporting";
import SolutionsTwoBlocks from "@/components/SolutionsSections/SolutionsTwoBlocks";


const Solutions = () => {
    return (
        <div>
            <SolutionsHero />
            <SolutionsList/>
            <SolutionsTwoBlocks />
            <SolutionsReporting />
            <CryptoSolutions />
        </div>);
}
export default Solutions;