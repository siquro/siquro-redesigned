'use client'

import { Swiper, SwiperSlide } from 'swiper/react';
import "./homePage.css";
import Image from 'next/image';
import 'swiper/css';
import { Autoplay, EffectCards, Mousewheel, Pagination } from 'swiper/modules';

import 'swiper/css/scrollbar';
import { useState } from 'react';

export const pagination = {
    clickable: true,
    renderBullet: function (index: any, className: string) {
        return '<span class="' + className + '"></span>';
    },
};

const WhatWeDo = () => {
    const [activeSlideIndex, setActiveSlideIndex] = useState(0);

    const content = [
        {
            title: "ANTIFRAUD SYSTEM",
            description: "Filters and settings are customized for your business type in our proprietary antifraud system",
            icon: "SYSTEM.png",
            right_title: "ANTIFRAUD right side",
            right_description: "ANTIFRAUD right side description",
            right_description2: "ANTIFRAUD right side description and more information lorem ipsum dolor sit amet, lorem ipsum, dolor sit amet",
        },
        {
            title: "PCI DSS И SSL",
            description: "Conformity with PCI DSS level 1 security standards, using SSL encryption",
            icon: "SSL.png",
            right_title: "PCI DSS И SSL right side",
            right_description: "PCI DSS И SSL right side description",
            right_description2: "PCI DSS И SSL right side description and more information",
        },
        {
            title: "CHARGEBACKS AND REFUNDS",
            description: "Support for chargebacks and instant response to incidents",
            icon: "REFUNDS.png",
            right_title: "CHARGEBACKS AND REFUNDS right side",
            right_description: "CHARGEBACKS AND REFUNDS right side description",
            right_description2: "CHARGEBACKS AND REFUNDS right side description and more information",
        },
        {
            title: "ONLINE FRAUD MONITORING",
            description: "A fraud officer monitors real-time transactions and prevents fraud activity.",
            icon: "MONITORING.png",
            right_title: "AONLINE FRAUD MONITORING right side",
            right_description: "ONLINE FRAUD MONITORING right side description",
            right_description2: "ONLINE FRAUD MONITORING right side description and more information",
        },
    ]

    const [activeSlideData, setActiveSlideData] = useState(content[0]);

    const Card = ({ title, description, icon }: { title: string, description: string, icon: string }) => {
        return <div className='p-[15px] md:pt-[20px] md:pb-[71px] max-w-[480px]'>
            <div className='mb-4 w-[45px] md:w-[60px] h-[45px] md:h-[60px] relative mx-auto'>
                <Image className='' src={`/what_we_do-icon/${icon}`} alt={""} fill />
            </div>
            <div>
                <h4 className='title-h4  dark:!text-primaryDark mb-5 text-center'>{title}</h4>
                <p className='text  dark:!text-primaryDark text-center'>{description}</p>
            </div>
        </div>
    }

    const handleSlideChange = (swiper: { realIndex: any; }) => {
        const index = swiper.realIndex;
        setActiveSlideIndex(index);
        setActiveSlideData(content[index]); 
    };

    return (
        <section className="we__do--section bg-weDoSectionBg dark:bg-primaryDark bg-no-repeat bg-[20% 20%] md:bg-cover overflow-hidden">
            <div className='bg-[#d3d3d314] pt-[63px] pb-[40px] md:pb-[90px] '>
                <div className="container flex flex-col-reverse lg:flex-row gap-5 items-center justify-between">
                    <div className="overflow-hidden mt-[70px]">
                        <Swiper
                            direction='vertical'
                            autoplay={true}
                            // loop={true}
                            effect={'cards'}
                            cardsEffect={{
                                perSlideOffset: 19,
                                perSlideRotate: 0,
                            }}
                            slideToClickedSlide={true}
                            grabCursor={true}
                            pagination={pagination}
                            breakpoints={{
                                320: {
                                    slidesPerView: 1,
                                },
                                1024: {
                                    slidesPerView: 1,
                                },
                            }}
                            modules={[Mousewheel, Autoplay, Pagination, EffectCards]}
                            className='we_do--slider h-[300px] md:h-[500px]'
                            onSlideChange={handleSlideChange}
                        >
                            {content.map((item, index) =>
                                <SwiperSlide key={index} className='bg-[#DADADA]  dark:bg-primaryLight rounded-[20px] px-5 md:px-8 md:pt-[45px] md:pb-[71px]'>
                                    <Card title={item.title} description={item.description} icon={item.icon} />
                                </SwiperSlide>
                            )}

                        </Swiper>
                    </div>

                    <div className='w-full lg:w-3/5 flex flex-col items-end'>
                        <div id="animate-right">
                            <h4 className="title-h4 text-end ">what we do</h4>
                            <h2 className="title-h2 text-end md:text-nowrap">{activeSlideData.right_title}</h2>
                        </div>


                        <div id="animate-fadein" className='sm:w-[90%] md:w-[70%] lg:w-[80%] xl:w-[90%] flex flex-col items-end'>
                            <div className='bg_element relative after:absolute after:left-[-92px] after:h-[290px] after:z-[1] after:hidden after:sm:block after:sm:w-[92px] after:invert after:dark:invert-0'>
                                <div className='flex flex-col item  rounded-[20px] mt-6 md:mt-12 w-full max-w-[640px] border-primaryDark dark:border-primaryLight border-2'>
                                    <h4 className='title-h4 px-[15px] py-[19px]  text-center'>A software package<br /> that is unique</h4>
                                    <div className='min-h-[150px] bg-[#DADADA] mt-auto dark:bg-primaryLight px-[15px] md:px-[25px] pt-[20px] md:pt-[38px] pb-[30px] md:pb-[47px] rounded-t-[20px] rounded-b-[18px] border-2 border-t-primaryDark dark:border-0'>
                                        <p className='text !text-primaryDark text-center'>{activeSlideData.right_description}</p>
                                    </div>
                                </div>

                                <div className='flex flex-col item   rounded-[20px] mt-6 md:mt-12 w-full max-w-[640px] border-primaryDark dark:border-primaryLight border-2'>
                                    <h4 className='title-h4 px-[15px] py-[19px] text-center'>Processes for intelligent payments</h4>
                                    <div className='min-h-[150px] h-full bg-[#DADADA] dark:bg-primaryLight px-[15px] md:px-[25px] pt-[20px] md:pt-[38px] pb-[30px] md:pb-[47px] rounded-t-[20px] rounded-b-[18px] border-2 border-t-primaryDark dark:border-0'>
                                        <p className='text !text-primaryDark text-center'>{activeSlideData.right_description2}</p>
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