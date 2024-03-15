import Image from "next/image";
import Button from "../buttons/Button";

const ServicesReporting = () => {
    return (<section className="services__reporting--section container mt-[-185px] ">
        <div className="reporting--container flex flex-col md:flex-row p-4 lg:p-11  border-primaryDark dark:border-primaryLight border-[2px] ">
            <div className=" flex items-end">
                <Image src={"/reporting_service.png"} alt={"Reporting services"} width={564} height={726} />
            </div>

            <div className="w-full md:w-3/5 p-0 lg:p-11">
                <p className="badge">REPORTING</p>
                <h2 className="title-h2 mb-8 w-full lg:w-4/5">Put your brand on it</h2>
                <p className="text mb-8 ">Monitor your pay in/payout information in real time through a digital merchant portal without installation and gain a deeper understanding of your customers.</p>
                <p className="title-h4 uppercase mb-8 ">Payment service providers, merchants, agents, and IT developers can benefit from Leasing services;</p>
                <p className="title-h4 uppercase mb-8 ">Siquro can be integrated with your own accounting system or you can get a complete solution.</p>
                <Button title={"learn more"} color={"light"} link={"solutions"} />
            </div>
        </div>
    </section>);
}

export default ServicesReporting;