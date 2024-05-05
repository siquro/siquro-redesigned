import Image from "next/image";
import OutlineButton from "../buttons/OutlineButton";
import Button from "../buttons/Button";

const HomeHero = () => {

    return (
        <section className="home__hero--section bg-homeHeroBg bg-no-repeat mt-[-135px]  overflow-hidden">
            <div className="container pt-[150px] md:pt-[200px] pb-10 sm:pb-[90px] justify-between items-center flex flex-col-reverse sm:flex-row gap-5 md:gap-10">
                <div id="animate-left" className="flex flex-col w-full sm:w-3/5 py-4 sm:py-5 ">
                    <h1 className="title-h1 mb-6 md:mb-12 ">UNIQUE PAYMENT GATEWAY</h1>
                    <p className="text mb-6 md:mb-12">
                        Accept payments with us and open up new <br /> markets and opportunities in the online payments <br />industry
                    </p>
                    <div className="gap-x-3.5 flex flex-col md:flex-row flex-wrap gap-5">
                        <OutlineButton title={"start accepting payments"} link={"solutions"} />
                        <Button title={'contact us'} color={"light"} link={"contacts"} />
                    </div>
                </div>

                <div className="hero__animation--block hidden sm:flex w-full sm:w-2/6 relative justify-end">
                    <div className="max-w-[130px] sm:max-w-[300px]  relative">
                        <Image src="/hero_home_animation/phone2.png" alt="phone" width={316} height={610} className="item_main w-full h-auto z-0 animate-pulse" id="orbit" />


                        <div className="absolute z-[2] w-[25%] top-[5%] left-[30%] ">
                            <Image src="/hero_home_animation/coin.png" alt="coin" width={159} height={142} className="item_one " id="orbit" />
                        </div>

                        <div className="absolute z-[3] w-[30%] top-[20%] left-[5%]">
                            <Image src="/hero_home_animation/coin2.png" alt="coin2" width={139} height={147} className="item_two w-full h-auto" id="orbit" />
                        </div>

                        <div className="absolute z-[4] w-[35%] left-[5%] bottom-[28%]">
                            <Image src="/hero_home_animation/coin3.png" alt="coin3" width={157} height={162} className="item_three w-full h-auto" id="orbit" />
                        </div>

                        <div className="absolute z-[5] w-[35%] top-[40%] left-[-20%]">
                            <Image src="/hero_home_animation/lock.png" alt="lock" width={163} height={169} className="item_for w-full h-auto" id="orbit" />
                        </div>

                        <div className="absolute z-[6] w-[45%] left-[-25%] bottom-[5%]">
                            <Image src="/hero_home_animation/small-phone.png" alt="small phone" width={193} height={171} className="item_five w-full h-auto" id="orbit" />
                        </div>

                        <div className="absolute z-[7] w-[35%] bottom-[10%] right-[15%]">
                            <Image src="/hero_home_animation/money.png" alt="money" width={163} height={119} className="item_six w-full h-auto" id="orbit" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default HomeHero;