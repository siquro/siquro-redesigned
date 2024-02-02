import Link from "next/link";

const SolutionsTwoBlocks = () => {
    return (<section className="solutions__two__blocks--section auto-padding mt-10">
        <div className="section_wrapper flex flex-col md:flex-row justify-between">
            <div className="w-2/4 dark:bg-primaryDark bg-primaryLight border-primaryDark border-2 dark:border-primaryLight rounded-b-[20px] max-w-[620px] h-min=[360px] flex flex-col justify-end pt-10">
                <div className="ps-7 py-7 pe-12 text-start">
                    <h4 className="title-h3 !font-montserrat darktext-primaryLight text-primaryDark mb-5 !leading-[55px]">Global acquiring</h4>
                    <p className="text mb-7 darktext-primaryLight text-primaryDark">With Siquro’s full range of comprehensive services, you can get paid in a timely and continual manner. Putting our partners at the forefront, we deliver expert consultancy and develop custom solutions for card acquiring on the international arena.</p>

                </div>

                <Link href={'/services'} className="block bg-primaryDark dark:bg-primaryLight rounded-b-[17px] text-center py-[25px] px-11 font-[18px] uppercase font-montserrat text-primaryLight dark:text-primaryDark w-full">Learn more</Link>
            </div>

            <div className="w-2/4 dark:bg-primaryDark bg-primaryLight border-primaryDark border-2 dark:border-primaryLight rounded-b-[20px] max-w-[620px] h-min-[360px] flex flex-col justify-end">
                <div className="ps-7 py-7 pe-12 text-start">
                    <h4 className="title-h3 !font-montserrat darktext-primaryLight text-primaryDark mb-5 !leading-[55px]">Alternative Payment Methods</h4>
                    <p className="text mb-7 darktext-primaryLight text-primaryDark ">With Siquuro, you can meet the challenges of specific markets and underserved segments by offering an extensive payment option to your customers.</p>

                </div>
                <Link href={'/company'} className="block bg-primaryDark dark:bg-primaryLight rounded-b-[17px] text-center py-[25px] px-11 font-[18px] uppercase font-montserrat text-primaryLight dark:text-primaryDark w-full">Learn more</Link>
            </div>
        </div>
    </section>);
}

export default SolutionsTwoBlocks;