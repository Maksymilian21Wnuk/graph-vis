import { Controls, ControlButton } from "@xyflow/react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShareNodes, faDice, faX, faHand, faTrash, faFileExport, faToiletPaperSlash, faArrowRight, faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";
import { GraphAction } from "../../../shared/types/interactive_types";
import { useState } from "react";

/*
file for setting custom controls
on graph map, as a props takes
functions that will be called on click,
should be fontawesomeicon
*/

interface CustomControlsProps {
    randomizeWeight: () => void;
    clearGraph: () => void;
    dispatch: React.Dispatch<GraphAction>;
    noWeights: () => void;
    exportGraph: () => void;
    setIsDirected: () => void;
}

export default function CustomControls({ exportGraph, randomizeWeight, clearGraph, dispatch, noWeights, setIsDirected }: CustomControlsProps) {
    const [ hidden, setHidden ] = useState(false);

    const onHiddenClick = () => {
        setHidden(!hidden);
    }

    return (
        <Controls position="top-right" showInteractive={false} showZoom={false}>
            <ControlButton onClick={onHiddenClick}>
                <FontAwesomeIcon icon={hidden ? faPlus : faMinus} />
            </ControlButton>
            {hidden ? null :
                (
                    <><ControlButton onClick={randomizeWeight}>
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
                        <ControlButton onClick={setIsDirected}>
                            <FontAwesomeIcon icon={faArrowRight} />
                        </ControlButton>
                    </>) }
        </Controls>
    )
}