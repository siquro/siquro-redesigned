'use client'

import Image from "next/image";
import Link from "next/link";
import { FC } from "react";
import "./button.css";

type OutlineButtonProps = {
    title: string;
    onClickHandler?: () => void;
    themeHandler?: string;
    link: string;
}

const OutlineButton: FC<OutlineButtonProps> = ({ title, onClickHandler, link }) => {

    return (
        <Link href={`/${link}`}>
            <button onClick={onClickHandler} className={`global_button outline_button before:hidden sm:before:block`}>
                {title}
                <span className="button_arr hidden sm:block">
                    <Image className="btn_icon dark_icon hover:invert-1 transition duration-300 " src="/button_icon.svg" width={48} height={48} alt="btn_icon hover:invert-1 light:invert-1 light:hover:invert" />
                </span>
            </button>
        </Link>
    );
}

export default OutlineButton;