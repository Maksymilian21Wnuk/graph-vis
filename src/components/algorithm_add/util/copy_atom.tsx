import { faCopy } from "@fortawesome/free-solid-svg-icons/faCopy";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";


interface CopyAtomInterface {
    disabled? : boolean;
    text_to_copy: string;
}

/**
 * Copy atom for shorthand
 * making copying component
 * with given tooltip text
 * and text to copy
 * @param tooltip_text tooltip text displayed on hover
 * @param text_to_copy text to copy to clipboard
 * @returns component for copying text
 */
export default function CopyAtom({ disabled, text_to_copy }: CopyAtomInterface) {
    const [copied, setCopied] = useState("Copy to clipboard");

    const copy = () => {
        navigator.clipboard.writeText(text_to_copy);
        setCopied("Copied!");
    }

    return (
        <div className="tooltip" data-tip={copied}>
            <button disabled={disabled} onClick={copy} 
            onMouseLeave={() => {setCopied("Copy to clipboard")}}>
                <FontAwesomeIcon icon={faCopy} />
            </button>
        </div>
    )
}