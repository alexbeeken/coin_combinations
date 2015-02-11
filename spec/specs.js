describe("#coinCombinations",function(){
  it('returns four pennies',function(){
    expect(coinCombinations(0.04)).to.equal("4 pennies");
  });

  it('returns one nickel', function() {
    expect(coinCombinations(0.05)).to.equal("1 nickels");
  });

  it('returns one dime', function(){
    expect(coinCombinations(0.10)).to.equal("1 dimes");
  });

  it('returns one quarter', function(){
    expect(coinCombinations(0.25)).to.equal("1 quarters");
  });

  it('returns one nickel and one penny', function(){
    expect(coinCombinations(0.06)).to.equal("1 nickels 1 pennies");
  });

  it('returns one dime, one nickel and one penny', function() {
    expect(coinCombinations(0.16)).to.equal("1 dimes 1 nickels 1 pennies");
  });

  it('returns one quarter, one dime, one nickel and one penny',function(){
    expect(coinCombinations(0.41)).to.equal("1 quarters 1 dimes 1 nickels 1 pennies");
  });

  it('returns 2 quarters, one dimes, one nickel and one penny', function() {
    expect(coinCombinations(0.66)).to.equal("2 quarters 1 dimes 1 nickels 1 pennies");
  });
  
});
