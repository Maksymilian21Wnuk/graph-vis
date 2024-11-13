import { INFINITY_ASCII } from "../../../shared/constants";





export default function infinity_parser(x : number) : string {
    return x === Infinity ? INFINITY_ASCII : String(x)
}