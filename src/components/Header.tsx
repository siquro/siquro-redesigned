import Link from "next/link";
import Image from "next/image"
import Swicher from "./swicher";
import { useRouter } from "next/router";

const Header = () => {
    const router = useRouter();

    return (
        <header className="nav-padding relative z-50">
            <div className="flex flex-row  md:flex-wrap lg:flex-nowrap items-center justify-between py-8 bg-primaryDark dark:bg-transparent px-10 rounded-b-[15px]">
                <Link href="/" className="">
                    <Image src="/logo_new.png" width={200} height={70} alt="logo" className=" w-[200px] h-auto" priority />
                </Link>
                <nav className="flex md:justify-between md:order-last md:w-full lg:order-none lg:justify-center">
                    <Link href={"/"} className={`link ${router.pathname === '/' ? 'active' : ''}`}>Home</Link>
                    <Link href={"/solutions"} className={`link ${router.pathname === '/solutions' ? 'active' : ''}`}>Solutions</Link>
                    <Link href={"/services"} className={`link ${router.pathname === '/services' ? 'active' : ''}`}>Services</Link>
                    <Link href={"/company"} className={`link ${router.pathname === '/company' ? 'active' : ''}`}>Company</Link>
                    <Link href={"/careers"} className={`link ${router.pathname === '/careers' ? 'active' : ''}`}>Careers</Link>
                    <Link href={"/contacts"} className={`link ${router.pathname === '/contacts' ? 'active' : ''}`}>Contact Us</Link>
                </nav>

                <button className="block mr-5">
                    <Image src="/ri-search-2-line.svg" width={31} height={31} alt={"Search"} className="mx-3"></Image>
                </button>
                <Swicher />
            </div>
        </header>
    );
}

export default Header;