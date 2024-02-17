import Image
    from "next/image";
import Link from "next/link";
const Footer = () => {
    return (
        <footer className="bg-[#0F0F0F] dark:bg-[#0F0F0F]">
            <div className="container flex flex-col gap-4 sm:gap-5">
                {/* <div>
                    <Image src={"/logo_new.png"} alt={"Logo"} width={227} height={74} />
                </div>
                <div className="flex flex-col gap-8 items-center md:items-start">
                    <h4 className="title-h4 !text-[#696969] uppercase font-bold ">Quick links</h4>
                    <Link href={"/terms"} className="text !font-montserrat !text-primaryLight uppercase  hover:underline !font-bold hover:text-[#00FFF0]">Terms and conditions</Link>
                    <Link href={"/privacy"} className="text !font-montserrat !text-primaryLight uppercase  hover:underline !font-bold hover:text-[#00FFF0]">privacy policy</Link>
                </div>
                <div className="flex flex-col gap-8 items-center md:items-start">
                    <h4 className="!text-[#696969] title-h4 uppercase ">Contacts</h4>
                    <a className="text !md:text-[18px] !font-montserrat !text-primaryLight uppercase  uhover:nderline !font-bold hover:text-[#00FFF0]" href="mailto:info@siquro.com">info@siquro.com </a>
                    <p className="text !font-montserrat !text-primaryLight uppercase !font-bold">fastadvisors ou</p>
                </div>
                <div className="flex flex-row gap-11">
                    <Image src={"/PCI.png"} alt={"PCI"} width={99} height={75} className="w-[60px] md:w-[99px] h-[44px] md:h-[75px]" />
                    <Image src={"/SSL.png"} alt={"SSL"} width={107} height={75} className="w-[65px] md:w-[107px] h-[44px] md:h-[75px]" />
                </div> */}

                <div></div>
                <div></div>
                <div className="py-5">
                    <p className="text !text-[16px] sm:!text-[18px] ">SiQURO is an authorised payment institution regulated by the Financial Conduct Authority under the Payment Services Regulations 2017 (Firm Registration Number: 804718) for the provision of payment services. SiQURO an authorised payment institution regulated by the Central Bank under the  Financial Supervision Act for the provision of payment services (account information services). SiQURO is included in the public register of the Central Bank (License number: 1) and registered at the Chamber of Commerce (CoC number: 2).</p>
                </div>
            </div>

            <div className="bg-primaryLight py-4 md:py-5">
                <div className="container flex flex-col items-center md:flex-row justify-between gap-4 md:gap-5">
                    <div className="">
                        <p className="font-montserrat text-[16px] sm:text-[18px] !text-primaryDark text-center">© 2024 SiQURO. All right reserved</p>
                    </div>

                    <div className="font-montserrat text-[16px] sm:text-[18px] !text-primaryDark hover:text-[#00FFF0] flex flex-col sm:flex-row gap-4">
                        <Link href={"/terms"} className="hover:text-[#00FFF0] inline text-center">Terms & conditions</Link>
                        <Link href={"/rivacy"} className="hover:text-[#00FFF0] inline text-center">Privacy policy</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;