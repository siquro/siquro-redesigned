import Image from "next/image";
import Button from "../buttons/Button";

const CryptoSolutions = () => {
    return (<section className="services__reporting--section container dark:border-primaryLight border-primaryDark mb-10">
        <div className="reporting--container flex flex-col md:flex-row px-11 dark:bg-primaryLight bg-primaryDark relative">
            <div className="pt-[50px] pb-[62px] w-3/5 ">
                <h4 className="title-h4 !text-primaryLight dark:!text-primaryDark ">CRYPTO</h4>
                <h2 className="title-h2 mb-8 !text-primaryLight dark:!text-primaryDark">Crypto Solutions</h2>
                <p className="text mb-8 !text-primaryLight dark:!text-primaryDark">Crypto Checkout offers both deposit and withdrawal options for seven different cryptocurrencies, including Ripple, Ethereum, Bitcoin, Tether, Bitcoin Cash, Dogecoin, and Litecoin. This method enables Crypto to fiat deposits in EUR and Crypto to fiat withdrawals in EUR. All transactions are automatic, guaranteed, and there are no chargebacks.</p>
                <p className="text mb-8 !text-primaryLight dark:!text-primaryDark">With our crypto solutions, we fix the rate for 30 minutes. Unlike other providers, we only have one approval stage, whereas other providers can have up to six.</p>
                <p className="title-h4 uppercase mb-8 !leading-[35px] !text-primaryLight dark:!text-primaryDark">Transparent financial<br/>information</p>
                <p className="title-h4 uppercase mb-11 !leading-[35px] !text-primaryLight dark:!text-primaryDark">Stable passive income</p>
                <Button title={"learn more"} color={"dark"} link={"company"}/>
            </div>

            <div className="flex items-end absolute right-11 bottom-0">
                <Image src={"/crypto.png"} alt={"Reporting services"} width={564} height={726} />
            </div>
        </div>
    </section>);
}

export default CryptoSolutions;