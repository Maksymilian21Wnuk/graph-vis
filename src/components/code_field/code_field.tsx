

function DropDown() {

    return (
        <div className="dropdown">
            Here dropdown
        </div>
    );
}


export default function CodeField() {
    return (
        <form>
            <DropDown/>
            <input type="text" id="code" placeholder="Here code will show" className="border h-[477px] w-[400px]"/>
        </form>
    );
}