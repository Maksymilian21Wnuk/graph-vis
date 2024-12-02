import CopyAtom from "../../../util/copy_atom";


interface CopyStepInterface {
    json_parsed: string | null;
}

export default function CopyStep({ json_parsed }: CopyStepInterface) {

    return (
        <div className="grid grid-cols-4">
            <div className="col-span-3 text-2xl p-2 m-4">
                Copy .json file and append it to file ./src/algorithms/algorithms_description/description.json
            </div>
            <div className="text-2xl p-7">
                <CopyAtom text_to_copy={json_parsed as string} />
            </div>
        </div>
    )
}