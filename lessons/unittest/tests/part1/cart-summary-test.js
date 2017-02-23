// tests/part1/cart-summary-test.js
var chai = require('chai');
var expect = chai.expect; // we are using the "expect" style of Chai
var CartSummary = require('./../../src/part1/cart-summary');

describe('CartSummary', function() {
  it('getSubtotal() should return 0 if no items are passed in',
  function() {
    var cartSummary = new CartSummary([]);
    expect(cartSummary.getSubtotal()).to.equal(0);
  });
  it('getSubtotal() should return the sum of the price * quantity for all items',
  function() {
    var cartSummary = new CartSummary([{
      id: 1,
      quantity: 4,
      price: 50
    }, {
      id: 2,
      quantity: 2,
      price: 30
    }, {
      id: 3,
      quantity: 1,
      price: 40
    }]);
    expect(cartSummary.getSubtotal()).to.equal(300);
  });
});

var sinon = require('sinon');
var tax = require('./../../src/part1/tax');

describe('getTax()', function() {
  beforeEach(function() {
    sinon.stub(tax, 'calculate', function(subtotal, state, done) {
      setTimeout(function() {
        done({
          amount: 30
        });
      }, 0);
    });
  });

  afterEach(function() {
    tax.calculate.restore();
  });

  it('getTax() should execute the callback function with the tax amount',
  function(done) {  // done is provided by mocha for async testing.
    // The test will timeout and error if done is not invoked
    // within 2000 milliseconds.
    var cartSummary = new CartSummary([
    {
      id: 1,
      quantity: 4,
      price: 50
    },
    {
      id: 2,
      quantity: 2,
      price: 30
    },
    {
      id: 3,
      quantity: 1,
      price: 40
    }
    ]);
    cartSummary.getTax('NY', function(taxAmount) {
      expect(taxAmount).to.equal(30);
      expect(tax.calculate.getCall(0).args[0]).to.equal(300);
      expect(tax.calculate.getCall(0).args[1]).to.equal('NY');
      done();
    });
  });
});
