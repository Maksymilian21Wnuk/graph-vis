import { faShareNodes, faDice, faX, faHand, faTrash, faExpand, faFileExport, faToiletPaperSlash, faArrowRight, faMinus, faPlus, IconDefinition } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface IconHelper {
    icon : IconDefinition;
    description : string;
}

const helper_data : IconHelper[] = [
    {icon : faExpand, description: `Center view on graph`},
    {icon : faPlus, description: `Show control panel`},
    {icon : faMinus, description: `Hide control panel`},
    {icon : faDice, description: `Assign random weights to graph`},
    {icon : faX, description: `Clear current graph`},
    {icon : faShareNodes, description: `Add mode for adding nodes by clicking on panel or connecting edges 
        by clicking two nodes`},
    {icon : faHand, description: `Drag mode for choosing or dragging nodes`},
    {icon : faTrash, description: `Remove mode for deleting nodes or edges`},
    {icon : faToiletPaperSlash, description: `Remove weights of graph`},
    {icon : faArrowRight, description: `Make graph directed/undirected`},
    {icon : faFileExport, description: `Save to clipboard graph's python representation`},
];

export default function Helper() {
    return (
        <div>
            <ul>
                {helper_data.map((helper : IconHelper, key : number = 0) => 
                    <li key={key} className="py-1"><FontAwesomeIcon icon={helper.icon}/> {helper.description}</li>
                )}
            </ul>
        </div>
    )
}


