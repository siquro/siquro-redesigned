import Button from "../Button";

const Reporting = () => {
    return (
        <section className="reporting__section--wrapper bg-primaryLight dark:bg-primaryDark">
            <div className="line__wrapper">
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
            </div>


            <div>
                <h3 className="title-h3">REPORTING</h3>
                <h2 className="title-h2">Advanced Analytics & Reporting</h2>
                <p className="text">Monitor your pay in/payout information in real time through a digital merchant portal without installation and gain a deeper understanding of your customers.</p>
                <div>
                    <div>
                        <div><img src="" alt="" /></div>
                        <h5 className="title-h5">A wide range of acquiring banks</h5>
                    </div>
                    <div>
                        <div><img src="" alt="" /></div>
                        <h5 className="title-h5">Technical support 24/7</h5>
                    </div>
                </div>
                <Button title={"learn more"} color={"light"} />
            </div>
            <div></div>

        </section>
    );
};

export default Reporting;