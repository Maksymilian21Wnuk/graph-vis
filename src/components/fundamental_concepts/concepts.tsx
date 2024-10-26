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
            <div className="grid grid-cols-4 text-xl">
                {data.map((d: ConceptData, i: number = 0) =>
                    d.title.toLocaleLowerCase().includes(filterVal) ? 
                    (<li className="list-none" key={i++}>
                        <div className="h-72 border-4 rounded-md border-sky-300 m-2 p-2 bg-blue-50 hover:bg-sky-100">
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