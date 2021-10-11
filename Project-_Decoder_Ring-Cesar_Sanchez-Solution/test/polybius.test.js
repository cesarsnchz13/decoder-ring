// Write your tests here!
const { expect } = require("chai");
const { polybius } = require("../src/polybius");

describe("encoding messages", () =>{
    it("should correctly encode a string", ()=>{
        const actual = polybius("abc")
        const expected = "112131"
        expect(actual).to.equal(expected)
    })
    it("should leave space as is", ()=>{
        const actual = polybius("a b c")
        const expected = "11 21 31"
        expect(actual).to.equal(expected)
    })
    it("should translate both i and j to 42", ()=> {
        const actual = polybius("i j")
        const expected = "42 42"
        expect(actual).to.equal(expected)
    })
})

describe("decoding messages", () =>{
    it("should correctly decode a single word", () => {
        const actual = polybius("112131", false)
        const expected = "abc"
        expect(actual).to.equal(expected)
    })
    it("should correct decode words with spaces", () =>{
        const actual = polybius("11 21 31", false)
        const expected = "a b c"
        expect(actual).to.equal(expected)
    })
    it("should translate 42 to both i and j", () => {
        const actual = polybius("3242", false)
        const expected = "hij"
        expect(actual).to.equal(expected)
    })
    it("should return false if there is an odd amount of numbers", () => {
        const actual = polybius("32423", false)
        expect(actual).to.be.false
    })
})