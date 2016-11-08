(function() {
    'use strict';

window.calc = window.calc || {};

    // TODO: Your tests go here!

    var expect = chai.expect;


describe("Testing Calculator", function () {


  describe("testing sum function", function() {


      it("Should add numbers in array and provide sum of all numbers in array", function(){
        var result = window.calc.sum([2,4,3]);
        expect(result).to.equal(9);
      });


      it("Should return string, if string is provided as an argument", function(){
        var result = window.calc.sum("string");
        expect(result).to.equal("string");
      });


      it("Should handel no arguments", function(){
        var result = window.calc.sum();
        expect(result).to.equal(0);
      });
  });




  describe("testing factorial function", function(){


      it("Should return 120 if the argument is 5", function(){
        var result = window.calc.factorial(5);
        expect(result).to.equal(120);
      });

      it("Should handel any string as an argument", function(){
        var result = window.calc.factorial("Apples");
        expect(result).to.equal(0);
      });

      it("Should handel no argument", function(){
        var result = window.calc.factorial();
        expect(result).to.equal(0);
      });

  });


});
///End of iife
})();
