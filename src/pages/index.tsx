import HomeHero from "@/components/Sections/HomeHero";
import Integration from "@/components/Sections/Integration";
import Reporting from "@/components/Sections/Reporting";
import WhatWeDo from "@/components/Sections/WhatWeDo";

const Home = () => {
  return (
    <div className="container mx-auto">
      <HomeHero />
      <WhatWeDo />
      <Reporting />
      <Integration/>
    </div>
  )
}

export default Home;