import { Link } from "react-router-dom";
import { HelpPopup } from "../utility/atoms/help_popup";


export default function Navbar() {
    return (   
        <nav className="bg-gray-600 text-white">
            <ul>
                <div className="flex justify-between py-4">
                    <li>
                        <Link className="text-xl font-bold p-4" to="/visualise">GraphVizr</Link>
                    </li>
                    <li>
                        <Link className="" to="/">Home</Link>
                    </li>
                    <HelpPopup/>
                </div>
            </ul>
        </nav>
    );
}

