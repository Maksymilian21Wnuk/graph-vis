import Colors from "./colors";



let color_basic = new Colors();
const id = "42";


describe(`Colors test`, () => {
    test(`Should return error color after standard colors exhaustion`, () => {
        for (let i = 0; i < color_basic.length; i++) {
            console.log(color_basic.next_color());
        }

        expect(color_basic.next_color()).toStrictEqual(Colors.ERROR_ID)
    })

    test(`Should correctly yield values to 9 and last error id`, () => {
        let c = new Colors()
        const exp = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, Colors.ERROR_ID];
        const actual = []
        for (let i = 0; i < c.length + 1; i++) {
            actual.push(c.next_color());
        }
        expect(actual).toStrictEqual(exp);
    })

    test(`Should correctly give color 2 to node`, () => {
        let c = new Colors();
        c.next_color();
        c.next_color();
        const color = c.next_color();
        c.set_color(id, color);

        expect(c.get_color(id)).toBe(color);
    })

    test(`Should give error code for wrong color id`, () => {
        let c = new Colors();
        
        c.set_color(id, -42);

        expect(c.get_color(id)).toBe(Colors.ERROR_ID);
    })

    test(`Cloning test`, () => {
        const c = new Colors(undefined, [[1, "#color"]]);
        let c2 = c.clone();

        c2.set_color(id, 1);

        expect(c.get_color(id)).not.toEqual(c2.get_color(id));
    })
})