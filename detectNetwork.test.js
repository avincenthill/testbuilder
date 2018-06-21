var expect = chai.expect;
var should = chai.should();
var assert = chai.assert;

describe("Diner's Club", function() {
  it("has a prefix of 38 and a length of 14", function() {
    if (detectNetwork("38345678901234") !== "Diner's Club") {
      throw new Error("Test failed");
    }
  });

  it("has a prefix of 39 and a length of 14", function() {
    if (detectNetwork("39345678901234") !== "Diner's Club") {
      throw new Error("Test failed");
    }
  });
});

describe("American Express", function() {
  var assert = function(isTrue) {
    if (isTrue) {
      return true;
    } else {
      throw new Error("Test failed");
    }
  };

  it("has a prefix of 34 and a length of 15", function() {
    assert(detectNetwork("343456789012345") === "American Express");
  });

  it("has a prefix of 37 and a length of 15", function() {
    assert(detectNetwork("373456789012345") === "American Express");
  });
});

describe("Visa", function() {
  it("has a prefix of 4 and a length of 13", function() {
    assert(detectNetwork("4123456789012") === "Visa");
  });

  it("has a prefix of 4 and a length of 16", function() {
    assert(detectNetwork("4123456789012345") === "Visa");
  });

  it("has a prefix of 4 and a length of 19", function() {
    assert(detectNetwork("4123456789012345678") === "Visa");
  });
});

describe("MasterCard", function() {
  it("has a prefix of 51 and a length of 16", function() {
    expect(detectNetwork("5112345678901234")).to.equal("MasterCard");
  });

  it("has a prefix of 52 and a length of 16", function() {
    expect(detectNetwork("5212345678901234")).to.equal("MasterCard");
  });

  it("has a prefix of 53 and a length of 16", function() {
    expect(detectNetwork("5312345678901234")).to.equal("MasterCard");
  });

  it("has a prefix of 54 and a length of 16", function() {
    detectNetwork("5412345678901234").should.equal("MasterCard");
  });

  it("has a prefix of 55 and a length of 16", function() {
    detectNetwork("5512345678901234").should.equal("MasterCard");
  });
});

describe("Discover", function() {
  it("has a prefix of 6011 and a length of 16", function() {
    detectNetwork("6011567890123456").should.equal("Discover");
  });

  it("has a prefix of 6011 and a length of 19", function() {
    detectNetwork("6011567890123456789").should.equal("Discover");
  });

  it("has a prefix of 65 and a length of 16", function() {
    detectNetwork("6511567890123456").should.equal("Discover");
  });

  it("has a prefix of 65 and a length of 19", function() {
    detectNetwork("6511567890123456789").should.equal("Discover");
  });

  for (var p = 644; p <= 649; p++) {
    (function(p) {
      it("has a prefix of " + p + " and a length of 16", function() {
        detectNetwork(p + "9".repeat(16 - 3)).should.equal("Discover");
      });
      it("has a prefix of 5020 and a length of 19", function() {
        detectNetwork(p + "9".repeat(19 - 3)).should.equal("Discover");
      });
    })(p);
  }
});

describe("Maestro", function() {
  for (var length = 12; length <= 19; length++) {
    (function(length) {
      it("has a prefix of 5018 and a length of " + length, function() {
        detectNetwork("5018" + "9".repeat(length - 4)).should.equal("Maestro");
      });
      it("has a prefix of 5020 and a length of " + length, function() {
        detectNetwork("5020" + "9".repeat(length - 4)).should.equal("Maestro");
      });
      it("has a prefix of 5038 and a length of " + length, function() {
        detectNetwork("5038" + "9".repeat(length - 4)).should.equal("Maestro");
      });
      it("has a prefix of 6304 and a length of " + length, function() {
        detectNetwork("6304" + "9".repeat(length - 4)).should.equal("Maestro");
      });
    })(length);
  }
});

describe("should support China UnionPay");
describe("should support Switch");
