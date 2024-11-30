import { OutputInterface } from "./input_interface";




interface GuardMessage {
    text?: string;
    pass: boolean;
}

const keys = ["title" , "name" , "short_info" , "time" , "space" , "desc" , "steps" , "code"]

export default function submit_guard(output : OutputInterface) : GuardMessage {
    const find_res : string | undefined = keys.find((k : string) => output[k as keyof OutputInterface] === "");
    if (find_res){
        return {text: `Empty val in field: ${find_res}`, pass: false};
    }

    else if (output.name.indexOf(' ') >= 0){
        return {text: "Function contains space", pass: false};
    }

    else if (output.name.match(/\d+/) !== null) {
        return {text: "Function name contains number", pass: false};
    }
    else {
        return {pass: true};
    }
}