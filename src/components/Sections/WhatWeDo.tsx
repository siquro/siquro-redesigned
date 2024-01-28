import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import Image from 'next/image';
import { Autoplay, EffectCards, EffectCoverflow, Mousewheel, Pagination } from 'swiper/modules';

import 'swiper/css/scrollbar';



const WhatWeDo = () => {
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

    const Card = ({ title, description, icon }: { title: string, description: string, icon: string }) => {
        return <div className='bg-primaryLight rounded-[20px] px-8 pt-[45px] pb-[71px] shadow-3xl max-w-[480px]'>
            <div className='mb-6'>
                <Image className='my-0 mx-auto' src="/what_we_do-icon/SSL.png" alt={""} width={75} height={75} />
            </div>
            <div>
                <h4 className='title-h4 text-primaryLight dark:text-primaryDark mb-7 text-center'>{title}</h4>
                <p className='text text-primaryLight dark:text-primaryDark text-center'>{description}</p>
            </div>
        </div>
    }

    return (
        <section className="we__do--section bg-primaryLight dark:bg-primaryDark">
            <div className="auto-padding pt-[63px] pb-[90px] bg-[#d3d3d314] flex flex-col md:flex-row gap-14">
                <div className="slider--wrapper md:w-3/5 flex items-center">
                    <Swiper
                        direction={'vertical'}
                        grabCursor={true}
                        pagination={true}
                        loop={true}
                        slidesPerView={3}
                        initialSlide={1}
                        effect={'coverFlow'}
                        coverflowEffect={{
                            rotate: 0,
                            stretch: -400,
                            depth: -300,
                            modifier: 4,
                            slideShadows: true,
                        }}
                        autoplay={{
                            delay: 2000,
                            disableOnInteraction: true,
                        }}
                        modules={[EffectCoverflow, Mousewheel, Autoplay, Pagination]}
                        className="custom__swiper h-[420px] w-[560px]"
                    >
                        {/* <SwiperSlide>
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
                        </SwiperSlide> */}
                        {content.map((item, index) =>
                            <SwiperSlide key={index}>
                                <Card title={item.title} description={item.description} icon={item.icon} />
                            </SwiperSlide>
                        )}
                    </Swiper>
                </div>

                <div className='flex flex-col items-end'>
                    <h3 className="title-h3 text-end">what we do</h3>
                    <h2 className="title-h2 text-end md:text-nowrap">Fraud monitoring</h2>

                    <div className=' bg_element relative'>
                        <div className='item rounded-[20px] mt-[50px] max-w-[640px] border-primaryDark dark:border-primaryLight border-2'>
                            <h5 className='title-h5 bg-transparent px-[15px] py-[19px] md:text-nowrap text-center'>A software package that is unique</h5>
                            <div className='bg-primaryDark dark:bg-primaryLight  px-[25px] pt-[38px] pb-[47px] rounded-t-[20px] rounded-b-[18px]'>
                                <p className='leading-[30px] text-primaryLight dark:text-primaryDark text-center text-[28px] font-semibold'>Monitoring transactions and preventing fraudulent payments.</p>
                            </div>
                        </div>
                        <div className='item rounded-[20px] mt-[50px] max-w-[640px] border-primaryDark dark:border-primaryLight border-2'>
                            <h5 className='title-h5 bg-transparent px-[15px] py-[19px] md:text-nowrap text-center'>Processes for intelligent payments</h5>
                            <div className='bg-primaryDark dark:bg-primaryLight  px-[25px] pt-[38px] pb-[47px] rounded-t-[20px] rounded-b-[18px]'>
                                <p className='leading-[30px] text-primaryLight dark:text-primaryDark text-center text-[28px] font-semibold'>Will ensure the maximum proportion of successful payments, without giving a chance for fraudster to pass!</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WhatWeDo;