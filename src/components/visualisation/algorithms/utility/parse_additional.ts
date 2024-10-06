


// function for parsing additional information of type Map<string, number>
export default function parse_additional(map : Map<string, number>) : string{
    let parsed = "";
    map.forEach((value : number, key : string) => {
        parsed += `${key}: ${value}  `;
    })
    return parsed;
}