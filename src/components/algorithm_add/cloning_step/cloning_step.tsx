import ContainerStep from "../util/container_step";
import CopyAtom from "../util/copy_atom";


const cmd = "git clone https://github.com/Maksymilian21Wnuk/GraphVisual.git"

export default function CloningStep() {


    return (
        <ContainerStep step_title="Step 1: Clone repository">
            <div className="bg-slate-100 p-6">
                Clone with:
                <div className="grid grid-cols-4 py-4">
                    <div className="col-span-3 py-2 font-bold">
                        {cmd}
                    </div>
                    <div className="py-2 text-2xl">
                        <CopyAtom text_to_copy={cmd} />
                    </div>
                </div>
                <a className="link link-primary py-2"
                    target="_blank"
                    href="https://github.com/Maksymilian21Wnuk/GraphVisual.git">
                    Repository source
                </a>
            </div>
        </ContainerStep>
    )
}