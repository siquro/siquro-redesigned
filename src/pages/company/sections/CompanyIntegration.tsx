import Image from 'next/image';

const CompanyIntegration = () => {
    return (<section className="services__reporting--section auto-padding border-white mb-10">
        <div className="reporting--container flex flex-col md:flex-row px-11 bg-primaryLight relative">
            <div className="pt-[50px] pb-[62px] w-3/5 ">
                <h3 className="title-h3 text-5xl !text-primaryLight dark:!text-primaryDark ">INTEGRATION</h3>
                <h2 className="title-h2 !leading-[78px] mb-8 !text-primaryLight dark:!text-primaryDark">Business Potential</h2>
                <p className="text mb-8 !text-primaryLight dark:!text-primaryDark">We apply best-in-class expertise to every demand, consumer need, and expectation, whether it is a classic e-commerce business or a challenging puzzle.
                    Integration of all-in-one payment gateway solution that meets your business’s needs and your customers’ wants, fully integrated with PCI-DSS industry security standards, ready to monitor customer insights via digital merchant portal.</p>

                <p className="title-h5 !font-montserrat mb-8 !leading-[35px] !text-primaryLight dark:!text-primaryDark">Various Payment Methods
                </p>
                <p className="title-h5 !font-montserrat mb-11 !leading-[35px] !text-primaryLight dark:!text-primaryDark">Advanced Analytics/Reporting</p>
            </div>

            <div className="flex items-end absolute right-11 bottom-0">
                <Image src={"/integration.png"} alt={"Company integration"} width={392} height={661} />
            </div>
        </div>
    </section>);
}

export default CompanyIntegration;