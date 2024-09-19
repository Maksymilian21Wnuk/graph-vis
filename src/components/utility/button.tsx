import { ButtonProps } from "../../shared/interfaces/button.interface"




export default function Button({onClick, text} : ButtonProps) {

    return (
        <button className="bg-blue-500 rounded hover:bg-blue-700 my-2 py-2" onClick={onClick}>{text}</button>
    )
};