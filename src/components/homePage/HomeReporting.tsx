
import Image from 'next/image';
import Button from '../buttons/Button';

const HomeReporting = () => {
    return (
        <section className="reporting--section bg-primaryLight dark:bg-primaryDark relative overflow-hidden">
            <div className="container pt-[63px] pb-[90px] flex flex-col md:flex-row gap-14 relative z-10 sm:border-s-[4px] border-primaryDark dark:border-primaryLight">
                <div className="md:w-3/5">
                    <h4 className="title-h4">REPORTING</h4>
                    <h2 className="title-h2 mb-[33px] w-4/5">Advanced Analytics & Reporting</h2>
                    <p className="text w-full sm:w-4/5 mb-[38px]">Monitor your pay in/payout information in real time through a digital merchant portal without installation and gain a deeper understanding of your customers.</p>
                    <div className="mb-[40px] flex flex-col gap-7">
                        <div className="flex flex-row gap-4 sm:gap-7 items-center">
                            <div className="w-[25px] sm:w-[35px] md:w-[51px]">
                                <Image src={"/ri-bank-fill.svg"} alt={"Bank"} width={51} height={50} className="w-full h-auto dark:invert-0 invert" />
                            </div>

                            <h4 className="title-h4">A wide range of acquiring banks</h4>
                        </div>

                        <div className="flex flex-row gap-4 sm:gap-7 items-center">
                            <div className="w-[25px] sm:w-[35px] md:w-[51px]">
                                <Image src={"/ri-support.svg"} alt={"Bank"} width={51} height={47} className="w-full h-auto dark:invert-0 invert" />
                            </div>

                            <h4 className="title-h4">Technical support 24/7</h4>
                        </div>
                    </div>
                    <Button title={"learn more"} color={"light"} link={"services"} />
                </div>
            </div>

            <div className="absolute top-0 right-0 w-1/2 h-[35%] sm:w-3/5 sm:h-[70%] lg:h-[90%]">
                <div className="absolute w-[75%] xl:w-[60%] overflow-hidden z-[1] top-[-10%] right-[-15%]">
                    <Image src="/reporting_animation/gear_1.png" alt="Gear" width={638} height={616} className="gear w-full h-auto animate-spin-slow" />
                </div>

                <div className="absolute w-[60%] xl:w-[45%] overflow-hidden z-[1] top-[-5%] right-[23%]">
                    <Image src="/reporting_animation/gear_1.png" alt="Gear" width={516} height={542} className="gear-2 w-full h-auto animate-[reversSpin_15s_linear_infinite]" />
                </div>
                <div className="absolute w-[50%] xl:w-[35%] overflow-hidden z-[1] top-[30%] right-[-2%]">
                    <Image src="/reporting_animation/gear_1.png" alt="Gear" width={477} height={573} className="gear-3 w-full h-auto animate-spin-slow" />
                </div >

                <div className="absolute w-[60%]  xl:w-[40%] overflow-hidden z-[1] top-[20%] right-[30%]">
                    <Image src="/reporting_animation/magnify.png" alt="Magnify" width={462} height={553} className="magnify w-full h-auto animate-[zoomIn_10s_ease-in-out_infinite]" />
                </div>

                <div className="absolute w-[30%] xl:w-[25%] overflow-hidden z-[1] top-[55%] left-[15%] lg:left-[30%] origin-center rotate-6">
                    <Image src="/reporting_animation/phone.png" alt="Phone" width={315} height={344} className="phone w-full h-auto animate-[moovingRightToLeft_10s_linear_infinite]" />
                </div>
            </div>
        </section>
    );
};

export default HomeReporting;