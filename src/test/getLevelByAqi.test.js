import {assert} from 'chai';
import {getLevelByAqi} from '../index';


// getLevelByAqi = (aqiName, aqiValue)

describe('미세빅 AQI Value -> 미세빅 Level', () => {
    const aqiName = 'misebig';

    it(`${aqiName}의 AQI Value 60은 level 1 이다 `, () => {
        assert.equal(getLevelByAqi(aqiName, 60), 1)
    })
    it(`${aqiName}의 AQI Value 100은 level 1 이다 `, () => {
        assert.equal(getLevelByAqi(aqiName, 100), 1)
    })
    it(`${aqiName}의 AQI Value 101은 level 2 이다 `, () => {
        assert.equal(getLevelByAqi(aqiName, 101), 2)
    })
    it(`${aqiName}의 AQI Value 151은 level 3 이다 `, () => {
        assert.equal(getLevelByAqi(aqiName, 151), 3)
    })
    it(`${aqiName}의 AQI Value 201은 level 4 이다 `, () => {
        assert.equal(getLevelByAqi(aqiName, 201), 4)
    })
    it(`${aqiName}의 AQI Value 301은 level 5 이다 `, () => {
        assert.equal(getLevelByAqi(aqiName, 301), 5)
    })
    it(`${aqiName}의 AQI Value 401은 level 5 이다 `, () => {
        assert.equal(getLevelByAqi(aqiName, 401), 5)
    })
    it(`${aqiName}의 AQI Value 800은 level 5 이다 `, () => {
        assert.equal(getLevelByAqi(aqiName, 800), 5)
    })
})

describe('US AQI Value -> US Level', () => {
    const aqiName = 'us';

    it(`${aqiName}의 AQI Value 60은 level 1 이다 `, () => {
        assert.equal(getLevelByAqi(aqiName, 60), 1)
    })
    it(`${aqiName}의 AQI Value 100은 level 1 이다 `, () => {
        assert.equal(getLevelByAqi(aqiName, 100), 1)
    })
    it(`${aqiName}의 AQI Value 101은 level 2 이다 `, () => {
        assert.equal(getLevelByAqi(aqiName, 101), 2)
    })
    it(`${aqiName}의 AQI Value 151은 level 3 이다 `, () => {
        assert.equal(getLevelByAqi(aqiName, 151), 3)
    })
    it(`${aqiName}의 AQI Value 201은 level 4 이다 `, () => {
        assert.equal(getLevelByAqi(aqiName, 201), 4)
    })
    it(`${aqiName}의 AQI Value 301은 level 5 이다 `, () => {
        assert.equal(getLevelByAqi(aqiName, 301), 5)
    })
    it(`${aqiName}의 AQI Value 401은 level 5 이다 `, () => {
        assert.equal(getLevelByAqi(aqiName, 401), 5)
    })
    it(`${aqiName}의 AQI Value 800은 level 5 이다 `, () => {
        assert.equal(getLevelByAqi(aqiName, 800), 5)
    })
})

describe('KR AQI Value -> KR AQI Level', () => {
    const aqiName = 'kr';

    it(`${aqiName}의 AQI Value 60은 level 1 이다 `, () => {
        assert.equal(getLevelByAqi(aqiName, 60), 1)
    })
    it(`${aqiName}의 AQI Value 100은 level 1 이다 `, () => {
        assert.equal(getLevelByAqi(aqiName, 100), 1)
    })
    it(`${aqiName}의 AQI Value 101은 level 2 이다 `, () => {
        assert.equal(getLevelByAqi(aqiName, 101), 2)
    })
    it(`${aqiName}의 AQI Value 151은 level 3 이다 `, () => {
        assert.equal(getLevelByAqi(aqiName, 151), 3)
    })
    it(`${aqiName}의 AQI Value 201은 level 3 이다 `, () => {
        assert.equal(getLevelByAqi(aqiName, 201), 3)
    })
    it(`${aqiName}의 AQI Value 301은 level 3 이다 `, () => {
        assert.equal(getLevelByAqi(aqiName, 301), 3)
    })
    it(`${aqiName}의 AQI Value 401은 level 3 이다 `, () => {
        assert.equal(getLevelByAqi(aqiName, 401), 3)
    })
    it(`${aqiName}의 AQI Value 800은 level 3 이다 `, () => {
        assert.equal(getLevelByAqi(aqiName, 800), 3)
    })
})