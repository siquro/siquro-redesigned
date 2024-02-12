import HomeHero from "@/components/HeroSections/HomeHero";
import Integration from "@/components/HeroSections/Integration";
import Reporting from "@/components/HeroSections/Reporting";
import WhatWeDo from "@/components/HeroSections/WhatWeDo";
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
      <Reporting />
      <Integration />
    </div>
  )
}

export default Home;