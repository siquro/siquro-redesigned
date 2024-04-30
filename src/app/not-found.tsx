import React from 'react';
import Image from 'next/image';

const NotFound = () => {

    return (
        <div className='container'>
            <main className="bg-black relative h-screen flex flex-col justify-center items-center bg-hero bg-cover overflow-hidden">
                <div className="z-10 relative">
                    <div className="text-center">
                        <h1 className={`title-h1 !text-[100px] sm:!text-[180px] md:!text-[300px] lg:!text-[400px] lg:leading-none font-extrabold coming-soon !font-montserrat`}>404</h1>
                        <p className={`text-2xl sm:text-4xl md:text-5xl lg:text-7xl text-primaryLight font-kodchasan uppercase`}>
                            page not found
                        </p>
                    </div>

                    <div className='absolute right-[-30px] lg:right-[-120px] top-0 max-w-[335px] w-2/6'>
                        <Image src={'/404.png'} alt={'4o4'} width={335} height={400} className='w-full h-auto' />
                    </div>
                </div>
            </main>
        </div>
    )
}

export default NotFound;
