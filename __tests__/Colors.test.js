import { Colors } from "../src/constants/Colors";

test("Black Color", () => {
    expect(Colors.black).toEqual("#000000")
})

test("White Color", () => {
    expect(Colors.white).toEqual("#FFFFFF")
})

test("Blue Color", () => {
    expect(Colors.blue).toEqual("#29C5F6")
})

test("Green Color", () => {
    expect(Colors.green).toEqual("#1FD655")
})

test("Pink Color", () => {
    expect(Colors.pink).toEqual("#B33B72")
})

test("Error Color", () => {
    expect(Colors.error).toEqual("#F55D42")
})
