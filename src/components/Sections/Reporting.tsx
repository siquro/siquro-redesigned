import Button from "../Button";
import Image from 'next/image';

const Reporting = () => {
    return (
        <section className="reporting--section bg-primaryLight dark:bg-primaryDark relative">
            {/* <div className="line__wrapper">
                <svg
                    id="Metro_Map_Lines"
                    className="map"
                    data-name="Metro Map Lines"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 208.5 204.5"
                >
                    <defs>
                        <style>
                            {`.cls-2{fill: none;stroke-linecap: round;stroke-miterlimit: 10;stroke-width: 3px;}.cls-2 {stroke: #fff;}`}
                        </style>
                    </defs>
                    <title>metro-map-svg</title>
                    <path
                        id="yellow-line"
                        className="line cls-2"
                        d="M10,100V30
                        H160
                        V750"
                        transform="translate(-27 -21)"
                    />
                </svg>
            </div> */}

            <div className="auto-padding pt-[63px] pb-[90px] flex flex-col md:flex-row gap-14 relative z-10">
                <div className="md:w-3/5">
                    <h3 className="title-h3">REPORTING</h3>
                    <h2 className="title-h2 text-nowrap mb-[33px]">Advanced Analytics<br /> & Reporting</h2>
                    <p className="text w-4/5 mb-[38px]">Monitor your pay in/payout information in real time through a digital merchant portal without installation and gain a deeper understanding of your customers.</p>
                    <div className="mb-[40px] flex flex-col gap-7">
                        <div className="flex flex-row gap-7">
                            <Image src={"/ri-bank-fill.svg"} alt={"Bank"} width={51} height={50} />
                            <h5 className="title-h5 !font-montserrat">A wide range of acquiring banks</h5>
                        </div>
                        <div className="flex flex-row gap-7">
                            <Image src={"/ri-support.svg"} alt={"Bank"} width={51} height={47} />
                            <h5 className="title-h5 !font-montserrat">Technical support 24/7</h5>
                        </div>
                    </div>
                    <Button title={"learn more"} color={"light"} />
                </div>
            </div>

            <div className="flex flex-col pe-44">


            </div>
            <div className="absolute top-0 right-0 h-full w-2/5">
                <Image src="/reporting_animation/gear_1.png" alt="Gear" width={638} height={616} className="gear"></Image>
                <Image src="/reporting_animation/gear_1.png" alt="Gear" width={516} height={542} className="gear-2"></Image>
                <Image src="/reporting_animation/gear_1.png" alt="Gear" width={477} height={573} className="gear-3"></Image>
                <Image src="/reporting_animation/magnify.png" alt="Magnify" width={462} height={553} className="magnify"></Image>
                <Image src="/reporting_animation/phone.png" alt="Phone" width={315} height={344} className="phone"></Image>
            </div>

        </section>
    );
};

export default Reporting;