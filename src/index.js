import _ from 'lodash';
import d3scale from 'd3-scale';

import {aqiSpecs} from './aqiSpecs';

const pNames = {
    PM25 : 'pm25',
    PM10 : 'pm10',
    O3 : 'o3',      // ppb
    NO2 : 'no2',    // ppb
    CO : 'co',      // ppb
    SO2 : 'so2'     // ppb
};

export const hello = () => {
    return 'hello w'
}

export const getIaqiFromConcs = (aqiName, {pm25Value, pm10Value, no2Value, o3Value, coValue, so2Value}) => {
    let aqis = [];
    aqis.push(getConcFromAqi(aqiName, pNames.PM25, pm25Value))
    aqis.push(getConcFromAqi(aqiName, pNames.PM10, pm10Value))
    aqis.push(getConcFromAqi(aqiName, pNames.NO2, no2Value))
    aqis.push(getConcFromAqi(aqiName, pNames.O3, o3Value))
    aqis.push(getConcFromAqi(aqiName, pNames.CO, coValue))
    aqis.push(getConcFromAqi(aqiName, pNames.SO2, so2Value))

    return _.max(aqis)
}


export const getConcFromAqi = (aqiName, pollutant, conc) => {
    let aqi;
    const level = getLevelFromConc(aqiName, pollutant, conc)
    
    if (level === -1 || conc < 0) {
        return -1;
    }

    if (level == aqiSpecs[aqiName].level) {
        aqi = concToAqiLast(aqiName, pollutant, conc)
        return aqi;
    } 

    // level is 0~5
    const bpLow = getAqiLow(aqiName, pollutant, level)
    const bpHigh = getAqiHigh(aqiName, pollutant, level)
    const cLow = getCLow(aqiName, pollutant, level)
    const cHigh = getCHigh(aqiName, pollutant, level)
    
    aqi = bpLow + (conc - cLow)*(bpHigh - bpLow)/(cHigh - cLow)
    // console.log(`concToAqi: aqi:${aqi} = bpLow:${bpLow} + (conc:${conc} - cLow:${cLow})*bpHigh:${bpHigh}-bpLow:${bpLow})/(cHigh:${cHigh}-cLow:${cLow})`)

    return Math.round(aqi,0);
}

const getPosInLevel = (aqiName, aqi) => {
    const hazardousPos = d3scale.scaleLog()
                .domain([301, 500, 2000])
                .range([0, 0.4, 0.45])

    if (aqi > 301) {
        return hazardousPos(aqi)
    }

    const level = getLevelByAqi(aqi)
    const highValue = aqiSpec[aqiName].indexBp[level];
    const lowValue = level > 0 ? aqiSpec[aqiName].indexBp[level-1] + 1 : 0;
    const pos = (aqi - lowValue)/(highValue - lowValue)
    return pos; 
}

const getLevelByAqi = (aqiName, aqiValue) => {
    if (aqiValue > 400) return 5;

    let level;
    for (level = 0; level < aqiSpec[aqiName].level; level++) {
        if (aqiValue <= aqiSpec[aqiName].indexBp[level]) break;
    }
    return level;
}

// 각 오염원에서 AQI가 401 이상이되는 구간 계산
// 농도가 무한히 높아지더라도 401~500 구간의 linear rate로 AQI를 계산함
const concToAqiLast = (aqiName, pollutant, conc) => {
    if (!aqiSpecs[aqiName]) return -1;

    const {slope, intercept} = aqiSpecs[aqiName][pollutant+'Data'];
    const aqi = slope * conc + intercept;

    if (Number(aqi)) return Math.round(aqi, 0)
    else return -1;
}

// 오염원의 농도가 어느 레벨인지 알려줌
// Return: Level: 0 ~ 5/6
export const getLevelFromConc = (aqiName, pollutant, conc) => {
    if (!isValidPollutantName(pollutant)) return -1;
    if (!aqiSpecs[aqiName]) {
        // console.error(`getConcLevel: invalid AQI name:${aqiName}`)
        return -1;
    }
    if (!aqiSpecs[aqiName][pollutant+'Data']) {
        // console.error(`getConcLevel: ${pollutant}Data field not found.`)
        return -1;
    }
    
    let level = -1;
    aqiSpecs[aqiName][pollutant+'Data'].concEndPoints.map ( (limit, i) => {
        if (conc <= limit && level == -1) {
            //console.log(`>>> ${conc} < ${limit} `)
            level = i;
            //if (level == -1) level = i;
            //return i; // return previous i as level
        }
    })
    if (level == -1) return aqiSpecs[aqiName].level;
    else return level;
}

function getAqiLow(aqiName, pollutant, level) {
    if (level == -1) return -1;
    if (level == 0) return 0;
    return aqiSpecs[aqiName].indexBp[level-1] + 1;
}

function getAqiHigh(aqiName, pollutant, level) {
    if (level == -1) return -1;
    return aqiSpecs[aqiName].indexBp[level]
}

function getCLow(aqiName, pollutant, level) {
    if (level == -1) return -1;
    if (level == 0) return 0;
    // level > 0
    let lowValue = aqiSpecs[aqiName][pollutant+'Data'].concEndPoints[level-1];
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
        default: // NO2, SO2, O3
            lowValue += 0.001;
    }
    return lowValue;
}

function getCHigh(aqiName, pollutant, level) {
    if (level == -1) return -1;        
    return aqiSpecs[aqiName][pollutant+'Data'].concEndPoints[level];
}


function isValidPollutantName(pollutant) {
    return _.includes(pNames, pollutant)
}

function isValidConcValue(conc) {
    if (conc < 0 || conc == null || conc == '-') return false;
    else return true;
}

function getAqiLevel(pollutant, aqi) {
    if (!isValidAqi(aqi)) return -1;
    
    let level = -1;
    let i = 0;
    for (i = 0; i < 6; i++) {
        if (aqi <= aqiStd.indexBp[i]) {
            level = i;
            break;
        }
    }
    if (i == 6) {
        if (plt == pollutant.PM10) level = 6;
        else level = 5;
    }
    return level;
}


function isValidAqi(aqi) {
    // Valid AQI value range is 0~500.
    //if (aqi < 0 || aqi > 501) return false;
    if (Number(aqi) < 0 ) return false;
    else return true;
}  