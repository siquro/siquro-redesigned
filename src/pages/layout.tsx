import { Kodchasan, Montserrat } from 'next/font/google';
import Footer from '../components/Footer';
import Header from '../components/Header';

const montserrat = Montserrat({
    subsets: ['latin'],
    display: 'swap',
    weight: ["400", "500", "600", "700", "800"],
    variable: '--font-montserrat',
});

const kodchasan = Kodchasan({
    subsets: ['latin'],
    display: 'swap',
    weight: ['400', '500', "600", "700"],
    variable: '--font-kodchasan',
});

type LayoutProps = {
    children: React.ReactNode,
};

export default function Layout({ children }: LayoutProps) {
    return (
        <main className={`${montserrat.variable} ${kodchasan.variable} font-sans`}>
            <Header />
            {children}
            <Footer />
        </main>
    );
}