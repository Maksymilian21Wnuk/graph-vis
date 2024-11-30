import { faCopy } from "@fortawesome/free-solid-svg-icons/faCopy";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


interface CopyAtomInterface {
    tooltip_text?: string;
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
export default function CopyAtom({ tooltip_text, disabled, text_to_copy }: CopyAtomInterface) {
    const copy = () => {
        navigator.clipboard.writeText(text_to_copy);
    }

    return (
        <div className="tooltip" data-tip={tooltip_text ? tooltip_text : "Copy to clipboard"}>
            <button disabled={disabled} onClick={copy}>
                <FontAwesomeIcon icon={faCopy} />
            </button>
        </div>
    )
}