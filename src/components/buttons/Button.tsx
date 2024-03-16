'use client'
import "./button.css";
import { FC } from "react";
import Link from "next/link";

const variants = {
    hidden: { opacity: 0, x: -200, y: 0 },
    enter: { opacity: 1, x: 0, y: 0 },
}

type ButtonProps = {
    title: string;
    color: string;
    onClickHandler?: () => void;
    link: string;
    customClass?:string;
}
const Button: FC<ButtonProps> = ({ title, onClickHandler, color, link,customClass }) => {
    return (
            <Link href={`/${link}`}>
                <button className={`${customClass} ${color === "light" ? "btn_light" : "btn_dark"} global_button`} onClick={() => { }}>
                    {title}
                </button>
            </Link>
    );
}

export default Button;