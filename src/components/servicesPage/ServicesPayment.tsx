
import Image from "next/image";
import OutlineButton from "../buttons/OutlineButton";

const ServicesPayment = () => {

    return (
        <section className="payment--section bg-primaryLight dark:bg-primaryDark  container">
            <div className="bg-servicesPaymentBg bg-no-repeat bg-contain">
                <div className="section_wrapper pt-[110px] pb-[290px] justify-between flex flex-col md:flex-row gap-14">
                    <div className="payment--content flex flex-col justify-center basis-3/5">
                        <p className="badge">payment</p>
                        <h2 className="title-h2 !leading-[78px] mb-8">A PERFECT PAYMENT SOLUTIONS</h2>
                        <p className="text mb-[55px] md:w-4/5">
                            We know our online payment system is scalable, secure and fast because we designed and developed it ourselves.
                            We develop great IT products that actually work by having perfectionist workers who are easy to communicate with. Because we have extensive experience exploiting our technology, we know what it can do. So we love tailoring our solutions to fit even the most specific business needs.
                        </p>
                        <div className="">
                            <OutlineButton title={"view plans"} link={"solutions"} />
                        </div>
                    </div>

                    <div className="payment__animation--block relative me-0 flex justify-end w-2/5">
                        <div className="main__animation--container ">
                            <Image src="/payment_animation/payment.png" alt="phone" width={409} height={630} className="orbit" id="main_item"></Image>
                        </div>

                        <div className="">
                            <Image src="/payment_animation/like.png" alt="like" width={154} height={138} className="orbit absolute  " id="lick"></Image>
                            <Image src="/payment_animation/coin.png" alt="coin" width={132} height={148} className="orbit absolute " id="coin"></Image>
                            <Image src="/payment_animation/lock.png" alt="lock" width={160} height={170} className="orbit absolute " id="lock"></Image>
                            <Image src="/payment_animation/gear.png" alt="gear" width={136} height={148} className="orbit absolute " id="gear"></Image>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    )
}

export default ServicesPayment;