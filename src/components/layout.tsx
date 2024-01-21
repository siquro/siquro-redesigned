import Providers from '@/components/providers'
import Swicher from '@/components/swicher'
import Header from './Header';
import Footer from './Footer';



type LayoutProps = {
    children: React.ReactNode,
};

export default function Layout({ children }: LayoutProps) {
    return (
        <Providers>
            <Header/>
            {children}
            <Footer/>
        </Providers>
    );
}