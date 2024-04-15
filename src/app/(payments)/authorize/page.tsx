'use client';
import Image from 'next/image';
import React, { useState, useEffect } from 'react';

interface PaymentMethod {
    paymentViaDesktop: string;
    QRLink: string;
}

interface PaymentMethodsData {
    data: PaymentMethod[];
}


const Authorize = () => {
    const [paymentMethods, setPaymentMethods] = useState<PaymentMethodsData | null>(null);

    useEffect(() => {
        const storedData = localStorage.getItem('authorize-data');
        if (storedData) {
            setPaymentMethods(JSON.parse(storedData));
            localStorage.removeItem('authorize-data');
        }
    }, []);

    console.log(paymentMethods);

    return (
        <>
            <section className="container py-24 sm:py-24">
                <h1 className='title-h1 text-center'>Select payment method</h1>
                <div className='item flex flex-col sm:flex-row flex-wrap rounded-[20px] mt-6 md:mt-12 w-full max-w-[640px] border-primaryDark dark:border-primaryLight border-2 mx-auto px-[15px] py-[19px] '>
                    <div className='w-1/2 p-5 relative cursor-pointer'>
                        {paymentMethods && <h4 className='badge mb-5 text-center'>{paymentMethods.data[0].paymentViaDesktop}</h4>}
                    </div>

                    <div className='w-1/2 p-5 relative cursor-pointer'>
                        {paymentMethods && <Image height={220} width={220} src={paymentMethods.data[0].QRLink} alt='QR' className='w-1/2 h-auto mx-auto' />}
                    </div>
                </div>
            </section>
        </>
    );
}

export default Authorize;
