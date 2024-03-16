
import Image from "next/image";
import Button from "../buttons/Button";

const SolutionsReporting = () => {
    return (<section className="services__reporting--section container mt-16">
        <div className="reporting--container flex flex-col items-end md:flex-row p-4 pb-11 lg:p-11  border-primaryDark dark:border-primaryLight border-[2px] ">
            <div className=" flex h-auto w-[250px] sm:w-1/2 md:w-4/5 lg:w-8/12">
                <Image src={"/reporting_solutions.png"} alt={"Reporting services"} width={541} height={827} className="md:w-4/5" />
            </div>

            <div className="w-full md:w-3/5 p-0 md:p-5 md:pe-0 lg:p-11 lg:pe-0">
                <p className="badge">REPORTING</p>
                <h2 className="title-h2 mb-[20px]">Fraud & Risk Management</h2>
                <p className="text mb-5">As a result of our extensive experience, we are able to help you build trustworthily relationships with your customers by providing safety measures and keeping up with the latest regulatory changes, ensuring your products are compliant in all markets.</p>
                <p className="title-h4 uppercase mb-5"> Geographic coverage around the world</p>
                <p className="title-h4 uppercase mb-5">Cascading payments</p>
                <Button title={"learn more"} color={"light"} link={"services"} customClass={"w-full md:w-fit"} />
            </div>
        </div>
    </section>);
}

export default SolutionsReporting;