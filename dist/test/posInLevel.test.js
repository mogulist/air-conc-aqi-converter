"use strict";

var _chai = require("chai");

var _index = require("../index");

describe('미세빅 AQI Value -> Position', function () {
  var aqiName = 'misebig';
  it("".concat(aqiName, "\uC758 AQI Value 0\uC740 position 0.05 \uC774\uB2E4 "), function () {
    _chai.assert.equal((0, _index.getPosInLevel)(aqiName, 0), 0.05);
  });
  it("".concat(aqiName, "\uC758 AQI Value 25\uC740 position 0.5 \uC774\uB2E4 "), function () {
    _chai.assert.equal((0, _index.getPosInLevel)(aqiName, 25), 0.5);
  });
  it("".concat(aqiName, "\uC758 AQI Value 50\uC740 position 0.95 \uC774\uB2E4 "), function () {
    _chai.assert.equal((0, _index.getPosInLevel)(aqiName, 50), 0.95);
  });
  it("".concat(aqiName, "\uC758 AQI Value 51\uC740 position 0.05 \uC774\uB2E4 "), function () {
    _chai.assert.equal((0, _index.getPosInLevel)(aqiName, 51), 0.05);
  });
  it("".concat(aqiName, "\uC758 AQI Value 75 position 0.49 \uC774\uB2E4 "), function () {
    _chai.assert.equal((0, _index.getPosInLevel)(aqiName, 75), 0.49);
  });
  it("".concat(aqiName, "\uC758 AQI Value 100 position 0.95 \uC774\uB2E4 "), function () {
    _chai.assert.equal((0, _index.getPosInLevel)(aqiName, 100), 0.95);
  });
  it("".concat(aqiName, "\uC758 AQI Value 101 position 0.05 \uC774\uB2E4 "), function () {
    _chai.assert.equal((0, _index.getPosInLevel)(aqiName, 101), 0.05);
  });
  it("".concat(aqiName, "\uC758 AQI Value 150 position 0.95 \uC774\uB2E4 "), function () {
    _chai.assert.equal((0, _index.getPosInLevel)(aqiName, 150), 0.95);
  });
  it("".concat(aqiName, "\uC758 AQI Value 151 position 0.05 \uC774\uB2E4 "), function () {
    _chai.assert.equal((0, _index.getPosInLevel)(aqiName, 151), 0.05);
  });
  it("".concat(aqiName, "\uC758 AQI Value 200 position 0.95 \uC774\uB2E4 "), function () {
    _chai.assert.equal((0, _index.getPosInLevel)(aqiName, 200), 0.95);
  });
  it("".concat(aqiName, "\uC758 AQI Value 201 position 0.05 \uC774\uB2E4 "), function () {
    _chai.assert.equal((0, _index.getPosInLevel)(aqiName, 201), 0.05);
  });
  it("".concat(aqiName, "\uC758 AQI Value 300 position 0.95 \uC774\uB2E4 "), function () {
    _chai.assert.equal((0, _index.getPosInLevel)(aqiName, 300), 0.95);
  });
  it("".concat(aqiName, "\uC758 AQI Value 301 position 0.02 \uC774\uB2E4 "), function () {
    _chai.assert.equal((0, _index.getPosInLevel)(aqiName, 301), 0.02);
  });
  it("".concat(aqiName, "\uC758 AQI Value 400 position 0.23 \uC774\uB2E4 "), function () {
    _chai.assert.equal((0, _index.getPosInLevel)(aqiName, 400), 0.23);
  });
  it("".concat(aqiName, "\uC758 AQI Value 600 position 0.41 \uC774\uB2E4 "), function () {
    _chai.assert.equal((0, _index.getPosInLevel)(aqiName, 600), 0.41);
  });
  it("".concat(aqiName, "\uC758 AQI Value 1500 position 0.44 \uC774\uB2E4 "), function () {
    _chai.assert.equal((0, _index.getPosInLevel)(aqiName, 1500), 0.44);
  });
});
describe('US AQI Value -> Position in level', function () {
  var aqiName = 'us';
  it("".concat(aqiName, "\uC758 AQI Value 0\uC740 position 0.05 \uC774\uB2E4 "), function () {
    _chai.assert.equal((0, _index.getPosInLevel)(aqiName, 0), 0.05);
  });
  it("".concat(aqiName, "\uC758 AQI Value 25\uC740 position 0.5 \uC774\uB2E4 "), function () {
    _chai.assert.equal((0, _index.getPosInLevel)(aqiName, 25), 0.5);
  });
  it("".concat(aqiName, "\uC758 AQI Value 50\uC740 position 0.95 \uC774\uB2E4 "), function () {
    _chai.assert.equal((0, _index.getPosInLevel)(aqiName, 50), 0.95);
  });
  it("".concat(aqiName, "\uC758 AQI Value 51\uC740 position 0.05 \uC774\uB2E4 "), function () {
    _chai.assert.equal((0, _index.getPosInLevel)(aqiName, 51), 0.05);
  });
  it("".concat(aqiName, "\uC758 AQI Value 75 position 0.49 \uC774\uB2E4 "), function () {
    _chai.assert.equal((0, _index.getPosInLevel)(aqiName, 75), 0.49);
  });
  it("".concat(aqiName, "\uC758 AQI Value 100 position 0.95 \uC774\uB2E4 "), function () {
    _chai.assert.equal((0, _index.getPosInLevel)(aqiName, 100), 0.95);
  });
  it("".concat(aqiName, "\uC758 AQI Value 101 position 0.05 \uC774\uB2E4 "), function () {
    _chai.assert.equal((0, _index.getPosInLevel)(aqiName, 101), 0.05);
  });
  it("".concat(aqiName, "\uC758 AQI Value 150 position 0.95 \uC774\uB2E4 "), function () {
    _chai.assert.equal((0, _index.getPosInLevel)(aqiName, 150), 0.95);
  });
  it("".concat(aqiName, "\uC758 AQI Value 151 position 0.05 \uC774\uB2E4 "), function () {
    _chai.assert.equal((0, _index.getPosInLevel)(aqiName, 151), 0.05);
  });
  it("".concat(aqiName, "\uC758 AQI Value 200 position 0.95 \uC774\uB2E4 "), function () {
    _chai.assert.equal((0, _index.getPosInLevel)(aqiName, 200), 0.95);
  });
  it("".concat(aqiName, "\uC758 AQI Value 201 position 0.05 \uC774\uB2E4 "), function () {
    _chai.assert.equal((0, _index.getPosInLevel)(aqiName, 201), 0.05);
  });
  it("".concat(aqiName, "\uC758 AQI Value 300 position 0.95 \uC774\uB2E4 "), function () {
    _chai.assert.equal((0, _index.getPosInLevel)(aqiName, 300), 0.95);
  });
  it("".concat(aqiName, "\uC758 AQI Value 301 position 0.02 \uC774\uB2E4 "), function () {
    _chai.assert.equal((0, _index.getPosInLevel)(aqiName, 301), 0.02);
  });
  it("".concat(aqiName, "\uC758 AQI Value 400 position 0.23 \uC774\uB2E4 "), function () {
    _chai.assert.equal((0, _index.getPosInLevel)(aqiName, 400), 0.23);
  });
  it("".concat(aqiName, "\uC758 AQI Value 600 position 0.41 \uC774\uB2E4 "), function () {
    _chai.assert.equal((0, _index.getPosInLevel)(aqiName, 600), 0.41);
  });
  it("".concat(aqiName, "\uC758 AQI Value 1500 position 0.44 \uC774\uB2E4 "), function () {
    _chai.assert.equal((0, _index.getPosInLevel)(aqiName, 1500), 0.44);
  });
});
describe('KR AQI Value -> Position in level', function () {
  var aqiName = 'kr';
  it("".concat(aqiName, "\uC758 AQI Value 0\uC740 position 0.05 \uC774\uB2E4 "), function () {
    _chai.assert.equal((0, _index.getPosInLevel)(aqiName, 0), 0.05);
  });
  it("".concat(aqiName, "\uC758 AQI Value 25\uC740 position 0.5 \uC774\uB2E4 "), function () {
    _chai.assert.equal((0, _index.getPosInLevel)(aqiName, 25), 0.5);
  });
  it("".concat(aqiName, "\uC758 AQI Value 50\uC740 position 0.95 \uC774\uB2E4 "), function () {
    _chai.assert.equal((0, _index.getPosInLevel)(aqiName, 50), 0.95);
  });
  it("".concat(aqiName, "\uC758 AQI Value 51\uC740 position 0.05 \uC774\uB2E4 "), function () {
    _chai.assert.equal((0, _index.getPosInLevel)(aqiName, 51), 0.05);
  });
  it("".concat(aqiName, "\uC758 AQI Value 75 position 0.49 \uC774\uB2E4 "), function () {
    _chai.assert.equal((0, _index.getPosInLevel)(aqiName, 75), 0.49);
  });
  it("".concat(aqiName, "\uC758 AQI Value 100 position 0.95 \uC774\uB2E4 "), function () {
    _chai.assert.equal((0, _index.getPosInLevel)(aqiName, 100), 0.95);
  });
  it("".concat(aqiName, "\uC758 AQI Value 101 position 0.05 \uC774\uB2E4 "), function () {
    _chai.assert.equal((0, _index.getPosInLevel)(aqiName, 101), 0.05);
  });
  it("".concat(aqiName, "\uC758 AQI Value 150 position 0.95 \uC774\uB2E4 "), function () {
    _chai.assert.equal((0, _index.getPosInLevel)(aqiName, 150), 0.95);
  });
  it("".concat(aqiName, "\uC758 AQI Value 151 position 0.02 \uC774\uB2E4 "), function () {
    _chai.assert.equal((0, _index.getPosInLevel)(aqiName, 151), 0.02);
  });
  it("".concat(aqiName, "\uC758 AQI Value 200 position 0.13 \uC774\uB2E4 "), function () {
    _chai.assert.equal((0, _index.getPosInLevel)(aqiName, 200), 0.13);
  });
  it("".concat(aqiName, "\uC758 AQI Value 201 position 0.13 \uC774\uB2E4 "), function () {
    _chai.assert.equal((0, _index.getPosInLevel)(aqiName, 201), 0.13);
  });
  it("".concat(aqiName, "\uC758 AQI Value 300 position 0.3 \uC774\uB2E4 "), function () {
    _chai.assert.equal((0, _index.getPosInLevel)(aqiName, 300), 0.3);
  });
  it("".concat(aqiName, "\uC758 AQI Value 400 position 0.41 \uC774\uB2E4 "), function () {
    _chai.assert.equal((0, _index.getPosInLevel)(aqiName, 400), 0.41);
  });
  it("".concat(aqiName, "\uC758 AQI Value 600 position 0.51 \uC774\uB2E4 "), function () {
    _chai.assert.equal((0, _index.getPosInLevel)(aqiName, 600), 0.51);
  });
  it("".concat(aqiName, "\uC758 AQI Value 1500 position 0.58 \uC774\uB2E4 "), function () {
    _chai.assert.equal((0, _index.getPosInLevel)(aqiName, 1500), 0.58);
  });
});