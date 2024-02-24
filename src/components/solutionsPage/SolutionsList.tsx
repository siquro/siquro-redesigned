'use client'
import Image from "next/image";
import 'swiper/css';
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const SolutionsList = () => {
    return (<section className="py-10">

        <Swiper
            loop={true}
            autoplay={{
                delay: 1500,
                disableOnInteraction: false,
            }}
            navigation
            pagination={{ clickable: true }}
            centeredSlides
            speed={800}
            modules={[Autoplay]}
            breakpoints={{
                640: {
                    slidesPerView: 1,
                },
                1024: {
                    slidesPerView: 2,
                },

                1440: {
                    slidesPerView: 3,
                },
            }}
        >
            <SwiperSlide className="flex flex-row w-min">
                <Image src="/solution-1.png" alt="Solution 1" width={142} height={91} />

                <div>
                    <h4 className="title-h4 mb-5">DIGITAL WALLET</h4>
                    <p className="text mb-7 dark:text-primaryLight text-primaryDark ">With Siquuro, you can meet the challenges of specific markets and underserved segments by offering an extensive payment option to your customers.</p>
                </div>
            </SwiperSlide>
            <SwiperSlide className="flex flex-row w-min">

                <Image src="/solution-2.png" alt="Solution 2" width={142} height={91} />


                <div>
                    <h4 className="title-h4 mb-5">PAYMENT GATEWAY</h4>
                    <p className="text mb-7 darktext-primaryLight text-primaryDark ">With Siquuro, you can meet the challenges of specific markets and underserved segments by offering an extensive payment option to your customers.</p>

                </div>
            </SwiperSlide>
            <SwiperSlide className="flex flex-row w-min">


                <Image src="/solution-3.png" alt="Solution 3" width={142} height={91} />


                <div>
                    <h4 className="title-h4 mb-5">ADVANCED ANALYTICS</h4>
                    <p className="text mb-7 darktext-primaryLight text-primaryDark ">With Siquuro, you can meet the challenges of specific markets and underserved segments by offering an extensive payment option to your customers.</p>
                </div>

            </SwiperSlide>
            <SwiperSlide className="flex flex-row w-min">


                <Image src="/solution-4.png" alt="Solution 4" width={142} height={91} />


                <div>
                    <h4 className="title-h4 mb-5">PAYMENT METHODS</h4>
                    <p className="text mb-7 darktext-primaryLight text-primaryDark ">With Siquuro, you can meet the challenges of specific markets and underserved segments by offering an extensive payment option to your customers.</p>
                </div>

            </SwiperSlide>

        </Swiper>

    </section>);
}

export default SolutionsList;