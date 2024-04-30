import Link from "next/link";
import Image from "next/image";
import Button from "../buttons/Button";

const HomeIntegration = () => {
    return (
        <section className="integration--section bg-primaryLight dark:bg-primaryDark relative pb-[90px]">
            <div className="hidden sm:block absolute top-[-10%] left-[0%] overflow-hidden w-[20%] z-10">
                <Image src="/grey_ring-2.png" alt="Phone" width={862} height={862} className="w-full h-auto invert dark:invert-0" />
            </div>
            <div className="container">
                <div className="flex flex-col items-end">
                    <div className="flex flex-col justify-end items-center first-item text-center border-b-[4px] border-primaryLight sm:border-b-0">
                        <div className="border-b-[4px] border-primaryDark dark:border-primaryLight w-full flex justify-end">
                            <h4 className="title-h4 w-full md:w-4/5 lg:w-3/5">INTEGRATION</h4>
                        </div>
                        <div className="z-20 sm:border-e-[4px] border-primaryDark dark:border-primaryLight flex justify-end px-0 sm:px-4 md:px-11">
                            <div id="animate-fadein" className="w-full md:w-4/5 lg:w-3/5">
                                <h2 className="title-h2 mb-7">Fraud monitoring</h2>
                                <p className="text mb-7">Everything is designed to make {`merchants'`} lives easier, from integration to pricing, reporting, and payouts, and everything arrives fast, orderly, and securely.</p>
                                <h4 className="title-h5 mb-4 uppercase">Fraud prevention technology</h4>
                                <h4 className="title-h5 mb-5 uppercase">Payouts that are prompt and frequent</h4>
                            </div>
                        </div>
                    </div>

                    <div className=" z-20 text-end flex flex-col md:flex-row sm:border-t-[4px] border-primaryDark dark:border-primaryLight w-full md:w-[90%]">
                        <div id="animate-left" className=" bg-primaryLight rounded-b-[20px] m-auto md:m-0 w-4/5 h-full border-primaryDark border-x-3 dark:border-none">
                            <div  className="p-4 md:py-11 md:px-16 text-start">
                                <h3 className="title-h3 !text-primaryDark mb-[20px] text-center md:text-start">Individual approach</h3>
                                <p className="text !text-primaryDark text-center md:text-start">All operational and financial issues can be quickly resolved with a personal manager.</p>
                            </div>

                            <Link className="bg-[#323232] dark:bg-[#323232] text-primaryLight rounded-b-[17px] text-center block py-[12px] md:py-[25px] px-11 text-[18px] font-bold uppercase font-montserrat " href={"/contacts"}>get started</Link>
                        </div>


                        <div id="animate-right" className="py-4 md:ps-11 md:py-11 text-center md:text-end">
                            <h3 className="title-h3 my-[20px] md:mb-[20px] md:mt-0">Crypto Payment Solutions</h3>
                            <p className="text mb-12">In our crypto checkouts and wallets, all transactions are automatic, guaranteed, support different cryptocurrencies, and there are no chargebacks. Our crypto solutions require only one approval stage, ensuring seamless integration.</p>
                            <Button title="About us" color={"light"} link={"about"} />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HomeIntegration;