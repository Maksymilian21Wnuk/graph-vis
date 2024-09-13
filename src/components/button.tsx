import { useState } from "react";
import { ButtonProps } from "../shared/interfaces/button.interface"




export default function Button({onClick, text} : ButtonProps) {

    return (
        <button onClick={onClick}>{text}</button>
    )
};