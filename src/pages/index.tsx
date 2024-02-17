import HomeHero from "@/components/HomeSections/HomeHero";
import HomeIntegration from "@/components/HomeSections/HomeIntegration";
import HomeReporting from "@/components/HomeSections/HomeReporting";
import WhatWeDo from "@/components/HomeSections/WhatWeDo";
import Head from "next/head";

const Home = () => {

  return (
    <div className="mx-auto">
      <Head>
        <title> SIQURO </title>
        <meta
          name="description"
          content={'Test description'}
          key="desc"
        />
      </Head>
      <HomeHero />
      <WhatWeDo />
      <HomeReporting />
      <HomeIntegration />
    </div>
  )
}

export default Home;