import Image from 'next/image';
import Button from '@/components/Button';

export const CompanyInnovation = () => {
    return (<section className="services__reporting--section auto-padding border-white">
        <div className="reporting--container flex flex-col md:flex-row pe-11">
            <div className=" flex items-end p-1">
                <Image src={"/company_innovation.png"} alt={"Company inovation"} width={544} height={1792} />
            </div>

            <div className="pt-[50px] pb-[62px] w-3/5 px-10">
                <h3 className="title-h3 text-5xl">INNOVATION</h3>
                <h2 className="title-h2 !leading-[78px] mb-8">Advanced Payment Processing</h2>
                <p className="text mb-8">Conversion-boosting payment interfaces.
                    We have created intuitive payment interfaces based on our specialists’ experience and analysis of consumer behavior. You can provide your clients with everything they need and more with us:</p>
                <p className="title-h5 !font-montserrat mb-8 !leading-[35px]">Geographic coverage around the world</p>
                <p className="title-h5 !font-montserrat mb-11 !leading-[35px]">Cascading payments</p>
                <p className="title-h5 !font-montserrat mb-11 !leading-[35px]">Banks with a wide range of acquiring capabilities</p>
                <p className="title-h5 !font-montserrat mb-11 !leading-[35px]">24/7 technical support</p>
                <p className="title-h5 !font-montserrat mb-11 !leading-[35px]">Fraud prevention technology</p>
                <p className="title-h5 !font-montserrat mb-11 !leading-[35px]">Payouts that are prompt and frequent</p>
                <p className="title-h5 !font-montserrat mb-11 !leading-[35px]">Monitoring transactions and preventing fraudulent payments</p>
                <Button title={"learn more"} color={"light"} link={"solutions"}/>
            </div>
        </div>
    </section>);
};
