import Button from '@/components/Button';
import OutlineButton from '@/components/OutlineButton';
import Image from 'next/image';
import React from 'react';

const CareersHero = () => {
    return (
        <section className="careers__hero--section bg-primaryLight dark:bg-primaryDark mt-[-135px]">
            <div className="section_wrapper pt-[250px] sm:pb-[400px]  xl:pb-0 auto-padding justify-between flex flex-col items-center sm:flex-row sm:items-start gap-10 relative">
                <div className="flex flex-col mb-10 sm:mb-0 py-10 w-4/5 sm:w-2/5 md:w-[44%] xl:w-3/5">
                    <h2 className="title-h1 font-extrabold mb-[27px]">careers</h2>
                    <p className="text font-bold mb-10 !leading-loose">
                        A broad range of projects are being offered at Siquro, and ambitious self-motivated professionals are welcome to apply their talents.
                    </p>
                    <OutlineButton title={'join us'} link={'contacts'} />
                </div>

                <div className="relative sm:absolute xl:relative sm:top-[270px] sm:right-0 xl:top-0 border-[3px]  flex border-primaryDark dark:border-[#FFE8E8] flex-col py-9 pb-16 px-5 bg-transparent h-min w-full sm:max-w-[410px] lg:max-w-[560px] xl:max-w-[738px]">
                    <div className='mt-[-120px] mx-auto w-[250px] sm:w-[320px] mx:w-[434px]'>
                        <Image src={'/careers.png'} alt={'Carerrs'} width={434} height={357} className='w-full h-auto' />
                    </div>

                    <h2 className="title-h2 !font-kodchasan !text-5xl mb-2">CAREERS</h2>
                    <h1 className="title-h1 font-extrabold !leading-snug">Become a member of our team</h1>
                    <p className="text darktext-primaryLight text-primaryDark pb-7 pe-7">A broad range of projects are being offered at Siquro, and ambitious self-motivated professionals are welcome to apply their talents. A lot needs to be done in the world’s most promising fintech company, from developing innovative payment systems to helping the company reach new markets.</p>

                    <Button title={'Contact Us'} color={'light'} link={'contacts'} />
                </div>
            </div>
        </section>
    )
}

export default CareersHero;