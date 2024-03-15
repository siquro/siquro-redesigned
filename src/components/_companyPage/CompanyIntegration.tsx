import Image from 'next/image';

const CompanyIntegration = () => {
    return (<section className="services__reporting--section container border-white mb-10">
        <div className="reporting--container flex flex-col sm:flex-row ps-16 pe-7 pt-7 bg-primaryLight relative justify-between">
            <div className="pt-[50px] pb-8 w-full sm:3/5 md:w-3/5  z-10">
                <h4 className="title-h4 !text-primaryLight dark:!text-primaryDark ">INTEGRATION</h4>
                <h2 className="title-h2 lg:text-nowrap md:!leading-1 lg:!leading-[78px] mb-8 !text-primaryLight dark:!text-primaryDark">Business Potential</h2>
                <p className="text mb-12 !text-primaryLight dark:!text-primaryDark">We apply best-in-class expertise to every demand, consumer need, and expectation, whether it is a classic e-commerce business or a challenging puzzle.
                    Integration of all-in-one payment gateway solution that meets your business’s needs and your customers’ wants, fully integrated with PCI-DSS industry security standards, ready to monitor customer insights via digital merchant portal.</p>

                <p className="title-h4 mb-10 !text-primaryLight dark:!text-primaryDark uppercase">Various Payment Methods
                </p>
                <p className="title-h4 mb-11 !text-primaryLight dark:!text-primaryDark uppercase">Advanced Analytics/Reporting</p>
            </div>

            <div className="hidden sm:flex items-end sm:2/5  max-w-[392px]">
                <Image src={"/integration.png"} alt={"Company integration"} width={392} height={661} className='w-full h-auto' />
            </div>
        </div>
    </section>);
}

export default CompanyIntegration;