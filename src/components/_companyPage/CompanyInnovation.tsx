import Image from 'next/image';
import FilledButton from '../buttons/FilledButton';

const CompanyInnovation = () => {
    return (<section className="services__reporting--section container">
        <div className="reporting--container flex flex-col sm:flex-row border-0 sm:border-[3px] sm:border-white">
            <div className="hidden sm:flex p-2 w-1/2">
                <Image src={"/company_innovation.png"} alt={"Company inovation"} width={544} height={1792} className='w-full lg:w-11/12' />
            </div>

            <div className="pt-[65px] pb-[55px] bg-companyInovationBg bg-no-repeat bg-center sm:bg-none w-full sm:w-1/2 ps-5 lg:ps-5 pe-5 lg:pe-20">
                <h4 className="title-h4 pb-5">INNOVATION</h4>
                <h2 className="title-h2 !leading-normal lg:!leading-[78px] mb-8">Advanced Payment Processing</h2>
                <p className="text mb-8">Conversion-boosting payment interfaces.
                    We have created intuitive payment interfaces based on our specialists’ experience and analysis of consumer behavior.</p>
                <p className="text mb-8">You can provide your clients with everything they need and more with us:</p>
                <p className="text-[20px] lg:text-[24px] font-bold font-montserrat mb-10 uppercase">Geographic coverage<br />around the world</p>
                <p className="text-[20px] lg:text-[24px] font-bold font-montserrat mb-10 uppercase">Cascading payments</p>
                <p className="text-[20px] lg:text-[24px] font-bold font-montserrat mb-10 uppercase">Banks with a wide range of acquiring capabilities</p>
                <p className="text-[20px] lg:text-[24px] font-bold font-montserrat mb-10 uppercase">24/7 technical support</p>
                <p className="text-[20px] lg:text-[24px] font-bold font-montserrat mb-10 uppercase">Fraud prevention technology</p>
                <p className="text-[20px] lg:text-[24px] font-bold font-montserrat mb-10 uppercase">Payouts that are prompt and frequent</p>
                <p className="text-[20px] lg:text-[24px] font-bold font-montserrat mb-10 uppercase">Monitoring transactions<br />and preventing fraudulent<br /> payments</p>
                <FilledButton title={"learn more"} color={"light"} link={"solutions"} />
            </div>
        </div>
    </section>);
};


export default CompanyInnovation;