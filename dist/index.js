"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getLevelFromConc = exports.getLevelByAqi = exports.getPosInLevel = exports.getAqiFromConc = exports.getIaqiFromConcs = exports.hello = void 0;

var _lodash = _interopRequireDefault(require("lodash"));

var _d3Scale = _interopRequireDefault(require("d3-scale"));

var _aqiSpecs = require("./aqiSpecs");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var pNames = {
  PM25: 'pm25',
  PM10: 'pm10',
  O3: 'o3',
  // ppb
  NO2: 'no2',
  // ppb
  CO: 'co',
  // ppb
  SO2: 'so2' // ppb

};

var hello = function hello() {
  return 'hello w';
};

exports.hello = hello;

var getIaqiFromConcs = function getIaqiFromConcs(aqiName, _ref) {
  var pm25Value = _ref.pm25Value,
      pm10Value = _ref.pm10Value,
      no2Value = _ref.no2Value,
      o3Value = _ref.o3Value,
      coValue = _ref.coValue,
      so2Value = _ref.so2Value;
  var aqis = [];
  aqis.push(getAqiFromConc(aqiName, pNames.PM25, pm25Value));
  aqis.push(getAqiFromConc(aqiName, pNames.PM10, pm10Value));
  aqis.push(getAqiFromConc(aqiName, pNames.NO2, no2Value));
  aqis.push(getAqiFromConc(aqiName, pNames.O3, o3Value));
  aqis.push(getAqiFromConc(aqiName, pNames.CO, coValue));
  aqis.push(getAqiFromConc(aqiName, pNames.SO2, so2Value));
  return _lodash["default"].max(aqis);
};

exports.getIaqiFromConcs = getIaqiFromConcs;

var getAqiFromConc = function getAqiFromConc(aqiName, pollutant, conc) {
  var aqi;
  var level = getLevelFromConc(aqiName, pollutant, conc);

  if (level === -1 || conc < 0) {
    return -1;
  }

  if (level == _aqiSpecs.aqiSpecs[aqiName].level) {
    aqi = concToAqiLast(aqiName, pollutant, conc);
    return aqi;
  } // level is 0~5


  var bpLow = getAqiLow(aqiName, pollutant, level);
  var bpHigh = getAqiHigh(aqiName, pollutant, level);
  var cLow = getCLow(aqiName, pollutant, level);
  var cHigh = getCHigh(aqiName, pollutant, level);
  aqi = bpLow + (conc - cLow) * (bpHigh - bpLow) / (cHigh - cLow); // console.log(`concToAqi: aqi:${aqi} = bpLow:${bpLow} + (conc:${conc} - cLow:${cLow})*bpHigh:${bpHigh}-bpLow:${bpLow})/(cHigh:${cHigh}-cLow:${cLow})`)

  return Math.round(aqi, 0);
};

exports.getAqiFromConc = getAqiFromConc;

var getPosInLevel = function getPosInLevel(aqiName, aqi) {
  var hazardousPos = _d3Scale["default"].scaleLog().domain([301, 500, 2000]).range([0, 0.4, 0.45]);

  if (aqi > 301) {
    return hazardousPos(aqi);
  }

  var level = getLevelByAqi(aqi);
  var highValue = _aqiSpecs.aqiSpecs[aqiName].indexBp[level];
  var lowValue = level > 0 ? _aqiSpecs.aqiSpecs[aqiName].indexBp[level - 1] + 1 : 0;
  var pos = (aqi - lowValue) / (highValue - lowValue);
  return pos;
};

exports.getPosInLevel = getPosInLevel;

var getLevelByAqi = function getLevelByAqi(aqiName, aqiValue) {
  if (aqiValue > 400) return 5;
  var level;

  for (level = 0; level < _aqiSpecs.aqiSpecs[aqiName].level; level++) {
    if (aqiValue <= _aqiSpecs.aqiSpecs[aqiName].indexBp[level]) break;
  }

  return level;
};

