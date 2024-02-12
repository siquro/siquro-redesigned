import Image
    from "next/image";
import Link from "next/link";
const Footer = () => {
    return (
        <footer className=" bg-primaryDark dark:bg-primaryDark ">
            <div className="auto-padding flex flex-col md:flex-row justify-between pb-[82px] pt-[40px] items-center flex-wrap gap-5">
                <div>
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
                </div>

            </div>

            <div className="bg-primaryLight py-1">
                <p className="font-montserrat text-center text-[20px] font-bold uppercase text-primaryDark">all right reserved</p>
            </div>
        </footer>
    );
}

export default Footer;