import Button from '@/components/Button'
import React from 'react'

export const CompanyHero = () => {
    return (
        <section className="campany__hero--section bg-primaryLight dark:bg-primaryDark mt-[-135px]">
            <div className="section_wrapper pt-[250px] pb-[90px] auto-padding justify-between items-center flex flex-col md:flex-row gap-10">
                <div className="flex flex-col w-1/2 py-10 justify-center">
                    <h2 className="title-h2 !font-kodchasan !text-5xl mb-5">SOLUTIONS</h2>
                    <h1 className="title-h1 font-extrabold mb-[27px]">About us</h1>
                    <p className="text font-bold uppercase">
                        In 2022, Siquro was established and is now one of the leading payment platform providers worldwide. Siquro’s solutions are perfect for banks, PSPs, financial institutions, and more.
                    </p>
                </div>

                <div className="flex border-[3px] border-primaryDark dark:border-[#FFE8E8] w-1/2  max-w-[670px] flex-col py-10 px-10 bg-transparent h-min">
                    <h3 className="title-h3 !font-montserrat darktext-primaryLight text-primaryDark mb-5 !leading-[55px] !capitalize">Our Vision</h3>
                    <p className="text mb-7 darktext-primaryLight text-primaryDark">No matter what your risk level is, we offer credit and debit cards, e-wallets, electronic payment systems, local direct debit systems – you name it!</p>

                    <Button title={'Contact Us'} color={'light'} link={'contacts'} />
                </div>
            </div>

            <div className='auto-padding mt-12'>
                <div className='item flex flex-col sm:flex-row justify-between items-center mb-9'>
                    <h3 className='title-h3 text-nowrap !font-montserrat'>Fast integrations</h3>
                    <p className='text w-2/5 text-right'>Integrating has never been easier or faster thanks to Siquro’s technology.</p>
                </div>
                <div className='item flex flex-col sm:flex-row justify-between items-center mb-6'>
                    <h3 className='title-h3 text-nowrap !font-montserrat'>Customization</h3>
                    <p className='text w-1/2 text-right'>With our technology, we can support any payment interaction possible. Tell us what you need, and we will provide it.</p>
                </div>
                <div className='item flex flex-col sm:flex-row justify-between items-center mb-1'>
                    <h3 className='title-h3 text-nowrap !font-montserrat'>Service</h3>
                    <p className='text w-1/2 text-right'>It is our goal to be your backbone and support system, so you can reach your full potential. Our team of experts are here for you 24/7, committed to providing first-class, accessible, and professional service..</p>
                </div>
                <div className='item flex flex-col sm:flex-row justify-between items-center mb-4'>
                    <h3 className='title-h3 text-nowrap !font-montserrat'>Innovation</h3>
                    <p className='text w-1/2 text-right'>Payment technology at its best…</p>
                </div>
                <div className='item flex flex-col sm:flex-row justify-between items-center mb-20'>
                    <h3 className='title-h3 text-nowrap !font-montserrat'>Flexibility</h3>
                    <p className='text w-1/2 text-right'>You can rely on us to be that flexibility layer.</p>
                </div>
            </div>
        </section>
    )
}
