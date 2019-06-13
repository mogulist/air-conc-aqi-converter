import {assert} from 'chai';
import {getPosInLevel} from '../index';

describe('미세빅 AQI Value -> Position', () => {
    const aqiName = 'misebig';

    it(`${aqiName}의 AQI Value 0은 position 0.05 이다 `, () => {
        assert.equal(getPosInLevel(aqiName, 0), 0.05)
    })
    it(`${aqiName}의 AQI Value 25은 position 0.5 이다 `, () => {
        assert.equal(getPosInLevel(aqiName, 25), 0.5)
    })
    it(`${aqiName}의 AQI Value 50은 position 0.95 이다 `, () => {
        assert.equal(getPosInLevel(aqiName, 50), 0.95)
    })
    it(`${aqiName}의 AQI Value 51은 position 0.05 이다 `, () => {
        assert.equal(getPosInLevel(aqiName, 51), 0.05)
    })
    it(`${aqiName}의 AQI Value 75 position 0.49 이다 `, () => {
        assert.equal(getPosInLevel(aqiName, 75), 0.49)
    })
    it(`${aqiName}의 AQI Value 100 position 0.95 이다 `, () => {
        assert.equal(getPosInLevel(aqiName, 100), 0.95)
    })
    it(`${aqiName}의 AQI Value 101 position 0.05 이다 `, () => {
        assert.equal(getPosInLevel(aqiName, 101), 0.05)
    })
    it(`${aqiName}의 AQI Value 150 position 0.95 이다 `, () => {
        assert.equal(getPosInLevel(aqiName, 150), 0.95)
    })
    it(`${aqiName}의 AQI Value 151 position 0.05 이다 `, () => {
        assert.equal(getPosInLevel(aqiName, 151), 0.05)
    })
    it(`${aqiName}의 AQI Value 200 position 0.95 이다 `, () => {
        assert.equal(getPosInLevel(aqiName, 200), 0.95)
    })
    it(`${aqiName}의 AQI Value 201 position 0.05 이다 `, () => {
        assert.equal(getPosInLevel(aqiName, 201), 0.05)
    })
    it(`${aqiName}의 AQI Value 300 position 0.95 이다 `, () => {
        assert.equal(getPosInLevel(aqiName, 300), 0.95)
    })
    it(`${aqiName}의 AQI Value 301 position 0.02 이다 `, () => {
        assert.equal(getPosInLevel(aqiName, 301), 0.02)
    })
    it(`${aqiName}의 AQI Value 400 position 0.23 이다 `, () => {
        assert.equal(getPosInLevel(aqiName, 400), 0.23)
    })
    it(`${aqiName}의 AQI Value 600 position 0.41 이다 `, () => {
        assert.equal(getPosInLevel(aqiName, 600), 0.41)
    })
    it(`${aqiName}의 AQI Value 1500 position 0.44 이다 `, () => {
        assert.equal(getPosInLevel(aqiName, 1500), 0.44)
    })

})

