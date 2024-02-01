import { FC } from "react";

type ButtonProps = {
    title: string;
    color: string;
    onClickHandler?: () => void;
}
const Button: FC<ButtonProps> = ({ title, onClickHandler, color }) => {
    return (
        <button className={` ${color === "light" ? "btn_light" : "btn_dark"} global_button`} onClick={() => { }}>
            {title}
        </button>
    );
}

export default Button;