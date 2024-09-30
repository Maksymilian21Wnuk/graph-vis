import { HelpPopup } from "../utility/help_popup";


export default function Navbar() {
    return (   
        <nav className="bg-gray-600 text-white py-3 pl-2">
            <div className="flex justify-between">
                <h1 className="text-xl py-4 px-5"> Graph Visualization </h1>
                <HelpPopup/>
            </div>
        </nav>
    );
}