describe('US AQI Value -> Position in level', () => {
    const aqiName = 'us';

    it(`${aqiName}의 AQI Value 0은 position 0.05 이다 `, () => {
        assert.equal(getPosInLevel(aqiName, 0), 0.05)
    })
    it(`${aqiName}의 AQI Value 25은 position 0.5 이다 `, () => {
        assert.equal(getPosInLevel(aqiName, 25), 0.5)
    })
    it(`${aqiName}의 AQI Value 50은 position 0.95 이다 `, () => {
        assert.equal(getPosInLevel(aqiName, 50), 0.95)
    })
    it(`${aqiName}의 AQI Value 51은 position 0.05 이다 `, () => {
        assert.equal(getPosInLevel(aqiName, 51), 0.05)
    })
    it(`${aqiName}의 AQI Value 75 position 0.49 이다 `, () => {
        assert.equal(getPosInLevel(aqiName, 75), 0.49)
    })
    it(`${aqiName}의 AQI Value 100 position 0.95 이다 `, () => {
        assert.equal(getPosInLevel(aqiName, 100), 0.95)
    })
    it(`${aqiName}의 AQI Value 101 position 0.05 이다 `, () => {
        assert.equal(getPosInLevel(aqiName, 101), 0.05)
    })
    it(`${aqiName}의 AQI Value 150 position 0.95 이다 `, () => {
        assert.equal(getPosInLevel(aqiName, 150), 0.95)
    })
    it(`${aqiName}의 AQI Value 151 position 0.05 이다 `, () => {
        assert.equal(getPosInLevel(aqiName, 151), 0.05)
    })
    it(`${aqiName}의 AQI Value 200 position 0.95 이다 `, () => {
        assert.equal(getPosInLevel(aqiName, 200), 0.95)
    })
    it(`${aqiName}의 AQI Value 201 position 0.05 이다 `, () => {
        assert.equal(getPosInLevel(aqiName, 201), 0.05)
    })
    it(`${aqiName}의 AQI Value 300 position 0.95 이다 `, () => {
        assert.equal(getPosInLevel(aqiName, 300), 0.95)
    })
    it(`${aqiName}의 AQI Value 301 position 0.02 이다 `, () => {
        assert.equal(getPosInLevel(aqiName, 301), 0.02)
    })
    it(`${aqiName}의 AQI Value 400 position 0.23 이다 `, () => {
        assert.equal(getPosInLevel(aqiName, 400), 0.23)
    })
    it(`${aqiName}의 AQI Value 600 position 0.41 이다 `, () => {
        assert.equal(getPosInLevel(aqiName, 600), 0.41)
    })
    it(`${aqiName}의 AQI Value 1500 position 0.44 이다 `, () => {
        assert.equal(getPosInLevel(aqiName, 1500), 0.44)
    })
})

describe('KR AQI Value -> Position in level', () => {
    const aqiName = 'kr';

    it(`${aqiName}의 AQI Value 0은 position 0.05 이다 `, () => {
        assert.equal(getPosInLevel(aqiName, 0), 0.05)
    })
    it(`${aqiName}의 AQI Value 25은 position 0.5 이다 `, () => {
        assert.equal(getPosInLevel(aqiName, 25), 0.5)
    })
    it(`${aqiName}의 AQI Value 50은 position 0.95 이다 `, () => {
        assert.equal(getPosInLevel(aqiName, 50), 0.95)
    })
    it(`${aqiName}의 AQI Value 51은 position 0.05 이다 `, () => {
        assert.equal(getPosInLevel(aqiName, 51), 0.05)
    })
    it(`${aqiName}의 AQI Value 75 position 0.49 이다 `, () => {
        assert.equal(getPosInLevel(aqiName, 75), 0.49)
    })
    it(`${aqiName}의 AQI Value 100 position 0.95 이다 `, () => {
        assert.equal(getPosInLevel(aqiName, 100), 0.95)
    })
    it(`${aqiName}의 AQI Value 101 position 0.05 이다 `, () => {
        assert.equal(getPosInLevel(aqiName, 101), 0.05)
    })
    it(`${aqiName}의 AQI Value 150 position 0.95 이다 `, () => {
        assert.equal(getPosInLevel(aqiName, 150), 0.95)
    })
    it(`${aqiName}의 AQI Value 151 position 0.02 이다 `, () => {
        assert.equal(getPosInLevel(aqiName, 151), 0.02)
    })
    it(`${aqiName}의 AQI Value 200 position 0.13 이다 `, () => {
        assert.equal(getPosInLevel(aqiName, 200), 0.13)
    })
    it(`${aqiName}의 AQI Value 201 position 0.13 이다 `, () => {
        assert.equal(getPosInLevel(aqiName, 201), 0.13)
    })
    it(`${aqiName}의 AQI Value 300 position 0.3 이다 `, () => {
        assert.equal(getPosInLevel(aqiName, 300), 0.3)
    })
    it(`${aqiName}의 AQI Value 400 position 0.41 이다 `, () => {
        assert.equal(getPosInLevel(aqiName, 400), 0.41)
    })
    it(`${aqiName}의 AQI Value 600 position 0.51 이다 `, () => {
        assert.equal(getPosInLevel(aqiName, 600), 0.51)
    })
    it(`${aqiName}의 AQI Value 1500 position 0.58 이다 `, () => {
        assert.equal(getPosInLevel(aqiName, 1500), 0.58)
    })
})