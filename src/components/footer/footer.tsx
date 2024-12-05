import { faBug } from "@fortawesome/free-solid-svg-icons/faBug";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLaptopCode } from "@fortawesome/free-solid-svg-icons/faLaptopCode";


export default function Footer() {
    return (
        <footer className="footer bg-slate-400 rounded p-4 text-base-content mt-auto">
            <nav className="grid grid-flow-col gap-16">
                <a href="https://github.com/Maksymilian21Wnuk/GraphVisual" target="_blank"
                    className="link link-hover font-bold text-xl flex flex-row">
                    <p className="pr-6">
                        Source code
                    </p>
                    <div>
                        <FontAwesomeIcon icon={
                            faLaptopCode
                        }
                        />
                    </div>
                </a>
                <a href="https://github.com/Maksymilian21Wnuk/GraphVisual/issues" target="_blank"
                    className="link link-hover font-bold text-xl flex flex-row">
                    <p className="pr-6">
                        Report bug
                    </p>
                    <div>
                        <FontAwesomeIcon icon={
                            faBug
                        } />
                    </div>
                </a>
            </nav>
            <aside>
                <p className="text-xl">2024</p>
            </aside>
        </footer>
    )
}