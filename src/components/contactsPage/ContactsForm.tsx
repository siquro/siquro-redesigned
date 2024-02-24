import Image from 'next/image';

const ContactsForm = () => {
    return (
        <section className='container mb-10'>
            <div>
                <div className='flex flex-col gap-10 xl:gap-28 items-center md:justify-between mb-28'>
                    <div className='w-full flex flex-col sm:flex-row gap-10 xl:gap-28'>
                        <div className='w-full sm:w-4/5 md:w-1/2'>
                            <p className='title-h4'>Company</p>
                            <div className='flex flex-row flex-nowrap items-end border-b-4 border-b-primaryDark dark:border-b-primaryLight justify-between pb-6'>
                                <p className='text uppercase'>Fast Advisors OU</p>
                                <Image src="/contact_company-icon.svg" width={60} height={60} alt={''} className='w-[25px] sm:w-[35px] md:w-[50px] h-auto dark:invert-0 invert' />
                            </div>
                        </div>

                        <div className='w-full sm:w-4/5 md:w-1/2'>
                            <p className='title-h4'>Email</p>
                            <div className='flex flex-row flex-nowrap items-end border-b-4 border-b-primaryDark dark:border-b-primaryLight justify-between pb-6'>
                                <a href="mailto:info@siquiro.com" className='block hover:underline text uppercase'>info@siquiro.com</a>

                                <Image src="/ri-mail-fill.svg" width={60} height={60} alt={''} className='w-[25px] sm:w-[35px] md:w-[50px] h-auto dark:invert-0 invert dark:filter-none' />
                            </div>
                        </div>

                    </div>



                    <div className='w-full sm:w-4/5 md:w-1/2'>
                        <p className='title-h4'>Support</p>
                        <div className='flex flex-row flex-nowrap items-end border-b-4 border-b-primaryDark dark:border-b-primaryLight justify-between pb-6'>
                            <a href="https://t.me/SiQURO_Support" target='_blanc' className='block hover:underline text uppercase'>https://t.me/SiQURO_Support</a>

                            <Image src="/telegram_l.svg" width={60} height={60} alt={'Telegram'} className='w-[25px] sm:w-[35px] md:w-[50px] h-auto dark:invert-0 invert dark:filter-none' />
                        </div>
                    </div>
                </div>


                <div className='form__wrapper flex flex-col lg:flex-row gap-10 xl:gap-28'>
                    <div className='w-full mx-auto flex flex-col sm:w-4/5 md:w-3/5 lg:w-1/2 lg:text-left justify-between'>

                        <div className=''>
                            <h4 className='title-h3 mb-5'>Send a Message</h4>
                            <p className='text'>Please get in touch to get more offers on a broad range of Siquuro services from our expert support team.</p>
                        </div>

                    </div>

                    <div className="w-full sm:w-4/5 md:w-3/5 lg:w-1/2 flex flex-col mx-auto dark:bg-primaryDark bg-primaryLight border-primaryDark border-2 dark:border-[#FFE8E8] rounded-[20px] pt-10">
                        <form action="">
                            <div className='px-4 md:px-10 pb-6'>
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

export default ContactsForm;