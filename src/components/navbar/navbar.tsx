import { Link } from "react-router-dom";
import { faShareNodes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { HelpPopup } from "../help/help_popup";

export default function Navbar() {
    /*
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    }*/


    return (
        <nav id="navbar" className="bg-gray-600 text-white">
            <ul>
                <div className="hidden md:flex md:justify-between py-4">
                    <li>
                        <Link className="text-xl font-bold p-4" to="/">
                            <FontAwesomeIcon icon={faShareNodes} />  {"GraphVisual" + (import.meta.env.DEV ? " DEV" : "")}
                        </Link>
                    </li>
                    <div className="md:flex md:space-x-10">
                        <li>
                            <Link className="text-xl font-bold p-4" to="/graphs">
                                Graphs
                            </Link>
                        </li>
                        {import.meta.env.DEV ?
                            <li>
                                <Link className="text-xl font-bold p-4" to="/developer">
                                    Developer
                                </Link>
                            </li> : null
                        }
                        <li>
                            <Link className="text-xl font-bold p-4" to="/concepts">
                                Concepts
                            </Link>
                        </li>
                        <li className="pr-10">
                            <HelpPopup />
                        </li>
                    </div>
                </div>
                <div className="md:hidden py-4 flex justify-between">

                    <li>
                        <div className="dropdown">
                            <div tabIndex={0} role="button" className="btn m-1">Menu</div>
                            <ul tabIndex={0} className="text-black dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
                                <li className="pr-10">
                                    <HelpPopup />
                                </li>
                                <li>
                                    <Link className="text-xl font-bold p-4" to="/graphs">
                                        Graphs
                                    </Link>
                                </li>
                                {import.meta.env.DEV ?
                                    <li>
                                        <Link className="text-xl font-bold p-4" to="/developer">
                                            Developer
                                        </Link>
                                    </li> : null
                                }
                                <li>
                                    <Link className="text-xl font-bold p-4" to="/concepts">
                                        Concepts
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </li>
                    <li>
                        <Link className="text-xl font-bold p-4" to="/">
                            <FontAwesomeIcon icon={faShareNodes} />  {"GraphVisual" + (import.meta.env.DEV ? " DEV" : "")}
                        </Link>
                    </li>

                </div>
            </ul>

        </nav>
    );
}

