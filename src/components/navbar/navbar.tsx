import { HelpPopup } from "../utility/help_popup";


export default function Navbar() {
    return (   
        <nav className="bg-gray-600 text-white py-5 pl-2">
            <h1 className="text-xl"> Graph Visualization </h1>
            <HelpPopup/>
        </nav>
    );
}

