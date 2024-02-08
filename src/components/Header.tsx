import Link from "next/link";
import Image from "next/image"
import Swicher from "./swicher";
import { useRouter } from "next/router";
import { useState } from "react";

const Header = () => {
    const router = useRouter();
    const [burgerActive, setBurgerActive] = useState(false);

    return (
        <header className="nav-padding relative z-50">
            <div className="flex flex-row  md:flex-wrap lg:flex-nowrap items-center justify-between  py-5 md:py-8 bg-primaryDark dark:bg-transparent px-5 md:px-10 rounded-b-[15px]">
                <Link href="/" className="min-w-[132px] w-[132px] md:w-[166px] xl:w-[200px]">
                    <Image src="/logo_new.png" width={200} height={70} alt="logo" className="w-full h-auto" priority />
                </Link>

                <nav className="hidden md:flex md:justify-between md:order-last md:w-full lg:order-none lg:justify-center">
                    <Link href={"/"} className={`link ${router.pathname === '/' ? 'active' : ''}`}>Home</Link>
                    <Link href={"/solutions"} className={`link ${router.pathname === '/solutions' ? 'active' : ''}`}>Solutions</Link>
                    <Link href={"/services"} className={`link ${router.pathname === '/services' ? 'active' : ''}`}>Services</Link>
                    <Link href={"/company"} className={`link ${router.pathname === '/company' ? 'active' : ''}`}>Company</Link>
                    <Link href={"/careers"} className={`link ${router.pathname === '/careers' ? 'active' : ''}`}>Careers</Link>
                    <Link href={"/contacts"} className={`link ${router.pathname === '/contacts' ? 'active' : ''}`}>Contact Us</Link>
                </nav>

                <div className="search hidden mr-5 relative md:flex items-center ">
                    <input type="text" placeholder="SEARCH" className="transition-[width] duration-500 border-0 rounded-[20px] bg-transparent font-kodchasan text-primaryLight dark:text-primaryLight placeholder:text-primaryLight placeholder:text-[13px] w-0 " />
                    <button className="relative w-[31px] h-[31px]">
                        <Image src="/ri-search-2-line.svg" width={31} height={31} alt={"Search"} className="w-[31px] h-auto absolute top-0 right-0" />
                    </button>
                </div>

                <div className="flex flex-row">
                    <Swicher small={false} />
                    <Image className="block md:hidden cursor-pointer ms-4" src="/burger.svg" width={24} height={21} alt="menu" onClick={() => {
                        setBurgerActive(true)
                    }} />
                </div>

                {burgerActive && <div className="w-full h-screen bg-[#1E1E1E] absolute top-0 left-0 flex flex-col gap-4 p-5 z-[100]">
                    <div className="flex flex-row justify-between items-center">
                        <Link href="/" className="w-[132px]">
                            <Image src="/logo_new.png" width={200} height={70} alt="logo" className="w-full h-auto" priority />
                        </Link>

                        <div className="flex flex-row gap-4">
                            <Swicher small={true} />

                            <Image className="block cursor-pointer w-[16px] h-auto ms-2" src="/close.svg" width={16} height={16} alt="cancel" onClick={() => {
                                setBurgerActive(false)
                            }} />
                        </div>
                    </div>

                    <div className="w-full relative">
                        <input type="text" placeholder="SEARCH" className="border-0 rounded-[20px] py-2 ps-4 bg-[#0F0F0F] w-full font-kodchasan text-primaryLight dark:text-primaryLight placeholder:text-primaryLight placeholder:text-[13px] pe-[35px]" />
                        <Image src="/ri-search-2-line.svg" width={31} height={31} alt={"Search"} className="w-[15px] h-auto absolute top-3 right-3" />
                    </div>

                    <nav className="flex flex-col gap-1">
                        <Link href={"/"} className={`link_mob py-4 ${router.pathname === '/' ? 'active_mob' : ''}`} onClick={() => {
                            setBurgerActive(false)
                        }}>Home</Link>
                        <Link href={"/solutions"} className={`link_mob py-4 ${router.pathname === '/solutions' ? 'active_mob' : ''}`} onClick={() => {
                            setBurgerActive(false)
                        }} >Solutions</Link>
                        <Link href={"/services"} className={`link_mob py-4 ${router.pathname === '/services' ? 'active_mob' : ''}`} onClick={() => {
                            setBurgerActive(false)
                        }}>Services</Link>
                        <Link href={"/company"} className={`link_mob py-4 ${router.pathname === '/company' ? 'active_mob' : ''}`} onClick={() => {
                            setBurgerActive(false)
                        }}>Company</Link>
                        <Link href={"/careers"} className={`link_mob py-4 ${router.pathname === '/careers' ? 'active_mob' : ''}`} onClick={() => {
                            setBurgerActive(false)
                        }}>Careers</Link>
                        <Link href={"/contacts"} className={`link_mob py-4 ${router.pathname === '/contacts' ? 'active_mob' : ''}`} onClick={() => {
                            setBurgerActive(false)
                        }}>Contact Us</Link>
                    </nav>

                </div>}
            </div>
        </header>
    );
}

export default Header;