import FilledButton from "../buttons/FilledButton";

const ServicesHero = () => {

    return (
        <section className="services__hero--section bg-servicesHeroBg bg-no-repeat bg-cover mt-[-130px] ">
            <div className="section_wrapper flex flex-col  md:flex-row h-full ">
                <div id="animate-left" className="flex flex-col pt-[190px] md:pt-[200px] pb-[90px] w-full container">
                    <p className="badge !text-primaryLight">SERVICES</p>
                    <h1 className="title-h1 mb-[27px] !text-primaryLight">BUSINESS POTENTIAL</h1>
                    <p className="text mb-[40px] !text-primaryLight md:w-3/5">
                        Everything is designed to make {`merchants'`} lives easier, from integration to pricing, reporting, and payouts, and everything arrives fast, orderly, and securely.
                    </p>

                    <FilledButton title={'start project'} link={"#"} />
                </div>
            </div>
        </section>
    );
}

export default ServicesHero;