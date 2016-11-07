(function() {
    'use strict';

window.calc = window.calc || {};

    // TODO: Your tests go here!

    var expect = chai.expect;

  describe("testing sum function", function() {
      // this is assertion
      // it("should know that one equals one", function(){
      //     expect(1).to.equal(1);
      // });

      // // Good Argument
      // it("should know that sum is function", function(){
      //   expect(window.calc.sum).to.be.a("function");
      // });


      it("Should add numbers in array and provide me sum of all numbers in array", function(){
        var result = window.calc.sum([2,4,3]);
        expect(result).to.equal(9);
      });


      it("Should return string", function(){
        var result = window.calc.sum("string");
        expect(result).to.equal("string");
      });


      it("Should return zero if no arguments are given", function(){
        var result = window.calc.sum();
        expect(result).to.equal(0);
      });


  });




  describe("testing factorial function", function(){

      it("Should return 120 if the argument is 5", function(){
        var resultTwo = window.calc.factorial(5);
        expect(resultTwo).to.equal(120);


      });

  });


///End of iife
})();
