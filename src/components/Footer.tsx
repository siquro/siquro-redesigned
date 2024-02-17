import Image from "next/image";
import Link from "next/link";

const Footer = () => {
    return (
        <footer className="bg-[#0F0F0F] dark:bg-[#0F0F0F]">
            <div className="container flex flex-col py-16 sm:py-20">

                <div className="flex flex-col md:flex-row items-center justify-between gap-4 sm:gap-5 pb-16 sm:pb-20">
                    <div className="max-w-[336px]">
                        <Image src={"/logo_new.png"} alt={"Logo"} width={336} height={116} className="w-full h-auto" />
                    </div>

                    <div className="flex flex-col sm:flex-row gap-10 w-full md:w-1/2 justify-between md:justify-end">
                        <div className="flex flex-col items-center md:items-end gap-4 sm:gap-5">
                            <h4 className="title-h4 !text-primaryLight">
                                quick links
                            </h4>
                            <Link href={"/terms"} className="text !text-primaryLight hover:underline hover:text-[#00FFF0]">Terms and conditions</Link>
                            <Link href={"/privacy"} className="text !text-primaryLight hover:underline hover:text-[#00FFF0]">privacy policy</Link>
                        </div>
                        <div className="flex flex-col items-center md:items-end gap-4 sm:gap-5">
                            <h4 className="title-h4 !text-primaryLight">
                                contacts
                            </h4>
                            <Link href={""} className="text !text-primaryLight hover:underline hover:text-[#00FFF0]">info@siquro.com</Link>
                            <p className="text !text-primaryLight">fastadvisors ou</p>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col items-center sm:flex-row justify-between gap-4 sm:gap-5 mb-5">
                    <div className="flex flex-row gap-4 sm:gap-5 items-center">
                        <h4 className="title-h4 !text-primaryLight">follow us:</h4>

                        <div className="flex flex-row flex-nowrap gap-3 ">
                            <Image src={"/social_links/facebook.svg"} alt={"Facebook"} width={32} height={32} className="w-[32px] h-[32px]" />
                            <Image src={"/social_links/instagram.svg"} alt={"Instagram"} width={32} height={32} className="w-[32px] h-[32px]" />
                            <Image src={"/social_links/twitter.svg"} alt={"Twitter"} width={32} height={32} className="w-[32px] h-[32px]" />
                            <Image src={"/social_links/linkedin.svg"} alt={"Youtube"} width={32} height={32} className="w-[32px] h-[32px]" />
                        </div>
                    </div>

                    <div className="flex flex-row gap-4 sm:gap-5">
                        <Image src={"/PCI.png"} alt={"PCI"} width={99} height={75} className="w-[45px] h-auto sm:w-[60px] sm:h-[44px]" />
                        <Image src={"/SSL.png"} alt={"SSL"} width={107} height={75} className="w-[40px] h-auto sm:w-[65px] sm:h-[44px]" />
                    </div>
                </div>

                <div className="py-5">
                    <div className="h-[1px] bg-primaryLight w-1/4 mb-5"></div>
                    <p className="text !text-[16px] sm:!text-[18px] !text-primaryLight">SiQURO is an authorised payment institution regulated by the Financial Conduct Authority under the Payment Services Regulations 2017 (Firm Registration Number: 804718) for the provision of payment services. SiQURO an authorised payment institution regulated by the Central Bank under the  Financial Supervision Act for the provision of payment services (account information services). SiQURO is included in the public register of the Central Bank (License number: 1) and registered at the Chamber of Commerce (CoC number: 2).</p>
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