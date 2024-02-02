import Button from '@/components/Button'
import React from 'react'

export const CompanyHero = () => {
    return (
        <section className="campany__hero--section bg-primaryLight dark:bg-primaryDark mt-[-135px]">
            <div className="section_wrapper pt-[175px] pb-[90px] auto-padding justify-between items-center flex flex-col md:flex-row gap-10">
                <div className="flex flex-col w-1/2 py-10 justify-center">
                    <h2 className="title-h2 !font-kodchasan !text-5xl mb-5">SOLUTIONS</h2>
                    <h1 className="title-h1 font-extrabold mb-[27px]">About us</h1>
                    <p className="text font-bold uppercase">
                        In 2022, Siquro was established and is now one of the leading payment platform providers worldwide. Siquro’s solutions are perfect for banks, PSPs, financial institutions, and more.
                    </p>
                </div>

                <div className="flex border-[3px] border-primaryDark dark:border-[#FFE8E8] w-1/2  max-w-[670px] flex-col py-10 px-10 bg-transparent h-min">
                    <h4 className="title-h3 !font-montserrat darktext-primaryLight text-primaryDark mb-5 !leading-[55px] !capitalize">Our Vision</h4>
                    <p className="text mb-7 darktext-primaryLight text-primaryDark">No matter what your risk level is, we offer credit and debit cards, e-wallets, electronic payment systems, local direct debit systems – you name it!</p>

                    <Button title={'Contact Us'} color={'light'} link={'contacts'} />
                </div>
            </div>
        </section>
    )
}
