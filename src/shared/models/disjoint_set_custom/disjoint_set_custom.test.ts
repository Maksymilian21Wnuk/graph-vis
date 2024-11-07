import { DisjointSetCustom } from "./disjoint_set_custom";



const d1 = new DisjointSetCustom(["1", "2", "3"]);


describe(`Disjoint set custom test`, () => {
    test(`Should throw range error`, () => {
        try {
            new DisjointSetCustom([]);
        }
        catch (e : any) {
            expect(e.message).toBe("Nodes list must not be 0")
        }
    })

    test(`Should return own root`, () => {
        expect(d1.find("1")).toBe(
            "1"
        )
    })

    test(`Should make union between 1 and 2 and find 1 as root`, () => {
        d1.union("1", "2");
        expect(d1.find("2")).toBe("1")
    })

    test(`Should properly display sets`, () => {
        d1.union("1", "2");
        let expected = new Map<string, string[]>();
        expected.set("1", ["1", "2"]);
        expected.set("3", ["3"]);

        expect(d1.get_sets()).toStrictEqual(expected)
    })
})