import HomeHero from "@/components/homePage/HomeHero";
import HomeIntegration from "@/components/homePage/HomeIntegration";
import HomeReporting from "@/components/homePage/HomeReporting";
import WhatWeDo from "@/components/homePage/WhatWeDo";

export default function Home() {

  return (
    <div className="mx-auto">
      <HomeHero />
      <WhatWeDo />
      <HomeReporting />
      <HomeIntegration />
    </div>
  )
}
