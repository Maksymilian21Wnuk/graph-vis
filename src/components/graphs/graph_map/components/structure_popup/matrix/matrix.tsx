import { StructureInterface } from "../../../../../../shared/types/visualisation_types"
import get_matrix_repr from "./get_matrix_repr"






export default function MatrixRepresentation({graph} : StructureInterface) {
    const matrix = get_matrix_repr(graph);

    return (
        <div>
            <ul>
                {matrix.map((x : number[]) => 
                    <li className="">
                        <ul className="flex flex-row">
                            {x.map((n : number) =>
                                <li className="border p-1 w-7 h-8">
                                    {n}
                                </li>
                            ) }
                        </ul>
                    </li>
                )}
            </ul>
        </div>
    )
}