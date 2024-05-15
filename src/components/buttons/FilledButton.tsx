'use client'

import "./button.css";
import { FC } from "react";
import Link from "next/link";
import useInViewAnimation from "@/hooks/useInViewAnimation";

type ButtonProps = {
    title: string;
    color?: string;
    link: string;
}

const FilledButton: FC<ButtonProps> = ({ title, color, link }) => {
    useInViewAnimation();

    return (
        <Link href={`/${link}`} className="w-fit inline-block">
            <div className="button-wrapper relative w-full sm:w-fit">
                <button className="button py-[10px] px-[25px] dark:text-black text-white dark:bg-white bg-black
     hover:bg-transparent dark:hover:text-black hover:text-white cursor-pointer text-[16px] sm:text-[18px] text-center relative uppercase font-medium rounded-full border-0 " type="button">{title}</button>
                <div className="button-bg button-bg absolute top-0 left-0 bg-white rounded-full z-[-1]"></div>
            </div>
        </Link>
    );
}

export default FilledButton;