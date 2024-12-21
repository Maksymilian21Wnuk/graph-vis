import { faCircleQuestion } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Legend from "../graphs/description/content/legend";
import Helper from "./icon_helper";



export function HelpPopup() {
    return (
        <>
            <button className="text-xl font-bold" onClick={() => {
                (document.getElementById('help_modal') as HTMLDialogElement).showModal();
            }}>
                <FontAwesomeIcon icon={faCircleQuestion} />
            </button>
            <dialog id="help_modal" className="modal">
                <div className="modal-box text-black">
                    <h3 className="font-bold text-lg">Help</h3>
                    <div className="py-4 text-sm">
                        <Helper />
                    </div>
                    <Legend />

                </div>
                <form method="dialog" className="modal-backdrop">
                    <button>Close</button>
                </form>
            </dialog>
        </>
    );

}