import { Node } from "@xyflow/react";


export interface ButtonProps {
    onClick: (e : React.MouseEvent<HTMLElement>) => void;
    text: string;
};