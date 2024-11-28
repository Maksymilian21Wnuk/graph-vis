import { JsonRepresentation } from "../../../algorithms/algorithms_description/json_interfaces";
import JsonStep from "./json_step/json_step";
import ContainerStep from "../util/container_step";




interface MetadataInsertStepInterface {
    templateJson: JsonRepresentation | null;
}

export default function MetadataInsertStep({templateJson} : MetadataInsertStepInterface) {
    return (
        <ContainerStep step_title="Step 3: Metadata insertion">
            <JsonStep json={templateJson} />
        </ContainerStep>
    )
}