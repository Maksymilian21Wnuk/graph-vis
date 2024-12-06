import { Link } from "react-router-dom"
import InfoField from "../utility/atoms/info_field"


export default function Home() {
    return (
        <div className="animate-appear">
            <div className="flex flex-col justify-center items-center p-5 m-5">
                <h1 className="text-2xl md:text-5xl font-extrabold text-gray-900 mb-4">
                    Welcome to GraphVisual
                </h1>
                <Link className="btn btn-lg bg-lime-200" to="/graphs">Get started</Link>
            </div>
            <div className="divider"></div>
            <InfoField />
            <div className="divider"></div>

        </div>
    )
}