import Image from 'next/image';
import Button from '@/components/Button';

export const CompanyInnovation = () => {
    return (<section className="services__reporting--section auto-padding border-white">
        <div className="reporting--container flex flex-col md:flex-row pe-11">
            <div className=" flex p-1">
                <Image src={"/company_innovation.png"} alt={"Company inovation"} width={544} height={1792} />
            </div>

            <div className="pt-[65px] pb-[55px] w-1/2 ps-20 pe-10">
                <h3 className="title-h3 text-5xl pb-5">INNOVATION</h3>
                <h2 className="title-h2 !leading-[78px] mb-8">Advanced Payment Processing</h2>
                <p className="text mb-8">Conversion-boosting payment interfaces.
                    We have created intuitive payment interfaces based on our specialists’ experience and analysis of consumer behavior.</p>
                    <p className="text mb-8">You can provide your clients with everything they need and more with us:</p>
                <p className="text-2xl font-montserrat mb-16 uppercase">Geographic coverage around the world</p>
                <p className="text-2xl font-montserrat mb-16 uppercase">Cascading payments</p>
                <p className="text-2xl font-montserrat mb-16 uppercase">Banks with a wide range of acquiring capabilities</p>
                <p className="text-2xl font-montserrat mb-16 uppercase">24/7 technical support</p>
                <p className="text-2xl font-montserrat mb-16 uppercase">Fraud prevention technology</p>
                <p className="text-2xl font-montserrat mb-16 uppercase">Payouts that are prompt and frequent</p>
                <p className="text-2xl font-montserrat mb-16 uppercase">Monitoring transactions and preventing fraudulent payments</p>
                <Button title={"learn more"} color={"light"} link={"solutions"} />
            </div>
        </div>
    </section>);
};
