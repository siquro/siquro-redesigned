'use client';
import Image from "next/image";
import Link from "next/link";
// import { useRouter } from "next/router";
import { useState } from "react";
import MainNavigation from "./navigations/MainNavigation";
import MobNavigation from "./navigations/MobNavigation";
import ThemeSwitcher from "./themeSwitcher/ThemeSwitcher";
// import { usePathname } from "next/navigation";

const Header = () => {
    // const router = useRouter();
    // const pathname = usePathname();
    const [burgerActive, setBurgerActive] = useState(false);

    return (
        <header className="container relative z-50">
            <div className="flex flex-row  md:flex-wrap lg:flex-nowrap items-center justify-between px-1 py-5 md:py-5 bg-primaryDark dark:bg-transparent  rounded-b-[15px]">
                <Link href="/" className="min-w-[132px] w-[132px] md:w-[166px] xl:w-[200px]">
                    <Image src="/logo_new.png" width={200} height={70} alt="logo" className="w-full h-auto" priority />
                </Link>

                <MainNavigation />

                {/* <div className="search hidden mr-5 relative md:flex items-center ">
                    <input type="text" placeholder="SEARCH" className="transition-[width] duration-500 border-0 rounded-[20px] bg-transparent font-kodchasan text-primaryLight dark:text-primaryLight placeholder:text-primaryLight placeholder:text-[13px] w-0 " />
                    <button className="relative w-[31px] h-[31px]">
                        <Image src="/ri-search-2-line.svg" width={31} height={31} alt={"Search"} className="w-[31px] h-auto absolute top-0 right-0" />
                    </button>
                </div> */}

                <div className="flex flex-row">
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

                            <Image className="block cursor-pointer w-[23px] h-[23px] ms-[16px]" src="/close.svg" width={16} height={16} alt="cancel" onClick={() => {
                                setBurgerActive(false)
                            }} />
                        </div>
                    </div>

                    {/* <div className="w-full relative">
                        <input type="text" placeholder="SEARCH" className="border-0 rounded-[20px] py-2 ps-4 bg-[#0F0F0F] w-full font-kodchasan text-primaryLight dark:text-primaryLight placeholder:text-primaryLight placeholder:text-[13px] pe-[35px]" />
                        <Image src="/ri-search-2-line.svg" width={31} height={31} alt={"Search"} className="w-[15px] h-auto absolute top-3 right-3" />
                    </div> */}

                    <MobNavigation onClickHandler={() => { setBurgerActive(false) }} />
                </div>}
            </div>
        </header>
    );
}

export default Header;