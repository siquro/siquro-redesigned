import Button from "@/components/Button";
import Image from "next/image";

const CryptoSolutions = () => {
    return (<section className="services__reporting--section auto-padding border-white mb-10">
        <div className="reporting--container flex flex-col md:flex-row px-11 bg-primaryLight relative">
            <div className="pt-[50px] pb-[62px] w-3/5 ">
                <h3 className="title-h3 text-5xl !text-primaryLight dark:!text-primaryDark ">CRYPTO</h3>
                <h2 className="title-h2 !leading-[78px] mb-8 !text-primaryLight dark:!text-primaryDark">Crypto Solutions</h2>
                <p className="text mb-8 !text-primaryLight dark:!text-primaryDark">Crypto Checkout offers both deposit and withdrawal options for seven different cryptocurrencies, including Ripple, Ethereum, Bitcoin, Tether, Bitcoin Cash, Dogecoin, and Litecoin. This method enables Crypto to fiat deposits in EUR and Crypto to fiat withdrawals in EUR. All transactions are automatic, guaranteed, and there are no chargebacks.</p>
                <p className="text mb-8 !text-primaryLight dark:!text-primaryDark">With our crypto solutions, we fix the rate for 30 minutes. Unlike other providers, we only have one approval stage, whereas other providers can have up to six.</p>
                <p className="title-h5 !font-montserrat mb-8 !leading-[35px] !text-primaryLight dark:!text-primaryDark">Transparent financial information</p>
                <p className="title-h5 !font-montserrat mb-11 !leading-[35px] !text-primaryLight dark:!text-primaryDark">Stable passive income</p>
                <Button title={"learn more"} color={"dark"} />
            </div>

            <div className="flex items-end absolute right-11 bottom-0">
                <Image src={"/crypto.png"} alt={"Reporting services"} width={564} height={726} />
            </div>
        </div>
    </section>);
}

export default CryptoSolutions;