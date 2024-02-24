'use client'
import "./button.css";
import { FC } from "react";
import Link from "next/link";

type ButtonProps = {
    title: string;
    color: string;
    onClickHandler?: () => void;
    link: string;
}
const Button: FC<ButtonProps> = ({ title, onClickHandler, color, link }) => {
    return (
        <Link href={`/${link}`}>
            <button className={` ${color === "light" ? "btn_light" : "btn_dark"} global_button`} onClick={() => { }}>
                {title}
            </button>
        </Link>
    );
}

export default Button;