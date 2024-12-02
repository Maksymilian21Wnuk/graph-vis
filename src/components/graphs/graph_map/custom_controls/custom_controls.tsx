import { Controls, ControlButton } from "@xyflow/react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload, faShareNodes, faDice, faX, faHand, faTrash, faToiletPaperSlash, faArrowRight, faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";
import { GraphAction } from "../../../../shared/types/graph_map_types";
import { useState } from "react";
import { ActionType } from "../../../../shared/enumerations/enums";

/*
file for setting custom controls
on graph map, as a props takes
functions that will be called on click,
should be fontawesomeicon
it contains additional controls
displayed by default, but hidden 
on hidden state change
*/

interface CustomControlsProps extends AdditionalControls {
    onFitView: () => void;
}

interface AdditionalControls {
    randomizeWeight: () => void;
    clearGraph: () => void;
    dispatch: React.Dispatch<GraphAction>;
    noWeights: () => void;
    setIsDirected: () => void;
    onDownload: () => void;
}



function AdditionalControls({ onDownload, randomizeWeight, clearGraph, dispatch, noWeights, setIsDirected }: AdditionalControls) {
    const [currentMode, setCurrentMode] = useState(ActionType.MODE_CHOOSE);

    return (
        <>
            <ControlButton title="Randomize weights" onClick={randomizeWeight}>
                <FontAwesomeIcon icon={faDice} />
            </ControlButton>
            <ControlButton title="Clear graph" onClick={clearGraph}>
                <FontAwesomeIcon icon={faX} />
            </ControlButton>
            <ControlButton
                style={{ "background": currentMode === ActionType.MODE_ADD ? "rgb(163 230 53)" : "white" }}
                title="Add mode"
                onClick={() => {
                    dispatch({ type: ActionType.MODE_ADD });
                    setCurrentMode(ActionType.MODE_ADD)
                }}>
                <FontAwesomeIcon icon={faShareNodes} />
            </ControlButton >
            <ControlButton
                style={{ "background": currentMode === ActionType.MODE_CHOOSE ? "rgb(163 230 53)" : "white" }}
                title="Choose mode"
                onClick={() => {
                    dispatch({ type: ActionType.MODE_CHOOSE });
                    setCurrentMode(ActionType.MODE_CHOOSE)
                }}>
                <FontAwesomeIcon icon={faHand} />
            </ControlButton>
            <ControlButton
                style={{ "background": currentMode === ActionType.MODE_REMOVE ? "rgb(163 230 53)" : "white" }}
                title="Remove mode"
                onClick={() => {
                    dispatch({ type: ActionType.MODE_REMOVE });
                    setCurrentMode(ActionType.MODE_REMOVE)
                }}>
                <FontAwesomeIcon icon={faTrash} />
            </ControlButton>
            <ControlButton title="Remove weights" onClick={noWeights}>
                <FontAwesomeIcon icon={faToiletPaperSlash} />
            </ControlButton>
            <ControlButton title="Set directed graph" onClick={setIsDirected}>
                <FontAwesomeIcon icon={faArrowRight} />
            </ControlButton>
            <ControlButton title="Download image" onClick={onDownload}>
                <FontAwesomeIcon icon={faDownload} />
            </ControlButton>
        </>)
}

export default function CustomControls({ onDownload, onFitView, randomizeWeight, clearGraph, dispatch, noWeights, setIsDirected }: CustomControlsProps) {
    const [hidden, setHidden] = useState(false);

    const onHiddenClick = () => {
        setHidden(!hidden);
    }

    return (
        <Controls position="top-right" showInteractive={false} showZoom={false} onFitView={onFitView}>
            <ControlButton title="Hide panel" onClick={onHiddenClick}>
                <FontAwesomeIcon icon={hidden ? faPlus : faMinus} />
            </ControlButton>
            {hidden ?
                null :
                <AdditionalControls onDownload={onDownload} randomizeWeight={randomizeWeight}
                    clearGraph={clearGraph} dispatch={dispatch}
                    noWeights={noWeights} setIsDirected={setIsDirected} />}
        </Controls>
    )
}