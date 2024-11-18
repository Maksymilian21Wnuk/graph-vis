import { OutputInterface } from "../input_interface";




interface GuardMessage {
    text?: string;
    pass: boolean;
}

const keys = ["title" , "foo_name" , "short_info" , "time" , "space" , "desc" , "steps" , "code"]

export default function submit_guard(output : OutputInterface) : GuardMessage {
    const find_res : string | undefined = keys.find((k : string) => output[k as keyof OutputInterface] === "");
    if (find_res){
        return {text: `Empty val in field: ${find_res}`, pass: false};
    }

    if (output.foo_name.indexOf(' ') >= 0){
        return {text: "Function contains space", pass: false}
    }

    return {pass: true};
}