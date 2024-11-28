import Button from "../../../../utility/atoms/button/button";


interface CopyStepInterface {
    json_parsed: string | null;
}

export default function CopyStep({ json_parsed }: CopyStepInterface) {
    const copy = () => {
        // just in case
        if (json_parsed !== null) {
            navigator.clipboard.writeText(json_parsed)
        }
    }

    return (
        <div className="grid grid-cols-4">
            <div className="col-span-3 text-2xl p-2 m-4">
                Copy .json file and append it to file ./src/algorithms/algorithms_description/description.json
            </div>
            <div>
                <Button 
                style="m-8"
                disabled={json_parsed === null} onClick={copy} text="Copy to clipboard" />
            </div>
        </div>
    )
}