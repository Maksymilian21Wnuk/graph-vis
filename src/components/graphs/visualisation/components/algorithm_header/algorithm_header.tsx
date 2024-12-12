import { NOT_SELECTED } from "../../../../../shared/constants";



interface AlgorithmHeaderInterface {
    selectedValue : string;
    title : string;
}


export default function AlgorithmHeader({selectedValue, title} : AlgorithmHeaderInterface) {
    return (
        <div className="flex flex-col items-center bg-white">
            <h1 className="text-2xl font-bold py-4">{selectedValue === NOT_SELECTED ? `Select algorithm...` : title}</h1>
        </div>
    )
}