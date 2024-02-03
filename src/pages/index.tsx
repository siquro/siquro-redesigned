import HomeHero from "@/components/Sections/HomeHero";
import Integration from "@/components/Sections/Integration";
import Reporting from "@/components/Sections/Reporting";
import WhatWeDo from "@/components/Sections/WhatWeDo";
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