'use client';

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import MainNavigation from "./navigations/MainNavigation";
import MobNavigation from "./navigations/MobNavigation";
import ThemeSwitcher from "./themeSwitcher/ThemeSwitcher";

const Header = () => {
    const [burgerActive, setBurgerActive] = useState(false);

    return (
        <header className="container relative z-50">
            <div className="flex flex-row  md:flex-wrap lg:flex-nowrap items-center justify-between px-1 py-5 md:py-5 bg-primaryDark dark:bg-transparent  rounded-b-[15px]">
                <Link href="/" className="min-w-[132px] w-[132px] md:w-[166px] xl:w-[200px]">
                    <Image src="/logo_new.png" width={200} height={70} alt="logo" className="w-full h-auto" priority />
                </Link>

                <MainNavigation />

                <Link href={`/log-in`} className="hidden lg:block me-5">
                    <div className="button-wrapper relative w-full">
                        <button className=" text-nowrap button py-[6px] px-[16px] dark:text-white text-black cursor-pointer text-[14px] text-center relative uppercase font-medium rounded-full dark:bg-black bg-white border-0" type="button">Log in</button>
                        <div className="button-bg absolute top-0 left-0 bg-white rounded-full z-[-1]"></div>
                    </div>
                </Link>

                <div className="flex flex-row w-[100px]">
                    <ThemeSwitcher small={false} />
                    <Image className="block lg:hidden cursor-pointer ms-4" src="/burger.svg" width={24} height={21} alt="menu" onClick={() => {
                        setBurgerActive(true)
                    }} />
                </div>

                {burgerActive && <div className="w-full h-screen bg-[#1E1E1E] absolute top-0 left-0 flex flex-col gap-4 p-5 z-[100]">
                    <div className="flex flex-row justify-between items-center mb-[20px]">
                        <Link href="/" className="w-[132px]">
                            <Image src="/logo_new.png" width={200} height={70} alt="logo" className="w-full h-auto" priority />
                        </Link>

                        <div className="flex flex-row">
                            <ThemeSwitcher small={true} />

                            <Image className="block cursor-pointer w-[23px] mt-[4px] md:mt-[8px] h-[16px] md:h-[23px] ms-[16px]" src="/close.svg" width={16} height={16} alt="cancel" onClick={() => {
                                setBurgerActive(false)
                            }} />
                        </div>
                    </div>

                    <MobNavigation onClickHandler={() => { setBurgerActive(false) }} />
                </div>}
            </div>
        </header>
    );
}

export default Header;