"use strict";

var _chai = require("chai");

var _index = require("../index");

var _aqiSpecs = require("../aqiSpecs");

describe("AQI Breakpoint Test ", function () {
  var aqis = ['kr', 'us', 'misebig'];
  var pollutants = ['pm25', 'pm10', 'no2', 'o3', 'co', 'so2'];
  var pollutant = 'pm10';
  aqis.map(function (aqi) {
    var levels = [];

    for (var i = 0; i < _aqiSpecs.aqiSpecs[aqi].level; i++) {
      levels.push(i);
    }

    pollutants.map(function (pollutant) {
      levels.map(function (level) {
        var expectedResult = _aqiSpecs.aqiSpecs[aqi][pollutant + 'Data'].concEndPoints[level];
        it("".concat(aqi.toUpperCase(), ":").concat(pollutant.toUpperCase(), ": level ").concat(level, "\uC758 breakpoint\uB294 ").concat(expectedResult, " \uC774\uB2E4"), function () {
          _chai.assert.equal((0, _index.getAqiBreakpoint)(aqi, pollutant, level), expectedResult);
        });
      });
    });
  });
});