import { emailRegEx, nameRegEx } from "../src/constants/RegEx";

test("Successful Email", () => {
    let email = "simon_yoon@gmail.com"
    let success = emailRegEx.test(email)
    expect(success).toBeTruthy()
})

test("Unsuccessful Email", () => {
    let normalString = "yoonad"
    let otherSpecialCharacters = "yoonad&@gma.com"
    let unSuccessFirst = emailRegEx.test(normalString)
    let unSuccessSecond = emailRegEx.test(otherSpecialCharacters)
    expect(unSuccessFirst).toBeFalsy()
    expect(unSuccessSecond).toBeFalsy()
})

test("Successful Name", () => {
    let name = "Christian Horner"
    let success = nameRegEx.test(name)
    expect(success).toBeTruthy()
})

test("Unsuccessful Name", () => {
    let name = "Why4"
    let unSuccess = nameRegEx.test(name)
    expect(unSuccess).toBeFalsy()
})
