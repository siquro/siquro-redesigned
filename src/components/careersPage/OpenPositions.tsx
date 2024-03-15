'use client';

import "./careersPage.css";
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import { Autoplay, EffectCoverflow, Mousewheel, Pagination } from "swiper/modules";

const OpenPositions = () => {
    const content = [
        {
            title: "1 position",
            description: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
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
            title: "4 position",
            description: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
        },
    ]

    const Card = ({ title, description }: { title: string, description: string }) => {
        return <>
            <h4 className='title-h4 text-primaryLight dark:text-primaryDark mb-7 text-center'>{title}</h4>
            <p className='text text-primaryLight dark:text-primaryDark text-center'>{description}</p>
        </>
    }


    return (
        <section className="container flex flex-col  pb-10 sm:pb-[40px] lg:mt-[-50px]">
            <div className="title--container">
                <h3 className="title-h3">Open<br/>positions</h3>
            </div>

            <div className="position__slider--container mt-[60px] mb-24">
                <Swiper
                    loop={true}
                    autoplay={{
                        delay: 3000,
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
                    slidesPerView={3}
                    centeredSlides
                    modules={[Autoplay, EffectCoverflow, Mousewheel, Pagination]}
                    className="open__position-swiper"
                >
                    {content.map((item, index) =>
                        <SwiperSlide key={index} className="slider--content bg-primaryLight rounded-[20px] px-8 pt-[45px] pb-[71px] ">
                            <Card title={item.title} description={item.description} />
                        </SwiperSlide>
                    )}
                </Swiper>
            </div>
        </section >);
}

export default OpenPositions;