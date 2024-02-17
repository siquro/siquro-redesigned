'use client'

import { useTheme } from "next-themes";
import Image from "next/image";
import { FC, useEffect, useState } from "react";

type SwicherProps = {
    small?: boolean;
}

const Swicher: FC<SwicherProps> = ({ small }) => {
    const [mounted, setMounted] = useState(false);
    const { theme, setTheme } = useTheme();


    useEffect(() => {
        setMounted(true)
    }, [])

    if (!mounted) {
        return null
    };

    return (
        <div className="">
            <label htmlFor="checkbox" className={`w-[46px] h-[23px] md:w-[77px] md:h-[38px] toggler bg-[#00A3FF] dark:bg-[#240049] flex items-center rounded-[100px] relative cursor-pointer px-1 py-[2px]`}>
                <input type="checkbox" id="checkbox" className="sr-only " onChange={() => setTheme(theme === "light" ? "dark" : "light")} />
                <span className={`w-[23px] h-[21px] md:w-[35px] md:h-[34px] ball bg-[#005D91] dark:bg-[#5C007D] flex justify-center items-center rounded-[50%] translate-x-[82%] md:translate-x-full`}>
                    {theme === "light"
                        ? <Image src={"/ri-sun-fill.svg"} alt={"Sun"} width={24} height={24} className="w-[14px] h-[15px] md:w-[24px] md:h-[24px]" />
                        : <Image src={"/ri-moon-line.svg"} alt={"Moon"} width={24} height={24} className="w-[14px] h-[15px] md:w-[24px] md:h-[24px]" />}
                </span>
            </label>
        </div>);
}

export default Swicher;