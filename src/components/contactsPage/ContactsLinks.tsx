import Image from 'next/image';

const ContactsLinks = () => {
    return (
        <section className='container'>
            <div className='flex flex-col gap-10 xl:gap-28 items-center md:justify-between mb-28'>
                <div className='w-full flex flex-col sm:flex-row gap-10 xl:gap-28'>
                    <div className='w-full sm:w-4/5 md:w-1/2'>
                        <p className='title-h4'>Company</p>
                        <div className='flex flex-row flex-nowrap items-end border-b-4 border-b-primaryDark dark:border-b-primaryLight justify-between pb-6'>
                            <p className='text uppercase'>Fast Advisors OU</p>
                            <Image src="/contact_company-icon.svg" width={60} height={60} alt={''} className='w-[25px] md:w-[30px] h-auto dark:invert-0 invert' />
                        </div>
                    </div>

                    <div className='w-full sm:w-4/5 md:w-1/2'>
                        <p className='title-h4'>Email</p>
                        <div className='flex flex-row flex-nowrap items-end border-b-4 border-b-primaryDark dark:border-b-primaryLight justify-between pb-6'>
                            <a href="mailto:info@siquiro.com" className='block hover:underline text uppercase'>info@siquiro.com</a>

                            <Image src="/ri-mail-fill.svg" width={60} height={60} alt={''} className='w-[25px] md:w-[30px] h-auto dark:invert-0 invert dark:filter-none' />
                        </div>
                    </div>

                </div>

                <div className='w-full sm:w-4/5 md:w-1/2'>
                    <p className='title-h4'>Support</p>
                    <div className='flex flex-row flex-nowrap items-end border-b-4 border-b-primaryDark dark:border-b-primaryLight justify-between pb-6'>
                        <a href="https://t.me/SiQURO_Support" target='_blanc' className='block hover:underline text uppercase'>https://t.me/SiQURO_Support</a>

                        <Image src="/telegram_l.svg" width={60} height={60} alt={'Telegram'} className='w-[25px] md:w-[30px] h-auto dark:invert-0 invert dark:filter-none' />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ContactsLinks;