import { InputName, CheckboxInputName } from "./input_types";

export interface InputInterface {
    title: string;
    name: InputName;
    desc: string;
}

export interface FormInputInterface {
    input_info: InputInterface;
    bg?: number;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    value: string | string[];
}

export interface OutputInterface {
    title: string;
    foo_name: string;
    short_info: string;
    time: string;
    space: string;
    desc: string;
    steps: string;
    code: string;
}

export interface OutputInterfaceJSON extends Omit<OutputInterface, "steps" | "code"> {
    steps: string[];
    code: string[]
}

export interface CheckboxValuesInterface {
    require_directed: boolean;
    require_non_directed: boolean;
    require_weights: boolean;
    require_tree: boolean;
}

export interface CheckboxInputInterface {
    title: string;
    name: CheckboxInputName;
}

export interface FormCheckboxInterface {
    info: CheckboxInputInterface;
    onChange: (e : React.ChangeEvent<HTMLInputElement>) => void;
    value: boolean;
}