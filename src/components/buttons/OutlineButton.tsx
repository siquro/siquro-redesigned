'use client'

import Image from "next/image";
import Link from "next/link";
import { FC } from "react";
import "./button.css";

type OutlineButtonProps = {
    title: string;
    link?: string;
}

const OutlineButton: FC<OutlineButtonProps> = ({ title, link }) => {

    return (
        <Link href={`/${link}`}>
            <button className="payment-button rounded-[100px] py-[10px] px-[25px] sm:ps-[25px] sm:pe-[58px] w-full sm:w-fit relative ring dark:ring-primaryLight ring-primaryDark hover:ring-transparent hover:dark:ring-transparent">
                <span className="button-text text-[16px] sm:text-[18px] relative uppercase z-[2] font-bold">{title}</span>
                <span className="icon-circle hidden sm:flex items-center justify-center rounded-[100px] z-[2] absolute top-0 right-0 dark:bg-primaryLight bg-primaryDark">
                    <Image className="icon-img invert dark:invert-0" src="/button_icon.svg" width={47} height={47} alt="" />
                </span>
            </button>
        </Link >
    );
}

export default OutlineButton;