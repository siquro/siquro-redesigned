'use client'

import { Swiper, SwiperSlide } from 'swiper/react';
import "./homePage.css";
import Image from 'next/image';
import 'swiper/css';
import { Autoplay, EffectCoverflow, Mousewheel, Pagination } from 'swiper/modules';

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
        return <div className='bg-primaryLight rounded-[20px] p-[15px] md:pt-[45px] md:pb-[71px] max-w-[480px]'>
            <div className='mb-6 w-[45px] md:w-[80px] h-full relative'>
                <Image className='' src={`/what_we_do-icon/${icon}`} alt={""} fill />
            </div>
            <div>
                <h4 className='title-h4 !text-primaryLight dark:!text-primaryDark mb-5 text-center'>{title}</h4>
                <p className='text !text-primaryLight dark:!text-primaryDark text-center'>{description}</p>
            </div>
        </div>
    }

    return (
        <section className="we__do--section bg-weDoSectionBg dark:bg-primaryDark bg-no-repeat bg-[20% 20%] md:bg-cover">
            <div className='bg-[#d3d3d314] pt-[63px] pb-[40px] md:pb-[90px] '>
                <div className="container flex flex-col-reverse md:flex-row gap-5 items-center justify-between">
                    <div className="overflow-hidden mt-[40px]">
                        <Swiper
                            direction='vertical'
                            loop={false}
                            slideToClickedSlide={true}
                            grabCursor={true}
                            centeredSlides={true}
                            breakpoints={{
                                320: {
                                    slidesPerView: 1,
                                },
                                1024: {
                                    slidesPerView: 1,
                                },
                            }}
                            modules={[Mousewheel, Autoplay, Pagination]}
                            className='we_do--slider h-[300px] md:h-[500px]'
                        >
                            {content.map((item, index) =>
                                <SwiperSlide key={index} className='dark:bg-primaryLight bg-primaryDark rounded-[20px] px-5 md:px-8 md:pt-[45px] md:pb-[71px]'>
                                    <Card title={item.title} description={item.description} icon={item.icon} />
                                </SwiperSlide>
                            )}

                        </Swiper>
                        {/* <Swiper
                            direction={'vertical'}
                            grabCursor={true}
                            pagination={true}
                            loop={true}
                            // autoplay={{
                            //     delay: 4500,
                            //     disableOnInteraction: false,
                            // }}
                            navigation
                            effect="coverflow"
                            coverflowEffect={{
                                rotate: 0,
                                stretch: 0,
                                depth: 0,
                                modifier: 4,
                                slideShadows: false,
                                scale: 1,
                            }}
                            breakpoints={{
                                320: {
                                    slidesPerView: 1,
                                },
                                1024: {
                                    slidesPerView: 3,
                                },

                            }}
                            centeredSlides
                            modules={[EffectCoverflow, Mousewheel, Autoplay, Pagination]}
                            className="we__do--swiper h-[420px] w-full"
                        >
                            {content.map((item, index) =>
                                <SwiperSlide key={index} className=' dark:bg-primaryLight bg-primaryDark rounded-[20px] px-5 md:px-8 md:pt-[45px] md:pb-[71px]'>
                                    <Card title={item.title} description={item.description} icon={item.icon} />
                                </SwiperSlide>
                            )}
                        </Swiper> */}
                    </div>

                    <div className='w-full md:w-3/5 flex flex-col items-end'>
                        <div>
                            <h4 className="title-h4 text-end ">what we do</h4>
                            <h2 className="title-h2 text-end md:text-nowrap">Fraud monitoring</h2>
                        </div>


                        <div className='sm:w-[90%] md:w-[70%] lg:w-[80%] xl:w-[90%] flex flex-col items-end'>
                            <div className='bg_element relative after:absolute after:left-[-92px] after:h-[290px] after:z-[1]     after:hidden after:sm:block after:sm:w-[92px] after:invert after:dark:invert-0'>
                                <div className='item rounded-[20px] mt-6 md:mt-12 w-full max-w-[640px] border-primaryDark dark:border-primaryLight border-2'>
                                    <h4 className='title-h4 px-[15px] py-[19px]  text-center'>A software package that is unique</h4>
                                    <div className='bg-primaryDark dark:bg-primaryLight px-[15px] md:px-[25px] pt-[20px] md:pt-[38px] pb-[30px] md:pb-[47px] rounded-t-[20px] rounded-b-[18px]'>
                                        <p className='text !text-primaryLight dark:!text-primaryDark text-center'>Monitoring transactions and preventing fraudulent payments.</p>
                                    </div>
                                </div>
                                <div className='item rounded-[20px] mt-6 md:mt-12 w-full max-w-[640px] border-primaryDark dark:border-primaryLight border-2'>
                                    <h4 className='title-h4 px-[15px] py-[19px] text-center'>Processes for intelligent payments</h4>
                                    <div className='bg-primaryDark dark:bg-primaryLight px-[15px] md:px-[25px] pt-[20px] md:pt-[38px] pb-[30px] md:pb-[47px] rounded-t-[20px] rounded-b-[18px]'>
                                        <p className='text !text-primaryLight dark:!text-primaryDark text-center '>Will ensure the maximum proportion of successful payments, without giving a chance for fraudster to pass!</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WhatWeDo;