import Image from "next/image";
import Link from "next/link";
import { FC } from "react";

type OutlineButtonProps = {
    title: string;
    onClickHandler?: () => void;
    themeHandler?: string;
    link: string;
}

const OutlineButton: FC<OutlineButtonProps> = ({ title, onClickHandler, themeHandler, link }) => {
    return (
        <Link href={`/${link}`}>
            <button onClick={onClickHandler} className={` global_button outline_button`}>
                {title}
                <span className="button_arr ">
                    {themeHandler === "light" ? <Image className="btn_icon" src="/button_iconL.png" width={50} height={50} alt="btn_icon" /> : <Image className="btn_icon dark_icon hover:invert-1 transition duration-300" src="/button_icon.svg" width={50} height={50} alt="btn_icon" />}
                </span>
            </button>
        </Link>
    );
}

export default OutlineButton;