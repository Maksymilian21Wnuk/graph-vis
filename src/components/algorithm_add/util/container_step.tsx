




interface ContainerStepInterface {
    children: JSX.Element,
    step_title: string
}



export default function ContainerStep({children, step_title} : ContainerStepInterface) {
    return (
        <div className="bg-gray-200 m-5 lg:text-xl rounded-md">
            <div className="grid grid-cols-3">
                <h1 className="h1-custom col-span-2"> {step_title} </h1>
            </div>
            {children}
        </div>
    )
}