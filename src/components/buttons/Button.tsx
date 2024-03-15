'use client'
import "./button.css";
import { FC } from "react";
import Link from "next/link";
import { motion } from "framer-motion"

const variants = {
    hidden: { opacity: 0, x: -200, y: 0 },
    enter: { opacity: 1, x: 0, y: 0 },
}

type ButtonProps = {
    title: string;
    color: string;
    onClickHandler?: () => void;
    link: string;
}
const Button: FC<ButtonProps> = ({ title, onClickHandler, color, link }) => {
    return (
        <motion.main
            variants={variants}
            // initial="hidden"
            animate="enter"
            transition={{ type: "linear" }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
        >
            <Link href={`/${link}`}>
                <button className={` ${color === "light" ? "btn_light" : "btn_dark"} global_button`} onClick={() => { }}>
                    {title}
                </button>
            </Link>
        </motion.main>
    );
}

export default Button;