import _ from 'lodash';
import d3scale from 'd3-scale';

import {aqiSpecs, misebigAqiSpec,} from './aqiSpecs';

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

export const calcImaqi = ({pm25Value, pm10Value, no2Value, o3Value, coValue, so2Value}) => {
    let aqis = [];
    const pm25Aqi = concToAqi(pNames.PM25, pm25Value)
    aqis.push(concToAqi(pNames.PM25, pm25Value))
    aqis.push(concToAqi(pNames.PM10, pm10Value))
    aqis.push(concToAqi(pNames.NO2, no2Value))
    aqis.push(concToAqi(pNames.O3, o3Value))
    aqis.push(concToAqi(pNames.CO, coValue))
    aqis.push(concToAqi(pNames.SO2, so2Value))
    return _.max(aqis)
}



export const concToAqi = (pollutant, conc) => {
    let aqi;
    const level = getConcLevel(pollutant, conc)
    if (level == 6) {
        aqi = concToAqiLast(pollutant, conc)
        return aqi;
    }

    // level is 0~5
    const bpLow = getAqiLow(pollutant, level)
    const bpHigh = getAqiHigh(pollutant, level)
    const cLow = getCLow(pollutant, level)
    const cHigh = getCHigh(pollutant, level)
    
    aqi = bpLow + (conc - cLow)*(bpHigh - bpLow)/(cHigh - cLow)
    return Math.round(aqi,0);
}

function getPosInLevel (aqi) {
    const hazardousPos = d3scale.scaleLog()
                .domain([301, 500, 2000])
                .range([0, 0.4, 0.45])

    if (aqi > 301) {
        return hazardousPos(aqi)
    }

    const level = getLevelByAqi(aqi)
    const highValue = misebigAqiSpec.indexBp[level];
    const lowValue = level > 0 ? misebigAqiSpec.indexBp[level-1] + 1 : 0;
    const pos = (aqi - lowValue)/(highValue - lowValue)
    return pos; 
}

function getLevelByAqi(aqi) {
    if (aqi > 400) return 5;

    let level;
    for (level = 0; level < misebigAqiSpec.level; level++) {
        if (aqi <= misebigAqiSpec.indexBp[level]) break;
    }
    return level;
}

// 각 오염원에서 AQI가 401 이상이되는 구간 계산
// 농도가 무한히 높아지더라도 401~500 구간의 linear rate로 AQI를 계산함
function concToAqiLast(pollutant, conc) {
    const {slope, intercept} = aqiSpecs.misebig[pollutant+'Data'];
    const aqi = slope * conc + intercept;

    if (Number(aqi)) return Math.round(aqi, 0)
    else return -1;
}

// 오염원의 농도가 어느 레벨인지 알려줌
// Return: Level: 0 ~ 5/6
function getConcLevel(pollutant, conc) {
    if (!isValidPollutantName(pollutant)) return -1;
    
    let level = -1;
    misebigAqiSpec[pollutant].map ( (limit, i) => {
        if (conc <= limit && level == -1) {
            //console.log(`>>> ${conc} < ${limit} `)
            level = i;
            //if (level == -1) level = i;
            //return i; // return previous i as level
        }
    })
    if (level == -1) return 6;
    else return level;
}

function getAqiLow(pollutant, level) {
    if (level == -1) return -1;
    if (level == 0) return 0;
    return misebigAqiSpec.indexBp[level-1] + 1;
}

function getAqiHigh(pollutant, level) {
    if (level == -1) return -1;
    return misebigAqiSpec.indexBp[level]
}

function getCLow(pollutant, level) {
    if (level == -1) return -1;
    if (level == 0) return 0;
    // level > 0
    let lowValue = misebigAqiSpec[pollutant][level-1];
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

function getCHigh(pollutant, level) {
    if (level == -1) return -1;        
    return misebigAqiSpec[pollutant][level];
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