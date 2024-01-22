import Link from "next/link";
import Image from "next/image"
import Swicher from "./swicher";
import { useRouter } from "next/router";

const Header = () => {
    const router = useRouter();

    return (
        <div className="nav-padding">
            <div className="flex flex-row flex-nowrap justify-between py-8 bg-primaryDark dark:bg-transparent px-10 rounded-b-[15px]">
                <Link href="/" className="">
                    <Image src="/logo_new.png" width={200} height={70} alt="logo" className=" w-[200px] h-auto" priority />
                </Link>
                <Link href={"/"} className={`link ${router.pathname === '/' ? 'active' : ''}`}>Home</Link>
                <Link href={"/solutions"} className={`link ${router.pathname === '/solution' ? 'active' : ''}`}>Solutions</Link>
                <Link href={"/services"} className={`link ${router.pathname === '/services' ? 'active' : ''}`}>Services</Link>
                <Link href={"/company"} className={`link ${router.pathname === '/company' ? 'active' : ''}`}>Company</Link>
                <Link href={"/careers"} className={`link ${router.pathname === '/careeers' ? 'active' : ''}`}>Careers</Link>
                <Link href={"/contact"} className={`link ${router.pathname === '/contact' ? 'active' : ''}`}>Contact Us</Link>
                <div>
                    <button>
                        <Image src="/ri-search-2-line.svg" width={31} height={31} alt={"Search"} className="mx-3"></Image>
                    </button>
                </div>
                <Swicher />
            </div>
        </div>
    );
}

export default Header;