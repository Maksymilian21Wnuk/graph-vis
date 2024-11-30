import { JsonRepresentation } from "../../../../algorithms/algorithms_description/json_interfaces";
import CopyStep from "./copy_step/copy_step";
import DownloadStep from "./download_step/download_step";
import MapEntryStep from "./entry_map_step/entry_map_step";
import MakeSure from "./make_sure/make_sure";
//import JsonView from 'react18-json-view'


interface JsonStepInterface {
    json: JsonRepresentation | null;
}



export default function JsonStep({ json }: JsonStepInterface) {
    const strjson = JSON.stringify(json);
    const json_parsed: string | null = json !== null ? strjson.substring(1, strjson.length - 1) : null;

    return (
        <>
            <div className="bg-gray-100 lg:text-xl rounded-md p-5 flex justify-center items-center">
                {json_parsed !== null ?
                    <div className="tooltip font-bold text-2xl bg-lime-200 p-4 rounded-xl m-2 " data-tip={json_parsed}>
                        Parsed succesfully
                    </div>
                    :
                    <div className="font-bold text-2xl bg-red-100 p-4 rounded-xl m-2 text-red-500">
                        Template must be generated
                    </div>
                }
            </div>
            <div>
                <div>
                    <CopyStep json_parsed={json_parsed} />
                </div>
                <div>
                    <DownloadStep json={json} />
                </div>
                {json ?
                    <div>
                        <MapEntryStep json={json} />
                        <MakeSure />
                    </div>
                    :
                    null}
            </div>
        </>
    )
}