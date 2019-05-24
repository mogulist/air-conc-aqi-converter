import {assert} from 'chai';
import {concToAqi} from '../index';
import {aqiSpecs} from '../aqiSpecs';

describe('PM2.5 농도 -> 미세빅AQI 테스트', () => {
    it('농도 12 는 AQI 50이다.', () => {
        assert.equal(concToAqi('pm25', 12), 50)
    })
    it('농도 25.4 는 AQI 100이다.', () => {
        assert.equal(concToAqi('pm25', 25.4), 100)
    })
    it('농도 55.4 는 AQI 150이다.', () => {
        assert.equal(concToAqi('pm25', 55.4), 150)
    })
    it('농도 150.4 는 AQI 200이다.', () => {
        assert.equal(concToAqi('pm25', 150.4), 200)
    })
    it('농도 250.4 는 AQI 300이다.', () => {
        assert.equal(concToAqi('pm25', 250.4), 300)
    })
    it('농도 350.4 는 AQI 400이다.', () => {
        assert.equal(concToAqi('pm25', 350.4), 400)
    })
    it('농도 500 는 AQI 500이다.', () => {
        assert.equal(concToAqi('pm25', 500), 500)
    })
    it('농도 1000 는 AQI 832이다.', () => {
        assert.equal(concToAqi('pm25', 1000), 832)
    })
    it('농도 1260 는 AQI 1005이다.', () => {
        assert.equal(concToAqi('pm25', 1260), 1005)
    })
})

describe('PM10 농도 -> 미세빅AQI 테스트', () => {
    it('농도 30 는 AQI 50이다.', () => {
        assert.equal(concToAqi('pm10', 30), 50)
    })
    it('농도 50 는 AQI 100이다.', () => {
        assert.equal(concToAqi('pm10', 50), 100)
    })
    it('농도 150 는 AQI 150이다.', () => {
        assert.equal(concToAqi('pm10', 150), 150)
    })
    it('농도 354 는 AQI 200이다.', () => {
        assert.equal(concToAqi('pm10', 354), 200)
    })
    it('농도 424 는 AQI 300이다.', () => {
        assert.equal(concToAqi('pm10', 424), 300)
    })
    it('농도 504 는 AQI 400이다.', () => {
        assert.equal(concToAqi('pm10', 504), 400)
    })
    it('농도 604 는 AQI 500이다.', () => {
        assert.equal(concToAqi('pm10', 604), 500)
    })
    it('농도 999 는 AQI 895 이다.', () => {
        assert.equal(concToAqi('pm10', 999), 895)
    })
    it('농도 1500 는 AQI 1396이다.', () => {
        assert.equal(concToAqi('pm10', 1500), 1396)
    })
})

describe('NO2 농도 -> 미세빅AQI 테스트', () => {
    let i=0;
    const {no2, indexBp} = aqiSpecs.misebig;
    const pollutant = 'no2'

    it(`농도 ${no2[i]} 는 AQI ${indexBp[i]} 이다.`, () => {
        assert.equal(concToAqi(pollutant, no2[i]), indexBp[i])
    })
    i++;
    it(`농도 ${no2[i]} 는 AQI ${indexBp[i]} 이다.`, () => {
        assert.equal(concToAqi(pollutant, no2[i]), indexBp[i])
    })
    i++;
    it(`농도 ${no2[i]} 는 AQI ${indexBp[i]} 이다.`, () => {
        assert.equal(concToAqi(pollutant, no2[i]), indexBp[i])
    })
    i++;
    it(`농도 ${no2[i]} 는 AQI ${indexBp[i]} 이다.`, () => {
        assert.equal(concToAqi(pollutant, no2[i]), indexBp[i])
    })
    i++;
    it(`농도 ${no2[i]} 는 AQI ${indexBp[i]} 이다.`, () => {
        assert.equal(concToAqi(pollutant, no2[i]), indexBp[i])
    })
    i++;
    it(`농도 ${no2[i]} 는 AQI ${indexBp[i]} 이다.`, () => {
        assert.equal(concToAqi(pollutant, no2[i]), indexBp[i])
    })
    
    it(`농도 2.049 는 AQI 500 이다.`, () => {
        assert.equal(concToAqi(pollutant, 2.049), 500)
    })
    it('농도 3 은 AQI 739 이다.', () => {
        assert.equal(concToAqi(pollutant, 3), 739)
    })
    it('농도 4.123 은 AQI 1020 이다.', () => {
        assert.equal(concToAqi(pollutant, 4.123), 1020)
    })
})

