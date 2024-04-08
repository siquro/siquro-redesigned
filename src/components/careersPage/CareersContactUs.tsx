import Image from 'next/image';
import Button from '../buttons/Button';

const CareersContactUs = () => {
    return (<section className="services__reporting--section container mb-[90px]">
        <div className="reporting--container flex flex-col md:flex-row border-2 dark:border-primaryLight border-primaryDark">
            <div className="hidden md:flex p-2 w-1/2 xl:max-w-[654px]">
                <Image src={"/careers_2.png"} alt={"Careers 2"} width={554} height={368}  className='!w-full h-auto'/>
            </div>

            <div className="bg-careersContactUsBg bg-no-repeat bg-cover md:bg-none pt-[35px] pb-[40px] px-5 md:px-10 lg:px-16 text-center w-full md:w-1/2">
                <h2 className="title-h2 !leading-[78px] mb-8">Contact us</h2>
                <p className="text mb-8">Please get in touch to get more offers on a broad range of Siquro services from our expert support team.</p>

                <Button title={"contact us"} color={"light"} link={"contacts"}/>
            </div>
        </div>
    </section>);
};

export default CareersContactUs;