import Image from 'next/image';
import Button from '@/components/Button';

export const CareersContactUs = () => {
    return (<section className="services__reporting--section auto-padding border-white">
        <div className="reporting--container flex flex-col md:flex-row">
            <div className="flex p-1 w-1/2">
                <Image src={"/careers_2.png"} alt={"Careers 2"} width={554} height={368}  className='!w-full'/>
            </div>

            <div className="pt-[35px] pb-[40px] px-10 text-center w-1/2">
                <h2 className="title-h2 !leading-[78px] mb-8">Contact us</h2>
                <p className="text mb-8">Please get in touch to get more offers on a broad range of Siquro services from our expert support team.</p>

                <Button title={"contact us"} color={"light"} link={"contacts"} />
            </div>
        </div>
    </section>);
};
