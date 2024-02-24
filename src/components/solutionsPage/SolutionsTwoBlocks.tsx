import Link from "next/link";

const SolutionsTwoBlocks = () => {
    return (<section className="solutions__two__blocks--section container mt-10">
        <div className="section_wrapper flex flex-col md:flex-row justify-between gap-5">
            <div className="w-full md:w-2/4 pt-4 md:pt-16 dark:bg-primaryDark bg-primaryLight border-primaryDark border-2 dark:border-primaryLight rounded-b-[20px]  my-auto md:max-w-[620px] h-min-[360px] h-full flex flex-col justify-end">
                <div className="p-4 md:p-6 text-start">
                    <h3 className="title-h3">Global acquiring</h3>
                    <p className="text mb-7 dark:text-primaryLight text-primaryDark">With Siquro’s full range of comprehensive services, you can get paid in a timely and continual manner. Putting our partners at the forefront, we deliver expert consultancy and develop custom solutions for card acquiring on the international arena.</p>
                </div>

                <Link href={'/services'} className="block bg-primaryDark dark:bg-primaryLight rounded-b-[17px] text-center py-[25px] px-11 text-[18px] uppercase font-montserrat font-bold text-primaryLight dark:text-primaryDark w-full">Learn more</Link>
            </div>

            <div className="w-full md:w-2/4 pt-4 md:pt-16 dark:bg-primaryDark bg-primaryLight border-primaryDark border-2 dark:border-primaryLight rounded-b-[20px]  my-auto md:max-w-[620px] h-min-[360px] h-full flex flex-col justify-end">
                <div className="p-4 md:p-6 text-start">
                    <h3 className="title-h3">Alternative Payment Methods</h3>
                    <p className="text mb-7 dark:text-primaryLight text-primaryDark ">With Siquuro, you can meet the challenges of specific markets and underserved segments by offering an extensive payment option to your customers.</p>
                </div>

                <Link href={'/company'} className="block bg-primaryDark dark:bg-primaryLight rounded-b-[17px] text-center py-[25px] px-11 text-[18px] uppercase font-montserrat font-bold text-primaryLight dark:text-primaryDark w-full">Learn more</Link>
            </div>
        </div>
    </section>);
}

export default SolutionsTwoBlocks;