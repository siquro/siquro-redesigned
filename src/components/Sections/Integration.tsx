import Button from "../Button";

const Integration = () => {
    return (
        <section className="wedo__section--wrapper  bg-primaryLight dark:bg-primaryDark">
            <h3 className="title-h3">INTEGRATION</h3>
            <h2 className="title-h2">Fraud monitoring</h2>
            <p className="text">Everything is designed to make merchants' lives easier, from integration to pricing, reporting, and payouts, and everything arrives fast, orderly, and securely.</p>
            <h5 className="title-h5">Fraud prevention technology</h5>
            <h5 className="title-h5">Payouts that are prompt and frequent</h5>
            <Button title="About us" color={"light"}/>

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