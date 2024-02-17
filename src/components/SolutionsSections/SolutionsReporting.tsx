import Button from "@/components/Button";
import Image from "next/image";

const SolutionsReporting = () => {
    return (<section className="services__reporting--section auto-padding  mt-16">
        <div className="reporting--container flex flex-col md:flex-row px-11 border-white border-2 pt-1 pb-5">
            <div className=" flex items-end">
                <Image src={"/reporting_solutions.png"} alt={"Reporting services"} width={564} height={726} />
            </div>

            <div className="pt-[50px] pb-[62px] w-3/5 px-10 ">
                <h4 className="title-h4">REPORTING</h4>
                <h2 className="title-h2 mb-8">Fraud & Risk<br />Management</h2>
                <p className="text mb-8">As a result of our extensive experience, we are able to help you build trustworthily relationships with your customers by providing safety measures and keeping up with the latest regulatory changes, ensuring your products are compliant in all markets.</p>
                <p className="title-h4 uppercase mb-8 !leading-[35px]"> Geographic coverage around the world</p>
                <p className="title-h4 uppercase mb-11 !leading-[35px]">Cascading payments</p>
                <Button title={"learn more"} color={"light"} link={"services"} />
            </div>
        </div>
    </section>);
}

export default SolutionsReporting;