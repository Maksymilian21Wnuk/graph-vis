import { Link } from "react-router-dom";
import { HelpPopup } from "../utility/atoms/help_popup";
import { faShareNodes, faHome, faCircleQuestion } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Navbar() {
    return (
        <nav className="bg-gray-600 text-white">
            <ul>
                <div className="flex justify-between py-4">
                    <div className="flex">
                        <li>
                            <Link className="text-xl font-bold p-4" to="/visualise">
                                <FontAwesomeIcon icon={faShareNodes} />  GraphViz
                            </Link>
                        </li>
                        {/*dont need now <HelpPopup />*/}
                    </div>
                    <div className="flex space-x-10">
                        <li>
                            <Link to="/help">
                                <FontAwesomeIcon icon={faCircleQuestion} />
                            </Link>
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

