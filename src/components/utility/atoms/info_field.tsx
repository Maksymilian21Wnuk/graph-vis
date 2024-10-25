import InfoFieldProps from "../../../shared/interfaces/info_field.interface"
import { fields } from "../../home/constants/infos"



export default function InfoField() {
    return (
        <ul className="flex flex-col gap-8 justify-center items-center">
            {fields.map((field: InfoFieldProps, key: number = 0) =>
                <li key={key} className="bg-gray-100 p-5 w-3/5  lg:w-3/6 rounded-xl hover:bg-slate-100">
                    <h1 className="h1-custom">{field.title}</h1>
                    <div className="">
                        {field.content}
                    </div>
                </li>
            )}
        </ul>
    )
}