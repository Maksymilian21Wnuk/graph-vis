import { Controls, ControlButton } from "@xyflow/react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShareNodes, faDice, faX, faHand, faTrash, faFileExport, faToiletPaperSlash, faFile } from "@fortawesome/free-solid-svg-icons";
import { GraphAction } from "../../../shared/types/interactive_types";

interface CustomControlsProps {
    randomizeWeight: () => void;
    clearGraph: () => void;
    dispatch: React.Dispatch<GraphAction>;
    noWeights: () => void;
    exportGraph: () => void;
}

export default function CustomControls({ exportGraph, randomizeWeight, clearGraph, dispatch, noWeights }: CustomControlsProps) {
    return (
        <Controls position="top-right" showInteractive={false} showZoom={false}>
            <ControlButton onClick={randomizeWeight}>
                <FontAwesomeIcon icon={faDice} />
            </ControlButton>
            <ControlButton onClick={clearGraph}>
                <FontAwesomeIcon icon={faX} />
            </ControlButton>
            <ControlButton onClick={() => dispatch({ type: "MODE_ADD" })}>
                <FontAwesomeIcon icon={faShareNodes} />
            </ControlButton>
            <ControlButton onClick={() => dispatch({ type: "MODE_CHOOSE" })}>
                <FontAwesomeIcon icon={faHand} />
            </ControlButton>
            <ControlButton onClick={() => dispatch({ type: "MODE_REMOVE" })}>
                <FontAwesomeIcon icon={faTrash} />
            </ControlButton>
            <ControlButton onClick={noWeights}>
                <FontAwesomeIcon icon={faToiletPaperSlash} />
            </ControlButton>
            <ControlButton onClick={exportGraph}>
                <FontAwesomeIcon icon={faFileExport} />
            </ControlButton>
        </Controls>
    )
}