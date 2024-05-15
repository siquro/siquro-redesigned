import Image from "next/image";
import OutlineButton from "../buttons/OutlineButton";

const ServicesPayment = () => {

    return (
        <section className="payment--section bg-primaryLight dark:bg-primaryDark  container">
            <div className="bg-servicesPaymentBg bg-no-repeat bg-contain">
                <div className="section_wrapper pt-[40px] md:pt-[110px] pb-[40px] md:pb-[290px] justify-between flex flex-col-reverse md:flex-row gap-14">
                    <div id="animate-left" className="payment--content flex flex-col justify-center basis-3/5">
                        <p className="badge">payment</p>
                        <h2 className="title-h2 mb-[20px]">A PERFECT PAYMENT SOLUTIONS</h2>
                        <p className="text mb-[55px] md:w-4/5">
                            We know our online payment system is scalable, secure and fast because we designed and developed it ourselves.
                            We develop great IT products that actually work by having perfectionist workers who are easy to communicate with. Because we have extensive experience exploiting our technology, we know what it can do. So we love tailoring our solutions to fit even the most specific business needs.
                        </p>
                        
                        <OutlineButton title={'join us'} link={'contacts'} />
                    
                    </div>

                    <div className="payment__animation--block relative me-0 flex justify-end w-full md:w-2/5 items-center">
                        <div className="main__animation--container h-auto relative brightness-50 w-[320px] md:w-[409px]">
                            <Image src="/payment_animation/payment.png" alt="phone" width={409} height={630} id="main_item "></Image>
                        </div>


                        <Image src="/payment_animation/like.png" alt="like" width={154} height={138} className="orbit absolute w-[65px] md:w-[100px] h-auto left-0 bottom-20 md:bottom-[205px]" id="like"></Image>
                        <Image src="/payment_animation/coin.png" alt="coin" width={132} height={148} className="orbit absolute w-[55px] md:w-[90px] h-auto left-14 bottom-40 md:bottom-[80px] md:left-[-90px]" id="coin"></Image>
                        <Image src="/payment_animation/lock.png" alt="lock" width={160} height={170} className="orbit absolute w-[55px] md:w-[80px] h-auto left-32 bottom-16 md:bottom-[60px] " id="lock"></Image>
                        <Image src="/payment_animation/gear.png" alt="gear" width={136} height={148} className="orbit absolute w-[65px] md:w-[90px] h-auto left-14 bottom-0 md:bottom-[-60px] md:left-10" id="gear"></Image>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ServicesPayment;