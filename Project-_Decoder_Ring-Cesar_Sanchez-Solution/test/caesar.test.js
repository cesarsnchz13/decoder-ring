// Write your tests here!
const expect = require("chai").expect;
const {caesar} = require("../src/caesar");
describe("return early if shift doesn't meet criteria", ()=> {
    it("should return false if shift amount is 0", () => {
        const actual = caesar("test", 0)
        expect(actual).to.be.false
    })
    it("should return false if shift amount greater than 25", () => {
        const actual = caesar("test", 0)
        expect(actual).to.be.false
    })
    it("should return false if shift amount is less than -25", () => {
        const actual = caesar("test", 0)
        expect(actual).to.be.false
    })
})

describe("encoding messages", () => {
    it("should shift words 3 letters to the right", () =>{
        const actual = caesar("test", 3)  
        expect(actual).to.equal("whvw") 
    })
    it("should encode the message regarless of capital letters", ()=>{
        const actual = caesar("TEST", 3)  
        expect(actual).to.equal("whvw")
    })
    it("should loop around alphabet if letters go past z",()=> {
        const actual = caesar("zzz", 3)  
        expect(actual).to.equal("ccc")
    })
    it("should loop around alphabet if letters go before a",()=> {
        const actual = caesar("aaa", -3)  
        expect(actual).to.equal("xxx")
    })
})

describe("decoding messages", () => {
    it("should shift words 3 letters to the left", () =>{
        const actual = caesar("ddd", 3, false)  
        expect(actual).to.equal("aaa") 
    })
    it("should encode the message regarless of capital letters", ()=>{
        const actual = caesar("DDD", 3, false)  
        expect(actual).to.equal("aaa")
    })
    it("should loop around alphabet if letters go past z",()=> {
        const actual = caesar("zzz", -3,false ) 
        expect(actual).to.equal("ccc")
    })
    it("should loop around alphabet if letters go before a",()=> {
        const actual = caesar("aaa", 3, false)  
        expect(actual).to.equal("xxx")
    })
})