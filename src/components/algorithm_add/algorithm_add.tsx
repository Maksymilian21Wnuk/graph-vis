import { useState } from "react";
import DescriptionForm from "./description_form/description_form";
import Disclaimer from "./disclaimer/disclaimer";
import JsonStep from "./json_step/json_step";
import { JsonRepresentation } from "../../algorithms/algorithms_description/json_interfaces";




export default function AlgorithmAdd() {
    const [templateJson, setTemplateJson] = useState<JsonRepresentation>({});

    return (
        <div className="flex flex-col items-center">
            <div className="md:w-3/5">
                <Disclaimer />
                <DescriptionForm setTemplateJson={setTemplateJson} />
                <JsonStep json={templateJson} />
            </div>
        </div>
    )
}