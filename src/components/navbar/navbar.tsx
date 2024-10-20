import { Link } from "react-router-dom";
import { faShareNodes, faHome, faCircleQuestion } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { HelpPopup } from "../help/help_popup";

export default function Navbar() {
    return (
        <nav id="navbar" className="bg-gray-600 text-white">
            <ul>
                <div className="flex justify-between py-4">
                        <li>
                            <Link className="text-xl font-bold p-4" to="/visualise">
                                <FontAwesomeIcon icon={faShareNodes} />  GraphViz
                            </Link>
                        </li>
                    <div className="flex space-x-10">
                        <li>
                            <Link className="text-xl font-bold p-4" to="/concepts">
                                Fundamental concepts
                            </Link>
                        </li>
                        <li>
                            <HelpPopup/>
                        </li>
                        <li>
                            <Link className="text-xl font-bold p-4" to="/">
                                <FontAwesomeIcon icon={faHome} />
                            </Link>
                        </li>

                    </div>
                </div>
            </ul>
        </nav>
    );
}

