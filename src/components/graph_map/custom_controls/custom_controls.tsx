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
it contains additional controls
displayed by default, but hidden 
on hidden state change
*/

interface CustomControlsProps {
    randomizeWeight: () => void;
    clearGraph: () => void;
    dispatch: React.Dispatch<GraphAction>;
    noWeights: () => void;
    exportGraph: () => void;
    setIsDirected: () => void;
}



function AdditionalControls({ randomizeWeight, clearGraph, dispatch, noWeights, exportGraph, setIsDirected }: CustomControlsProps) {
    return (
        <>
            <ControlButton title="Randomize weights" onClick={randomizeWeight}>
                <FontAwesomeIcon icon={faDice} />
            </ControlButton>
            <ControlButton title="Clear graph" onClick={clearGraph}>
                <FontAwesomeIcon icon={faX} />
            </ControlButton>
            <ControlButton title="Add mode" onClick={() => dispatch({ type: "MODE_ADD" })}>
                <FontAwesomeIcon icon={faShareNodes} />
            </ControlButton>
            <ControlButton title="Choose mode" onClick={() => dispatch({ type: "MODE_CHOOSE" })}>
                <FontAwesomeIcon icon={faHand} />
            </ControlButton>
            <ControlButton title="Remove mode" onClick={() => dispatch({ type: "MODE_REMOVE" })}>
                <FontAwesomeIcon icon={faTrash} />
            </ControlButton>
            <ControlButton title="Remove weights" onClick={noWeights}>
                <FontAwesomeIcon icon={faToiletPaperSlash} />
            </ControlButton>
            <ControlButton title="Export graph to python representation" onClick={exportGraph}>
                <FontAwesomeIcon icon={faFileExport} />
            </ControlButton>
            <ControlButton title="Set directed graph" onClick={setIsDirected}>
                <FontAwesomeIcon icon={faArrowRight} />
            </ControlButton>
        </>)
}

export default function CustomControls({ exportGraph, randomizeWeight, clearGraph, dispatch, noWeights, setIsDirected }: CustomControlsProps) {
    const [hidden, setHidden] = useState(false);

    const onHiddenClick = () => {
        setHidden(!hidden);
    }

    return (
        <Controls position="top-right" showInteractive={false} showZoom={false}>
            <ControlButton title="Hide panel" onClick={onHiddenClick}>
                <FontAwesomeIcon icon={hidden ? faPlus : faMinus} />
            </ControlButton>
            {hidden ?
                null :
                <AdditionalControls randomizeWeight={randomizeWeight} exportGraph={exportGraph}
                    clearGraph={clearGraph} dispatch={dispatch}
                    noWeights={noWeights} setIsDirected={setIsDirected} />}
        </Controls>
    )
}