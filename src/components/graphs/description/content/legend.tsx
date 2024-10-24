



export default function Legend() {
    return (
        <div className='pt-5'>
            <p className="text-xl font-bold">Legend</p>
            <div className='grid grid-cols-2 gap-y-2  '>
                <div className="w-6 h-6 bg-red-500"></div>
                <div> Current node</div>
                <div className="w-6 h-6 bg-[#FFA500] lol"></div>
                <div> Currently visiting</div>
                <div className="w-6 h-6 bg-[#FFFF00]"></div>
                <div> Visited</div>
            </div>
        </div>
    )
}