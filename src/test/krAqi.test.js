import {assert} from 'chai';
import {getAqiFromConc} from '../index';
import {aqiSpecs} from '../aqiSpecs';

const aqiName = 'kr';

describe('PM2.5 농도 -> KR AQI 테스트', () => {
    const pollutant = 'pm25'
    const {concEndPoints} = aqiSpecs[aqiName][pollutant + 'Data'];
    const {indexBp} = aqiSpecs[aqiName];
    let i=0;

    it(`농도 ${concEndPoints[i]} 는 AQI ${indexBp[i]} 이다.`, () => {
        assert.equal(getAqiFromConc(aqiName, 'pm25', concEndPoints[i]), indexBp[i])
    })
    i++;
    it(`농도 ${concEndPoints[i]} 는 AQI ${indexBp[i]} 이다.`, () => {
        assert.equal(getAqiFromConc(aqiName, 'pm25', concEndPoints[i]), indexBp[i])
    })
    i++;
    it(`농도 ${concEndPoints[i]} 는 AQI ${indexBp[i]} 이다.`, () => {
        assert.equal(getAqiFromConc(aqiName, 'pm25', concEndPoints[i]), indexBp[i])
    })
    i++;
    it(`농도 ${concEndPoints[i]} 는 AQI ${indexBp[i]} 이다.`, () => {
        assert.equal(getAqiFromConc(aqiName, 'pm25', concEndPoints[i]), indexBp[i])
    })


    it('농도 100 는 AQI 171 이다.', () => {
        assert.equal(getAqiFromConc(aqiName, 'pm25', 100), 171)
    })
    it('농도 300 는 AQI 336 이다.', () => {
        assert.equal(getAqiFromConc(aqiName, 'pm25', 300), 336)
    })
    it('농도 400 는 AQI 418 이다.', () => {
        assert.equal(getAqiFromConc(aqiName, 'pm25', 400), 418)
    })
    it('농도 499 는 AQI 499 이다.', () => {
        assert.equal(getAqiFromConc(aqiName, 'pm25', 499), 499)
    })
    it('농도 501 는 AQI 501 이다.', () => {
        assert.equal(getAqiFromConc(aqiName, 'pm25', 501), 501)
    })
    it('농도 1260 는 AQI 1126 이다.', () => {
        assert.equal(getAqiFromConc(aqiName, 'pm25', 1260), 1126)
    })
})

describe('PM10 농도 -> KR AQI 테스트', () => {
    const pollutant = 'pm10'
    const {concEndPoints} = aqiSpecs[aqiName][pollutant + 'Data'];
    const {indexBp} = aqiSpecs[aqiName];
    let i=0;

    it(`농도 ${concEndPoints[i]} 는 AQI ${indexBp[i]} 이다.`, () => {
        assert.equal(getAqiFromConc(aqiName, pollutant, concEndPoints[i]), indexBp[i])
    })
    i++;
    it(`농도 ${concEndPoints[i]} 는 AQI ${indexBp[i]} 이다.`, () => {
        assert.equal(getAqiFromConc(aqiName, pollutant, concEndPoints[i]), indexBp[i])
    })
    i++;
    it(`농도 ${concEndPoints[i]} 는 AQI ${indexBp[i]} 이다.`, () => {
        assert.equal(getAqiFromConc(aqiName, pollutant, concEndPoints[i]), indexBp[i])
    })
    i++;
    it(`농도 ${concEndPoints[i]} 는 AQI ${indexBp[i]} 이다.`, () => {
        assert.equal(getAqiFromConc(aqiName, pollutant, concEndPoints[i]), indexBp[i])
    })

    it('농도 55 는 AQI 75 이다.', () => {
        assert.equal(getAqiFromConc(aqiName, pollutant, 55), 75)
    })
    it('농도 250 는 AQI 228 이다.', () => {
        assert.equal(getAqiFromConc(aqiName, pollutant, 250), 228)
    })
    it('농도 450 는 AQI 383 이다.', () => {
        assert.equal(getAqiFromConc(aqiName, pollutant, 450), 383)
    })
    it('농도 599 는 AQI 499 이다.', () => {
        assert.equal(getAqiFromConc(aqiName, pollutant, 599), 499)
    })
    it('농도 601 는 AQI 501 이다.', () => {
        assert.equal(getAqiFromConc(aqiName, pollutant, 601), 501)
    })
    it('농도 504 는 AQI 425 이다.', () => {
        assert.equal(getAqiFromConc(aqiName, pollutant, 504), 425)
    })

    it('농도 999 는 AQI 810 이다.', () => {
        assert.equal(getAqiFromConc(aqiName, pollutant, 999), 810)
    })
    it('농도 1500 는 AQI 1200 이다.', () => {
        assert.equal(getAqiFromConc(aqiName, pollutant, 1500), 1200)
    })
})

