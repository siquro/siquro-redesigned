import Button from "@/components/Button";
import Image from "next/image";

const ServicesReporting = () => {
    return (<section className="services__reporting--section auto-padding mt-[-185px] border-white">
        <div className="reporting--container flex flex-col md:flex-row pe-11">
            <div className=" flex items-end">
                <Image src={"/reporting_service.png"} alt={"Reporting services"} width={564} height={726} />
            </div>

            <div className="pt-[50px] pb-[62px] w-3/5 ">
                <h3 className="title-h3 text-5xl"> REPORTING</h3>
                <h2 className="title-h2 !leading-[78px] mb-8">Put your<br /> brand on it</h2>
                <p className="text mb-8">Monitor your pay in/payout information in real time through a digital merchant portal without installation and gain a deeper understanding of your customers.</p>
                <p className="title-h5 !font-montserrat mb-8 !leading-[35px]"> Payment service providers, merchants, agents, and IT developers can benefit from Leasing services;</p>
                <p className="title-h5 !font-montserrat mb-11 !leading-[35px]">Siquro can be integrated with your own accounting system or you can get a complete solution.</p>
                <Button title={"learn more"} color={"light"} />
            </div>
        </div>
    </section>);
}

export default ServicesReporting;