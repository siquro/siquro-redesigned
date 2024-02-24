'use client'

import "./servicesPage.css";
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import { Autoplay, EffectCoverflow, Mousewheel, Pagination } from "swiper/modules";

const ServicesGoLocal = () => {
    const content = [
        {
            title: "EXTENSIVE POSSIBILITIES FOR ACCEPTING PAYMENTS",
            description: "No matter what your risk level is, we offer credit and debit cards, e-wallets, electronic payment systems, local direct debit systems – you name it!",
        },
        {
            title: "ON-DEMAND CUSTOMISATION",
            description: "With Shopify, BigCommerce, WHMCS, and other platforms and hosting services, as well as various CMS and CMRs, we offer technology to meet any business requirement.",
        },
        {
            title: "SECURE AND POTENT TECHNOLOGY",
            description: "Enjoy the convenience of 3D/non-3D terminals, repeated subscription payments, and deferred payments for mailed invoices with Siquuro.",
        },
        {
            title: "COOPERATION WITHOUT BORDERS",
            description: "Regardless of where your customers are located, they will be able to make online payments.",
        },
        {
            title: " CHOOSING AN AFFILIATE SCHEME",
            description: "Flexible commission rates based on the order of cooperation, the client’s size, and the type of business.",
        },
        {
            title: "MONTHLY REPORTING",
            description: "Your commission and involved turnover are detailed in our statistics,",
        },
    ]

    const Card = ({ title, description }: { title: string, description: string }) => {
        return <div className='bg-primaryLight rounded-[20px] px-8 pt-[45px] pb-[71px] shadow-3xl max-w-[480px]'>
            <h4 className='title-h4 text-primaryLight dark:text-primaryDark mb-[30px]'>{title}</h4>
            <p className='text text-primaryLight dark:text-primaryDark'>{description}</p>
        </div>
    }


    return (<section className="container flex flex-col py-40">
        <div className="title--container">
            <h4 className="title-h4 text-center">payment</h4>
            <h2 className="title-h2 mb-8 text-center">Forget trouble<br />with integration</h2>
        </div>

        <div className="payment__slider--container mt-[100px] mb-24">
            <Swiper
                loop={true}
                autoplay={{
                    delay: 4500,
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
                className="services-swiper"
            >
                <SwiperSlide className="slider--content bg-primaryLight rounded-[20px] px-8 pt-[45px] pb-[71px] ">
                    <h4 className='title-h4 text-primaryLight dark:text-primaryDark mb-7 text-center'>11111PCI DSS И SSL</h4>
                    <p className='text text-primaryLight dark:text-primaryDark text-center'>Conformity with PCI DSS level 1 security standards, using SSL encryption</p>
                </SwiperSlide>
                <SwiperSlide className="slider--content bg-primaryLight rounded-[20px] px-8 pt-[45px] pb-[71px]  ">
                    <h4 className='title-h4 text-primaryLight dark:text-primaryDark mb-7 text-center'>22222PCI DSS И SSL</h4>
                    <p className='text text-primaryLight dark:text-primaryDark text-center'>Conformity with PCI DSS level 1 security standards, using SSL encryption</p>
                </SwiperSlide>
                <SwiperSlide className="slider--content bg-primaryLight rounded-[20px] px-8 pt-[45px] pb-[71px] ">
                    <h4 className='title-h4 text-primaryLight dark:text-primaryDark mb-7 text-center'>33PCI DSS И SSL</h4>
                    <p className='text text-primaryLight dark:text-primaryDark text-center'>Conformity with PCI DSS level 1 security standards, using SSL encryption</p>
                </SwiperSlide>
                <SwiperSlide className="slider--content bg-primaryLight rounded-[20px] px-8 pt-[45px] pb-[71px] ">
                    <h4 className='title-h4 text-primaryLight dark:text-primaryDark mb-7 text-center'>44PCI DSS И SSL</h4>
                    <p className='text text-primaryLight dark:text-primaryDark text-center'>Conformity with PCI DSS level 1 security standards, using SSL encryption</p>
                </SwiperSlide>
                <SwiperSlide className="slider--content bg-primaryLight rounded-[20px] px-8 pt-[45px] pb-[71px] ">
                    <h4 className='title-h4 text-primaryLight dark:text-primaryDark mb-7 text-center'>5555PCI DSS И SSL</h4>
                    <p className='text text-primaryLight dark:text-primaryDark text-center'>Conformity with PCI DSS level 1 security standards, using SSL encryption</p>
                </SwiperSlide>
                {/* {content.map((item, index) =>
                    <SwiperSlide key={index}>
                        <Card title={item.title} description={item.description} />
                    </SwiperSlide>
                )} */}
            </Swiper>
        </div>


    </section >);
}

export default ServicesGoLocal;