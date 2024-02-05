import Button from '@/components/Button'
import React from 'react'

export const CompanyHero = () => {
    return (
        <section className="campany__hero--section bg-primaryLight dark:bg-primaryDark mt-[-135px]">
            <div className="section_wrapper pt-[250px] pb-10 sm:pb-[90px] auto-padding justify-between items-center flex flex-col md:flex-row gap-10">
                <div className="flex flex-col w-4/5 md:w-1/2 py-10 justify-center">
                    <h3 className="title-h3 ">SOLUTIONS</h3>
                    <h1 className="title-h1 font-extrabold mb-[27px] !leading-normal">About us</h1>
                    <p className="text font-bold uppercase leading-6 !font-montserrat">
                        In 2022, Siquro was established and is now one of the leading payment platform providers worldwide. Siquro’s solutions are perfect for banks, PSPs, financial institutions, and more.
                    </p>
                </div>

                <div className="flex border-[3px] border-primaryDark dark:border-[#FFE8E8] w-full md:w-1/2  max-w-[670px] flex-col py-7 sm:py-10 px-7 sm:px-12 bg-transparent h-min">
                    <h3 className="title-h3 !font-montserrat !text-[24px] sm:!text-[32px] md:!text-[36px]  dark:text-primaryLight text-primaryDark mb-5 !leading-[55px] !capitalize">Our Vision</h3>
                    <p className="text mb-7 darktext-primaryLight text-primaryDark">No matter what your risk level is, we offer credit and debit cards, e-wallets, electronic payment systems, local direct debit systems – you name it!</p>

                    <Button title={'Contact Us'} color={'light'} link={'contacts'} />
                </div>
            </div>

            <div className='auto-padding sm:mt-12'>
                <div className='item flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4 sm:mb-9'>
                    <h3 className='title-h3 text-nowrap !font-montserrat text-start mb-1'>Fast integrations</h3>
                    <p className='text w-full sm:w-1/2 text-start sm:text-right'>Integrating has never been easier or faster thanks to Siquro’s technology.</p>
                </div>
                <div className='item flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4'>
                    <h3 className='title-h3  text-nowrap !font-montserrat text-start'>Customization</h3>
                    <p className='text w-full sm:w-1/2 text-start sm:text-right mb-1'>With our technology, we can support any payment interaction possible. Tell us what you need, and we will provide it.</p>
                </div>
                <div className='item flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4'>
                    <h3 className='title-h3 text-nowrap !font-montserrat text-start'>Service</h3>
                    <p className='text w-full sm:w-1/2 text-start sm:text-right mb-1'>It is our goal to be your backbone and support system, so you can reach your full potential. Our team of experts are here for you 24/7, committed to providing first-class, accessible, and professional service..</p>
                </div>
                <div className='item flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4'>
                    <h3 className='title-h3 text-nowrap !font-montserrat text-start'>Innovation</h3>
                    <p className='text w-full sm:w-1/2 text-start sm:text-right mb-1'>Payment technology at its best…</p>
                </div>
                <div className='item flex flex-col sm:flex-row justify-between items-start sm:items-center mb-20'>
                    <h3 className='title-h3 text-nowrap !font-montserrat text-start'>Flexibility</h3>
                    <p className='text w-full sm:w-1/2 text-start sm:text-right mb-1'>You can rely on us to be that flexibility layer.</p>
                </div>
            </div>
        </section>
    )
}
