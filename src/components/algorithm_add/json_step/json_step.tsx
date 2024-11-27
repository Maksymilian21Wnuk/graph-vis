import { JsonRepresentation } from "../../../algorithms/algorithms_description/json_interfaces";
import Button from "../../utility/atoms/button/button";
//import JsonView from 'react18-json-view'


interface JsonStepInterface {
    json: JsonRepresentation;
}


export default function JsonStep({ json }: JsonStepInterface) {
    const strjson = JSON.stringify(json);
    const json_parsed = strjson.substring(1, strjson.length - 1);

    const copy = () => {

    }

    const download_template = () => {
        
    }

    return (
        <>
            <div className="bg-gray-100 m-5 lg:text-xl rounded-md">
                {json_parsed}
            </div>
            <div>
                <Button onClick={copy} text="Copy to clipboard" />
                <Button onClick={copy} text="Download code template" />
            </div>
        </>
    )
}