import { data } from "./data"



export default function Concepts() {
    return (
        <div className="text-xl">
            {data.map((d: string, i: number = 0) =>
                <li key={i++}>
                    {d}
                </li>
            )}
        </div>
    )
}