import { Link } from "react-router-dom"
import InfoField from "../utility/atoms/info_field"
import { fields } from "./constants/infos"
import InfoFieldProps from "../../shared/interfaces/info_field.interface"


export default function Home() {
    return (
        <div className="animate-appear">
            <div className="flex flex-col justify-center items-center p-5 m-5">
                <h1 className="text-2xl md:text-5xl font-extrabold text-gray-900 mb-4">
                    Welcome to GraphVizr
                </h1>
                <Link className="btn" to="/visualise">Ready? Get started</Link>
            </div>
            <div className="divider"></div>
            <div className="flex flex-col gap-8 justify-center items-center">
                {fields.map((field : InfoFieldProps) =>
                    <InfoField title={field.title} content={field.content} />
                )}
            </div>
        </div>
    )
}