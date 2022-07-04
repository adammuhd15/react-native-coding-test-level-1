import { capitalizeFirstAlphabet } from "../src/services/helper/CapitalizeFirst";

test("Success Capitalize", () => {
    let someString = capitalizeFirstAlphabet("blaziken")
    expect(someString).toEqual("Blaziken")
})

test("Unsuccess Capitalize with name other than alphabets", () => {
    let someString = capitalizeFirstAlphabet("1blaziken")
    expect(someString).toEqual("1blaziken")
})

test("Unsuccess Capitalize with name being numbers", () => {
    let someString = capitalizeFirstAlphabet(1)
    expect(someString).toEqual(1)
})
