import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import Image from 'next/image';
import { Autoplay, EffectCards, Mousewheel, Pagination, Scrollbar } from 'swiper/modules';

import 'swiper/css/scrollbar';


const content = [
    {
        title: "ANTIFRAUD SYSTEM",
        description: "Filters and settings are customized for your business type in our proprietary antifraud system",
        icon: "SYSTEM.png",
    },
    {
        title: "PCI DSS И SSL",
        description: "Conformity with PCI DSS level 1 security standards, using SSL encryption",
        icon: "SSL.png",
    },
    {
        title: "CHARGEBACKS AND REFUNDS",
        description: "Support for chargebacks and instant response to incidents",
        icon: "REFUNDS.png",
    },
    {
        title: "ONLINE FRAUD MONITORING",
        description: "A fraud officer monitors real-time transactions and prevents fraud activity.",
        icon: "MONITORING.png",
    },
]


const WhatWeDo = () => {
    const settings = {

    }

    // const Card = ({ title, description, icon }: { title: string, description: string, icon: string }) => {
    //     return <div className='card--wrapper bg-primaryLight rounded-[20px] px-8 pt-[45px] pb-[71px] shadow-3xl max-w-[480px]'>
    //         <div className='mb-6'><Image className='my-0 mx-auto' src={`/what_we_do-icon/${icon}`} alt={icon} width={75} height={75} /></div>
    //         <div>
    //             <h4 className='title-h4 text-primaryLight dark:text-primaryDark mb-7 text-center'>{title}</h4>
    //             <p className='text text-primaryLight dark:text-primaryDark text-center'>{description}</p>
    //         </div>
    //     </div>
    // }

    return (
        <section className="we__do--section bg-primaryLight dark:bg-primaryDark">
            <div className="auto-padding pt-[63px] pb-[90px] bg-[#d3d3d314] flex flex-row">
                <div className="slider--wrapper">
                    <Swiper
                        direction={'vertical'}
                        grabCursor={true}
                        pagination={true}
                        loop={true}
                        effect={'cards'}
                        autoplay={{
                            delay: 2000,
                            disableOnInteraction: true,
                          }}
                        modules={[EffectCards, Mousewheel, Autoplay, Pagination]}
                        className="custom__swiper h-[400px]"
                    >
                        <SwiperSlide>
                            <div className='bg-primaryLight rounded-[20px] px-8 pt-[45px] pb-[71px] shadow-3xl max-w-[480px]'>
                                <div className='mb-6'>
                                    <Image className='my-0 mx-auto' src="/what_we_do-icon/SSL.png" alt={""} width={75} height={75} />
                                </div>
                                <div>
                                    <h4 className='title-h4 text-primaryLight dark:text-primaryDark mb-7 text-center'>PCI DSS И SSL</h4>
                                    <p className='text text-primaryLight dark:text-primaryDark text-center'>Conformity with PCI DSS level 1 security standards, using SSL encryption</p>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className='bg-primaryLight rounded-[20px] px-8 pt-[45px] pb-[71px] shadow-3xl max-w-[480px]'>
                                <div className='mb-6'>
                                    <Image className='my-0 mx-auto' src="/what_we_do-icon/SSL.png" alt={""} width={75} height={75} />
                                </div>
                                <div>
                                    <h4 className='title-h4 text-primaryLight dark:text-primaryDark mb-7 text-center'>22PCI DSS И SSL</h4>
                                    <p className='text text-primaryLight dark:text-primaryDark text-center'>Conformity with PCI DSS level 1 security standards, using SSL encryption</p>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className='bg-primaryLight rounded-[20px] px-8 pt-[45px] pb-[71px] shadow-3xl max-w-[480px]'>
                                <div className='mb-6'>
                                    <Image className='my-0 mx-auto' src="/what_we_do-icon/SSL.png" alt={""} width={75} height={75} />
                                </div>
                                <div>
                                    <h4 className='title-h4 text-primaryLight dark:text-primaryDark mb-7 text-center'>33PCI DSS И SSL</h4>
                                    <p className='text text-primaryLight dark:text-primaryDark text-center'>Conformity with PCI DSS level 1 security standards, using SSL encryption</p>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className='bg-primaryLight rounded-[20px] px-8 pt-[45px] pb-[71px] shadow-3xl max-w-[480px]'>
                                <div className='mb-6'>
                                    <Image className='my-0 mx-auto' src="/what_we_do-icon/SSL.png" alt={""} width={75} height={75} />
                                </div>
                                <div>
                                    <h4 className='title-h4 text-primaryLight dark:text-primaryDark mb-7 text-center'>44PCI DSS И SSL</h4>
                                    <p className='text text-primaryLight dark:text-primaryDark text-center'>Conformity with PCI DSS level 1 security standards, using SSL encryption</p>
                                </div>
                            </div>
                        </SwiperSlide>

                        {/* {content.map((item, index) =>
                            <SwiperSlide key={index}>
                                <Card title={item.title} description={item.description} icon={item.icon} />
                            </SwiperSlide>
                        )} */}
                    </Swiper>
                </div>

                <div className='grow'>
                    <h3 className="title-h3 text-end">what we do</h3>
                    <h2 className="title-h2 text-end">Fraud monitoring</h2>

                    <div>
                        <div>
                            <div><h4>A software package that is unique</h4></div>
                            <div><p>Monitoring transactions and preventing fraudulent payments.</p></div>
                        </div>
                        <div>
                            <div><h4>Processes for intelligent payments</h4></div>
                            <div><p>Will ensure the maximum proportion of successful payments, without giving a chance for fraudster to pass!</p></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WhatWeDo;