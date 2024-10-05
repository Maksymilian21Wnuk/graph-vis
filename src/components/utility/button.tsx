
interface ButtonProps {
    onClick: (e : React.MouseEvent<HTMLElement>) => void;
    text: string;
    style?: string;
};

export default function Button({onClick, text, style} : ButtonProps) {

    return (
        <button className={`btn ${style}`} onClick={onClick}>{text}</button>
    )
};