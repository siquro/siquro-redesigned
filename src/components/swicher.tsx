'use client'

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import Image from "next/image";

const Swicher = () => {
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
            <label htmlFor="checkbox" className="toggler bg-[#00A3FF] dark:bg-[#240049]">
                <input type="checkbox" id="checkbox" className="sr-only" onChange={() => setTheme(theme === "light" ? "dark" : "light")} />
                <span className="ball bg-[#005D91] dark:bg-[#5C007D]">
                    {theme === "light"
                        ? <Image src={"/ri-sun-fill.svg"} alt={""} width={24} height={24} />
                        : <Image src={"/ri-moon-line.svg"} alt={""} width={24} height={24} />}
                </span>
            </label>
        </div>);
}

export default Swicher;