import { CareersContactUs } from "./sections/CareersContactUs";
import { CareersHero } from "./sections/CareersHero";
import OpenPositions from "./sections/OpenPositions";

const Careers = () => {
    return ( <div>
        <CareersHero/>
        <OpenPositions/>
        <CareersContactUs/>
    </div> );
}
 
export default Careers;