describe('NO2 농도 -> KR AQI 테스트', () => {
    const pollutant = 'no2'
    const {concEndPoints} = aqiSpecs[aqiName][pollutant + 'Data'];
    const {indexBp} = aqiSpecs[aqiName];
    let i=0;

    it(`농도 ${concEndPoints[i]} 는 AQI ${indexBp[i]} 이다.`, () => {
        assert.equal(getAqiFromConc(aqiName, pollutant, concEndPoints[i]), indexBp[i])
    })
    i++;
    it(`농도 ${concEndPoints[i]} 는 AQI ${indexBp[i]} 이다.`, () => {
        assert.equal(getAqiFromConc(aqiName, pollutant, concEndPoints[i]), indexBp[i])
    })
    i++;
    it(`농도 ${concEndPoints[i]} 는 AQI ${indexBp[i]} 이다.`, () => {
        assert.equal(getAqiFromConc(aqiName, pollutant, concEndPoints[i]), indexBp[i])
    })
    i++;
    it(`농도 ${concEndPoints[i]} 는 AQI ${indexBp[i]} 이다.`, () => {
        assert.equal(getAqiFromConc(aqiName, pollutant, concEndPoints[i]), indexBp[i])
    })

    
    it(`농도 1.99 는 AQI 498 이다.`, () => {
        assert.equal(getAqiFromConc(aqiName, pollutant, 1.99), 498)
    })
    it(`농도 2.01 는 AQI 502 이다.`, () => {
        assert.equal(getAqiFromConc(aqiName, pollutant, 2.01), 502)
    })
    it('농도 3 은 AQI 694 이다.', () => {
        assert.equal(getAqiFromConc(aqiName, pollutant, 3), 694)
    })
    it('농도 4.123 은 AQI 912 이다.', () => {
        assert.equal(getAqiFromConc(aqiName, pollutant, 4.123), 912)
    })
})


describe('O3 농도 -> KR AQI 테스트', () => {
    const pollutant = 'o3'
    const {concEndPoints} = aqiSpecs[aqiName][pollutant + 'Data'];
    const {indexBp} = aqiSpecs[aqiName];
    let i=0;

    it(`농도 ${concEndPoints[i]} 는 AQI ${indexBp[i]} 이다.`, () => {
        assert.equal(getAqiFromConc(aqiName, pollutant, concEndPoints[i]), indexBp[i])
    })
    i++;
    it(`농도 ${concEndPoints[i]} 는 AQI ${indexBp[i]} 이다.`, () => {
        assert.equal(getAqiFromConc(aqiName, pollutant, concEndPoints[i]), indexBp[i])
    })
    i++;
    it(`농도 ${concEndPoints[i]} 는 AQI ${indexBp[i]} 이다.`, () => {
        assert.equal(getAqiFromConc(aqiName, pollutant, concEndPoints[i]), indexBp[i])
    })
    i++;
    it(`농도 ${concEndPoints[i]} 는 AQI ${indexBp[i]} 이다.`, () => {
        assert.equal(getAqiFromConc(aqiName, pollutant, concEndPoints[i]), indexBp[i])
    })

    
    it(`농도 0.59 는 AQI 492 이다.`, () => {
        assert.equal(getAqiFromConc(aqiName, pollutant, 0.59), 492)
    })
    it(`농도 0.61 는 AQI 508 이다.`, () => {
        assert.equal(getAqiFromConc(aqiName, pollutant, 0.61), 508)
    })
    it('농도 0.999 은 AQI 810 이다.', () => {
        assert.equal(getAqiFromConc(aqiName, pollutant, 0.999), 810)
    })
    it('농도 1.5 은 AQI 1200 이다.', () => {
        assert.equal(getAqiFromConc(aqiName, pollutant, 1.5), 1200)
    })
})

