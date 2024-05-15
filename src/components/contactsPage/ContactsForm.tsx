'use client'

import useInViewAnimation from "@/hooks/useInViewAnimation";
import { useState } from "react";

const ContactsForm = () => {
    const [state, setState] = useState<string>();
    useInViewAnimation();


    const handleSubmit = async (e: React.SyntheticEvent<HTMLFormElement>) => {
        e.preventDefault();

        const form = e.currentTarget as HTMLFormElement;
        const name = (form.elements.namedItem('name') as HTMLInputElement).value;
        const email = form.email.value;
        const message = form.message.value;
        const data = { name, email, message };
        console.log(data);
        form.reset();

        await fetch('/api/email', {
            method: 'POST',
            body: JSON.stringify({
                name: data.name,
                email: data.email,
                message: data.message,
            })
        })

        setState('ready')
    }

    return (
        <section className='container mb-[90px]'>
            <div className='form__wrapper flex flex-col lg:flex-row gap-10 xl:gap-28'>
                <div id="animate-left" className='w-full mx-auto flex flex-col sm:w-4/5 md:w-3/5 lg:w-1/2 lg:text-left justify-between'>

                    <div className=''>
                        <h4 className='title-h3 mb-5 text-center lg:text-start'>Send a Message</h4>
                        <p className='text  text-center lg:text-start'>Please get in touch to get more offers on a broad range of Siquuro services from our expert support team.</p>
                    </div>

                </div>

                <div id="animate-right" className="w-full sm:w-4/5 md:w-4/5 lg:w-1/2 flex flex-col mx-auto dark:bg-primaryDark bg-primaryLight border-primaryDark border-2 dark:border-[#FFE8E8] rounded-[20px] pt-10">
                    <form onSubmit={handleSubmit}>
                        <div className='px-4 md:px-10 pb-6'>
                            <label className="block mb-6" htmlFor="name">
                                <span className="text !font-montserrat !font-normal uppercase pb-9">name</span>
                                <input id="name" name="name" type="text" className="mt-5 block w-full rounded-[20px] border-2 border-primaryDark dark:border-primaryLight shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 bg-transparent h-[54px]" placeholder="" required/>
                            </label>
                            <label className="block mb-6" htmlFor="email">
                                <span className="text !font-montserrat !font-normal uppercase pb-9">Email</span>
                                <input id="email" name="email" type="email" className="mt-5 block w-full rounded-[20px] border-2 border-primaryDark dark:border-primaryLight shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 bg-transparent h-[54px]" placeholder="" required/>
                            </label>

                            <label htmlFor="message" className="block mb-6">
                                <span className="text !font-montserrat !font-normal uppercase pb-9">text</span>
                                <textarea id="message" name="message" className="mt-5 block w-full rounded-[20px] border-2 border-primaryDark dark:border-primaryLight shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 bg-transparent" rows={5} required></textarea>
                            </label>
                        </div>

                        <button className='gradient_text-wrapper block bg-primaryDark dark:bg-primaryLight rounded-b-[17px] text-center py-[20px] px-11 text-[18px] uppercase font-montserrat font-bold text-primaryLight dark:text-primaryDark w-full tracking-[3px]' type='submit'
                        ><span className="gradient-text text-primaryLight dark:text-primaryDark">SEND</span> </button>
                    </form>
                </div>
            </div>
        </section>
    )
}

export default ContactsForm;