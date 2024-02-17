import { Swiper, SwiperSlide } from 'swiper/react';

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
        <section className="we__do--section bg-weDoSectionBg dark:bg-primaryDark bg-no-repeat bg-cover ">
            <div className='bg-[#d3d3d314] pt-[63px] pb-[90px]'>
                <div className="container flex flex-col-reverse md:flex-row gap-5 items-center">
                    <div className="w-full md:w-2/5 flex items-center dark:bg-red-300 h-[420px]">
                        <Swiper
                            direction={'vertical'}
                            grabCursor={true}
                            pagination={true}
                            loop={true}
                            autoplay={{
                                delay: 4500,
                                disableOnInteraction: false,
                            }}
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
                            slidesPerView={3}
                            centeredSlides
                            modules={[EffectCoverflow, Mousewheel, Autoplay, Pagination]}
                            className="custom__swiper h-[420px] w-full"
                        >
                            {content.map((item, index) =>
                                <SwiperSlide key={index}>
                                    <Card title={item.title} description={item.description} icon={item.icon} />
                                </SwiperSlide>
                            )}
                        </Swiper>
                    </div>

                    <div className='w-full md:w-3/5 flex flex-col items-end'>
                        <div>
                            <h4 className="title-h4 text-end">what we do</h4>
                            <h2 className="title-h2 text-end md:text-nowrap">Fraud monitoring</h2>
                        </div>


                        <div className='sm:w-[90%] md:w-[70%] lg:w-[80%] xl:w-[90%] flex flex-col items-end'>
                            <div className='bg_element relative'>
                                <div className='item rounded-[20px] mt-6 md:mt-12 w-full max-w-[640px] border-primaryDark dark:border-primaryLight border-2'>
                                    <h4 className='title-h4 px-[15px] py-[19px]  text-center'>A software package that is unique</h4>
                                    <div className='bg-primaryDark dark:bg-primaryLight px-[15px] md:px-[25px] pt-[20px] md:pt-[38px] pb-[30px] md:pb-[47px] rounded-t-[20px] rounded-b-[18px]'>
                                        <p className='text text-primaryLight dark:text-primaryDark text-center'>Monitoring transactions and preventing fraudulent payments.</p>
                                    </div>
                                </div>
                                <div className='item rounded-[20px] mt-6 md:mt-12 w-full max-w-[640px] border-primaryDark dark:border-primaryLight border-2'>
                                    <h4 className='title-h4 px-[15px] py-[19px] text-center'>Processes for intelligent payments</h4>
                                    <div className='bg-primaryDark dark:bg-primaryLight px-[15px] md:px-[25px] pt-[20px] md:pt-[38px] pb-[30px] md:pb-[47px] rounded-t-[20px] rounded-b-[18px]'>
                                        <p className='text text-primaryLight dark:text-primaryDark text-center '>Will ensure the maximum proportion of successful payments, without giving a chance for fraudster to pass!</p>
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