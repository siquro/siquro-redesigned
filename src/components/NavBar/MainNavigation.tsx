import Link from 'next/link';
import { usePathname } from 'next/navigation';

const MainNavigation = () => {
  const pathname = usePathname();

  return (
    <nav className="hidden md:flex md:justify-between md:order-last md:w-full lg:order-none lg:justify-center">
      <Link href={"/"} className={`link ${pathname === '/' ? 'active' : ''}`}>Home</Link>
      <Link href={"/solutions"} className={`link ${pathname === '/solutions' ? 'active' : ''}`}>Solutions</Link>
      <Link href={"/services"} className={`link ${pathname === '/services' ? 'active' : ''}`}>Services</Link>
      <Link href={"/company"} className={`link ${pathname === '/company' ? 'active' : ''}`}>Company</Link>
      <Link href={"/careers"} className={`link ${pathname === '/careers' ? 'active' : ''}`}>Careers</Link>
      <Link href={"/contacts"} className={`link ${pathname === '/contacts' ? 'active' : ''}`}>Contact Us</Link>
    </nav>
  )
}

export default MainNavigation;