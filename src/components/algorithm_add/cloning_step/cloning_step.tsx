import Button from "../../utility/atoms/button/button";
import ContainerStep from "../util/container_step";




const cmd = "git clone https://github.com/Maksymilian21Wnuk/GraphVisual.git" 

export default function CloningStep() {


    return (
        <ContainerStep step_title="Step 1: Clone repository">
            <div className="bg-slate-100">
                Clone with:
                <div>
                    <div>
                        {cmd}
                    </div>
                    <div>
                        <Button onClick={() => ""} text="Copy to clipboard" />
                    </div>
                </div>
                <a className="link link-primary" 
                    target="_blank"
                    href="https://github.com/Maksymilian21Wnuk/GraphVisual.git">
                Repository
                </a>
            </div>
        </ContainerStep>
    )
}