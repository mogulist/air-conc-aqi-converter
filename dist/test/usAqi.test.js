"use strict";

var _chai = require("chai");

var _index = require("../index");

var _aqiSpecs = require("../aqiSpecs");

var aqiName = 'us';
describe("".concat(aqiName, ": PM2.5 \uB18D\uB3C4 -> US AQI \uD14C\uC2A4\uD2B8"), function () {
  it('농도 12 는 AQI 50이다.', function () {
    _chai.assert.equal((0, _index.getConcFromAqi)(aqiName, 'pm25', 12), 50);
  });
  it('농도 35.4 는 AQI 100이다.', function () {
    _chai.assert.equal((0, _index.getConcFromAqi)(aqiName, 'pm25', 35.4), 100);
  });
  it('농도 55.4 는 AQI 150이다.', function () {
    _chai.assert.equal((0, _index.getConcFromAqi)(aqiName, 'pm25', 55.4), 150);
  });
  it('농도 150.4 는 AQI 200이다.', function () {
    _chai.assert.equal((0, _index.getConcFromAqi)(aqiName, 'pm25', 150.4), 200);
  });
  it('농도 250.4 는 AQI 300이다.', function () {
    _chai.assert.equal((0, _index.getConcFromAqi)(aqiName, 'pm25', 250.4), 300);
  });
  it('농도 350.4 는 AQI 400이다.', function () {
    _chai.assert.equal((0, _index.getConcFromAqi)(aqiName, 'pm25', 350.4), 400);
  });
  it('농도 500 는 AQI 500이다.', function () {
    _chai.assert.equal((0, _index.getConcFromAqi)(aqiName, 'pm25', 500), 500);
  });
  it('농도 1000 는 AQI 832이다.', function () {
    _chai.assert.equal((0, _index.getConcFromAqi)(aqiName, 'pm25', 1000), 832);
  });
  it('농도 1260 는 AQI 1005이다.', function () {
    _chai.assert.equal((0, _index.getConcFromAqi)(aqiName, 'pm25', 1260), 1005);
  });
});
describe("".concat(aqiName, ": PM10 \uB18D\uB3C4 -> US AQI \uD14C\uC2A4\uD2B8"), function () {
  it('농도 54 는 AQI 50이다.', function () {
    _chai.assert.equal((0, _index.getConcFromAqi)(aqiName, 'pm10', 54), 50);
  });
  it('농도 154 는 AQI 100이다.', function () {
    _chai.assert.equal((0, _index.getConcFromAqi)(aqiName, 'pm10', 154), 100);
  });
  it('농도 254 는 AQI 150이다.', function () {
    _chai.assert.equal((0, _index.getConcFromAqi)(aqiName, 'pm10', 254), 150);
  });
  it('농도 354 는 AQI 200이다.', function () {
    _chai.assert.equal((0, _index.getConcFromAqi)(aqiName, 'pm10', 354), 200);
  });
  it('농도 424 는 AQI 300이다.', function () {
    _chai.assert.equal((0, _index.getConcFromAqi)(aqiName, 'pm10', 424), 300);
  });
  it('농도 504 는 AQI 400이다.', function () {
    _chai.assert.equal((0, _index.getConcFromAqi)(aqiName, 'pm10', 504), 400);
  });
  it('농도 604 는 AQI 500이다.', function () {
    _chai.assert.equal((0, _index.getConcFromAqi)(aqiName, 'pm10', 604), 500);
  });
  it('농도 999 는 AQI 895 이다.', function () {
    _chai.assert.equal((0, _index.getConcFromAqi)(aqiName, 'pm10', 999), 895);
  });
  it('농도 1500 는 AQI 1396이다.', function () {
    _chai.assert.equal((0, _index.getConcFromAqi)(aqiName, 'pm10', 1500), 1396);
  });
});
describe("".concat(aqiName, ": NO2 \uB18D\uB3C4 -> US AQI \uD14C\uC2A4\uD2B8"), function () {
  var pollutant = 'no2';
  var concEndPoints = _aqiSpecs.aqiSpecs[aqiName][pollutant + 'Data'].concEndPoints;
  var indexBp = _aqiSpecs.aqiSpecs[aqiName].indexBp;
  var i = 0;
  it("\uB18D\uB3C4 ".concat(concEndPoints[i], " \uB294 AQI ").concat(indexBp[i], " \uC774\uB2E4."), function () {
    _chai.assert.equal((0, _index.getConcFromAqi)(aqiName, pollutant, concEndPoints[i]), indexBp[i]);
  });
  i++;
  it("\uB18D\uB3C4 ".concat(concEndPoints[i], " \uB294 AQI ").concat(indexBp[i], " \uC774\uB2E4."), function () {
    _chai.assert.equal((0, _index.getConcFromAqi)(aqiName, pollutant, concEndPoints[i]), indexBp[i]);
  });
  i++;
  it("\uB18D\uB3C4 ".concat(concEndPoints[i], " \uB294 AQI ").concat(indexBp[i], " \uC774\uB2E4."), function () {
    _chai.assert.equal((0, _index.getConcFromAqi)(aqiName, pollutant, concEndPoints[i]), indexBp[i]);
  });
  i++;
  it("\uB18D\uB3C4 ".concat(concEndPoints[i], " \uB294 AQI ").concat(indexBp[i], " \uC774\uB2E4."), function () {
    _chai.assert.equal((0, _index.getConcFromAqi)(aqiName, pollutant, concEndPoints[i]), indexBp[i]);
  });
  i++;
  it("\uB18D\uB3C4 ".concat(concEndPoints[i], " \uB294 AQI ").concat(indexBp[i], " \uC774\uB2E4."), function () {
    _chai.assert.equal((0, _index.getConcFromAqi)(aqiName, pollutant, concEndPoints[i]), indexBp[i]);
  });
  i++;
  it("\uB18D\uB3C4 ".concat(concEndPoints[i], " \uB294 AQI ").concat(indexBp[i], " \uC774\uB2E4."), function () {
    _chai.assert.equal((0, _index.getConcFromAqi)(aqiName, pollutant, concEndPoints[i]), indexBp[i]);
  });
  it("\uB18D\uB3C4 0.085 \uB294 AQI 84 \uC774\uB2E4.", function () {
    _chai.assert.equal((0, _index.getConcFromAqi)(aqiName, pollutant, 0.085), 84);
  });
  it("\uB18D\uB3C4 0.234 \uB294 AQI 126 \uC774\uB2E4.", function () {
    _chai.assert.equal((0, _index.getConcFromAqi)(aqiName, pollutant, 0.234), 126);
  });
  it("\uB18D\uB3C4 1.739 \uB294 AQI 423 \uC774\uB2E4.", function () {
    _chai.assert.equal((0, _index.getConcFromAqi)(aqiName, pollutant, 1.739), 423);
  });
  it("\uB18D\uB3C4 2.049 \uB294 AQI 500 \uC774\uB2E4.", function () {
    _chai.assert.equal((0, _index.getConcFromAqi)(aqiName, pollutant, 2.049), 500);
  });
  it('농도 3 은 AQI 739 이다.', function () {
    _chai.assert.equal((0, _index.getConcFromAqi)(aqiName, pollutant, 3), 739);
  });
  it('농도 4.123 은 AQI 1020 이다.', function () {
    _chai.assert.equal((0, _index.getConcFromAqi)(aqiName, pollutant, 4.123), 1020);
  });
});
describe("".concat(aqiName, ": O3 \uB18D\uB3C4 -> US AQI \uD14C\uC2A4\uD2B8"), function () {
  var i = 0;
  var indexBp = _aqiSpecs.aqiSpecs[aqiName].indexBp;
  var pollutant = 'o3';
  var concEndPoints = _aqiSpecs.aqiSpecs[aqiName][pollutant + 'Data'].concEndPoints;
  it("\uB18D\uB3C4 ".concat(concEndPoints[i], " \uB294 AQI ").concat(indexBp[i], " \uC774\uB2E4."), function () {
    _chai.assert.equal((0, _index.getConcFromAqi)(aqiName, pollutant, concEndPoints[i]), indexBp[i]);
  });
  i++;
  it("\uB18D\uB3C4 ".concat(concEndPoints[i], " \uB294 AQI ").concat(indexBp[i], " \uC774\uB2E4."), function () {
    _chai.assert.equal((0, _index.getConcFromAqi)(aqiName, pollutant, concEndPoints[i]), indexBp[i]);
  });
  i++;
  it("\uB18D\uB3C4 ".concat(concEndPoints[i], " \uB294 AQI ").concat(indexBp[i], " \uC774\uB2E4."), function () {
    _chai.assert.equal((0, _index.getConcFromAqi)(aqiName, pollutant, concEndPoints[i]), indexBp[i]);
  });
  i++;
  it("\uB18D\uB3C4 ".concat(concEndPoints[i], " \uB294 AQI ").concat(indexBp[i], " \uC774\uB2E4."), function () {
    _chai.assert.equal((0, _index.getConcFromAqi)(aqiName, pollutant, concEndPoints[i]), indexBp[i]);
  });
  i++;
  it("\uB18D\uB3C4 ".concat(concEndPoints[i], " \uB294 AQI ").concat(indexBp[i], " \uC774\uB2E4."), function () {
    _chai.assert.equal((0, _index.getConcFromAqi)(aqiName, pollutant, concEndPoints[i]), indexBp[i]);
  });
  i++;
  it("\uB18D\uB3C4 ".concat(concEndPoints[i], " \uB294 AQI ").concat(indexBp[i], " \uC774\uB2E4."), function () {
    _chai.assert.equal((0, _index.getConcFromAqi)(aqiName, pollutant, concEndPoints[i]), indexBp[i]);
  });
  it("\uB18D\uB3C4 0.083 \uB294 AQI 500 \uC774\uB2E4.", function () {
    _chai.assert.equal((0, _index.getConcFromAqi)(aqiName, pollutant, 0.083), 67);
  });
  it("\uB18D\uB3C4 0.193 \uB294 AQI 186 \uC774\uB2E4.", function () {
    _chai.assert.equal((0, _index.getConcFromAqi)(aqiName, pollutant, 0.193), 186);
  });
  it("\uB18D\uB3C4 0.604 \uB294 AQI 500 \uC774\uB2E4.", function () {
    _chai.assert.equal((0, _index.getConcFromAqi)(aqiName, pollutant, 0.604), 500);
  });
  it('농도 0.999 은 AQI 899 이다.', function () {
    _chai.assert.equal((0, _index.getConcFromAqi)(aqiName, pollutant, 0.999), 899);
  });
  it('농도 1.5 은 AQI 1405 이다.', function () {
    _chai.assert.equal((0, _index.getConcFromAqi)(aqiName, pollutant, 1.5), 1405);
  });
});
describe("".concat(aqiName, ": SO2 \uB18D\uB3C4 -> US AQI \uD14C\uC2A4\uD2B8"), function () {
  var pollutant = 'so2';
  var concEndPoints = _aqiSpecs.aqiSpecs[aqiName][pollutant + 'Data'].concEndPoints;
  var indexBp = _aqiSpecs.aqiSpecs[aqiName].indexBp;
  var i = 0;
  it("\uB18D\uB3C4 ".concat(concEndPoints[i], " \uB294 AQI ").concat(indexBp[i], " \uC774\uB2E4."), function () {
    _chai.assert.equal((0, _index.getConcFromAqi)(aqiName, pollutant, concEndPoints[i]), indexBp[i]);
  });
  i++;
  it("\uB18D\uB3C4 ".concat(concEndPoints[i], " \uB294 AQI ").concat(indexBp[i], " \uC774\uB2E4."), function () {
    _chai.assert.equal((0, _index.getConcFromAqi)(aqiName, pollutant, concEndPoints[i]), indexBp[i]);
  });
  i++;
  it("\uB18D\uB3C4 ".concat(concEndPoints[i], " \uB294 AQI ").concat(indexBp[i], " \uC774\uB2E4."), function () {
    _chai.assert.equal((0, _index.getConcFromAqi)(aqiName, pollutant, concEndPoints[i]), indexBp[i]);
  });
  i++;
  it("\uB18D\uB3C4 ".concat(concEndPoints[i], " \uB294 AQI ").concat(indexBp[i], " \uC774\uB2E4."), function () {
    _chai.assert.equal((0, _index.getConcFromAqi)(aqiName, pollutant, concEndPoints[i]), indexBp[i]);
  });
  i++;
  it("\uB18D\uB3C4 ".concat(concEndPoints[i], " \uB294 AQI ").concat(indexBp[i], " \uC774\uB2E4."), function () {
    _chai.assert.equal((0, _index.getConcFromAqi)(aqiName, pollutant, concEndPoints[i]), indexBp[i]);
  });
  i++;
  it("\uB18D\uB3C4 ".concat(concEndPoints[i], " \uB294 AQI ").concat(indexBp[i], " \uC774\uB2E4."), function () {
    _chai.assert.equal((0, _index.getConcFromAqi)(aqiName, pollutant, concEndPoints[i]), indexBp[i]);
  });
  it("\uB18D\uB3C4 1.004 \uB294 AQI 500 \uC774\uB2E4.", function () {
    _chai.assert.equal((0, _index.getConcFromAqi)(aqiName, pollutant, 1.004), 500);
  });
  it('농도 1.5 은 AQI 749 이다.', function () {
    _chai.assert.equal((0, _index.getConcFromAqi)(aqiName, pollutant, 1.5), 749);
  });
  it('농도 1.999 은 AQI 1000 이다.', function () {
    _chai.assert.equal((0, _index.getConcFromAqi)(aqiName, pollutant, 1.999), 1000);
  });
});
describe("".concat(aqiName, ": CO \uB18D\uB3C4 -> US AQI \uD14C\uC2A4\uD2B8"), function () {
  var pollutant = 'co';
  var concEndPoints = _aqiSpecs.aqiSpecs[aqiName][pollutant + 'Data'].concEndPoints;
  var indexBp = _aqiSpecs.aqiSpecs[aqiName].indexBp;
  var i = 0;
  it("\uB18D\uB3C4 ".concat(concEndPoints[i], " \uB294 AQI ").concat(indexBp[i], " \uC774\uB2E4."), function () {
    _chai.assert.equal((0, _index.getConcFromAqi)(aqiName, pollutant, concEndPoints[i]), indexBp[i]);
  });
  i++;
  it("\uB18D\uB3C4 ".concat(concEndPoints[i], " \uB294 AQI ").concat(indexBp[i], " \uC774\uB2E4."), function () {
    _chai.assert.equal((0, _index.getConcFromAqi)(aqiName, pollutant, concEndPoints[i]), indexBp[i]);
  });
  i++;
  it("\uB18D\uB3C4 ".concat(concEndPoints[i], " \uB294 AQI ").concat(indexBp[i], " \uC774\uB2E4."), function () {
    _chai.assert.equal((0, _index.getConcFromAqi)(aqiName, pollutant, concEndPoints[i]), indexBp[i]);
  });
  i++;
  it("\uB18D\uB3C4 ".concat(concEndPoints[i], " \uB294 AQI ").concat(indexBp[i], " \uC774\uB2E4."), function () {
    _chai.assert.equal((0, _index.getConcFromAqi)(aqiName, pollutant, concEndPoints[i]), indexBp[i]);
  });
  i++;
  it("\uB18D\uB3C4 ".concat(concEndPoints[i], " \uB294 AQI ").concat(indexBp[i], " \uC774\uB2E4."), function () {
    _chai.assert.equal((0, _index.getConcFromAqi)(aqiName, pollutant, concEndPoints[i]), indexBp[i]);
  });
  i++;
  it("\uB18D\uB3C4 ".concat(concEndPoints[i], " \uB294 AQI ").concat(indexBp[i], " \uC774\uB2E4."), function () {
    _chai.assert.equal((0, _index.getConcFromAqi)(aqiName, pollutant, concEndPoints[i]), indexBp[i]);
  });
  it("\uB18D\uB3C4 50.4 \uB294 AQI 500 \uC774\uB2E4.", function () {
    _chai.assert.equal((0, _index.getConcFromAqi)(aqiName, pollutant, 50.4), 500);
  });
  it('농도 80 은 AQI 799 이다.', function () {
    _chai.assert.equal((0, _index.getConcFromAqi)(aqiName, pollutant, 80), 799);
  });
  it('농도 90.9 은 AQI 1000 이다.', function () {
    _chai.assert.equal((0, _index.getConcFromAqi)(aqiName, pollutant, 99.9), 1000);
  });
});
describe("".concat(aqiName, ": \uC9C8\uBABB\uB41C \uD30C\uB77C\uBBF8\uD130 \uAC80\uC99D\uD558\uAE30"), function () {
  it("\uCCAB\uBC88\uC9F8 \uD30C\uB77C\uBBF8\uD130 aqiName 'mise'\uB97C \uC8FC\uBA74 -1 \uC744 \uB9AC\uD130\uD55C\uB2E4.", function () {
    _chai.assert.equal((0, _index.getConcFromAqi)('mise', 'pm25', 100), -1);
  });
  it("\uB450\uBC88\uC9F8 \uD30C\uB77C\uBBF8\uD130 \uC624\uC5FC\uC6D0 \uC774\uB984\uC73C\uB85C 'pm'\uC744 \uC8FC\uBA74 -1 \uC744 \uB9AC\uD130\uD55C\uB2E4.", function () {
    _chai.assert.equal((0, _index.getConcFromAqi)(aqiName, 'pm', 100), -1);
  });
  it("\uC138\uBC88\uC9F8 \uD30C\uB77C\uBBF8\uD130\uAC00 -1 \uC774\uBA74 -1 \uC744 \uB9AC\uD130\uD55C\uB2E4.", function () {
    _chai.assert.equal((0, _index.getConcFromAqi)(aqiName, 'pm25', -1), -1);
  });
});