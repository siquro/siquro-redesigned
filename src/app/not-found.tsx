import Link from 'next/link';
import React from 'react'

const NotFound = () => {

    return (
        <div className='container'>
            <div className="w-full md:w-1/2 flex items-center justify-center">
                <div className="max-w-sm m-8">
                    <div className="text-5xl">404</div>
                    <p className="">Sorry, the page you are looking for could not be found.</p>
                    <Link className="" href="/">
                        Home
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default NotFound;
