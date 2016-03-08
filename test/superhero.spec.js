'use strict'

var chai = require('chai'),
	Hero = require('../src/superhero')

chai.should()

describe('superhero', function () {
	describe('the constructor', function () {
		var hero = new Hero ('spiderman', {webs:3, climb: 2})

		it('should initialize stamina to 10',()=> {
			hero.stamina.should.equal(10)
		})
	})
	describe('the seepStamina function', function () {
		var hero = new Hero ('spiderman', {webs:3, climb: 2})
		it('should decrease stamina by the given amount', function () {
			hero.seepStamina(2)
			hero.stamina.should.equal(8)
		})
	})
})