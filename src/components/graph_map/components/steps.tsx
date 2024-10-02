import { Message } from "../../../shared/types/graph_types"


export default function Steps({msg} : Message) {

    return (
        <>
            Steps of algorithm:
            {msg}
        </>
    )
}