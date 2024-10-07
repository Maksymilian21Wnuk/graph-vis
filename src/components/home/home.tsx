import { Link } from "react-router-dom"



export default function Home() {
    return (
        <>
            <div className="flex flex-col justify-center items-center p-5 m-5">
                <h1 className="text-2xl md:text-5xl font-extrabold text-gray-900 mb-4">
                    Welcome to GraphVizr
                </h1>
                <Link className="btn" to="/visualise">Ready? Get started</Link>
            </div>
            <div className="divider "></div>
            <div className="grid grid-cols-1 md:grid-cols-3 ">
                <div className="bg-cyan-50">
                    <h1 className="h1-custom">Graphs</h1>
                    asdf
                </div>
                <div className="bg-gray-50">
                    <h1 className="h1-custom">Problems solved by graphs</h1>
                </div>
                <div className="bg-cyan-50">
                    <h1 className="h1-custom">Why this page?</h1>
                </div>
            </div>
        </>
    )
}