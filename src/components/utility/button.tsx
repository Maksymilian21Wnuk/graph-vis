import { ButtonProps } from "../../shared/interfaces/button.interface"




export default function Button({onClick, text} : ButtonProps) {

    return (
        <button className="btn" onClick={onClick}>{text}</button>
    )
};