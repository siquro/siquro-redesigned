import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FC } from 'react';

type MobNavigationProps = {
    onClickHandler: () => void;
}

export const MobNavigation: FC<MobNavigationProps> = ({ onClickHandler }) => {
    const pathname = usePathname();

    return (
        <nav className="flex flex-col gap-1">
            <Link href={"/"} className={`link_mob py-4 ${pathname === '/' ? 'active_mob' : ''}`} onClick={onClickHandler}>Home</Link>
            <Link href={"/solutions"} className={`link_mob py-4 ${pathname === '/solutions' ? 'active_mob' : ''}`} onClick={onClickHandler}>Solutions</Link>
            <Link href={"/services"} className={`link_mob py-4 ${pathname === '/services' ? 'active_mob' : ''}`} onClick={onClickHandler}>Services</Link>
            <Link href={"/company"} className={`link_mob py-4 ${pathname === '/company' ? 'active_mob' : ''}`} onClick={onClickHandler}>Company</Link>
            <Link href={"/careers"} className={`link_mob py-4 ${pathname === '/careers' ? 'active_mob' : ''}`} onClick={onClickHandler}>Careers</Link>
            <Link href={"/contacts"} className={`link_mob py-4 ${pathname === '/contacts' ? 'active_mob' : ''}`} onClick={onClickHandler}>Contact Us</Link>
        </nav>
    )
}


export default MobNavigation;