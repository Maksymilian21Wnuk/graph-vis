import { HELP_TXT } from "../../shared/constants";


export function HelpPopup() {
    return (
        <>
        <button className="btn" onClick={()=>{
            const modal = document.getElementById('my_modal_1');
            if (modal) {
                modal.showModal();
            }
        }}>Help</button>
        <dialog id="my_modal_1" className="modal">
        <div className="modal-box text-black">
            <h3 className="font-bold text-lg">Hello!</h3>
            <p className="py-4">{HELP_TXT}</p>
            <div className="modal-action">
            <form method="dialog">
                {/* if there is a button in form, it will close the modal */}
                <button className="btn">Close</button>
            </form>
            </div>
        </div>
        </dialog>
        </>
    );

}