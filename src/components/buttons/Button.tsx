'use client'

import "./button.css";
import { FC } from "react";
import Link from "next/link";
import useInViewAnimation from "@/hooks/useInViewAnimation";

type ButtonProps = {
    title: string;
    color: string;
    onClickHandler?: () => void;
    link: string;
}
const Button: FC<ButtonProps> = ({ title, onClickHandler, color, link }) => {
    useInViewAnimation();

    return (
        <Link href={`/${link}`}>
            <button className={`${color === "light" ? "btn_light" : "btn_dark"} filled-button py-[10px] px-[25px] rounded-[100px] hover:bg-!transparent hover:border-transparent relative w-full sm:w-fit`}>
                <span className="button-text text-[16px] sm:text-[18px] text-center relative uppercase z-[2] font-bold">{title}</span>
            </button>
        </Link >
    );
}

export default Button;