"use strict";

var _chai = require("chai");

var _index = require("../index");

var _aqiSpecs = require("../aqiSpecs");

var aqiName = 'kr';
describe('PM2.5 농도 -> KR AQI 테스트', function () {
  var pollutant = 'pm25';
  var concEndPoints = _aqiSpecs.aqiSpecs[aqiName][pollutant + 'Data'].concEndPoints;
  var indexBp = _aqiSpecs.aqiSpecs[aqiName].indexBp;
  var i = 0;
  it("\uB18D\uB3C4 ".concat(concEndPoints[i], " \uB294 AQI ").concat(indexBp[i], " \uC774\uB2E4."), function () {
    _chai.assert.equal((0, _index.getConcFromAqi)(aqiName, 'pm25', concEndPoints[i]), indexBp[i]);
  });
  i++;
  it("\uB18D\uB3C4 ".concat(concEndPoints[i], " \uB294 AQI ").concat(indexBp[i], " \uC774\uB2E4."), function () {
    _chai.assert.equal((0, _index.getConcFromAqi)(aqiName, 'pm25', concEndPoints[i]), indexBp[i]);
  });
  i++;
  it("\uB18D\uB3C4 ".concat(concEndPoints[i], " \uB294 AQI ").concat(indexBp[i], " \uC774\uB2E4."), function () {
    _chai.assert.equal((0, _index.getConcFromAqi)(aqiName, 'pm25', concEndPoints[i]), indexBp[i]);
  });
  i++;
  it("\uB18D\uB3C4 ".concat(concEndPoints[i], " \uB294 AQI ").concat(indexBp[i], " \uC774\uB2E4."), function () {
    _chai.assert.equal((0, _index.getConcFromAqi)(aqiName, 'pm25', concEndPoints[i]), indexBp[i]);
  });
  it('농도 100 는 AQI 171 이다.', function () {
    _chai.assert.equal((0, _index.getConcFromAqi)(aqiName, 'pm25', 100), 171);
  });
  it('농도 300 는 AQI 336 이다.', function () {
    _chai.assert.equal((0, _index.getConcFromAqi)(aqiName, 'pm25', 300), 336);
  });
  it('농도 400 는 AQI 418 이다.', function () {
    _chai.assert.equal((0, _index.getConcFromAqi)(aqiName, 'pm25', 400), 418);
  });
  it('농도 499 는 AQI 499 이다.', function () {
    _chai.assert.equal((0, _index.getConcFromAqi)(aqiName, 'pm25', 499), 499);
  });
  it('농도 501 는 AQI 501 이다.', function () {
    _chai.assert.equal((0, _index.getConcFromAqi)(aqiName, 'pm25', 501), 501);
  });
  it('농도 1260 는 AQI 1126 이다.', function () {
    _chai.assert.equal((0, _index.getConcFromAqi)(aqiName, 'pm25', 1260), 1126);
  });
});
describe('PM10 농도 -> KR AQI 테스트', function () {
  var pollutant = 'pm10';
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
  it('농도 55 는 AQI 75 이다.', function () {
    _chai.assert.equal((0, _index.getConcFromAqi)(aqiName, pollutant, 55), 75);
  });
  it('농도 250 는 AQI 228 이다.', function () {
    _chai.assert.equal((0, _index.getConcFromAqi)(aqiName, pollutant, 250), 228);
  });
  it('농도 450 는 AQI 383 이다.', function () {
    _chai.assert.equal((0, _index.getConcFromAqi)(aqiName, pollutant, 450), 383);
  });
  it('농도 599 는 AQI 499 이다.', function () {
    _chai.assert.equal((0, _index.getConcFromAqi)(aqiName, pollutant, 599), 499);
  });
  it('농도 601 는 AQI 501 이다.', function () {
    _chai.assert.equal((0, _index.getConcFromAqi)(aqiName, pollutant, 601), 501);
  });
  it('농도 504 는 AQI 425 이다.', function () {
    _chai.assert.equal((0, _index.getConcFromAqi)(aqiName, pollutant, 504), 425);
  });
  it('농도 999 는 AQI 810 이다.', function () {
    _chai.assert.equal((0, _index.getConcFromAqi)(aqiName, pollutant, 999), 810);
  });
  it('농도 1500 는 AQI 1200 이다.', function () {
    _chai.assert.equal((0, _index.getConcFromAqi)(aqiName, pollutant, 1500), 1200);
  });
});
describe('NO2 농도 -> KR AQI 테스트', function () {
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
  it("\uB18D\uB3C4 1.99 \uB294 AQI 498 \uC774\uB2E4.", function () {
    _chai.assert.equal((0, _index.getConcFromAqi)(aqiName, pollutant, 1.99), 498);
  });
  it("\uB18D\uB3C4 2.01 \uB294 AQI 502 \uC774\uB2E4.", function () {
    _chai.assert.equal((0, _index.getConcFromAqi)(aqiName, pollutant, 2.01), 502);
  });
  it('농도 3 은 AQI 694 이다.', function () {
    _chai.assert.equal((0, _index.getConcFromAqi)(aqiName, pollutant, 3), 694);
  });
  it('농도 4.123 은 AQI 912 이다.', function () {
    _chai.assert.equal((0, _index.getConcFromAqi)(aqiName, pollutant, 4.123), 912);
  });
});
describe('O3 농도 -> KR AQI 테스트', function () {
  var pollutant = 'o3';
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
  it("\uB18D\uB3C4 0.59 \uB294 AQI 492 \uC774\uB2E4.", function () {
    _chai.assert.equal((0, _index.getConcFromAqi)(aqiName, pollutant, 0.59), 492);
  });
  it("\uB18D\uB3C4 0.61 \uB294 AQI 508 \uC774\uB2E4.", function () {
    _chai.assert.equal((0, _index.getConcFromAqi)(aqiName, pollutant, 0.61), 508);
  });
  it('농도 0.999 은 AQI 810 이다.', function () {
    _chai.assert.equal((0, _index.getConcFromAqi)(aqiName, pollutant, 0.999), 810);
  });
  it('농도 1.5 은 AQI 1200 이다.', function () {
    _chai.assert.equal((0, _index.getConcFromAqi)(aqiName, pollutant, 1.5), 1200);
  });
});
describe('SO2 농도 -> KR AQI 테스트', function () {
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
  it("\uB18D\uB3C4 0.152 \uB294 AQI 151 \uC774\uB2E4.", function () {
    _chai.assert.equal((0, _index.getConcFromAqi)(aqiName, pollutant, 0.152), 151);
  });
  it("\uB18D\uB3C4 0.99 \uB294 AQI 496 \uC774\uB2E4.", function () {
    _chai.assert.equal((0, _index.getConcFromAqi)(aqiName, pollutant, 0.99), 496);
  });
  it("\uB18D\uB3C4 1.01 \uB294 AQI 504 \uC774\uB2E4.", function () {
    _chai.assert.equal((0, _index.getConcFromAqi)(aqiName, pollutant, 1.01), 504);
  });
  it('농도 1.5 은 AQI 706 이다.', function () {
    _chai.assert.equal((0, _index.getConcFromAqi)(aqiName, pollutant, 1.5), 706);
  });
  it('농도 1.999 은 AQI 911 이다.', function () {
    _chai.assert.equal((0, _index.getConcFromAqi)(aqiName, pollutant, 1.999), 911);
  });
});
describe('CO 농도 -> KR AQI 테스트', function () {
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
  it("\uB18D\uB3C4 49.9 \uB294 AQI 499 \uC774\uB2E4.", function () {
    _chai.assert.equal((0, _index.getConcFromAqi)(aqiName, pollutant, 49.9), 499);
  });
  it("\uB18D\uB3C4 50.1 \uB294 AQI 501 \uC774\uB2E4.", function () {
    _chai.assert.equal((0, _index.getConcFromAqi)(aqiName, pollutant, 50.1), 501);
  });
  it('농도 80 은 AQI 800 이다.', function () {
    _chai.assert.equal((0, _index.getConcFromAqi)(aqiName, pollutant, 80), 800);
  });
  it('농도 90.9 은 AQI 999 이다.', function () {
    _chai.assert.equal((0, _index.getConcFromAqi)(aqiName, pollutant, 99.9), 999);
  });
});
describe('질못된 파라미터 검증하기', function () {
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