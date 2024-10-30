
interface ButtonProps {
    onClick: (e : React.MouseEvent<HTMLElement>) => void;
    text: string;
    style?: string;
    disabled? : boolean;
};

export default function Button({onClick, text, style, disabled} : ButtonProps) {

    return (
        <button disabled={disabled ? true : false} className={`btn bg-lime-200 hover:bg-lime-300 ${style}`} onClick={onClick}>{text}</button>
    )
};