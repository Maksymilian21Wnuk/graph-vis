

interface StructureTabInterface {
    setSelectedVal: (n: number) => void,
    selectedVal: number
}


export default function StructureTab({ setSelectedVal, selectedVal }: StructureTabInterface) {
    return (
        <div role="tablist" className="tabs tabs-lifted flex flex-wrap md:grid-cols-3">
            <a role="tab"
                onClick={() => setSelectedVal(0)}
                className={`tab ${selectedVal === 0 ? 'bg-lime-300' : ""}`}>Adjacency</a>
            <a role="tab"
                onClick={() => setSelectedVal(1)}
                className={`tab ${selectedVal === 1 ? 'bg-lime-300' : ""}`}>Matrix</a>
            <a role="tab"
                onClick={() => setSelectedVal(2)}
                className={`tab ${selectedVal === 2 ? 'bg-lime-300' : ""}`}>Code</a>
        </div>
    )
}