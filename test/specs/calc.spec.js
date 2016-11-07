(function() {
    'use strict';

window.calc = window.calc || {};

    // TODO: Your tests go here!

    var expect = chai.expect;

  describe("testing sum function", function() {
      // this is assertion
      it("should know that one equals one", function(){
          expect(1).to.equal(1);
      });

      // Good Argument
      it("should know that sum is function", function(){
        expect(window.calc.sum).to.be.a("function");
      });

      // Good Argument
      it("Should add numbers in array and provide me sum of all numbers in array", function(){
        var result = window.calc.sum([2,4,3]);
        expect(result).to.equal(9);
      });

      //No Argument
      it("Should give message to enter array as an argument", function(){
        var result = window.calc.sum("string");
        expect(result).to.equal([]);
      });
  });




  describe("testing factorial function", function(){

      it("Should provide factorial of a number", function(){



      });












  });
})();
