import { useState } from "react";
import { GraphName } from "../../../../../../shared/types/graph_map_types"
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { PRESETS_COUNT } from "../../../../../../shared/constants";

interface SpawnerModalInterface {
    graph_names: GraphName[];
    onClose: (idx: number) => void;
    setShowRandom: (b: boolean) => void;
    onRemove: (idx : number) => void;
}


export default function SpawnerModal({ graph_names, onClose, setShowRandom, onRemove }: SpawnerModalInterface) {

    const [localIdx, setLocalIdx] = useState(-1);

    const onClick = () => {
        if (localIdx === -1) {
            setShowRandom(false);
        }
        else if (localIdx === 0) {
            setShowRandom(true);
            onClose(localIdx)
        }
        else {
            onClose(localIdx);
            setShowRandom(false);
        }
    }


    return (
        <dialog id="spawner_modal" className="modal">
            <div className="modal-box text-black">
                <div className="flex items-center justify-center flex-col">
                    <h1 className="font-bold text-xl py-2">
                        Choose graph to spawn
                    </h1>
                    <div className="overflow-y-auto h-[350px] w-full">
                        <ul className="">
                            {graph_names.map((n: GraphName, idx: number) =>
                                <div key={"li-div" + idx} className="grid grid-cols-5">
                                    <li key={idx}
                                        onClick={() => { setLocalIdx(idx) }}
                                        className={
                                            (idx === localIdx ?
                                                "p-2 col-span-4 m-2 border-2 rounded hover:bg-lime-400 bg-lime-300"
                                                :
                                                "p-2 m-2 col-span-4 border-2 rounded hover:bg-lime-100 cursor-pointer")}>
                                        {n.name}
                                    </li>
                                    {idx < PRESETS_COUNT ? null :
                                        <li key={"trash" + idx} onClick={() => onRemove(idx)} className="cursor-pointer border w-10 h-10">
                                            <FontAwesomeIcon icon={faTrash} />
                                        </li>
                                    }
                                </div>
                            )}
                        </ul>
                    </div>
                </div>
                <div className="modal-action">
                    <form method="dialog">
                        <button onClick={onClick} className="btn">Spawn</button>
                        <button className="btn">Close</button>
                    </form>
                </div>
            </div>
        </dialog>
    )
}