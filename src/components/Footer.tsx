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
                    <h5 className="title-h5 !text-[#696969]">Quick links</h5>
                    <Link href={"/terms"} className="font-montserrat uppercase text-[18px] hover:underline">Terms and conditions</Link>
                    <Link href={"/privacy"} className="font-montserrat uppercase text-[18px] hover:underline">privacy policy</Link>
                </div>
                <div className="flex flex-col gap-8 items-center md:items-start">
                    <h5 className="!text-[#696969] title-h5 ">Contacts</h5>
                    <a className="font-montserrat uppercase text-[18px] hover:underline" href="mailto:info@siquro.com">ingo@siquro.com </a>
                    <p className="font-montserrat uppercase text-[18px]">fastadvisors ou</p>
                </div>
                <div className="flex flex-row gap-11">
                    <Image src={"/PCI.png"} alt={"PCI"} width={99} height={75} />
                    <Image src={"/SSL.PNG"} alt={"SSL"} width={107} height={75} />
                </div>

            </div>

            <div className="bg-primaryLight dark:bg-PirmaryLight py-1">
                <p className="font-montserrat text-center text-[20px] uppercase text-primaryLight dark:text-primaryDark">all right reserved</p>
            </div>
        </footer>
    );
}

export default Footer;