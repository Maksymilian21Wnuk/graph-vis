// this component returns a popup whenever edge is clicked when
// its add mode and graph is weighted
// it allows to change edge's weight


export default function EdgePopup() {
    return (
        <dialog id="edge_modal" className="modal">
            <div className="modal-box text-black">
                <h3 className="font-bold text-lg">Help</h3>
                <p className="py-4">Change edge's weight: </p>
                <div className="modal-action">
                    <form method="dialog">
                        <button className="btn">Go</button>
                    </form>
                </div>
            </div>
        </dialog>
    );
}