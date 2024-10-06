import { Message } from "../../../shared/types/graph_types"






export default function Steps({msg, additional, additional_name, modifyMode} : Message) {

    return msg && !modifyMode ? (
        <div className="mx-2 p-2">
            <div>
                Steps of algorithm:
            </div>
            <div className="py-5">
                {msg}
            </div>
            <div className="py-6">
                {additional_name}
            </div>
            <div className="py-6">
                {additional ? additional : ""}
            </div>
        </div>
    ) : null
}