describe('SO2 농도 -> KR AQI 테스트', () => {
    const pollutant = 'so2'
    const {concEndPoints} = aqiSpecs[aqiName][pollutant + 'Data'];
    const {indexBp} = aqiSpecs[aqiName];
    let i=0;

    it(`농도 ${concEndPoints[i]} 는 AQI ${indexBp[i]} 이다.`, () => {
        assert.equal(getAqiFromConc(aqiName, pollutant, concEndPoints[i]), indexBp[i])
    })
    i++;
    it(`농도 ${concEndPoints[i]} 는 AQI ${indexBp[i]} 이다.`, () => {
        assert.equal(getAqiFromConc(aqiName, pollutant, concEndPoints[i]), indexBp[i])
    })
    i++;
    it(`농도 ${concEndPoints[i]} 는 AQI ${indexBp[i]} 이다.`, () => {
        assert.equal(getAqiFromConc(aqiName, pollutant, concEndPoints[i]), indexBp[i])
    })
    i++;
    it(`농도 ${concEndPoints[i]} 는 AQI ${indexBp[i]} 이다.`, () => {
        assert.equal(getAqiFromConc(aqiName, pollutant, concEndPoints[i]), indexBp[i])
    })

    
    it(`농도 0.152 는 AQI 151 이다.`, () => {
        assert.equal(getAqiFromConc(aqiName, pollutant, 0.152), 151)
    })
    it(`농도 0.99 는 AQI 496 이다.`, () => {
        assert.equal(getAqiFromConc(aqiName, pollutant, 0.99), 496)
    })
    it(`농도 1.01 는 AQI 504 이다.`, () => {
        assert.equal(getAqiFromConc(aqiName, pollutant, 1.01), 504)
    })
    it('농도 1.5 은 AQI 706 이다.', () => {
        assert.equal(getAqiFromConc(aqiName, pollutant, 1.5), 706)
    })
    it('농도 1.999 은 AQI 911 이다.', () => {
        assert.equal(getAqiFromConc(aqiName, pollutant, 1.999), 911)
    })
})

describe('CO 농도 -> KR AQI 테스트', () => {
    const pollutant = 'co'
    const {concEndPoints} = aqiSpecs[aqiName][pollutant + 'Data'];
    const {indexBp} = aqiSpecs[aqiName];
    let i=0;

    it(`농도 ${concEndPoints[i]} 는 AQI ${indexBp[i]} 이다.`, () => {
        assert.equal(getAqiFromConc(aqiName, pollutant, concEndPoints[i]), indexBp[i])
    })
    i++;
    it(`농도 ${concEndPoints[i]} 는 AQI ${indexBp[i]} 이다.`, () => {
        assert.equal(getAqiFromConc(aqiName, pollutant, concEndPoints[i]), indexBp[i])
    })
    i++;
    it(`농도 ${concEndPoints[i]} 는 AQI ${indexBp[i]} 이다.`, () => {
        assert.equal(getAqiFromConc(aqiName, pollutant, concEndPoints[i]), indexBp[i])
    })
    i++;
    it(`농도 ${concEndPoints[i]} 는 AQI ${indexBp[i]} 이다.`, () => {
        assert.equal(getAqiFromConc(aqiName, pollutant, concEndPoints[i]), indexBp[i])
    })

    
    it(`농도 49.9 는 AQI 499 이다.`, () => {
        assert.equal(getAqiFromConc(aqiName, pollutant, 49.9), 499)
    })
    it(`농도 50.1 는 AQI 501 이다.`, () => {
        assert.equal(getAqiFromConc(aqiName, pollutant, 50.1), 501)
    })
    it('농도 80 은 AQI 800 이다.', () => {
        assert.equal(getAqiFromConc(aqiName, pollutant, 80), 800)
    })
    it('농도 90.9 은 AQI 999 이다.', () => {
        assert.equal(getAqiFromConc(aqiName, pollutant, 99.9), 999)
    })
})

describe('질못된 파라미터 검증하기', () => {
    it(`첫번째 파라미터 aqiName 'mise'를 주면 -1 을 리터한다.`, () => {
        assert.equal(getAqiFromConc('mise', 'pm25', 100), -1)
    })
    it(`두번째 파라미터 오염원 이름으로 'pm'을 주면 -1 을 리터한다.`, () => {
        assert.equal(getAqiFromConc(aqiName, 'pm', 100), -1)
    })
    it(`세번째 파라미터가 -1 이면 -1 을 리터한다.`, () => {
        assert.equal(getAqiFromConc(aqiName, 'pm25', -1), -1)
    })
})
