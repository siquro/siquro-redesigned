import React from 'react';
import Image from 'next/image';

export const ContactsForm = () => {
    return (
        <section className='auto-padding mb-10'>
            <div>
                <div className='flex flex-col md:flex-row gap-10 xl:gap-28 items-center md:justify-between mb-28'>
                    <div className='w-full sm:w-4/5 md:w-1/2'>
                        <p className='text uppercase'>Company</p>
                        <div className='flex flex-row flex-nowrap items-end border-b-4 border-b-primaryDark dark:border-b-primaryLight justify-between pb-6'>
                            <p className='title-h5'>Fast Advisors OU</p>
                            <Image src="/contact_company-icon.svg" width={60} height={60} alt={''} />
                        </div>
                    </div>

                    <div className='w-full sm:w-4/5 md:w-1/2'>
                        <p className='text uppercase'>Email</p>
                        <div className='flex flex-row flex-nowrap items-end border-b-4 border-b-primaryDark dark:border-b-primaryLight justify-between pb-6'>
                            <a href="mailto:info@siquiro.com" className='block underline title-h5'>info@siquiro.com</a>

                            <Image src="/ri-mail-fill.svg" width={60} height={60} alt={''} />
                        </div>
                    </div>
                </div>


                <div className='form__wrapper flex flex-col lg:flex-row items-center gap-10 xl:gap-28'>
                    <div className='w-full sm:w-4/5 md:w-3/5 lg:w-1/2 text-center lg:text-left'>
                        <h4 className='title-h4 !font-montserrat mb-5 !text-[32px] sm:!text-[36px]'>Send a Message</h4>
                        <p className='text'>Please get in touch to get more offers on a broad range of Siquuro services from our expert support team.</p>
                    </div>

                    <div className="w-full sm:w-4/5 md:w-3/5 lg:w-1/2 flex flex-col dark:bg-primaryDark bg-primaryLight border-primaryDark border-2 dark:border-[#FFE8E8] rounded-[20px] pt-10">
                        <form action="">
                            <div className='px-10 pb-6'>
                                <label className="block mb-6">
                                    <span className="text !font-montserrat !font-normal uppercase pb-9">name</span>
                                    <input type="text" className="mt-5 block w-full rounded-[20px] border-2 border-primaryDark dark:border-primaryLight shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 bg-transparent h-[54px]" placeholder="" />
                                </label>
                                <label className="block mb-6">
                                    <span className="text !font-montserrat !font-normal uppercase pb-9">Email</span>
                                    <input type="email" className="mt-5 block w-full rounded-[20px] border-2 border-primaryDark dark:border-primaryLight shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 bg-transparent h-[54px]" placeholder="" />
                                </label>

                                <label className="block mb-6">
                                    <span className="text !font-montserrat !font-normal uppercase pb-9">text</span>
                                    <textarea className="mt-5 block w-full rounded-[20px] border-2 border-primaryDark dark:border-primaryLight shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 bg-transparent" rows={5}></textarea>
                                </label>
                            </div>


                            <button className='block bg-primaryDark dark:bg-primaryLight rounded-b-[17px] text-center py-[20px] px-11 text-[18px] uppercase font-montserrat font-bold text-primaryLight dark:text-primaryDark w-full tracking-[3px]' type='submit'>SEND</button>
                        </form>

                    </div>
                </div>
            </div>
        </section>
    )
}
