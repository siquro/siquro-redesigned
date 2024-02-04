import Image from 'next/image';

const CompanyIntegration = () => {
    return (<section className="services__reporting--section auto-padding border-white mb-10">
        <div className="reporting--container flex flex-col sm:flex-row ps-16 pt-7 bg-primaryLight relative">
            <div className="pt-[50px] pb-10 w-full sm:w-3/5 ">
                <h3 className="title-h3 text-5xl !text-primaryLight dark:!text-primaryDark ">INTEGRATION</h3>
                <h2 className="title-h2 text-nowrap !leading-[78px] mb-8 !text-primaryLight dark:!text-primaryDark">Business Potential</h2>
                <p className="text !font-bold mb-12 !text-primaryLight dark:!text-primaryDark">We apply best-in-class expertise to every demand, consumer need, and expectation, whether it is a classic e-commerce business or a challenging puzzle.
                    Integration of all-in-one payment gateway solution that meets your business’s needs and your customers’ wants, fully integrated with PCI-DSS industry security standards, ready to monitor customer insights via digital merchant portal.</p>

                <p className="title-h4 mb-10 !text-primaryLight dark:!text-primaryDark uppercase">Various Payment Methods
                </p>
                <p className="title-h4 mb-11 !text-primaryLight dark:!text-primaryDark uppercase">Advanced Analytics/Reporting</p>
            </div>

            <div className="hidden sm:flex items-end sm:w-3/5">
                <Image src={"/integration.png"} alt={"Company integration"} width={392} height={661} className='w-full h-auto' />
            </div>
        </div>
    </section>);
}

export default CompanyIntegration;