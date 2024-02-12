import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
import { Autoplay } from "swiper/modules";

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
                    <h4 className="title-h3 !font-montserrat darktext-primaryLight text-primaryDark mb-5 !leading-[55px]">DIGITAL WALLET</h4>
                    <p className="text mb-7 darktext-primaryLight text-primaryDark ">With Siquuro, you can meet the challenges of specific markets and underserved segments by offering an extensive payment option to your customers.</p>
                </div>

            </SwiperSlide>
            <SwiperSlide className="flex flex-row w-min">

                <Image src="/solution-2.png" alt="Solution 2" width={142} height={91} />


                <div>
                    <h4 className="title-h3 !font-montserrat darktext-primaryLight text-primaryDark mb-5 !leading-[55px]">PAYMENT GATEWAY</h4>
                    <p className="text mb-7 darktext-primaryLight text-primaryDark ">With Siquuro, you can meet the challenges of specific markets and underserved segments by offering an extensive payment option to your customers.</p>

                </div>
            </SwiperSlide>
            <SwiperSlide className="flex flex-row w-min">


                <Image src="/solution-3.png" alt="Solution 3" width={142} height={91} />


                <div>
                    <h4 className="title-h3 !font-montserrat darktext-primaryLight text-primaryDark mb-5 !leading-[55px]">ADVANCED ANALYTICS</h4>
                    <p className="text mb-7 darktext-primaryLight text-primaryDark ">With Siquuro, you can meet the challenges of specific markets and underserved segments by offering an extensive payment option to your customers.</p>
                </div>

            </SwiperSlide>
            <SwiperSlide className="flex flex-row w-min">


                <Image src="/solution-4.png" alt="Solution 4" width={142} height={91} />


                <div>
                    <h4 className="title-h3 !font-montserrat darktext-primaryLight text-primaryDark mb-5 !leading-[55px]">PAYMENT METHODS</h4>
                    <p className="text mb-7 darktext-primaryLight text-primaryDark ">With Siquuro, you can meet the challenges of specific markets and underserved segments by offering an extensive payment option to your customers.</p>
                </div>

            </SwiperSlide>

        </Swiper>

    </section>);
}

export default SolutionsList;