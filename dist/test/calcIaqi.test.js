"use strict";

var _chai = require("chai");

var _index = require("../index");

var _aqiSpecs = require("../aqiSpecs");

describe("\uB300\uD45C AQI \uACC4\uC0B0 A", function () {
  var aqiValues = {
    pm25Value: 29,
    pm10Value: 38,
    no2Value: 0.51,
    o3Value: 0.042,
    so2Value: 0.032,
    coValue: 0.8
  }; //// console.log(aqiValues)

  it("misebig AQI\uC758 IAQI\uB294 185 \uC774\uB2E4.", function () {
    _chai.assert.equal((0, _index.getIaqiFromConcs)('misebig', aqiValues), 185);
  });
  it("US AQI\uC758 IAQI\uB294 176 \uC774\uB2E4.", function () {
    _chai.assert.equal((0, _index.getIaqiFromConcs)('us', aqiValues), 176);
  });
  it("KR AQI\uC758 IAQI\uB294 211 \uC774\uB2E4.", function () {
    _chai.assert.equal((0, _index.getIaqiFromConcs)('kr', aqiValues), 211);
  });
});
describe("\uB300\uD45C AQI \uACC4\uC0B0 B", function () {
  var aqiValues = {
    pm25Value: 150,
    pm10Value: 38,
    no2Value: 0.51,
    o3Value: 0.092,
    so2Value: 0.032,
    coValue: 0.8
  }; //// console.log(aqiValues)

  it("misebig AQI\uC758 IAQI\uB294 200 \uC774\uB2E4.", function () {
    var aqiName = 'misebig';
    var aqis = [];
    aqis.push((0, _index.getAqiFromConc)(aqiName, 'pm25', aqiValues.pm25Value));
    aqis.push((0, _index.getAqiFromConc)(aqiName, 'pm10', aqiValues.pm10Value));
    aqis.push((0, _index.getAqiFromConc)(aqiName, 'no2', aqiValues.no2Value));
    aqis.push((0, _index.getAqiFromConc)(aqiName, 'o3', aqiValues.o3Value));
    aqis.push((0, _index.getAqiFromConc)(aqiName, 'so2', aqiValues.so2Value));
    aqis.push((0, _index.getAqiFromConc)(aqiName, 'co', aqiValues.coValue)); // console.log(aqis)

    _chai.assert.equal((0, _index.getIaqiFromConcs)('misebig', aqiValues), 200);
  });
  it("US AQI\uC758 IAQI\uB294 200 \uC774\uB2E4.", function () {
    var aqiName = 'us';
    var aqis = [];
    aqis.push((0, _index.getAqiFromConc)(aqiName, 'pm25', aqiValues.pm25Value));
    aqis.push((0, _index.getAqiFromConc)(aqiName, 'pm10', aqiValues.pm10Value));
    aqis.push((0, _index.getAqiFromConc)(aqiName, 'no2', aqiValues.no2Value));
    aqis.push((0, _index.getAqiFromConc)(aqiName, 'o3', aqiValues.o3Value));
    aqis.push((0, _index.getAqiFromConc)(aqiName, 'so2', aqiValues.so2Value));
    aqis.push((0, _index.getAqiFromConc)(aqiName, 'co', aqiValues.coValue)); // console.log(aqis)

    _chai.assert.equal((0, _index.getIaqiFromConcs)('us', aqiValues), 200);
  });
  it("KR AQI\uC758 IAQI\uB294 213 \uC774\uB2E4.", function () {
    var aqiName = 'kr';
    var aqis = [];
    aqis.push((0, _index.getAqiFromConc)(aqiName, 'pm25', aqiValues.pm25Value));
    aqis.push((0, _index.getAqiFromConc)(aqiName, 'pm10', aqiValues.pm10Value));
    aqis.push((0, _index.getAqiFromConc)(aqiName, 'no2', aqiValues.no2Value));
    aqis.push((0, _index.getAqiFromConc)(aqiName, 'o3', aqiValues.o3Value));
    aqis.push((0, _index.getAqiFromConc)(aqiName, 'so2', aqiValues.so2Value));
    aqis.push((0, _index.getAqiFromConc)(aqiName, 'co', aqiValues.coValue)); // console.log(aqis)

    _chai.assert.equal((0, _index.getIaqiFromConcs)('kr', aqiValues), 213);
  });
});
describe("\uB300\uD45C AQI \uACC4\uC0B0 C: PM10 \uB18D\uB3C4\uAC00 181", function () {
  var aqiValues = {
    pm25Value: 45,
    pm10Value: 181,
    no2Value: 0.51,
    o3Value: 0.092,
    so2Value: 0.032,
    coValue: 0.8
  };
  it("misebig AQI\uC758 IAQI\uB294 185 \uC774\uB2E4.", function () {
    // console.log(aqiValues)
    var aqiName = 'misebig';
    var aqis = [];
    aqis.push((0, _index.getAqiFromConc)(aqiName, 'pm25', aqiValues.pm25Value));
    aqis.push((0, _index.getAqiFromConc)(aqiName, 'pm10', aqiValues.pm10Value));
    aqis.push((0, _index.getAqiFromConc)(aqiName, 'no2', aqiValues.no2Value));
    aqis.push((0, _index.getAqiFromConc)(aqiName, 'o3', aqiValues.o3Value));
    aqis.push((0, _index.getAqiFromConc)(aqiName, 'so2', aqiValues.so2Value));
    aqis.push((0, _index.getAqiFromConc)(aqiName, 'co', aqiValues.coValue)); // console.log(aqis)

    _chai.assert.equal((0, _index.getIaqiFromConcs)('misebig', aqiValues), 185);
  });
  it("US AQI\uC758 IAQI\uB294 176 \uC774\uB2E4.", function () {
    var aqiName = 'us';
    var aqis = [];
    aqis.push((0, _index.getAqiFromConc)(aqiName, 'pm25', aqiValues.pm25Value));
    aqis.push((0, _index.getAqiFromConc)(aqiName, 'pm10', aqiValues.pm10Value));
    aqis.push((0, _index.getAqiFromConc)(aqiName, 'no2', aqiValues.no2Value));
    aqis.push((0, _index.getAqiFromConc)(aqiName, 'o3', aqiValues.o3Value));
    aqis.push((0, _index.getAqiFromConc)(aqiName, 'so2', aqiValues.so2Value));
    aqis.push((0, _index.getAqiFromConc)(aqiName, 'co', aqiValues.coValue)); // console.log(aqis)

    _chai.assert.equal((0, _index.getIaqiFromConcs)('us', aqiValues), 176);
  });
  it("KR AQI\uC758 IAQI\uB294 211 \uC774\uB2E4.", function () {
    var aqiName = 'kr';
    var aqis = [];
    aqis.push((0, _index.getAqiFromConc)(aqiName, 'pm25', aqiValues.pm25Value));
    aqis.push((0, _index.getAqiFromConc)(aqiName, 'pm10', aqiValues.pm10Value));
    aqis.push((0, _index.getAqiFromConc)(aqiName, 'no2', aqiValues.no2Value));
    aqis.push((0, _index.getAqiFromConc)(aqiName, 'o3', aqiValues.o3Value));
    aqis.push((0, _index.getAqiFromConc)(aqiName, 'so2', aqiValues.so2Value));
    aqis.push((0, _index.getAqiFromConc)(aqiName, 'co', aqiValues.coValue)); // console.log(aqis)

    _chai.assert.equal((0, _index.getIaqiFromConcs)('kr', aqiValues), 211);
  });
});
describe("\uB300\uD45C AQI \uACC4\uC0B0 D: \uC624\uC874\uC774 \uB9E4\uC6B0 \uB098\uC068", function () {
  var aqiValues = {
    pm25Value: 33,
    pm10Value: 38,
    no2Value: 0.04,
    o3Value: 0.151,
    so2Value: 0.032,
    coValue: 0.8
  };
  it("misebig AQI\uC758 IAQI\uB294 151 \uC774\uB2E4.", function () {
    // console.log(aqiValues)
    var aqiName = 'misebig';
    var aqis = [];
    aqis.push((0, _index.getAqiFromConc)(aqiName, 'pm25', aqiValues.pm25Value));
    aqis.push((0, _index.getAqiFromConc)(aqiName, 'pm10', aqiValues.pm10Value));
    aqis.push((0, _index.getAqiFromConc)(aqiName, 'no2', aqiValues.no2Value));
    aqis.push((0, _index.getAqiFromConc)(aqiName, 'o3', aqiValues.o3Value));
    aqis.push((0, _index.getAqiFromConc)(aqiName, 'so2', aqiValues.so2Value));
    aqis.push((0, _index.getAqiFromConc)(aqiName, 'co', aqiValues.coValue)); // console.log(aqis)

    _chai.assert.equal((0, _index.getIaqiFromConcs)('misebig', aqiValues), 151);
  });
  it("US AQI\uC758 IAQI\uB294 134 \uC774\uB2E4.", function () {
    var aqiName = 'us';
    var aqis = [];
    aqis.push((0, _index.getAqiFromConc)(aqiName, 'pm25', aqiValues.pm25Value));
    aqis.push((0, _index.getAqiFromConc)(aqiName, 'pm10', aqiValues.pm10Value));
    aqis.push((0, _index.getAqiFromConc)(aqiName, 'no2', aqiValues.no2Value));
    aqis.push((0, _index.getAqiFromConc)(aqiName, 'o3', aqiValues.o3Value));
    aqis.push((0, _index.getAqiFromConc)(aqiName, 'so2', aqiValues.so2Value));
    aqis.push((0, _index.getAqiFromConc)(aqiName, 'co', aqiValues.coValue)); // console.log(aqis)

    _chai.assert.equal((0, _index.getIaqiFromConcs)('us', aqiValues), 134);
  });
  it("KR AQI\uC758 IAQI\uB294 151 \uC774\uB2E4.", function () {
    var aqiName = 'kr';
    var aqis = [];
    aqis.push((0, _index.getAqiFromConc)(aqiName, 'pm25', aqiValues.pm25Value));
    aqis.push((0, _index.getAqiFromConc)(aqiName, 'pm10', aqiValues.pm10Value));
    aqis.push((0, _index.getAqiFromConc)(aqiName, 'no2', aqiValues.no2Value));
    aqis.push((0, _index.getAqiFromConc)(aqiName, 'o3', aqiValues.o3Value));
    aqis.push((0, _index.getAqiFromConc)(aqiName, 'so2', aqiValues.so2Value));
    aqis.push((0, _index.getAqiFromConc)(aqiName, 'co', aqiValues.coValue)); // console.log(aqis)

    _chai.assert.equal((0, _index.getIaqiFromConcs)('kr', aqiValues), 151);
  });
});
describe("\uB300\uD45C AQI \uACC4\uC0B0 E: \uC798\uBABB\uB41C \uAC12\uC774 \uC788\uC744 \uB54C\uC5D0\uB3C4 \uACC4\uC0B0\uD55C\uB2E4", function () {
  var aqiValues = {
    pm25Value: 33,
    pm10Value: -1,
    no2Value: 0.04,
    o3Value: 0.151,
    so2Value: 0.032,
    coValue: null
  };
  it("misebig AQI\uC758 IAQI\uB294 151 \uC774\uB2E4.", function () {
    // console.log(aqiValues)
    var aqiName = 'misebig';
    var aqis = [];
    aqis.push((0, _index.getAqiFromConc)(aqiName, 'pm25', aqiValues.pm25Value));
    aqis.push((0, _index.getAqiFromConc)(aqiName, 'pm10', aqiValues.pm10Value));
    aqis.push((0, _index.getAqiFromConc)(aqiName, 'no2', aqiValues.no2Value));
    aqis.push((0, _index.getAqiFromConc)(aqiName, 'o3', aqiValues.o3Value));
    aqis.push((0, _index.getAqiFromConc)(aqiName, 'so2', aqiValues.so2Value));
    aqis.push((0, _index.getAqiFromConc)(aqiName, 'co', aqiValues.coValue)); // console.log(aqis)

    _chai.assert.equal((0, _index.getIaqiFromConcs)('misebig', aqiValues), 151);
  });
  it("US AQI\uC758 IAQI\uB294 134 \uC774\uB2E4.", function () {
    var aqiName = 'us';
    var aqis = [];
    aqis.push((0, _index.getAqiFromConc)(aqiName, 'pm25', aqiValues.pm25Value));
    aqis.push((0, _index.getAqiFromConc)(aqiName, 'pm10', aqiValues.pm10Value));
    aqis.push((0, _index.getAqiFromConc)(aqiName, 'no2', aqiValues.no2Value));
    aqis.push((0, _index.getAqiFromConc)(aqiName, 'o3', aqiValues.o3Value));
    aqis.push((0, _index.getAqiFromConc)(aqiName, 'so2', aqiValues.so2Value));
    aqis.push((0, _index.getAqiFromConc)(aqiName, 'co', aqiValues.coValue)); // console.log(aqis)

    _chai.assert.equal((0, _index.getIaqiFromConcs)('us', aqiValues), 134);
  });
  it("KR AQI\uC758 IAQI\uB294 151 \uC774\uB2E4.", function () {
    var aqiName = 'kr';
    var aqis = [];
    aqis.push((0, _index.getAqiFromConc)(aqiName, 'pm25', aqiValues.pm25Value));
    aqis.push((0, _index.getAqiFromConc)(aqiName, 'pm10', aqiValues.pm10Value));
    aqis.push((0, _index.getAqiFromConc)(aqiName, 'no2', aqiValues.no2Value));
    aqis.push((0, _index.getAqiFromConc)(aqiName, 'o3', aqiValues.o3Value));
    aqis.push((0, _index.getAqiFromConc)(aqiName, 'so2', aqiValues.so2Value));
    aqis.push((0, _index.getAqiFromConc)(aqiName, 'co', aqiValues.coValue)); // console.log(aqis)

    _chai.assert.equal((0, _index.getIaqiFromConcs)('kr', aqiValues), 151);
  });
});
describe("\uB300\uD45C AQI \uACC4\uC0B0 F: \uB0AE\uC740 \uB18D\uB3C4\uC77C \uB54C", function () {
  var aqiValues = {
    pm25Value: 16,
    pm10Value: 33,
    no2Value: 0.01,
    o3Value: 0.04,
    so2Value: 0.012,
    coValue: 0.5
  };
  it("misebig AQI\uC758 IAQI\uB294 65 \uC774\uB2E4.", function () {
    // console.log(aqiValues)
    var aqiName = 'misebig';
    var aqis = [];
    aqis.push((0, _index.getAqiFromConc)(aqiName, 'pm25', aqiValues.pm25Value));
    aqis.push((0, _index.getAqiFromConc)(aqiName, 'pm10', aqiValues.pm10Value));
    aqis.push((0, _index.getAqiFromConc)(aqiName, 'no2', aqiValues.no2Value));
    aqis.push((0, _index.getAqiFromConc)(aqiName, 'o3', aqiValues.o3Value));
    aqis.push((0, _index.getAqiFromConc)(aqiName, 'so2', aqiValues.so2Value));
    aqis.push((0, _index.getAqiFromConc)(aqiName, 'co', aqiValues.coValue)); // console.log(aqis)

    _chai.assert.equal((0, _index.getIaqiFromConcs)('misebig', aqiValues), 65);
  });
  it("US AQI\uC758 IAQI\uB294 59 \uC774\uB2E4.", function () {
    var aqiName = 'us';
    var aqis = [];
    aqis.push((0, _index.getAqiFromConc)(aqiName, 'pm25', aqiValues.pm25Value));
    aqis.push((0, _index.getAqiFromConc)(aqiName, 'pm10', aqiValues.pm10Value));
    aqis.push((0, _index.getAqiFromConc)(aqiName, 'no2', aqiValues.no2Value));
    aqis.push((0, _index.getAqiFromConc)(aqiName, 'o3', aqiValues.o3Value));
    aqis.push((0, _index.getAqiFromConc)(aqiName, 'so2', aqiValues.so2Value));
    aqis.push((0, _index.getAqiFromConc)(aqiName, 'co', aqiValues.coValue)); // console.log(aqis)

    _chai.assert.equal((0, _index.getIaqiFromConcs)('us', aqiValues), 59);
  });
  it("KR AQI\uC758 IAQI\uB294 58 \uC774\uB2E4.", function () {
    var aqiName = 'kr';
    var aqis = [];
    aqis.push((0, _index.getAqiFromConc)(aqiName, 'pm25', aqiValues.pm25Value));
    aqis.push((0, _index.getAqiFromConc)(aqiName, 'pm10', aqiValues.pm10Value));
    aqis.push((0, _index.getAqiFromConc)(aqiName, 'no2', aqiValues.no2Value));
    aqis.push((0, _index.getAqiFromConc)(aqiName, 'o3', aqiValues.o3Value));
    aqis.push((0, _index.getAqiFromConc)(aqiName, 'so2', aqiValues.so2Value));
    aqis.push((0, _index.getAqiFromConc)(aqiName, 'co', aqiValues.coValue)); // console.log(aqis)

    _chai.assert.equal((0, _index.getIaqiFromConcs)('kr', aqiValues), 58);
  });
});
describe("\uB300\uD45C AQI \uACC4\uC0B0 G: \uC77C\uBD80 \uAC12\uC774 \uC5C6\uAC70\uB098 \uACF5\uBC31\uC77C \uB54C", function () {
  var aqiValues = {
    pm25Value: 16,
    pm10Value: 33,
    no2Value: 0.01,
    o3Value: 0.04,
    so2Value: '',
    coValue: undefined
  };
  it("misebig AQI\uC758 IAQI\uB294 65 \uC774\uB2E4.", function () {
    // console.log(aqiValues)
    var aqiName = 'misebig';
    var aqis = [];
    aqis.push((0, _index.getAqiFromConc)(aqiName, 'pm25', aqiValues.pm25Value));
    aqis.push((0, _index.getAqiFromConc)(aqiName, 'pm10', aqiValues.pm10Value));
    aqis.push((0, _index.getAqiFromConc)(aqiName, 'no2', aqiValues.no2Value));
    aqis.push((0, _index.getAqiFromConc)(aqiName, 'o3', aqiValues.o3Value));
    aqis.push((0, _index.getAqiFromConc)(aqiName, 'so2', aqiValues.so2Value));
    aqis.push((0, _index.getAqiFromConc)(aqiName, 'co', aqiValues.coValue)); // console.log(aqis)

    _chai.assert.equal((0, _index.getIaqiFromConcs)('misebig', aqiValues), 65);
  });
  it("US AQI\uC758 IAQI\uB294 59 \uC774\uB2E4.", function () {
    var aqiName = 'us';
    var aqis = [];
    aqis.push((0, _index.getAqiFromConc)(aqiName, 'pm25', aqiValues.pm25Value));
    aqis.push((0, _index.getAqiFromConc)(aqiName, 'pm10', aqiValues.pm10Value));
    aqis.push((0, _index.getAqiFromConc)(aqiName, 'no2', aqiValues.no2Value));
    aqis.push((0, _index.getAqiFromConc)(aqiName, 'o3', aqiValues.o3Value));
    aqis.push((0, _index.getAqiFromConc)(aqiName, 'so2', aqiValues.so2Value));
    aqis.push((0, _index.getAqiFromConc)(aqiName, 'co', aqiValues.coValue)); // console.log(aqis)

    _chai.assert.equal((0, _index.getIaqiFromConcs)('us', aqiValues), 59);
  });
  it("KR AQI\uC758 IAQI\uB294 58 \uC774\uB2E4.", function () {
    var aqiName = 'kr';
    var aqis = [];
    aqis.push((0, _index.getAqiFromConc)(aqiName, 'pm25', aqiValues.pm25Value));
    aqis.push((0, _index.getAqiFromConc)(aqiName, 'pm10', aqiValues.pm10Value));
    aqis.push((0, _index.getAqiFromConc)(aqiName, 'no2', aqiValues.no2Value));
    aqis.push((0, _index.getAqiFromConc)(aqiName, 'o3', aqiValues.o3Value));
    aqis.push((0, _index.getAqiFromConc)(aqiName, 'so2', aqiValues.so2Value));
    aqis.push((0, _index.getAqiFromConc)(aqiName, 'co', aqiValues.coValue)); // console.log(aqis)

    _chai.assert.equal((0, _index.getIaqiFromConcs)('kr', aqiValues), 58);
  });
});
describe("\uB300\uD45C AQI \uACC4\uC0B0 G: \uC77C\uBD80 \uD56D\uBAA9\uC774 \uC5C6\uB294 \uACBD\uC6B0", function () {
  var aqiValues = {
    pm25Value: 16,
    pm10Value: 33,
    no2Value: 0.01
  };
  it("misebig AQI\uC758 IAQI\uB294 65 \uC774\uB2E4.", function () {
    // console.log(aqiValues)
    var aqiName = 'misebig';
    var aqis = [];
    aqis.push((0, _index.getAqiFromConc)(aqiName, 'pm25', aqiValues.pm25Value));
    aqis.push((0, _index.getAqiFromConc)(aqiName, 'pm10', aqiValues.pm10Value));
    aqis.push((0, _index.getAqiFromConc)(aqiName, 'no2', aqiValues.no2Value));
    aqis.push((0, _index.getAqiFromConc)(aqiName, 'o3', aqiValues.o3Value));
    aqis.push((0, _index.getAqiFromConc)(aqiName, 'so2', aqiValues.so2Value));
    aqis.push((0, _index.getAqiFromConc)(aqiName, 'co', aqiValues.coValue));
    console.log(aqis);

    _chai.assert.equal((0, _index.getIaqiFromConcs)('misebig', aqiValues), 65);
  });
  it("US AQI\uC758 IAQI\uB294 59 \uC774\uB2E4.", function () {
    var aqiName = 'us';
    var aqis = [];
    aqis.push((0, _index.getAqiFromConc)(aqiName, 'pm25', aqiValues.pm25Value));
    aqis.push((0, _index.getAqiFromConc)(aqiName, 'pm10', aqiValues.pm10Value));
    aqis.push((0, _index.getAqiFromConc)(aqiName, 'no2', aqiValues.no2Value));
    aqis.push((0, _index.getAqiFromConc)(aqiName, 'o3', aqiValues.o3Value));
    aqis.push((0, _index.getAqiFromConc)(aqiName, 'so2', aqiValues.so2Value));
    aqis.push((0, _index.getAqiFromConc)(aqiName, 'co', aqiValues.coValue));
    console.log(aqis);

    _chai.assert.equal((0, _index.getIaqiFromConcs)('us', aqiValues), 59);
  });
  it("KR AQI\uC758 IAQI\uB294 53 \uC774\uB2E4.", function () {
    var aqiName = 'kr';
    var aqis = [];
    aqis.push((0, _index.getAqiFromConc)(aqiName, 'pm25', aqiValues.pm25Value));
    aqis.push((0, _index.getAqiFromConc)(aqiName, 'pm10', aqiValues.pm10Value));
    aqis.push((0, _index.getAqiFromConc)(aqiName, 'no2', aqiValues.no2Value));
    aqis.push((0, _index.getAqiFromConc)(aqiName, 'o3', aqiValues.o3Value));
    aqis.push((0, _index.getAqiFromConc)(aqiName, 'so2', aqiValues.so2Value));
    aqis.push((0, _index.getAqiFromConc)(aqiName, 'co', aqiValues.coValue));
    console.log(aqis);

    _chai.assert.equal((0, _index.getIaqiFromConcs)('kr', aqiValues), 53);
  });
});