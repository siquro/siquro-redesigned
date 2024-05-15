'use client'

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
            <div className="button-wrapper relative w-full sm:w-fit">
                <button className="button py-[10px] px-[25px] text-white cursor-pointer text-[16px] sm:text-[18px] text-center relative uppercase font-medium rounded-full bg-black border-0" type="button">{title}</button>
                <div className="button-bg absolute top-0 left-0 bg-white rounded-full z-[-1]"></div>
            </div>
        </Link>
    );
}

export default OutlineButton;