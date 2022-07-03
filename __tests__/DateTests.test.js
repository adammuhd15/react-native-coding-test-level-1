import { monthConverter, formatingDate } from "../src/services/helper/MonthConverter";

// Month Converter

test("Month in January", () => {
    let january = monthConverter(0)
    expect(january).toEqual("January")
})

test("Month in February", () => {
    let february = monthConverter(1)
    expect(february).toEqual("February")
})

test("Month in March", () => {
    let march = monthConverter(2)
    expect(march).toEqual("March")
})

test("Month in April", () => {
    let april = monthConverter(3)
    expect(april).toEqual("April")
})

test("Month in May", () => {
    let may = monthConverter(4)
    expect(may).toEqual("May")
})

test("Month in June", () => {
    let june = monthConverter(5)
    expect(june).toEqual("June")
})

test("Month in July", () => {
    let july = monthConverter(6)
    expect(july).toEqual("July")
})

test("Month in August", () => {
    let august = monthConverter(7)
    expect(august).toEqual("August")
})

test("Month in September", () => {
    let september = monthConverter(8)
    expect(september).toEqual("September")
})

test("Month in October", () => {
    let october = monthConverter(9)
    expect(october).toEqual("October")
})

test("Month in November", () => {
    let november = monthConverter(10)
    expect(november).toEqual("November")
})

test("Month in December", () => {
    let december = monthConverter(11)
    expect(december).toEqual("December")
})
 // Date formatter

 test("Test expected date", () => {
    let date = new Date(1996, 8, 27)
    let formatted = formatingDate(date)
    expect(formatted).toEqual("27 September 1996")
 })
