import CryptoSolutions from "./sections/CryptoSolutions";
import SolutionsHero from "./sections/SolutionsHero";
import SolutionsList from "./sections/SolutionsList";
import SolutionsReporting from "./sections/SolutionsReporting";
import SolutionsTwoBlocks from "./sections/SolutionsTwoBlocks";

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