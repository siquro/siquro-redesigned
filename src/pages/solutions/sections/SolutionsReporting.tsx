import Button from "@/components/Button";
import Image from "next/image";

const SolutionsReporting = () => {
    return (<section className="services__reporting--section auto-padding border-white mt-10">
        <div className="reporting--container flex flex-col md:flex-row px-11">
            <div className=" flex items-end">
                <Image src={"/reporting_solutions.png"} alt={"Reporting services"} width={564} height={726} />
            </div>

            <div className="pt-[50px] pb-[62px] w-3/5 px-10">
                <h3 className="title-h3 text-5xl">REPORTING</h3>
                <h2 className="title-h2 !leading-[78px] mb-8">Fraud & Risk<br />Management</h2>
                <p className="text mb-8">As a result of our extensive experience, we are able to help you build trustworthily relationships with your customers by providing safety measures and keeping up with the latest regulatory changes, ensuring your products are compliant in all markets.</p>
                <p className="title-h5 !font-montserrat mb-8 !leading-[35px]"> Geographic coverage around the world</p>
                <p className="title-h5 !font-montserrat mb-11 !leading-[35px]">Cascading payments</p>
                <Button title={"learn more"} color={"light"} link={"services"}/>
            </div>
        </div>
    </section>);
}

export default SolutionsReporting;