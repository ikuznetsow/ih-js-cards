describe("Function to", function() {
 
  it("changing the object properties", function() { 
    var x = {};
    function SomethingElse(arg) {
      var y = function(){
        arg.new_property = 10;
      }
      y();
    };

    SomethingElse(x);
    expect(x.new_property).toEqual(10);
  });

  it("what if we send boolean to function", function() { 
    var x = true;
    function SomethingElse(arg) {
      var y = function(){
        x = true;
      }
      x = false;
    };

    SomethingElse(x);
    expect(x).toEqual(false);
  });
  
  it("what if we send integer to function", function() { 
    var x = 100;
    function SomethingElse(arg) {
      var y = function(){
        x = 5;
      }
      y();
    };
    SomethingElse(x);
    expect(x).toEqual(5);
  });

});

    // var actualValue = AverageArray([1, 2, 3, 7, 4, 1]);
