


interface JsonStepInterface {
    json_parsed: string;
}


export default function JsonStep({json_parsed} : JsonStepInterface) {
    return (
        <div className="bg-gray-200 m-5 lg:text-xl rounded-md">
            {json_parsed}
        </div>
    )
}