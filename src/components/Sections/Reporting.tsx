import Button from "../Button";

const Reporting = () => {
    return (
        <section className="reporting--section bg-primaryLight dark:bg-primaryDark">
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