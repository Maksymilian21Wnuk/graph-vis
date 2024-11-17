import DescriptionForm from "./description_form/description_form";
import Disclaimer from "./disclaimer/disclaimer";




export default function AlgorithmAdd() {
    return (
        <div className="flex flex-col items-center">
            <div className="md:w-3/5">
                <Disclaimer />
                <DescriptionForm />
            </div>
        </div>
    )
}