import { GraphName } from "../../../../../../shared/types/graph_map_types"


interface SpawnerModalInterface {
    graph_names: GraphName[];
    setIdx: (idx : number) => void;
}


export default function SpawnerModal({ graph_names, setIdx }: SpawnerModalInterface) {

    const onClick = (event : any) => {
        setIdx(event);
    }

    return (
        <dialog id="spawner_modal" className="modal">
            <div className="modal-box text-black">
                <div className="flex items-center justify-center flex-col">
                    <h1 className="font-bold text-xl py-2">
                        Choose graph to spawn
                    </h1>
                    <ul className="">
                        {graph_names.map((n: GraphName, idx : number = 0) =>
                            <li onClick={onClick} className="py-1 hover:bg-gray-200">
                            </li>
                        )}
                    </ul>
                </div>
                <div className="modal-action">
                    <form method="dialog">
                        <button className="btn">Spawn</button>
                    </form>
                </div>
            </div>
        </dialog>
    )
}