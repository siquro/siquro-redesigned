import Image from "next/image";
import Button from "../buttons/Button";

const ServicesReporting = () => {
    return (<section className="services__reporting--section container mt-[0px] md:mt-[-185px] ">
        <div className="reporting--container flex flex-col items-start md:flex-row p-4 pb-11 lg:p-11  border-primaryDark dark:border-primaryLight border-[2px] ">
            <div className=" flex h-auto w-[250px] sm:w-1/2 md:w-3/5">
                <Image src={"/reporting_service.png"} alt={"Reporting services"} width={564} height={726} placeholder="blur" blurDataURL="/1x1-b6b6647f.png"/>
            </div>

            <div id="animate-right" className="w-full md:w-3/5 p-0 md:p-5 md:pe-0 lg:p-11 lg:pe-0">
                <p className="badge">REPORTING</p>
                <h2 className="title-h2 mb-[20px]">Put your brand on it</h2>
                <p className="text mb-5 ">Monitor your pay in/payout information in real time through a digital merchant portal without installation and gain a deeper understanding of your customers.</p>
                <p className="title-h5 uppercase mb-5">Payment service providers, merchants, agents, and IT developers can benefit from Leasing services;</p>
                <p className="title-h5 uppercase mb-5">Siquro can be integrated with your own accounting system or you can get a complete solution.</p>
                <Button title={"learn more"} color={"light"} link={"solutions"} />
            </div>
        </div>
    </section>);
}

export default ServicesReporting;