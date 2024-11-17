import JsonGetter from "../../../store/json_getter";



interface DescriptionPopupInterface {
    onHide: () => void;
    title: string;
    chosen: string;
}


export default function DescriptionPopup({ chosen, title, onHide }: DescriptionPopupInterface) {
    const desc = JsonGetter.getDescription(chosen);

    return (
        <dialog id="description_modal" className="modal gray-out" open>
            <div className="modal-box text-black">
                <div className="flex flex-col items-center justify-center">
                    <h1 className="h1-custom">
                        {title}
                    </h1>
                    <div>
                        {desc.text}
                    </div>

                </div>
                <div className="modal-action">
                    <form method="dialog">
                        <button onClick={onHide} className="btn">Exit</button>
                    </form>
                </div>
            </div>
        </dialog>
    )
}