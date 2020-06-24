import {assert} from 'chai';
import {getAqiBreakpoint} from '../index';
import {aqiSpecs} from '../aqiSpecs';

describe(`AQI Breakpoint Test `, () => {
    const aqis = ['kr', 'us', 'misebig'];
    const pollutants = ['pm25', 'pm10', 'no2', 'o3', 'co', 'so2']
    const pollutant = 'pm10';
    aqis.map((aqi) => {
        const levels = [];
        for (let i = 0; i < aqiSpecs[aqi].level; i++) levels.push(i)
    
        pollutants.map((pollutant) => {
            levels.map((level) => {
                const expectedResult = aqiSpecs[aqi][pollutant+'Data'].concEndPoints[level];
                it(`${aqi.toUpperCase()}:${pollutant.toUpperCase()}: level ${level}의 breakpoint는 ${expectedResult} 이다`, () => {
                    assert.equal(getAqiBreakpoint(aqi, pollutant, level), expectedResult)
                })
            })
        })
    })
})