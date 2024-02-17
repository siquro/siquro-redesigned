import { useTheme } from "next-themes";
import Image from "next/image";
import Button from "../Button";
import OutlineButton from "../OutlineButton";




const HomeHero = () => {
    const { theme, setTheme } = useTheme();

    return (
        // <section className="home__hero--section bg-homeHeroBg bg-no-repeat dark:bg-primaryDark mt-[-135px]">
        //     <div className="section_wrapper pt-[150px] md:pt-[175px] pb-[90px] auto-padding justify-between flex flex-col md:flex-row">
        //         <div className="flex flex-col justify-center basis-3/5">
        //             <h1 className="title-h1 mb-[50px]">UNIQUE PAYMENT GATEWAY</h1>
        //             <p className="text mb-[58px]">
        //                 Accept payments with us and open up new <br /> markets and opportunities in the online payments <br />industry
        //             </p>
        //             <div className="gap-x-3.5 flex flex-col md:flex-row">
        //                 <OutlineButton themeHandler={theme} title={"start accepting payments"} link={"solutions"} />

        //                 <Button title={'contact us'} color={"light"} link={"contacts"} />
        //             </div>
        //         </div>
        //         <div className="hero__animation--block relative">
        //             <Image src="/hero_home_animation/phone2.png" alt="phone" width={316} height={610} className="item_main" id="orbit"></Image>
        //             <Image src="/hero_home_animation/coin.png" alt="coin" width={159} height={142} className="item_one absolute" id="orbit"></Image>
        //             <Image src="/hero_home_animation/coin2.png" alt="coin2" width={139} height={147} className="item_two absolute" id="orbit"></Image>
        //             <Image src="/hero_home_animation/coin3.png" alt="coin3" width={157} height={162} className="item_three absolute" id="orbit"></Image>
        //             <Image src="/hero_home_animation/lock.png" alt="lock" width={163} height={169} className="item_for absolute" id="orbit"></Image>
        //             <Image src="/hero_home_animation/small-phone.png" alt="small phone" width={193} height={171} className="item_five absolute" id="orbit"></Image>
        //             <Image src="/hero_home_animation/money.png" alt="money" width={163} height={119} className="item_six absolute" id="orbit"></Image>
        //         </div>
        //     </div>
        // </section>

        <section className="home__hero--section bg-homeHeroBg bg-no-repeat mt-[-135px]">
            <div className="container pt-[150px] md:pt-[250px] pb-10 sm:pb-[90px] justify-between items-center flex flex-col-reverse sm:flex-row gap-5 md:gap-10">
                <div className="flex flex-col w-full sm:w-3/5 py-4 sm:py-10 justify-center">
                    <h1 className="title-h1 mb-6 md:mb-12">UNIQUE PAYMENT GATEWAY</h1>
                    <p className="text mb-6 md:mb-12">
                        Accept payments with us and open up new <br /> markets and opportunities in the online payments <br />industry
                    </p>
                    <div className="gap-x-3.5 flex flex-col-reverse md:flex-row flex-wrap gap-5">
                        <OutlineButton themeHandler={theme} title={"start accepting payments"} link={"solutions"} />
                        <Button title={'contact us'} color={"light"} link={"contacts"} />
                    </div>
                </div>

                <div className="hero__animation--block hidden sm:flex w-full sm:w-2/5 relative justify-end">
                    <div className="max-w-[130px] sm:max-w-[320px] animate-pulse">
                        <Image src="/hero_home_animation/phone2.png" alt="phone" width={316} height={610} className="item_main w-full h-auto z-0" id="orbit" />
                    </div>

                    {/* <Image src="/hero_home_animation/coin.png" alt="coin" width={159} height={142} className="item_one absolute" id="orbit" />
                    <Image src="/hero_home_animation/coin2.png" alt="coin2" width={139} height={147} className="item_two absolute" id="orbit" />
                    <Image src="/hero_home_animation/coin3.png" alt="coin3" width={157} height={162} className="item_three absolute" id="orbit" />
                    <Image src="/hero_home_animation/lock.png" alt="lock" width={163} height={169} className="item_for absolute" id="orbit" />
                    <Image src="/hero_home_animation/small-phone.png" alt="small phone" width={193} height={171} className="item_five absolute" id="orbit" />
                    <Image src="/hero_home_animation/money.png" alt="money" width={163} height={119} className="item_six absolute" id="orbit" /> */}
                </div>
            </div>
        </section>
    );
}

export default HomeHero;