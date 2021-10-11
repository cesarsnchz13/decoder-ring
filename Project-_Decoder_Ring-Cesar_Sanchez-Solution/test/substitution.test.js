// Write your tests here!
const { expect } = require("chai");
const { substitution } = require("../src/substitution");

const testAlphabet = "zyxwvutsrqponmlkjihgfedcba"
const testAlphabet2 = "@#$wvutsrqponmlkjihgfedcba"
const testAlphabet3 = "xoxoxoxoxoxoxoxoxoxoxoxoxo"

describe("Returning False", () =>{
    it("should return false if no alphabet provided", () =>{
        const actual = substitution("ccc")
        expect(actual).to.be.false
    })
    it("should return false if alphabet string is not 26 characters", () =>{
        const actual = substitution("ccc", "a")
        expect(actual).to.be.false
    })
    it("should return false if the alphabet has repeated characters", () =>{
        const actual = substitution("ccc", testAlphabet3)
        expect(actual).to.be.false
    })    
})

describe("Encoding Messages", () =>{
    it("should correctly transpose a single word", () =>{
        const actual = substitution("ccc", testAlphabet)
        const expected = "xxx"
        expect(actual).to.equal(expected)
    })
    it("should correctly transpose a multiple words with spaces", () =>{
        const actual = substitution("ccc bbb aaa", testAlphabet)
        const expected = "xxx yyy zzz"
        expect(actual).to.equal(expected)
    })
    it("should work with various characters", () =>{
        const actual = substitution("ccc bbb aaa", testAlphabet2)
        const expected = "$$$ ### @@@"
        expect(actual).to.equal(expected)
    })  
    it("should ignore capital letters", () =>{
        const actual = substitution("CCC bbb aaa", testAlphabet)
        const expected = "xxx yyy zzz"
        expect(actual).to.equal(expected)
    })    
})

describe("Decoding Messages", () =>{
    it("should correctly transpose a single word", () =>{
        const actual = substitution("xxx", testAlphabet, false)
        const expected = "ccc"
        expect(actual).to.equal(expected)
    })
    it("should correctly transpose a multiple words with spaces", () =>{
        const actual = substitution("xxx yyy zzz", testAlphabet, false)
        const expected = "ccc bbb aaa"
        expect(actual).to.equal(expected)
    })
    it("should work with various characters", () =>{
        const actual = substitution("$$$ ### @@@", testAlphabet2, false)
        const expected = "ccc bbb aaa"
        expect(actual).to.equal(expected)
    })    
})