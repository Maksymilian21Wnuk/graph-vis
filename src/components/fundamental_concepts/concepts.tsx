import { useState } from "react"
import { ConceptData, data } from "./data"


export default function Concepts() {
    const [filterVal, setFilterVal] = useState<string>("");

    const handleFilterChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFilterVal(e.target.value);
    }

    return (
        <>
            <input onChange={handleFilterChange} placeholder="search" className="input border border-black"></input>
            <div className="divider"></div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 text-xl px-12 mx-5">
                {data.map((d: ConceptData, i: number = 0) =>
                    d.title.toLocaleLowerCase().includes(filterVal) ? 
                    (<li className="list-none" key={i++}>
                        <div className="border-4 rounded-md m-2 p-2 bg-gray-50 hover:bg-gray-100">
                            <div className="font-semibold">
                                {d.title}
                            </div>
                            <div className="divider"></div>
                            <div className="">
                                {d.desc}
                            </div>
                        </div>
                    </li>) : null
                )}
            </div>
        </>
    )
}