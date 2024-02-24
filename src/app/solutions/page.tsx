import CryptoSolutions from "@/components/solutionsPage/CryptoSolutions";
import SolutionsHero from "@/components/solutionsPage/SolutionsHero";
import SolutionsList from "@/components/solutionsPage/SolutionsList";
import SolutionsReporting from "@/components/solutionsPage/SolutionsReporting";
import SolutionsTwoBlocks from "@/components/solutionsPage/SolutionsTwoBlocks";

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