exports.getLevelByAqi = getLevelByAqi;

var getLevelFromConc = function getLevelFromConc(aqiName, pollutant, conc) {
  if (!isValidPollutantName(pollutant)) return -1;

  if (!_aqiSpecs.aqiSpecs[aqiName]) {
    // console.error(`getConcLevel: invalid AQI name:${aqiName}`)
    return -1;
  }

  if (!_aqiSpecs.aqiSpecs[aqiName][pollutant + 'Data']) {
    // console.error(`getConcLevel: ${pollutant}Data field not found.`)
    return -1;
  }

  var level = -1;

  _aqiSpecs.aqiSpecs[aqiName][pollutant + 'Data'].concEndPoints.map(function (limit, i) {
    if (conc <= limit && level == -1) {
      //console.log(`>>> ${conc} < ${limit} `)
      level = i; //if (level == -1) level = i;
      //return i; // return previous i as level
    }
  });

  if (level == -1) return _aqiSpecs.aqiSpecs[aqiName].level;else return level;
}; // Calculate AQI from concentration where AQI value is higher than 500
// Official AQI value's highest limit is 500 but there are cases where AQI value is much higher the limit.
// AQI above 501 is calculated by using the increase rate from AQI 401 to 500 of each pollutant.


exports.getLevelFromConc = getLevelFromConc;

var concToAqiLast = function concToAqiLast(aqiName, pollutant, conc) {
  if (!_aqiSpecs.aqiSpecs[aqiName]) return -1;
  var _aqiSpecs$aqiName = _aqiSpecs.aqiSpecs[aqiName][pollutant + 'Data'],
      slope = _aqiSpecs$aqiName.slope,
      intercept = _aqiSpecs$aqiName.intercept;
  var aqi = slope * conc + intercept;
  if (Number(aqi)) return Math.round(aqi, 0);else return -1;
};

function getAqiLow(aqiName, pollutant, level) {
  if (level == -1) return -1;
  if (level == 0) return 0;
  return _aqiSpecs.aqiSpecs[aqiName].indexBp[level - 1] + 1;
}

function getAqiHigh(aqiName, pollutant, level) {
  if (level == -1) return -1;
  return _aqiSpecs.aqiSpecs[aqiName].indexBp[level];
}

function getCLow(aqiName, pollutant, level) {
  if (level == -1) return -1;
  if (level == 0) return 0; // level > 0

  var lowValue = _aqiSpecs.aqiSpecs[aqiName][pollutant + 'Data'].concEndPoints[level - 1];

  switch (pollutant) {
    case 'pm25':
      lowValue += 0.1;
      break;

    case 'pm10':
      lowValue += 1;
      break;

    case 'co':
      lowValue += 0.01;
      break;

    default:
      // NO2, SO2, O3
      lowValue += 0.001;
  }

  return lowValue;
}

function getCHigh(aqiName, pollutant, level) {
  if (level == -1) return -1;
  return _aqiSpecs.aqiSpecs[aqiName][pollutant + 'Data'].concEndPoints[level];
}

function isValidPollutantName(pollutant) {
  return _lodash["default"].includes(pNames, pollutant);
}

function isValidConcValue(conc) {
  if (conc < 0 || conc == null || conc == '-') return false;else return true;
}

function getAqiLevel(pollutant, aqi) {
  if (!isValidAqi(aqi)) return -1;
  var level = -1;
  var i = 0;

  for (i = 0; i < 6; i++) {
    if (aqi <= aqiStd.indexBp[i]) {
      level = i;
      break;
    }
  }

  if (i == 6) {
    if (plt == pollutant.PM10) level = 6;else level = 5;
  }

  return level;
}

function isValidAqi(aqi) {
  // Valid AQI value range is 0~500.
  //if (aqi < 0 || aqi > 501) return false;
  if (Number(aqi) < 0) return false;else return true;
}