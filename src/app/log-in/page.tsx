'use client'

import { useState } from "react";

const Login = () => {
  const [state, setState] = useState<string | null>(null);

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    const form = e.currentTarget as HTMLFormElement;
    const email = e.target.LoginEmail.value;
    const password = e.target.LoginPassword.value;
    const data = { email, password };
    form.reset();

    try {
      const response = await fetch('/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email: data.email, password: data.password }),
      });

      if (!response.ok) {
        throw new Error('Failed to login');
      }
      // Process the successful response
      setState('ready');
    } catch (error) {
      console.error('Login failed:', error);
      setState('error'); // Set state to indicate error
    }


    console.log(data)
  }

  return (
    <>
      <section
        className="container py-24 sm:py-24"
      >

        <div className="w-full sm:w-4/5 md:w-4/5 lg:w-1/2 flex flex-col mx-auto dark:bg-primaryDark bg-primaryLight border-primaryDark border-2 dark:border-[#FFE8E8] rounded-[20px] pt-10">
          <h3 className="title-h3 mb-5 text-center">Log in</h3>

          <form onSubmit={handleSubmit}>
            <div className='px-4 md:px-10 pb-6'>
              <label className="block mb-6" htmlFor="LoginEmail">
                <span className="text !font-montserrat !font-normal uppercase pb-9">Email Address</span>
                <input id="LoginEmail"
                  type="email" className="mt-5 block w-full rounded-[20px] border-2 border-primaryDark dark:border-primaryLight shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 bg-transparent h-[54px]" placeholder="" />
              </label>

              <label className="block mb-6" htmlFor="LoginPassword">
                <span className="text !font-montserrat !font-normal uppercase pb-9"> Password</span>
                <input id="LoginPassword"
                  type="password" className="mt-5 block w-full rounded-[20px] border-2 border-primaryDark dark:border-primaryLight shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 bg-transparent h-[54px]" placeholder="" />
              </label>

              <div className="flex items-center mb-0">
                <input
                  className="rounded border-gray-200 dark:border-gray-800 text-indigo-600 focus:border-indigo-300 focus:ring focus:ring-offset-0 focus:ring-indigo-200 focus:ring-opacity-50 me-2"
                  type="checkbox"
                  value=""
                  id="RememberMe"
                />
                <label
                  className=" text-slate-400"
                  htmlFor="RememberMe"
                >
                  Remember me
                </label>
              </div>

            </div>

            <input
              type="submit"
              className="cursor-pointer block bg-primaryDark dark:bg-primaryLight rounded-b-[17px] text-center py-[25px] px-11 text-[18px] uppercase font-montserrat font-bold text-primaryLight dark:text-primaryDark w-full"
              value="Login"
            />
          </form>
        </div>
      </section>
    </>
  );
};
export default Login;
