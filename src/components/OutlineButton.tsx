import Image from "next/image"
import { FC } from "react";

type OutlineButtonProps = {
    title: string;
    onClickHandler: () => void;
    themeHandler?: string;
}

const OutlineButton: FC<OutlineButtonProps> = ({ title, onClickHandler, themeHandler }) => {
    return (
        <button onClick={onClickHandler} className={` global_button outline_button`}>
            <span className="button_text">{title}</span>
            <span className="button_arr">
                {themeHandler === "light" ? <Image className="btn_icon" src="/button_iconL.png" width={50} height={50} alt="btn_icon" /> : <Image className="btn_icon dark_icon hover:invert-1 transition duration-300" src="/button_icon.svg" width={50} height={50} alt="btn_icon" />}
            </span>
        </button>
    );
}

export default OutlineButton;