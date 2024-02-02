import Button from "../Button";
import Link from "next/link";
import Image from "next/image";

const Integration = () => {
    return (
        <section className="integration--section bg-primaryLight dark:bg-primaryDark relative pt-16">
            {/* <Image src="/grey_ring.png" alt="Phone" width={315} height={344} className="grey_circle"></Image> */}


            <div className="pt-32 pb-[90px] flex flex-col pe-40">

                <div className=" flex justify-end first-item text-center pr-28 ">
                    <div className="w-1/2">
                        <h3 className="title-h3">INTEGRATION</h3>
                        <h2 className="title-h2 mb-7">Fraud monitoring</h2>
                        <p className="text mb-7">Everything is designed to make merchants' lives easier, from integration to pricing, reporting, and payouts, and everything arrives fast, orderly, and securely.</p>
                        <h5 className="title-h5 mb-4">Fraud prevention technology</h5>
                        <h5 className="title-h5 mb-5">Payouts that are prompt and frequent</h5>
                    </div>

                </div>

                <div className=" text-end flex flex-col md:flex-row justify-end">
                    <div className="w-2/4 bg-primaryDark dark:bg-primaryLight rounded-b-[20px] max-w-[516px] h-min">
                        <div className="ps-7 py-7 pe-12 text-start">
                            <h4 className="title-h3 !font-montserrat text-primaryLight dark:text-primaryDark mb-5 !leading-[55px]">Individual approach</h4>
                            <p className="text mb-7 text-primaryLight dark:text-primaryDark !font-bold uppercase">All operational and financial issues can be quickly resolved with a personal manager.</p>

                        </div>
          
                            <Link className="bg-[#323232] dark:bg-[#323232] rounded-b-[17px] text-center block py-[25px] px-11 font-[18px] uppercase font-montserrat " href={"/contacts"}>get started</Link>
                            
                    </div>


                    <div className="second-item w-2/5 pt-5 ps-36">
                        <h4 className="title-h4 !font-montserrat">Crypto Payment Solutions</h4>
                        <p className="text mb-12">In our crypto checkouts and wallets, all transactions are automatic, guaranteed, support different cryptocurrencies, and there are no chargebacks. Our crypto solutions require only one approval stage, ensuring seamless integration.</p>
                        <Button title="About us" color={"light"} link={"about"}/>
                    </div>
                </div>
            </div>


            <div className="line__wrapper2">
                {/* <svg
                    id="Metro_Map_Lines"
                    className="map2"
                    data-name="Metro Map Lines"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 208.5 204.5"
                >
                    <defs>
                        <style>
                            {`.cls-3{fill: none;stroke-linecap: round;stroke-miterlimit: 10;stroke-width: 3px;}.cls-3 {stroke: #fff;}`}
                        </style>
                    </defs>
                    <title>metro-map-svg</title>
                    <path
                        id="yellow-line"
                        className="lin2 cls-3"
                        d="M10,100
                        H160
                        V190
                        H10
                        V750"
                        transform="translate(-27 -21)"
                    />
                </svg> */}
            </div>
        </section>
    );
};

export default Integration;