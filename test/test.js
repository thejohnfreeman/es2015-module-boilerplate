var should = require('chai').should()

describe('greeting', function() {
  it('should say hello world!', function() {
    var greeting = require('../src/index.js')
    greeting().should.equal('hello world!')
  })
})
