import Image from "next/image"
import Button from "../Button";
import { useRouter } from "next/router";
import { useTheme } from "next-themes";

const HomeHero = () => {
    const router = useRouter();
    const { theme, setTheme } = useTheme();

    return (
        <section className="home__hero--section bg-primaryLight dark:bg-primaryDark mt-[-135px]">
            <div className="section_wrapper pt-[175px] pb-[90px] auto-padding justify-between">
                <div className="flex flex-col justify-center basis-3/5">
                    <h1 className="title-h1 font-extrabold mb-[50px]">UNIQUE PAYMENT GATEWAY</h1>
                    <p className="text  font-bold mb-[58px]">
                        Accept payments with us and open up new <br /> markets and opportunities in the online payments <br />industry
                    </p>
                    <div className="gap-x-3.5 flex flex-row">
                        <div><button className="global_button outline_button" onClick={() => router.push('/solution')}>start accepting payments
                        {theme === "light" ? <Image className="btn_icon" src="/button_iconL.png" width={50} height={50} alt="btn_icon" /> : <Image className="btn_icon" src="/button_icon.svg" width={50} height={50} alt="btn_icon" /> }
                            <Image className="btn_icon" src="/button_icon.svg" width={50} height={50} alt="btn_icon" />
                        </button></div>
                        <div><Button title={'contact us'} onClickHandler={() => { router.push('/contact'); }} color={"light"} /></div>

                    </div>
                </div>
                <div className="">
                    <Image src="/phone.png" alt="phone" width={314} height={640}></Image>
                </div>
            </div>

        </section>
    );
}

export default HomeHero;