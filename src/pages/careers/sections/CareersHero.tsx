import Button from '@/components/Button';
import OutlineButton from '@/components/OutlineButton';
import Image from 'next/image';
import React from 'react';

export const CareersHero = () => {
    return (
        <section className="careers__hero--section bg-primaryLight dark:bg-primaryDark mt-[-135px]">
            <div className="section_wrapper pt-[250px] pb-[500px] auto-padding justify-between flex flex-col md:flex-row gap-10 relative">
                <div className="flex flex-col py-10 w-2/5">
                    <h2 className="title-h1 font-extrabold mb-[27px]">careers</h2>
                    <p className="text font-bold mb-10">
                        A broad range of projects are being offered at Siquro, and ambitious self-motivated professionals are welcome to apply their talents.
                    </p>
                    <OutlineButton title={'join us'} link={'contacts'} />
                </div>

                <div className="absolute top-[270px] right-[14%] flex border-[3px] border-primaryDark dark:border-[#FFE8E8]  flex-col py-9 pb-16 px-5 bg-transparent h-min max-w-[738px]">
                    <div className='mt-[-120px] mx-auto'>
                        <Image src={'/careers.png'} alt={'Carerrs'} width={434} height={357}></Image>
                    </div>

                    <h2 className="title-h2 !font-kodchasan !text-5xl mb-5">CAREERS</h2>
                    <h1 className="title-h1 font-extrabold">Become a member of our team</h1>
                    <p className="text darktext-primaryLight text-primaryDark pb-7 pe-7">A broad range of projects are being offered at Siquro, and ambitious self-motivated professionals are welcome to apply their talents. A lot needs to be done in the world’s most promising fintech company, from developing innovative payment systems to helping the company reach new markets.</p>

                    <Button title={'Contact Us'} color={'light'} link={'contacts'} />
                </div>
            </div>
        </section>
    )
}
