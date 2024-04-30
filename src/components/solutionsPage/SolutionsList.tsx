'use client'

import Image from "next/image";
import 'swiper/css';
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const SolutionsList = () => {
    const content = [
        {
            title: "DIGITAL WALLET",
            description: "Streamline your business beyond a card-based or crypto-based wallet to send and receive money globally. Manage your merchant account and your sub-merchant accounts, hold 50+ currencies, and enable your users to use FX.",
            icon: "digital.svg",
            number: "01.svg",
        },
        {
            title: "PAYMENT GATEWAY",
            description: "Your business can accept credit cards, debit cards, and alternative payments through our online payment gateway.",
            icon: "payment.svg",
            number: "02.svg",
        },
        {
            title: "ADVANCED ANALYTICS",
            description: "With a digital merchant portal, you can monitor the pay-in/pay-out information in real-time and gain a deeper understanding of your customers.",
            icon: "advanced.svg",
            number: "03.svg",
        },
        {
            title: "PAYMENT METHODS",
            description: "You can easily integrate your business via a single point of gateway with our current integrations with several global payment service providers.",
            icon: "methods.svg",
            number: "04.svg",
        },
    ]



    const Card = ({ title, description, icon, number }: { title: string, description: string, icon: string, number: string }) => {
        return <div className='flex flex-col md:flex-row relative h-[318px] items-center rounded-[20px] p-[20px]'>
            <div className="absolute left-0 top-0 md:left-[20px] h-1/2 md:h-full w-full md:w-3/4">
                <Image className='dark:invert-0 invert' src={`/solutions_icons/${number}`} alt={""} fill />
            </div>
            <div className='size-36 md:size-40 relative mb-[20px] md:mb-0'>
                <Image className='' src={`/solutions_icons/${icon}`} alt={"Icon"} fill />
            </div>

            <div className="w-full md:w-3/4 px-0 md:px-[20px]">
                <h4 className='title-h4'>{title}</h4>
                <p className='text'>{description}</p>
            </div>
        </div>
    }

    return (
        <section className="mt-16 mb-[20px] md:mb-[90px]">
            <Swiper
                loop={true}
                autoplay={{
                    delay: 1500,
                    disableOnInteraction: false,
                }}
                navigation
                pagination={{ clickable: true }}
                centeredSlides
                speed={1000}
                modules={[Autoplay]}
                breakpoints={{
                    640: {
                        slidesPerView: 1,
                    },
                    1024: {
                        slidesPerView: 2,
                    },

                    1440: {
                        slidesPerView: 2,
                    },
                }}
                className='solutions_slider'
            >
                {content.map((item, index) =>
                    <SwiperSlide key={index} className=''>
                        <Card title={item.title} description={item.description} icon={item.icon} number={item.number} />
                    </SwiperSlide>
                )}
            </Swiper>
        </section>);
}

export default SolutionsList;