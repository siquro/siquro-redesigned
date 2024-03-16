'use client';

import "./careersPage.css";
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import { Autoplay, EffectCoverflow, Mousewheel, Pagination } from "swiper/modules";

const OpenPositions = () => {
    const content = [
        {
            title: "FRONT-END DEVELOPER",
            description: "Our company is looking for a Front-end developer who can help us develop efficient user interfaces, optimize pages, and implement best practices.",
        },
        {
            title: " 2 position",
            description: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
        },
        {
            title: "3 position",
            description: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
        },
        {
            title: "KEY ACCOUNT MANAGER",
            description: "Customer questions, issues, and concerns are addressed via online communication channels in this role.",
        },
    ]

    const Card = ({ title, description }: { title: string, description: string }) => {
        return <>
            <h4 className='title-h4  !text-primaryLight dark:!text-primaryDark mb-5 text-center'>{title}</h4>
            <p className='text !text-primaryLight dark:!text-primaryDark text-center'>{description}</p>
        </>
    }

    return (
        <section className="container flex flex-col pb-10 sm:pb-[40px] mt-[40px] sm:mt-[350px] md:mt-[-43px] lg:mt-[-55px] xl:mt-[-117px]">
            <div className="title--container md:border-b-[3px] border-primaryDark dark:border-primaryLight">
                <h3 className="title-h3 text-center md:text-start">Open<br />positions</h3>
            </div>

            <div className="position__slider--container mb-[40px] md:mb-24 overflow-hidden">
                <Swiper
                    loop={true}
                    autoplay={{
                        delay: 4000,
                        disableOnInteraction: false,
                    }}
                    navigation
                    pagination={{ clickable: true }}
                    effect="coverflow"
                    coverflowEffect={{
                        rotate: 0,
                        stretch: 0,
                        depth: 650,
                        modifier: 4,
                        slideShadows: false,
                        scale: 1.5,
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
                    modules={[Autoplay, EffectCoverflow, Mousewheel, Pagination]}
                    className="open__position-swiper"
                >
                    {content.map((item, index) =>
                        <SwiperSlide key={index} className="slider--content dark:bg-primaryLight bg-primaryDark rounded-[20px] px-5 md:px-8 md:pt-[45px] md:pb-[71px] ">
                            <Card title={item.title} description={item.description} />
                        </SwiperSlide>
                    )}
                </Swiper>
            </div>
        </section >);
}

export default OpenPositions;