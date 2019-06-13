"use strict";

var _chai = require("chai");

var _index = require("../index");

// getLevelByAqi = (aqiName, aqiValue)
describe('미세빅 AQI Value -> 미세빅 Level', function () {
  var aqiName = 'misebig';
  it("".concat(aqiName, "\uC758 AQI Value 60\uC740 level 1 \uC774\uB2E4 "), function () {
    _chai.assert.equal((0, _index.getLevelByAqi)(aqiName, 60), 1);
  });
  it("".concat(aqiName, "\uC758 AQI Value 100\uC740 level 1 \uC774\uB2E4 "), function () {
    _chai.assert.equal((0, _index.getLevelByAqi)(aqiName, 100), 1);
  });
  it("".concat(aqiName, "\uC758 AQI Value 101\uC740 level 2 \uC774\uB2E4 "), function () {
    _chai.assert.equal((0, _index.getLevelByAqi)(aqiName, 101), 2);
  });
  it("".concat(aqiName, "\uC758 AQI Value 151\uC740 level 3 \uC774\uB2E4 "), function () {
    _chai.assert.equal((0, _index.getLevelByAqi)(aqiName, 151), 3);
  });
  it("".concat(aqiName, "\uC758 AQI Value 201\uC740 level 4 \uC774\uB2E4 "), function () {
    _chai.assert.equal((0, _index.getLevelByAqi)(aqiName, 201), 4);
  });
  it("".concat(aqiName, "\uC758 AQI Value 301\uC740 level 5 \uC774\uB2E4 "), function () {
    _chai.assert.equal((0, _index.getLevelByAqi)(aqiName, 301), 5);
  });
  it("".concat(aqiName, "\uC758 AQI Value 401\uC740 level 5 \uC774\uB2E4 "), function () {
    _chai.assert.equal((0, _index.getLevelByAqi)(aqiName, 401), 5);
  });
  it("".concat(aqiName, "\uC758 AQI Value 800\uC740 level 5 \uC774\uB2E4 "), function () {
    _chai.assert.equal((0, _index.getLevelByAqi)(aqiName, 800), 5);
  });
});
describe('US AQI Value -> US Level', function () {
  var aqiName = 'us';
  it("".concat(aqiName, "\uC758 AQI Value 60\uC740 level 1 \uC774\uB2E4 "), function () {
    _chai.assert.equal((0, _index.getLevelByAqi)(aqiName, 60), 1);
  });
  it("".concat(aqiName, "\uC758 AQI Value 100\uC740 level 1 \uC774\uB2E4 "), function () {
    _chai.assert.equal((0, _index.getLevelByAqi)(aqiName, 100), 1);
  });
  it("".concat(aqiName, "\uC758 AQI Value 101\uC740 level 2 \uC774\uB2E4 "), function () {
    _chai.assert.equal((0, _index.getLevelByAqi)(aqiName, 101), 2);
  });
  it("".concat(aqiName, "\uC758 AQI Value 151\uC740 level 3 \uC774\uB2E4 "), function () {
    _chai.assert.equal((0, _index.getLevelByAqi)(aqiName, 151), 3);
  });
  it("".concat(aqiName, "\uC758 AQI Value 201\uC740 level 4 \uC774\uB2E4 "), function () {
    _chai.assert.equal((0, _index.getLevelByAqi)(aqiName, 201), 4);
  });
  it("".concat(aqiName, "\uC758 AQI Value 301\uC740 level 5 \uC774\uB2E4 "), function () {
    _chai.assert.equal((0, _index.getLevelByAqi)(aqiName, 301), 5);
  });
  it("".concat(aqiName, "\uC758 AQI Value 401\uC740 level 5 \uC774\uB2E4 "), function () {
    _chai.assert.equal((0, _index.getLevelByAqi)(aqiName, 401), 5);
  });
  it("".concat(aqiName, "\uC758 AQI Value 800\uC740 level 5 \uC774\uB2E4 "), function () {
    _chai.assert.equal((0, _index.getLevelByAqi)(aqiName, 800), 5);
  });
});
describe('KR AQI Value -> KR AQI Level', function () {
  var aqiName = 'kr';
  it("".concat(aqiName, "\uC758 AQI Value 60\uC740 level 1 \uC774\uB2E4 "), function () {
    _chai.assert.equal((0, _index.getLevelByAqi)(aqiName, 60), 1);
  });
  it("".concat(aqiName, "\uC758 AQI Value 100\uC740 level 1 \uC774\uB2E4 "), function () {
    _chai.assert.equal((0, _index.getLevelByAqi)(aqiName, 100), 1);
  });
  it("".concat(aqiName, "\uC758 AQI Value 101\uC740 level 2 \uC774\uB2E4 "), function () {
    _chai.assert.equal((0, _index.getLevelByAqi)(aqiName, 101), 2);
  });
  it("".concat(aqiName, "\uC758 AQI Value 151\uC740 level 3 \uC774\uB2E4 "), function () {
    _chai.assert.equal((0, _index.getLevelByAqi)(aqiName, 151), 3);
  });
  it("".concat(aqiName, "\uC758 AQI Value 201\uC740 level 3 \uC774\uB2E4 "), function () {
    _chai.assert.equal((0, _index.getLevelByAqi)(aqiName, 201), 3);
  });
  it("".concat(aqiName, "\uC758 AQI Value 301\uC740 level 3 \uC774\uB2E4 "), function () {
    _chai.assert.equal((0, _index.getLevelByAqi)(aqiName, 301), 3);
  });
  it("".concat(aqiName, "\uC758 AQI Value 401\uC740 level 3 \uC774\uB2E4 "), function () {
    _chai.assert.equal((0, _index.getLevelByAqi)(aqiName, 401), 3);
  });
  it("".concat(aqiName, "\uC758 AQI Value 800\uC740 level 3 \uC774\uB2E4 "), function () {
    _chai.assert.equal((0, _index.getLevelByAqi)(aqiName, 800), 3);
  });
});