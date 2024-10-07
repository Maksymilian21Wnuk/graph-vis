import InfoFieldProps from "../../../shared/interfaces/info_field.interface"





export default function InfoField({title, content} : InfoFieldProps) {
    return (
        <div className="bg-gray-100 p-5 w-3/5  lg:w-3/6 rounded-xl hover:bg-slate-100">
            <h1 className="h1-custom">{title}</h1>
            <div className="">
                {content}
            </div>
        </div>
    )
}