describe('O3 농도 -> 미세빅AQI 테스트', () => {
    let i=0;
    const {o3: concs, indexBp} = aqiSpecs.misebig;
    const pollutant = 'o3'

    it(`농도 ${concs[i]} 는 AQI ${indexBp[i]} 이다.`, () => {
        assert.equal(concToAqi(pollutant, concs[i]), indexBp[i])
    })
    i++;
    it(`농도 ${concs[i]} 는 AQI ${indexBp[i]} 이다.`, () => {
        assert.equal(concToAqi(pollutant, concs[i]), indexBp[i])
    })
    i++;
    it(`농도 ${concs[i]} 는 AQI ${indexBp[i]} 이다.`, () => {
        assert.equal(concToAqi(pollutant, concs[i]), indexBp[i])
    })
    i++;
    it(`농도 ${concs[i]} 는 AQI ${indexBp[i]} 이다.`, () => {
        assert.equal(concToAqi(pollutant, concs[i]), indexBp[i])
    })
    i++;
    it(`농도 ${concs[i]} 는 AQI ${indexBp[i]} 이다.`, () => {
        assert.equal(concToAqi(pollutant, concs[i]), indexBp[i])
    })
    i++;
    it(`농도 ${concs[i]} 는 AQI ${indexBp[i]} 이다.`, () => {
        assert.equal(concToAqi(pollutant, concs[i]), indexBp[i])
    })
    
    it(`농도 0.604 는 AQI 500 이다.`, () => {
        assert.equal(concToAqi(pollutant, 0.604), 500)
    })
    it('농도 0.999 은 AQI 899 이다.', () => {
        assert.equal(concToAqi(pollutant, 0.999), 899)
    })
    it('농도 1.5 은 AQI 1405 이다.', () => {
        assert.equal(concToAqi(pollutant, 1.5), 1405)
    })
})

describe('SO2 농도 -> 미세빅AQI 테스트', () => {
    let i=0;
    const {so2: concs, indexBp} = aqiSpecs.misebig;
    const pollutant = 'so2'

    it(`농도 ${concs[i]} 는 AQI ${indexBp[i]} 이다.`, () => {
        assert.equal(concToAqi(pollutant, concs[i]), indexBp[i])
    })
    i++;
    it(`농도 ${concs[i]} 는 AQI ${indexBp[i]} 이다.`, () => {
        assert.equal(concToAqi(pollutant, concs[i]), indexBp[i])
    })
    i++;
    it(`농도 ${concs[i]} 는 AQI ${indexBp[i]} 이다.`, () => {
        assert.equal(concToAqi(pollutant, concs[i]), indexBp[i])
    })
    i++;
    it(`농도 ${concs[i]} 는 AQI ${indexBp[i]} 이다.`, () => {
        assert.equal(concToAqi(pollutant, concs[i]), indexBp[i])
    })
    i++;
    it(`농도 ${concs[i]} 는 AQI ${indexBp[i]} 이다.`, () => {
        assert.equal(concToAqi(pollutant, concs[i]), indexBp[i])
    })
    i++;
    it(`농도 ${concs[i]} 는 AQI ${indexBp[i]} 이다.`, () => {
        assert.equal(concToAqi(pollutant, concs[i]), indexBp[i])
    })
    
    it(`농도 1.004 는 AQI 500 이다.`, () => {
        assert.equal(concToAqi(pollutant, 1.004), 500)
    })
    it('농도 1.5 은 AQI 749 이다.', () => {
        assert.equal(concToAqi(pollutant, 1.5), 749)
    })
    it('농도 1.999 은 AQI 1000 이다.', () => {
        assert.equal(concToAqi(pollutant, 1.999), 1000)
    })
})

describe('CO 농도 -> 미세빅AQI 테스트', () => {
    let i=0;
    const {co: concs, indexBp} = aqiSpecs.misebig;
    const pollutant = 'co';

    it(`농도 ${concs[i]} 는 AQI ${indexBp[i]} 이다.`, () => {
        assert.equal(concToAqi(pollutant, concs[i]), indexBp[i])
    })
    i++;
    it(`농도 ${concs[i]} 는 AQI ${indexBp[i]} 이다.`, () => {
        assert.equal(concToAqi(pollutant, concs[i]), indexBp[i])
    })
    i++;
    it(`농도 ${concs[i]} 는 AQI ${indexBp[i]} 이다.`, () => {
        assert.equal(concToAqi(pollutant, concs[i]), indexBp[i])
    })
    i++;
    it(`농도 ${concs[i]} 는 AQI ${indexBp[i]} 이다.`, () => {
        assert.equal(concToAqi(pollutant, concs[i]), indexBp[i])
    })
    i++;
    it(`농도 ${concs[i]} 는 AQI ${indexBp[i]} 이다.`, () => {
        assert.equal(concToAqi(pollutant, concs[i]), indexBp[i])
    })
    i++;
    it(`농도 ${concs[i]} 는 AQI ${indexBp[i]} 이다.`, () => {
        assert.equal(concToAqi(pollutant, concs[i]), indexBp[i])
    })
    
    it(`농도 50.4 는 AQI 500 이다.`, () => {
        assert.equal(concToAqi(pollutant, 50.4), 500)
    })
    it('농도 80 은 AQI 799 이다.', () => {
        assert.equal(concToAqi(pollutant, 80), 799)
    })
    it('농도 90.9 은 AQI 1000 이다.', () => {
        assert.equal(concToAqi(pollutant, 99.9), 1000)
    })
})