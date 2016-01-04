var [isNumber,isString] = require('../../src/helpers/utils.js')
var expect = require('expect.js')

describe("utils", function(){
  describe("numbers", function(){
    it("test some basic constraints", function(){
      expect(isNumber('42')).to.be(true)
    })
  }),
  describe("strings", function(){
    it("test some basic constraints", function(){
      expect(isString("foo")).to.be(true)
    })
  })
})
