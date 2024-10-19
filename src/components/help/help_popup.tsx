import { HELP_TXT } from "../../shared/constants";
import { faCircleQuestion } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Legend from "../description/content/legend";
import Helper from "./icon_helper";

export function HelpPopup() {
    return (
        <>
            <button className="text-xl font-bold" onClick={() => {
                const modal = document.getElementById('help_modal');
                (modal as any).showModal();
            }}>
                <FontAwesomeIcon icon={faCircleQuestion} />
            </button>
            <dialog id="help_modal" className="modal">
                <div className="modal-box text-black">
                    <h3 className="font-bold text-lg">Help</h3>
                    <p className="py-4 text-sm">
                        <Helper />
                    </p>
                    <Legend />
                    <div className="modal-action">
                        <form method="dialog">
                            <button className="btn">Close</button>
                        </form>
                    </div>
                </div>
            </dialog>
        </>
    );

}